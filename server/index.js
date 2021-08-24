const express = require('express') ;
const ap = require('express')();
const mysql =  require('mysql');
const cors = require('cors');
const Nexmo = require('nexmo');
const appWs = require('express-ws')(ap);

var md5 = require('md5');

var finger_id=null;

const nexmo = new Nexmo({
	apiKey: '758148e8',
	apiSecret: 'niIL9iufJ8H7dfNW',
});
const from = "FAS for WKU";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "faswu",
    // database: "try",
});

db.connect(function(err){
    if(err){
        throw err;
    }
    console.log("connected to database")
})

app.post('/registration', (req,res) => {

    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const PhoneNumber = req.body.phonenumber
    const Email = req.body.email
    const Password = req.body.password

    db.query(
        "INSERT INTO user (first_name, middle_name, last_name, phone_number, email, password) VALUES (?,?,?,?,?,?)", 
    [FirstName, MiddleName, LastName, PhoneNumber, Email,  md5(Password)],
    (err, result) => {
        console.log(err);
    });
});

app.post("/login", (req,res) => {
    const Email = req.body.email
    const Password = req.body.password 

    db.query(
        "SELECT * FROM user WHERE email = ? AND password = ?",
    [Email,  md5(Password)],
    (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong !"});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
            console.log(md5(Password));
        }
    });
});

// @@@@@@@@@@@@@@@@@@  Admin  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.get("/view_admin_info", (req,res) => {
    const Role = "admin"
    db.query(
        "SELECT * FROM user WHERE role = ?",
        [Role],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});

app.put("/update_admin_info", (req, res) => {
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password
    const Role = "admin"

    let PasswordChecker=null;

    const sqlUpdate = "UPDATE user SET first_name = ?, middle_name = ?, email = ?, password = ? WHERE role = ?";

    if(Password.length===32){
        console.log("Password.length ",Password.length)
        PasswordChecker=Password;
        console.log("PasswordChecker when = 32",PasswordChecker)
    }if(Password.length!=32){
        PasswordChecker=md5(Password);
        console.log("PasswordChecker when != 32",PasswordChecker)
    }


    db.query(sqlUpdate, [FirstName, MiddleName, Email, PasswordChecker, Role], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result); 
        } else {
            console.log("Successfully Updated!");
            console.log(result);
            res.send({message: "Successfully Updated!"});
        }
    });
});



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// @@@@@@@@@@@@@@@@@@  Registrar  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


