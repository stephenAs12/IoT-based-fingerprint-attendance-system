


#include <Adafruit_Fingerprint.h>
#include <ESP8266WiFi.h>
#include <WebSocketClient.h>
#include <LiquidCrystal.h>

#if (defined(__AVR__) || defined(ESP8266)) && !defined(__AVR_ATmega2560__)
SoftwareSerial mySerial(13, 15);
#else
#define mySerial Serial1
#endif
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);


const char* ssid     = "AR";
const char* password = "12344321";
char path[] = "/echo";
char host[] = "10.194.76.146";

int connectPin = 12;

LiquidCrystal lcd(16, 5, 4, 0, 2, 14);

WebSocketClient webSocketClient;
WiFiClient client;


void setup() {
    lcd.begin(16, 2);
  pinMode(connectPin,OUTPUT);
  Serial.begin(9600);
  delay(10);

  // We start by connecting to a WiFi network

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  digitalWrite(connectPin,HIGH);
  lcd.clear();
  lcd.print("Connecting . . ");
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  digitalWrite(connectPin,LOW);
  lcd.clear();
  lcd.print("WiFi connected");   
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  delay(5000);
  

  // Connect to the websocket server
  if (client.connect("10.194.76.146", 1337)) {
    Serial.println("Connected");
    digitalWrite(connectPin,LOW);
    lcd.clear();
    lcd.print("Connected");
  } else {
    Serial.println("Connection failed.");
    digitalWrite(connectPin,HIGH);
    lcd.clear();
    lcd.print("failed");
    while(1) {
      // Hang on failure
    }
  }

  // Handshake with the server
  webSocketClient.path = path;
  webSocketClient.host = host;
  if (webSocketClient.handshake(client)) {
    Serial.println("Handshake successful");
    digitalWrite(connectPin,LOW);
    lcd.clear();
    lcd.print("successful");
    match_setup();
  } else {
    Serial.println("Handshake failed.");
    digitalWrite(connectPin,HIGH);
    lcd.clear();
    lcd.print("failed");
    while(1) {
      // Hang on failure
    }  
  }

}

void loop()                     // run over and over again
{
  getFingerprintID();
  delay(50);            //don't ned to run this at full speed.
}

uint8_t getFingerprintID() {
  uint8_t p = finger.getImage();
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image taken");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.println("No finger detected");
      lcd.clear();
      lcd.print("Not Detected");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      return p;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Imaging error");
      return p;
    default:
      Serial.println("Unknown error");
      lcd.clear();
      lcd.print("Unknown error");
      return p;
  }

  // OK success!

  p = finger.image2Tz();
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image converted");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Image too messy");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Could not find fingerprint features");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Could not find fingerprint features");
      return p;
    default:
      Serial.println("Unknown error");
      digitalWrite(connectPin,HIGH);
      lcd.clear();
      lcd.print("Unknown error");
      return p;
  }

  // OK converted!
  p = finger.fingerSearch();
  if (p == FINGERPRINT_OK) {
    Serial.println("Found a print match!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Communication error");
    return p;
  } else if (p == FINGERPRINT_NOTFOUND) {
    Serial.println("Did not find a match");
      lcd.clear();
      lcd.print("No match");
    return p;
  } else {
    Serial.println("Unknown error");
      digitalWrite(connectPin,HIGH);
      lcd.clear();
      lcd.print("Unknown error");
    return p;
  }

  // found a match!
  String a=String(finger.fingerID);
  Serial.print("ID "); Serial.print(a);
  Serial.print(" with confidence of "); Serial.println(finger.confidence);

  String data;
 
  if (client.connected()) {
      lcd.clear();
      lcd.print("Found a match");
 
    webSocketClient.sendData(a);
 
    webSocketClient.getData(data);
    if (data.length() > 0) {
      Serial.print("Received data: ");
      Serial.println(data);
    }
 
  } else {
    Serial.println("Client disconnected.");
  }
 
  delay(3000);

  return finger.fingerID;
}

// returns -1 if failed, otherwise returns ID #
int getFingerprintIDez() {
  uint8_t p = finger.getImage();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.image2Tz();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.fingerFastSearch();
  if (p != FINGERPRINT_OK)  return -1;

  // found a match!
  String a=String(finger.fingerID);
  Serial.print("ID "); Serial.print(a);
  
  Serial.print(a);
  Serial.print(" with confidence of "); Serial.println(finger.confidence);
  return finger.fingerID;
}



void match_setup()
{
  Serial.begin(9600);
  while (!Serial);  // For Yun/Leo/Micro/Zero/...
  delay(100);
  Serial.println("\n\nAdafruit finger detect test");

  // set the data rate for the sensor serial port
  finger.begin(57600);
  delay(5);
  if (finger.verifyPassword()) {
    Serial.println("Found fingerprint sensor!");
  } else {
    Serial.println("Did not find fingerprint sensor :(");
    while (1) { delay(1); }
  }

  Serial.println(F("Reading sensor parameters"));
  finger.getParameters();
  Serial.print(F("Status: 0x")); Serial.println(finger.status_reg, HEX);
  Serial.print(F("Sys ID: 0x")); Serial.println(finger.system_id, HEX);
  Serial.print(F("Capacity: ")); Serial.println(finger.capacity);
  Serial.print(F("Security level: ")); Serial.println(finger.security_level);
  Serial.print(F("Device address: ")); Serial.println(finger.device_addr, HEX);
  Serial.print(F("Packet len: ")); Serial.println(finger.packet_len);
  Serial.print(F("Baud rate: ")); Serial.println(finger.baud_rate);

  finger.getTemplateCount();

  if (finger.templateCount == 0) {
    Serial.print("Sensor doesn't contain any fingerprint data. Please run the 'enroll' example.");
  }
  else {
    Serial.println("Waiting for valid finger...");
      Serial.print("Sensor contains "); Serial.print(finger.templateCount); Serial.println(" templates");
  }
}
