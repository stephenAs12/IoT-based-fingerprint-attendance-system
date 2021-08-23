import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import "../../../App.css";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'    
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers';
import { uuid } from 'uuidv4';

let head_college=null;
let head_department=null;


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const useStyles = makeStyles((theme) => ({
    root: {
      // height: '100vh',
      // width: '1500px',
      height: '100vh',
      width: "50%",
      paddingLeft: '0%'
    },
    
    paper: {
      // margin: theme.spacing(4, 4),
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
      margin: theme.spacing(1, 4),
      
      alignItems: 'center',
      width: "90%",    //  text fild width
    },
    avatar: {
      // margin: theme.spacing(1),
      // backgroundColor: theme.palette.secondary.main,
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      marginLeft: '48%',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    minDivision:{
      border: '2px solid red'
    },
  }));

    const AddTeacher = () => {

      

      const[genderReg, setGenderReg] = useState('');
      const[departmentReg, setDepartmentReg] = useState('');
      const[collegeReg, setColleggeReg] = useState('');
      const[batchReg, setBatchReg] = useState('');
      const [state, setState] = React.useState({
        checkedG: true,
      });
      const [courseReg, setCourseReg] = React.useState([]);

      var holdCourse=courseReg;
      const[dateReg, setDateReg] = useState('');
      const [selectedTimeFrom, setSelectedTimeFrom] = React.useState(new Date('2013-11-24T02:30:00'));
      const [selectedTimeTo, setSelectedTimeTo] = React.useState(new Date('2013-11-24T04:30:00'));


      React.useEffect(() => {
        if(localStorage.getItem("identify-head-college")) {
          head_college = JSON.parse(localStorage.getItem("identify-head-college"));
         console.log("head_college from create "+head_college);
         setColleggeReg(  JSON.parse(localStorage.getItem("identify-head-college")));
        }
      }, []);


      React.useEffect(() => {
        if(localStorage.getItem("identify-head-department")) {
          head_department = JSON.parse(localStorage.getItem("identify-head-department"));
          setDepartmentReg( JSON.parse(localStorage.getItem("identify-head-department")));
         console.log("head_department from create "+head_department);
        }
      }, []); 



      const handleTimeFromChange = (time) => {
        setSelectedTimeFrom(time);
      };
      const handleTimeToChange = (time) => {
        setSelectedTimeTo(time);
      };

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setCourseReg(event.target.value);
      };
      
      
        const phoneRegExp=/^[0-9]{8}/
        const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const initialValues = { 
             fname: '',
            mname: '',
            lname: '',
            gender: '',
            fid: '', 
            email: '',
            phoneNumber: '',
            password: '',
            college: '',
            department: '',
            batch: '',
            course: '',
            day: '',
            timeFrom: '',
            timeTo: '',
        }
        const validationSchema = Yup.object().shape({
            // sid: Yup.string().min(3, "It's too short").required("Required"),
            // fid: Yup.string().min(3, "It's too short").required("Required"),
            fname: Yup.string().min(3, "It's too short").required("Required"),
            mname: Yup.string().min(3, "It's too short").required("Required"),
            lname: Yup.string().min(3, "It's too short").required("Required"),
            email: Yup.string().email("Enter valid email").required("Required"),
            // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
            phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number").required("Required"),
            password: Yup.string().min(8, "Minimum characters should be 8")
            .matches(passwordRegExp,"Password must have one upper, lower case, number, special symbol").required('Required'),
            confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches").required('Required'),
        })
        const onSubmit = (values, props) => {
          var fromOne=selectedTimeFrom+"he";
            var fromTwo=fromOne.split(" ");
            console.log(fromTwo[4]);

            var toOne=selectedTimeTo+"he";
            var toTwo=toOne.split(" ");
            console.log(toTwo[4]);

            // alert(JSON.stringify(values.fname), null, 2)
            // props.resetForm()
            var uuid_val = uuid();
            Axios.post("http://localhost:3001/addTeacher", {
              specialid: uuid_val,
              firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
              middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
              lastname: JSON.stringify(values.lname).replace(/['"]+/g, ''),
              gender: genderReg,
              fingerprintid: JSON.stringify(values.fid).replace(/['"]+/g, ''),
              email: JSON.stringify(values.email).replace(/['"]+/g, ''),
              phonenumber: JSON.stringify(values.phoneNumber).replace(/['"]+/g, ''),
              password: JSON.stringify(values.password).replace(/['"]+/g, ''),
              college: collegeReg,
              // department: departmentReg,
              department: departmentReg,
              batch: batchReg,
              course: courseReg,
              course: courseReg,
              date: dateReg,
              timefrom: fromTwo[4],
              timeto:  toTwo[4],
              role: JSON.stringify("teacher").replace(/['"]+/g, ''),
              
            }).then((response) => {
              console.log(response);
            });


            Axios.post("http://localhost:3001/addTeacher_in_user", {
              specialid: uuid_val,
              firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
              middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
              email: JSON.stringify(values.email).replace(/['"]+/g, ''),
              password: JSON.stringify(values.password).replace(/['"]+/g, ''),
              college: head_college,
              department: head_department,
              role: JSON.stringify("teacher").replace(/['"]+/g, ''),
              
            }).then((response) => {
              console.log(response);
              window.alert("Successfully Registered");

            
            });
            // var someStr =  JSON.stringify(values.fname).replace(/['"]+/g, '');
            // console.log(someStr);
            console.log(genderReg);
            console.log(courseReg.join());
            console.log(departmentReg);
            
            
            window.location.reload();
        }


        let data=[];
const Computing_and_Informatics = ["Software Engineering", "Computer Science", "Information Systems", "Information Technology"];
const Engineering_and_Technology = ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Construction Technology & Management", "Garment Engineering", "Food Engineering", "Architecture Engineering", "Hydraulics Engineering", "Fashion Design Engineering", "Textile Engineering"];
const Medicine_and_Health_Sciences = ["Public Health", "Midwifery", "Medicine", "Medical Laboratory Science", "Nursing"];
const Natural_and_Computational_Sciences = ["Biology", "Chemistry", "Mathematics", "Statistics", "Physics", "Biotechnology", "Sport Science"];
const Social_Science_and_Humanities = ["Psychology", "English", "Civics and Ethical", "Governance and Development"];
const Business_and_Economics = ["Accounting and Finance", "Economics", "Master of Business Administration", "Project Planning and Management"];
const Agriculture_Science = ["Agribusiness", "Plant science", "Ecotourism", "Animal Production and Technology", "Agricultural Economics", "Natural Resources and Management", "Horticulture"];
  
    if(head_college==="Computing and Informatics"){
      data=Computing_and_Informatics;
  }if(head_college==="Engineering and Technology"){
      data=Engineering_and_Technology;
  }
  if(head_college==="Medicine and Health Sciences"){
    data=Medicine_and_Health_Sciences;
}if(head_college==="Natural and Computational Sciences"){
  data=Natural_and_Computational_Sciences;
}if(head_college==="Social Science and Humanities"){
  data=Social_Science_and_Humanities;
}if(head_college==="Business and Economics"){
  data=Business_and_Economics;
}if(head_college==="Agriculture Science"){
  data=Agriculture_Science;
}

let course=[];

const sw = ["C++", "Introduction to Software Engineering", "Web Design", "Java", "Web Service", "Mobile Programming", "Research", "Entrepreneur"];
const is = ["Digital Logic", "Artificial Intelligence", "C++", "Introduction to Software Engineering", "Web Design", "Java", "Web Service", "Mobile Programming", "Research", "Entrepreneur"];

const cve = ["Mechanics", "Hydraulics", "Surveying ", "Solid Mechanics"];
const me = ["Manufacturing and Design", "Dynamics", "Thermodynamics ", "Engineering Design", "Fluid Mechanics"];

if(head_department==="Software Engineering"){
  course=sw;
}if(head_department==="Information Systems"){
  course=is;
}if(departmentReg==="Civil Engineering"){
  course=cve;
}
if(departmentReg==="Mechanical Engineering"){
  course=me;
}


// const handleChange = (event) => {
  
// };

const handleChangeMultiple = (event) => {
  const { options } = event.target;
  const value = [];
  for (let i = 0, l = options.length; i < l; i += 1) {
    if (options[i].selected) {
      value.push(options[i].value);
    }
  }
  setCourseReg(value);
};

        const classes = useStyles();

        return (
      //       <Grid container component="main" className={classes.root}>
      // <CssBaseline />
    <div className="box">
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register Teacher
          </Typography>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form noValidate>
                                {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                        onChange={props.handleChange} /> */}
    
                                  
                            <legend>personal Information:</legend>
                           <div className="personal">
                              <div className="fname">
                                <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    name='fname' 
                                    id="first_name"
                                    label='First Name' 
                                    fullWidth
                                    error={props.errors.fname && props.touched.fname}
                                    helperText={<ErrorMessage name='fname' />} 
                                    required
                                    type="text"
                                    // onChange={(e) => {
                                    //   setFirstNameReg(e.target.value);
                                    // }}
                                     />
                                  </div>


                                  <div className="mname"> 
                                     <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    name='mname' 
                                    id="middle_name"
                                    label='Middle Name' 
                                    fullWidth
                                    error={props.errors.mname && props.touched.mname}
                                    helperText={<ErrorMessage name='mname' />} 
                                    required
                                    type="text"
                                    // onChange={(e) => {
                                    //   setMiddleNameReg(e.target.value);
                                    // }}
                                     />
                                     </div>

                                <div className="lname">
                                     <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    name='lname' 
                                    id="last_name"
                                    label='Last Name' 
                                    fullWidth
                                    error={props.errors.lname && props.touched.lname}
                                    helperText={<ErrorMessage name='lname' />} 
                                    required
                                    type="text"
                                    // onChange={(e) => {
                                    //   setLastNameReg(e.target.value);
                                    // }}
                                     />
                                     </div>
                             </div>
    
                      <div className="gender_fid">
                      <div className="gender">
                           <FormControl 
                              fullWidth variant="outlined" 
                              className={classes.formControl}
                              name="sex"
                              required
                              >
                                      <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                      <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        required
                                        label="Gender"
                                       
                                        onChange={(e) => {
                                          setGenderReg(e.target.value);
                                        }}
                                      >
                                        
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"} >Female</MenuItem>
                                      </Select>
                                    </FormControl>
                                    </div>

                                    <div className="fid">
                                <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    name='fid' 
                                    id="fingerprint_id"
                                    label='Fingerprint Id' 
                                    fullWidth
                                    // error={props.errors.fid && props.touched.fid}
                                    // helperText={<ErrorMessage name='fid' />} 
                                    required
                                    type="text"
                                    // onChange={(e) => {
                                    //   setFirstNameReg(e.target.value);
                                    // }}
                                     />
                                     </div>
                                     </div>
    
                                    <hr/>
                        <legend>Contact Information:</legend>
                        <div className="personal">
                              <div className="email">
                                <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    name='email' 
                                    label='Email' 
                                    fullWidth
                                    error={props.errors.email && props.touched.email}
                                    helperText={<ErrorMessage name='email' />} 
                                    required 
                                    // onChange={(e) => {
                                    //   setEmailReg(e.target.value);
                                    // }}
                                />
                                </div>
    
                                <div className="phone">
                                <Field 
                                    as={TextField} 
                                    variant="outlined"
                                    margin="normal"
                                    id="phone"
                                    label="Phone Number"
                                    name="phoneNumber" 
                                    fullWidth
                                    type="number"
                                    error={props.errors.phoneNumber && props.touched.phoneNumber}
                                    helperText={<ErrorMessage name='phoneNumber' />} 
                                    required 
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">+2519</InputAdornment>,
                                      }}
                                      // onChange={(e) => {
                                      //   setPhoneReg(e.target.value);
                                      // }}
                                />
                                </div>
                                
                                </div>

                                <hr/>
                                    <legend>Password Information:</legend>
                                    <div className="personal">
                                <div className="password">
                                <Field 
                                    as={TextField} 
                                    variant="outlined"
                                    margin="normal"
                                    name='password' 
                                    label='Password'
                                    type='password' 
                                    fullWidth
                                    error={props.errors.password && props.touched.password}
                                    helperText={<ErrorMessage name='password' />} 
                                    required 
                                    // onChange={(e) => {
                                    //   setPasswordReg(e.target.value);
                                    // }}
                                />
                                </div>
    
                                <div className="confirmpassword">
                                <Field 
                                    as={TextField} 
                                    variant="outlined"
                                    margin="normal"
                                    name='confirmPassword' 
                                    label='Confirm Password' 
                                    type='password' 
                                    fullWidth
                                    error={props.errors.confirmPassword && props.touched.confirmPassword}
                                    helperText={<ErrorMessage name='confirmPassword' />}
                                    required 
                                    // onChange={(e) => {
                                    //   setPasswordReg(e.target.value);
                                    // }}
                                />
                                </div>

                              </div>
                                
                                      <hr/>
                                <legend>Academic Information:</legend>  
                                                  <FormControl 
                                            fullWidth variant="outlined" 
                                            className={classes.formControl}
                                            name="batch"
                                            required
                                            >
                                                    <InputLabel id="demo-simple-select-outlined-label">Batch</InputLabel>
                                                    <Select
                                                      labelId="demo-simple-select-outlined-label"
                                                      id="demo-simple-select-outlined"
                                                      required
                                                      label="Batch"
                                                      onChange={(e) => {
                                                        setBatchReg(e.target.value);
                                                      }}
                                                    
                                                    >
                                                      <MenuItem value="">
                                                        <em>None</em>
                                                      </MenuItem>
                                                      <MenuItem value={"1"}>1<sup>st</sup>  Year</MenuItem>
                                                      <MenuItem value={"2"}>2<sup>nd</sup>   Year</MenuItem>
                                                      <MenuItem value={"3"}>3<sup>rd</sup>   Year</MenuItem>
                                                      <MenuItem value={"4"}>4<sup>th</sup>  Year</MenuItem>
                                                      <MenuItem value={"5"}>5<sup>th</sup>   Year</MenuItem>
                                                      <MenuItem value={"6"}>6<sup>th</sup>   Year</MenuItem>
                                                      <MenuItem value={"7"}>7<sup>th</sup>  Year</MenuItem>
                                  

                                                    </Select>
                                                  </FormControl>                                       
                                          <p></p>

                                    {/* <FormControl
                                    fullWidth
                                    variant="outlined"
                                    className={classes.formControl}
                                    >
                                      <InputLabel id="demo-mutiple-checkbox-label">Courses</InputLabel>
                                      <Select
                                      labelId="demo-mutiple-checkbox-label"
                                      id="demo-mutiple-checkbox"
                                      multiple
                                      value={courseReg}
                                      onChange={handleChange}
                                      // input={<Input />}
                                      renderValue={(selected) => selected.join(', ')}
                                      required
                                      >
                                        {course.map((name) => (
                                              <MenuItem key={name} value={name}>
                                                <Checkbox checked={courseReg.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                              </MenuItem>
                                            ))}

                                      </Select>
                                      
                                    </FormControl> */}

                                    <div className="first_day">
                                      <div className="course">
                                      <FormControl 
                                          fullWidth variant="outlined" 
                                          className={classes.formControl}
                                          name="college"
                                          required
                                          >
                                                  <InputLabel id="demo-simple-select-outlined-label">Select Course</InputLabel>
                                                  <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    required
                                                    label="Course"
                                                    onChange={(e) => {
                                                      setCourseReg(e.target.value);
                                                    }}
                                                    
                                                  >
                                                    <MenuItem value="">
                                                      <em>None</em>
                                                    </MenuItem>
                                                    
                                                    {course.map(number => (
                                                        <MenuItem value={number}>
                                                              {number}
                                                          </MenuItem>
                                                        ))}
                                

                                                  </Select>
                                                </FormControl>
                                      </div>

                                      <div className="date">
                                      <FormControl 
                                            fullWidth variant="outlined" 
                                            className={classes.formControl}
                                            name="date"
                                            required
                                            >
                                                    <InputLabel id="demo-simple-select-outlined-label">Date</InputLabel>
                                                    <Select
                                                      labelId="demo-simple-select-outlined-label"
                                                      id="demo-simple-select-outlined"
                                                      required
                                                      label="Date"
                                                      onChange={(e) => {
                                                        setDateReg(e.target.value);
                                                      }}
                                                      
                                                    >
                                                      <MenuItem value="">
                                                        <em>None</em>
                                                      </MenuItem>
                                                      <MenuItem value={"Mon"}>Monday</MenuItem>
                                                      <MenuItem value={"Tue"}>Tuesday</MenuItem>
                                                      <MenuItem value={"Wed"}>Wednesday</MenuItem>
                                                      <MenuItem value={"Thu"}>Thursday</MenuItem>
                                                      <MenuItem value={"Fri"}>Friday</MenuItem>
                                  

                                                    </Select>
                                                  </FormControl>
                                      </div>

                                      <div className="time">
                                      <div className="from">
                                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                          <KeyboardTimePicker
                                          // fullWidth variant="outlined" 
                                              margin="normal"
                                              id="time-from-picker"
                                              label="From"
                                              value={selectedTimeFrom}
                                              onChange={handleTimeFromChange}
                                              KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                              }}
                                            />
                                            </MuiPickersUtilsProvider>
                                      </div>

                                      <div className="to">
                                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                          <KeyboardTimePicker
                                          // fullWidth variant="outlined" 
                                              margin="normal"
                                              id="time-to-picker"
                                              label="To"
                                              value={selectedTimeTo}
                                              onChange={handleTimeToChange}
                                              KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                              }}
                                            />
                                            </MuiPickersUtilsProvider>
                                      </div>
                                      </div>
                                    </div>
                                    

                               

 
                                <Button 
                                    type='submit' 
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    className={classes.submit}
                                    // onClick={register}
                                    >
                                        Register
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
      </Grid>
      </div>
    // </Grid>
        )
    }
    
    export default AddTeacher;