app.get("/registrar", (req,res) => {
 
    db.query(
        "SELECT * FROM registrar",
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});

app.post("/registrar", (req,res) => {
 
    db.query(
        "SELECT * FROM registrar",
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});


app.delete("/registrar/delete_from_registrar/:college", (req,res) => {

    const sqlDelete = "DELETE FROM registrar WHERE college = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});

app.delete("/registrar/delete_from_user/:college", (req,res) => {

    const sqlDelete = "DELETE FROM user WHERE college = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});

app.post('/createRegistrar', (req,res) => {

    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Gender = req.body.gender
    const Email = req.body.email
    const PhoneNumber = req.body.phonenumber
    const College = req.body.college
    const Password = req.body.password

    db.query(
        "INSERT INTO registrar (first_name, middle_name, last_name, sex, email, phone_number, college, password) VALUES (?,?,?,?,?,?,?,?)", 
    [FirstName, MiddleName, LastName, Gender, Email, PhoneNumber, College, md5(Password) ],
    (err, result) => {
        try {
            if (err) {
                // res.send({err: err});
                res.send({message: "Something was wrong!"});
                console.log( "Something was wrong!");
                console.log(err);
               
            }
    
            if (result.length > 0) {
                console.log(result);
            } else {
                console.log("Successfully Registered!");
                // res.send(result);
                // console.log(result);
                //  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                
                
                        // const to = "+251"+PhoneNumber;
                        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";
                
                        // var result = nexmo.message.sendSms(from, to, text); 
                
                //  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                res.send({message: "Successfully Registered!"});
            }
        } catch (error) {
            
        } 
        
    });
});



app.post('/createUserFromRegistrar', (req,res) => {

    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password
    const Role = req.body.role
    const College = req.body.college

    db.query(
        "INSERT INTO user (first_name, middle_name, email, password, role, college) VALUES (?,?,?,?,?,?)", 
    [FirstName, MiddleName, Email, md5(Password), Role, College ],
    (err, result) => {
        console.log(result);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});


app.post("/show_registered_dean_for_registrar", (req,res) => {
    const College = req.body.college
    db.query(
        "SELECT * FROM dean WHERE college = ?",
        [College],
    (err, result) => {
        if (err) {
            res.send({err: err});
            console.log(err);
        }

        if (result.length > 0) {
            res.send(result);
            console.log(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});


app.delete("/dean_from_dean/delete_from_registrar/:college", (req,res) => {

    const sqlDelete = "DELETE FROM dean WHERE email = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});

app.delete("/dean_from_user/delete_from_user/:college", (req,res) => {

    const sqlDelete = "DELETE FROM user WHERE email = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});


// %%%


// ******************dean section***********************************************************


app.post("/view_dean_info", (req,res) => {
    const Role = "dean"
    const Email = req.body.email
    db.query(
        "SELECT * FROM dean WHERE role = ? AND email = ?",
        [Role, Email],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});


app.put("/update_dean_info_in_user", (req, res) => {
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password

    let PasswordChecker=null;

    const sqlUpdate = "UPDATE user SET first_name = ?, middle_name = ?, email = ?, password = ? WHERE email = ?";

    if(Password.length===32){
        console.log("Password.length ",Password.length)
        PasswordChecker=Password;
        console.log("PasswordChecker when = 32",PasswordChecker)
    }if(Password.length!=32){
        PasswordChecker=md5(Password);
        console.log("PasswordChecker when != 32",PasswordChecker)
    }

    db.query(sqlUpdate, [FirstName, MiddleName, Email, PasswordChecker, Email], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});


app.put("/update_dean_info_in_dean", (req, res) => {
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Email = req.body.email
    const PhoneNumber = req.body.phone
    const Password = req.body.password
    const Role = "dean"

    let PasswordChecker=null;

    const sqlUpdate = "UPDATE dean SET first_name = ?, middle_name = ?, last_name = ?, email = ?, phone_number = ?, password = ? WHERE email = ? AND role = ?";

    
    if(Password.length===32){
        console.log("Password.length ",Password.length)
        PasswordChecker=Password;
        console.log("PasswordChecker when = 32",PasswordChecker)
    }if(Password.length!=32){
        PasswordChecker=md5(Password);
        console.log("PasswordChecker when != 32",PasswordChecker)
    }

    db.query(sqlUpdate, [FirstName, MiddleName, LastName, Email, PhoneNumber, PasswordChecker, Email, Role], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});





app.post("/teacher_attendance_for_dean", (req,res) => {
    const Role = "teacher"
    const Department = req.body.headdepartment 
       db.query(
           "SELECT * FROM attendance WHERE role=? AND college = ?",
           [Role, Department],
       (err, result) => {
           if (err) {
               res.send({err: err});
           }
   
           if (result.length > 0) {
               res.send(result);
           } else {
               res.send({message: "Incorrect email/password !"});
           }
       });
       console.log("department ",Department);
   });


   app.post("/student_attendance_for_dean", (req,res) => {
    const Role = "student"
    const Department = req.body.headdepartment 
       db.query(
           "SELECT * FROM attendance WHERE role=? AND college = ?",
           [Role, Department],
       (err, result) => {
           if (err) {
               res.send({err: err});
           }
   
           if (result.length > 0) {
               res.send(result);
           } else {
               res.send({message: "Incorrect email/password !"});
           }
       });
       console.log("department ",Department);
   });





// ******************* teacher section ***********************************************************


app.post("/view_teacher_info", (req,res) => {
    const Role = "teacher"
    const Email = req.body.email
    db.query(
        "SELECT * FROM teacher WHERE role = ? AND email = ?",
        [Role, Email],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});


app.put("/update_teacher_info_in_user", (req, res) => {
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password

    let PasswordChecker=null;

    const sqlUpdate = "UPDATE user SET first_name = ?, middle_name = ?, email = ?, password = ? WHERE email = ?";

    if(Password.length===32){
        console.log("Password.length ",Password.length)
        PasswordChecker=Password;
        console.log("PasswordChecker when = 32",PasswordChecker)
    }if(Password.length!=32){
        PasswordChecker=md5(Password);
        console.log("PasswordChecker when != 32",PasswordChecker)
    }

    db.query(sqlUpdate, [FirstName, MiddleName, Email, PasswordChecker, Email], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});


app.put("/update_teacher_info_in_teacher", (req, res) => {
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Email = req.body.email
    const PhoneNumber = req.body.phone
    const Password = req.body.password
    const Role = "teacher"

    let PasswordChecker=null;

    const sqlUpdate = "UPDATE teacher SET first_name = ?, middle_name = ?, last_name = ?, email = ?, phone_number = ?, password = ? WHERE email = ? AND role = ?";

    
    if(Password.length===32){
        console.log("Password.length ",Password.length)
        PasswordChecker=Password;
        console.log("PasswordChecker when = 32",PasswordChecker)
    }if(Password.length!=32){
        PasswordChecker=md5(Password);
        console.log("PasswordChecker when != 32",PasswordChecker)
    }

    db.query(sqlUpdate, [FirstName, MiddleName, LastName, Email, PhoneNumber, PasswordChecker, Email, Role], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});



app.post("/student_attendance_for_teacher", (req,res) => {
    const Role = "student"
    const College = req.body.teacherCollege 
    const Department = req.body.teacherDepartment 
    const Course = req.body.teacherCourse 
    const Batch = req.body.teacherBatch 
    const Day = req.body.teacherDate 
       db.query(
           "SELECT * FROM attendance WHERE role=? AND college = ? AND department = ? AND course = ? AND batch = ? AND date = ?",
           [Role, College, Department, Course, Batch, Day],
       (err, result) => {
           if (err) {
               res.send({err: err});
           }
   
           if (result.length > 0) {
               res.send(result);
           } else {
               res.send({message: "Incorrect email/password !"});
           }
       });
       console.log("College ",College);
       console.log("Department ",Department);
       console.log("Course ",Course);
       console.log("Batch ",Batch);
       console.log("Day ",Day);
   });


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


app.post("/show_registered_head_for_registrar", (req,res) => {
    const College = req.body.college
    db.query(
        "SELECT * FROM head WHERE college = ?",
        [College],
    (err, result) => {
        if (err) {
            res.send({err: err});
            console.log(err);
        }

        if (result.length > 0) {
            res.send(result);
            console.log(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});


app.delete("/head_from_head/delete_from_registrar/:college", (req,res) => {

    const sqlDelete = "DELETE FROM head WHERE email = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});

app.delete("/head_from_user/delete_from_registrar/:college", (req,res) => {

    const sqlDelete = "DELETE FROM user WHERE email = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});


// %%%

app.post("/show_registered_student_for_registrar", (req,res) => {
    const College = req.body.college
    db.query(
        "SELECT * FROM student WHERE college = ?",
        [College],
    (err, result) => {
        if (err) {
            res.send({err: err});
            console.log(err);
        }

        if (result.length > 0) {
            res.send(result);
            console.log(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});


app.delete("/delete_student_from_student/:college", (req,res) => {

    const sqlDelete = "DELETE FROM student WHERE fingerprint_id = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
            //   if (err) console.log(err);
            //   else console.log("condition 1 ",result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        // if (err) console.log(err);
        // else console.log("condition 2 ",result);
    })
}
  console.log("college Name : " + College_Name);
});


app.post("/view_registrar_info_in_registrar", (req,res) => {
    const Email = req.body.email
    const Role = "registrar"
    db.query(
        "SELECT * FROM registrar WHERE email = ? AND role = ?",
        [Email, Role],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
            console.log(Email)
        }
    });
});

app.post("/view_registrar_info_in_registrar_for_auth", (req,res) => {
    const Email = req.body.email
    const Role = "registrar"
    db.query(
        "SELECT * FROM registrar WHERE email = ?",
        [Email],
    (err, result) => {
        if (err) {
            res.send({err: err});
            console.log("Error = ",err);
        }

        if (result.length > 0) {
            res.send(result);
            
        } else {
            res.send({message: "Incorrect email/password !"});
            console.log("Email ",Email)
        }
    });
});

app.put("/update_registrar_info_in_user", (req, res) => {
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password

    const sqlUpdate = "UPDATE user SET first_name = ?, middle_name = ?, email = ?, password = ? WHERE email = ?";

    db.query(sqlUpdate, [FirstName, MiddleName, Email, Password, Email], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});


app.put("/update_registrar_info_in_registrar", (req, res) => {
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Email = req.body.email
    const PhoneNumber = req.body.phone
    const Password = req.body.password
    const Role = "registrar"

    const sqlUpdate = "UPDATE registrar SET first_name = ?, middle_name = ?, last_name = ?, email = ?, phone_number = ?, password = ? WHERE email = ? AND role = ?";

    db.query(sqlUpdate, [FirstName, MiddleName, LastName, Email, PhoneNumber, Password, Email, Role], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});


// ********************************************************************************

// app.get("/view_registrar_info_in_registrar", (req,res) => {
//     const Role = "registrar"
//     db.query(
//         "SELECT * FROM registrar WHERE role = ?",
//         [Role],
//     (err, result) => {
//         if (err) {
//             res.send({err: err});
//         }

//         if (result.length > 0) {
//             res.send(result);
//         } else {
//             res.send({message: "Incorrect email/password !"});
//         }
//     });
// });

// app.put("/update_registrar_info_in_registrar", (req, res) => {
//     const FirstName = req.body.firstname
//     const MiddleName = req.body.middlename
//     const Email = req.body.email
//     const Password = req.body.password
//     const Role = "registrar"

//     const sqlUpdate = "UPDATE registrar SET first_name = ?, middle_name = ?, email = ?, password = ? WHERE role = ?";

//     db.query(sqlUpdate, [FirstName, MiddleName, Email, Password, Role], (err, result) => {
//         if (err) {
//             // res.send({err: err});
//             res.send({message: "Something was wrong!"});
//             console.log( "Something was wrong!");
//             console.log(err);
//         }
//         if (result.length > 0) {
//             console.log(result);
//         } else {
//             console.log("Successfully Updated!");
//             res.send({message: "Successfully Updated!"});
//         }
//     });
// });



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//          Dean

app.post('/createDean', (req,res) => {

    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Gender = req.body.gender
    const Email = req.body.email
    const PhoneNumber = req.body.phonenumber
    const College = req.body.college
    const Password = req.body.password
    const Role = req.body.role

    db.query(
        "INSERT INTO dean (first_name, middle_name, last_name, sex, email, phone_number, college, password, role) VALUES (?,?,?,?,?,?,?,?,?)", 
    [FirstName, MiddleName, LastName, Gender, Email, PhoneNumber, College, md5(Password), Role ],
    (err, result) => {
        console.log(result);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});



app.post('/createUserFromDean', (req,res) => {

    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password
    const Role = req.body.role
    const College = req.body.college

    db.query(
        "INSERT INTO user (first_name, middle_name, email, password, role, college) VALUES (?,?,?,?,?,?)", 
    [FirstName, MiddleName, Email, md5(Password), Role, College],
    (err, result) => {
        console.log(result);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});


//      ~~~~~~~~~~


//          Head

app.post('/createHead', (req,res) => {
    const SpecialId = req.body.specialid
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Gender = req.body.gender
    const Email = req.body.email
    const PhoneNumber = req.body.phonenumber
    const College = req.body.college
    const Department = req.body.department
    const Password = req.body.password
    const Role = req.body.role

    db.query(
        "INSERT INTO head (uuid, first_name, middle_name, last_name, sex, email, phone_number, college, department, password, role) VALUES (?,?,?,?,?,?,?,?,?,?,?)", 
    [SpecialId, FirstName, MiddleName, LastName, Gender, Email, PhoneNumber, College, Department, md5(Password), Role ],
    (err, result) => {
        console.log(result);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});



app.post('/createUserFromHead', (req,res) => {
    const SpecialId = req.body.specialid
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password
    const Role = req.body.role
    const College = req.body.college
    const Department = req.body.department

    db.query(
        "INSERT INTO user (uuid, first_name, middle_name, email, password, role, college, department) VALUES (?,?,?,?,?,?,?,?)", 
    [SpecialId, FirstName, MiddleName, Email, md5(Password), Role, College, Department],
    (err, result) => {
        console.log(result);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});


app.post("/view_head_info_in_head", (req,res) => {
    const Email = req.body.email
    const Role = "head"
    db.query(
        "SELECT * FROM head WHERE email = ? AND role = ?",
        [Email, Role],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
            console.log(Email)
        }
    });
});


app.post("/view_head_info_in_head_for_auth", (req,res) => {
    const Email = req.body.email
    const Role = "registrar"
    db.query(
        "SELECT * FROM head WHERE email = ?",
        [Email],
    (err, result) => {
        if (err) {
            res.send({err: err});
            console.log("Error = ",err);
        }

        if (result.length > 0) {
            res.send(result);
            
        } else {
            res.send({message: "Incorrect email/password !"});
            console.log("Email ",Email)
        }
    });
});




app.put("/update_head_info_in_user", (req, res) => {
    const UuId = req.body.uuid_val
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password
    var pass =null;

    if(Password.length<32){
        pass = md5(Password);
    }
    else{
        pass = Password;
    }

    const sqlUpdate = "UPDATE user SET first_name = ?, middle_name = ?, email = ?, password = ? WHERE uuid = ?";

    db.query(sqlUpdate, [FirstName, MiddleName, Email, pass, UuId], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log(result);
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});


app.put("/update_head_info_in_head", (req, res) => {
    const UuId = req.body.uuid_val
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Email = req.body.email
    const PhoneNumber = req.body.phone
    const Password = req.body.password
    const Role = "head"

    var pass =null;

    if(Password.length<32){
        pass = md5(Password);
    }
    else{
        pass = Password;
    }

    const sqlUpdate = "UPDATE head SET first_name = ?, middle_name = ?, last_name = ?, email = ?, phone_number = ?, password = ? WHERE uuid = ? AND role = ?";

    db.query(sqlUpdate, [FirstName, MiddleName, LastName, Email, PhoneNumber, pass, UuId, Role], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log(result);
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});



//      ~~~~~~~~~~

//      ~~~~~~~~~~~~~~~~~~~


app.post('/addStudent', (req,res) => {

    const SchoolId = req.body.schoolid
    const FingerprintId = req.body.fingerprintid
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Gender = req.body.gender
    const Email = req.body.email
    const PhoneNumber = req.body.phonenumber
    const College = req.body.college
    const Department = req.body.department
    const Batch = req.body.batch
    const Course = req.body.course
    const Role = req.body.role

    db.query(
        "INSERT INTO student (school_id, fingerprint_id,first_name, middle_name, last_name, sex, email, phone_number, college, department, batch, course, role) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", 
    [SchoolId, FingerprintId,FirstName, MiddleName, LastName, Gender, Email, PhoneNumber, College, Department, Batch, Course, Role ],
    (err, result) => {
        finger_id=FingerprintId;
        console.log(err);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});



app.get("/view_registered_student_info", (req,res) => {
    db.query(
        "SELECT * FROM student",
    (err, result) => {
        try {
            if (err) {
                res.send({err: err});
            }
    
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Incorrect email/password !"});
                console.log(Email)
            }
        } catch (error) {
            
        }
    });
});


app.post("/view_registered_student_info_for_head", (req,res) => {
    const Department = req.body.headdepartment
    db.query(
        "SELECT * FROM student WHERE department = ?",
        [Department],
    (err, result) => {
        try {
            if (err) {
                res.send({err: err});
            }
    
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Incorrect email/password !"});
                console.log(Email)
            }
        } catch (error) {
            
        }
    });
});



app.post("/view_registered_student_for_course", (req,res) => {
    const SchoolId = req.body.schoolid
    const StudentCollege = req.body.studentcollege
    db.query(
        "SELECT * FROM student WHERE school_id = ? AND college = ?",
        [SchoolId, StudentCollege],
    (err, result) => {
        try {
            if (err) {
                res.send({err: err});
            }
    
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Incorrect email/password !"});
                console.log(Email)
            }
        } catch (error) {
            
        }
    });
});



app.put("/update_student_courses", (req, res) => {
    const SchoolId = req.body.schoolid
    const Courses = req.body.courses


    const sqlUpdate = "UPDATE student SET course = ? WHERE school_id = ?";

    db.query(sqlUpdate, [Courses, SchoolId], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});



//          ================================



//      ~~~~~~~~~~~~~~~~~~~


app.post('/addTeacher', (req,res) => {

    const UuId = req.body.specialid
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const LastName = req.body.lastname
    const Gender = req.body.gender
    const FingerprintId = req.body.fingerprintid
    const Email = req.body.email
    const PhoneNumber = req.body.phonenumber
    const Password = req.body.password
    const College = req.body.college
    const Department = req.body.department
    const Batch = req.body.batch
    const Course = req.body.course
    const Day = req.body.date
    const TimeFrom = req.body.timefrom
    const TimeTo = req.body.timeto
    const Role = req.body.role

    db.query(
        "INSERT INTO teacher (uuid, first_name, middle_name, last_name, sex, fingerprint_id, email, phone_number, password, college, department, batch, course, date, time_from, time_to, role) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
    [UuId, FirstName, MiddleName, LastName, Gender, FingerprintId, Email, PhoneNumber, md5(Password),  College, Department, Batch, Course, Day, TimeFrom, TimeTo, Role ],
    (err, result) => {
        finger_id=FingerprintId;
        console.log(err);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});


app.post('/addTeacher_in_user', (req,res) => {

    const UuId = req.body.specialid
    const FirstName = req.body.firstname
    const MiddleName = req.body.middlename
    const Email = req.body.email
    const Password = req.body.password
    const College = req.body.college
    const Department = req.body.department
    const Role = req.body.role

    db.query(
        "INSERT INTO user (uuid, first_name, middle_name, email, password, role, college, department) VALUES (?,?,?,?,?,?,?,?)", 
    [UuId, FirstName, MiddleName, Email, md5(Password), Role, College, Department, ],
    (err, result) => {
        // finger_id=FingerprintId;
        console.log(err);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


        // const to = "+251"+PhoneNumber;
        // const text = "Hello "+FirstName+" use "+Email+" & "+Password+" to login !!";

        // var result = nexmo.message.sendSms(from, to, text); 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
});



app.post("/registered_teacher", (req,res) => {
    const Department = req.body.headdepartment
    console.log("Department ",Department)
    db.query(
        "SELECT * FROM teacher WHERE department = ?",
        [Department],
    (err, result) => {
        if (err) {
            res.send({err: err});
            console.log(err);
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});



app.post("/view_registered_teacher_for_course", (req,res) => {
    const Email = req.body.email
    const Department = req.body.headdepartment
    db.query(
        "SELECT * FROM teacher WHERE email = ? AND department = ?",
        [Email, Department],
    (err, result) => {
        try {
            if (err) {
                res.send({err: err});
            }
    
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Incorrect email/password !"});
                console.log(Email)
            }
        } catch (error) {
            
        }
    });
});



app.delete("/teacher/delete_from_teacher/:college", (req,res) => {

    const sqlDelete = "DELETE FROM teacher WHERE email = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});

app.delete("/teacher/delete_from_user/:college", (req,res) => {

    const sqlDelete = "DELETE FROM user WHERE email = ? ";

var College_Name = req.params.college;
if (College_Name.includes(",")){
    var eachCollege = College_Name.split(",");
    for (var key in eachCollege){
var temp = eachCollege[key];
          db.query(sqlDelete, temp, (err, result) => {
              if (err) console.log(err);
              else console.log(result);
          })
    }
}
else{
    db.query(sqlDelete, College_Name, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
}
  console.log("college Name : " + College_Name);
});




app.put("/update_teacher_courses", (req, res) => {
    const Email = req.body.email
    const Courses = req.body.courses
    const TimeFrom = req.body.timefrom
    const TimeTo = req.body.timeto
    const Daye = req.body.date
    const Batch = req.body.batch
    const Department = req.body.department


    const sqlUpdate = "UPDATE teacher SET batch = ?, course = ?, date = ?, time_from = ?, time_to = ? WHERE email = ? AND department = ?";

    db.query(sqlUpdate, [Batch, Courses, Daye, TimeFrom, TimeTo, Email, Department], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result);
        } else {
            console.log("Successfully Updated!");
            res.send({message: "Successfully Updated!"});
        }
    });
});



//          ================================

app.post("/view_profile", (req,res) => {
    const Email = req.body.email
console.log("from server "+Email);
    db.query(
        "SELECT * FROM user WHERE email = ?",
    [Email],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
            console.log(email);
        }
    });
});


ap.ws('/echo', (ws, rse) => {
    ws.on('message', msg => {
        if(msg != "Active"){
            let today = new Date();
            let day_and_time = today.toString().split(" ");
            let day = day_and_time[0];
            let time = day_and_time[4];
           
            
            let Fid = msg-48;
            db.query(
                "SELECT * FROM student WHERE fingerprint_id = ?",
            [Fid],
            (err, result) => {
                if (err) {
                    res.send({err: err});
                }
        
                if (result.length > 0) {
                    // res.send(result);
                    console.log(result);


                    const SchoolId = result[0].school_id;
                    const FingerprintId = result[0].fingerprint_id;
                    const FirstName = result[0].first_name;
                    const MiddleName = result[0].middle_name;
                    const LastName = result[0].last_name;
                    const Gender = result[0].sex;
                    const Email = result[0].email;
                    const PhoneNumber = result[0].phone_number;
                    const College = result[0].college;
                    const Department = result[0].department;
                    const Batch = result[0].batch;
                    const Course = result[0].course;

                    var Time_from = result[0].time_from;
                    var Time_to = result[0].time_to;
                    let Status = null;
                    const Role = result[0].role;

                    

                    //  to identify
                    const identify_Department = result[0].department;
                    const identify_Batch = result[0].batch;
                    let identify_Course =result[0].course.split(",");
                    const identify_Day = day;
                    const identify_Time = time;
                    console.log(identify_Course);
                    // AND course CONTAINS = ?
                    //  department = ? AND batch = ? AND date = ?
                    // Department,  Batch,  Day

                    for(var i = 0; i<identify_Course.length; i++){
                        console.log(">>> ",identify_Course[i]);

                        db.query(
                            "SELECT * FROM teacher WHERE department = ? AND batch = ? AND date = ? AND course = ?",
                        [identify_Department,  identify_Batch,  identify_Day, identify_Course[i]],
                        (err, result) => {
                            if (err) {
                                // res.send({err: err});
                                // res.send({message: "Something was wrong !"});
                            }
                    
                            if (result.length > 0) {



                                var arrive_time_split = time.split(":");
                    var Time_from_split = result[0].time_from.split(":"); 
                    var Time_to_split = result[0].time_to.split(":");
                    console.log("ime_from_split[0] ",Time_from_split[0]);
                    console.log("arrive_time_split[0] ",arrive_time_split[0]);

                    if(parseInt(Time_from_split[0]) === parseInt(arrive_time_split[0])-6){
     
                        if(parseInt(arrive_time_split[1]) <= parseInt(Time_from_split[1])+5 ){
                            console.log("on time");
                            Status = "on time";
                        }else if(parseInt(arrive_time_split[1]) <= parseInt(Time_from_split[1])+10 ){
                            console.log("Delayed by 5 min");
                            Status = "Delayed by 5 min";
                        }else if(parseInt(arrive_time_split[1]) <= parseInt(Time_from_split[1])+20 ){
                            console.log("Delayed by 15 min");
                            Status = "Delayed by 15 min";
                        }else if(parseInt(arrive_time_split[1]) <= parseInt(Time_to_split[1]) ){
                            console.log("very late");
                            Status = "very late";
                        }else{
                            console.log("absent");
                            Status = "very late or absent";
                        }
                        
                    }



                                // res.send(result);
                                console.log("teacher info");
                                console.log(result);
                                console.log(">>> ",identify_Course);
                                console.log("<<< ",result[0].course);

                                for(var i = 0; i<identify_Course.length; i++){
                                    if(identify_Course[i] === result[0].course){
                                        console.log( result[0].course);
                                        db.query(
                                            "INSERT INTO attendance (school_id, fingerprint_id, first_name, middle_name, last_name, college, department, batch, course, date, arrive_time, status, role, full_time_info) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
                                        [SchoolId, FingerprintId, FirstName, MiddleName, LastName, College, Department, Batch, identify_Course[i], identify_Day,  identify_Time, Status, Role, today ],
                                        (err, result) => {
                                            console.log(result);
                                        });
                                    }
                                }

                               


                            } else {
                                // res.send({message: "Incorrect email/password !"});
                                // console.log(md5(Password));
                            }
                        });


                    }

                    







                } else {
                    // res.send({message: "Incorrect email/password !"});
                    // console.log(md5(Password));
                }
            });

            db.query(
                "SELECT * FROM teacher WHERE fingerprint_id = ?",
            [Fid],
            (err, result) => {
                if (err) {
                    res.send({err: err});
                }
        
                if (result.length > 0) {
                    // res.send(result);
                    console.log(result);


                    const FingerprintId = result[0].fingerprint_id;
                    const FirstName = result[0].first_name;
                    const MiddleName = result[0].middle_name;
                    const LastName = result[0].last_name;
                    const Gender = result[0].sex;
                    const Email = result[0].email;
                    const PhoneNumber = result[0].phone_number;
                    const College = result[0].college;
                    const Department = result[0].department;
                    const Batch = result[0].batch;
                    const Course = result[0].course;
                    let Status = "attended";
                    const Role = result[0].role;

                    //  to identify
                    const identify_Department = result[0].department;
                    const identify_Batch = result[0].batch;
                    let identify_Course =result[0].course.split(",");
                    const identify_Day = day;
                    const identify_Time = time;
                    console.log(identify_Course);
                    // AND course CONTAINS = ?
                    //  department = ? AND batch = ? AND date = ?
                    // Department,  Batch,  Day

                    for(var i = 0; i<identify_Course.length; i++){
                        console.log(">>> ",identify_Course[i]);

                        db.query(
                            "SELECT * FROM teacher WHERE department = ? AND batch = ? AND date = ? AND course = ?",
                        [identify_Department,  identify_Batch,  identify_Day, identify_Course[i]],
                        (err, result) => {
                            if (err) {
                                // res.send({err: err});
                                // res.send({message: "Something was wrong !"});
                            }
                    
                            if (result.length > 0) {



                                var arrive_time_split = time.split(":");
                    var Time_from_split = result[0].time_from.split(":"); 
                    var Time_to_split = result[0].time_to.split(":");

                    // if(Time_from_split[0] === arrive_time_split[0]){
     
                    //     if(parseInt(arrive_time_split[1]) <= parseInt(Time_from_split[1])+5 ){
                    //         console.log("on time");
                    //         Status = "on time";
                    //     }else if(parseInt(arrive_time_split[1]) <= parseInt(Time_from_split[1])+10 ){
                    //         console.log("Delayed by 5 min");
                    //         Status = "Delayed by 5 min";
                    //     }else if(parseInt(arrive_time_split[1]) <= parseInt(Time_from_split[1])+20 ){
                    //         console.log("Delayed by 15 min");
                    //         Status = "Delayed by 15 min";
                    //     }else if(parseInt(arrive_time_split[1]) <= parseInt(Time_to_split[1]) ){
                    //         console.log("very late");
                    //         Status = "very late";
                    //     }else{
                    //         console.log("absent");
                    //         Status = "very late or absent";
                    //     }
                        
                    // }



                                // res.send(result);
                                console.log("teacher info");
                                console.log(result);
                                console.log(">>> ",identify_Course);
                                console.log("<<< ",result[0].course);

                                for(var i = 0; i<identify_Course.length; i++){
                                    if(identify_Course[i] === result[0].course){
                                        console.log( result[0].course);
                                        db.query(
                                            "INSERT INTO attendance (fingerprint_id, first_name, middle_name, last_name, college, department, batch, course, date, arrive_time, status, role, full_time_info) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", 
                                        [FingerprintId, FirstName, MiddleName, LastName, College, Department, Batch, identify_Course[i], identify_Day,  identify_Time, Status, Role, today ],
                                        (err, result) => {
                                            console.log(result);
                                        });
                                    }
                                }

                               


                            } else {
                                // res.send({message: "Incorrect email/password !"});
                                // console.log(md5(Password));
                            }
                        });


                    }



                } else {
                    // res.send({message: "Incorrect email/password !"});
                    // console.log(md5(Password));
                }
            });

            console.log('ID: ', Fid, " >> at ", today.toString());
        }
       
        console.log(finger_id);
        if(finger_id != null){
            ws.send(finger_id);
            finger_id=null;
        }
         
    });
});

app.post("/teacher_attendance", (req,res) => {
 const Role = "teacher"
 const Department = req.body.headdepartment 
    db.query(
        "SELECT * FROM attendance WHERE role=? AND department = ?",
        [Role, Department],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
    console.log("department ",Department);
});

app.post("/student_attendance", (req,res) => {
 const Role = "student"
 const Department = req.body.headdepartment
    db.query(
        "SELECT * FROM attendance  WHERE role=? AND department = ?",
        [Role, Department],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Incorrect email/password !"});
        }
    });
});



//   Authorization #########################################################

app.get("/get_logged_user_info", (req,res) => {
    const Id = 1
    try {
        db.query(
            "SELECT * FROM authorize WHERE id = ?",
            [Id],
        (err, result) => {
            if (err) {
                console.log(error);
                res.send({err: err});
            }
    
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Incorrect email/password !"});
            }
        });
    } catch (error) {
        
    }
});


app.put("/authorize_user", (req, res) => {
    const Email = req.body.email
    const Password = req.body.password
    const Role = req.body.role
    const Status = req.body.status
    const Id = 1


    const sqlUpdate = "UPDATE authorize SET email = ?, password = ?, role = ?, status = ? WHERE id = ?";

    db.query(sqlUpdate, [Email, Password, Role, Status, Id], (err, result) => {
        if (err) {
            // res.send({err: err});
            res.send({message: "Something was wrong!"});
            console.log( "Something was wrong!");
            // console.log(err);
        }
        if (result.length > 0) {
            console.log(result); 
            
        } else {
            console.log("Successfully Updated!");
            console.log( "Role, ",Role);
            console.log(result);
            res.send({message: "Successfully Updated!"});
        }
    });
});

// ################################################################################

ap.listen(1337, () => console.log('Socket Server has been started at 1337'));

app.listen(3001, () => {
    console.log("running web server on port 3001");
});
