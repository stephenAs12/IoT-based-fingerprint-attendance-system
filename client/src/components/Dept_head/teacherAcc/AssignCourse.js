import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../common/copyright';
import Sex from '../../common/genderComponent';
import Role from '../../common/role';
import Axios from 'axios';
import "../../../App.css"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'    
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import { BiSearchAlt} from 'react-icons/bi';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ListItemText from '@material-ui/core/ListItemText';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
let email_val = "";
    
let rows = [{
    batch: "",
    college: "",
    course: "",
    department: "",
    email: "",
    fingerprint_id: "",
    first_name: "",
    id: "",
    last_name: "",
    middle_name: "",
    phone_number: "",
    registration_date: "",
    role: "",
    school_id: "",
    sex: "",

}];


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      width: "50%",
      paddingLeft: '0%'
    },
    
    paper: {
      margin: theme.spacing(1, 4),
      
      alignItems: 'center',
      width: "90%",    //  text fild width
    },
    avatar: {
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

    const RegisterStudentOnCourses = () => {

      const[genderReg, setGenderReg] = useState('');
      // const[firstNameReg, setFirstNameReg] = useState('');
      const [adminData, setAdminData] = useState([]);
      const[searchValue, setSearchValue] = useState('');
      const[departmentReg, setDepartmentReg] = useState('');
      const[batchReg, setBatchReg] = useState('');
      const [courseReg, setCourseReg] = React.useState([]);
      const [state, setState] = React.useState({
        checkedG: true,
      });
      const[dateReg, setDateReg] = useState('');
      const [selectedTimeFrom, setSelectedTimeFrom] = React.useState(new Date('2013-11-24T02:30:00'));
      const [selectedTimeTo, setSelectedTimeTo] = React.useState(new Date('2013-11-24T04:30:00'));

      const handleTimeFromChange = (time) => {
        setSelectedTimeFrom(time);
      };
      const handleTimeToChange = (time) => {
        setSelectedTimeTo(time);
      };

      var holdCourse=courseReg;

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setCourseReg(event.target.value);
      };


      let logged_user=null;
      React.useEffect(() => {
        if(localStorage.getItem("identify-logged-user")) {
          logged_user = JSON.parse(localStorage.getItem("identify-logged-user"));
         console.log(logged_user);
        }
      }, []);

      React.useEffect(() => {
        if(localStorage.getItem("identify-head-department")) {
          setDepartmentReg( JSON.parse(localStorage.getItem("identify-head-department")));
        }
      }, []); 


      const SearchStudents= (event) => {
        // useEffect(() => {
            if(searchValue!=0){
              Axios.post("http://localhost:3001/view_registered_teacher_for_course", {
                email: searchValue,
                headdepartment: departmentReg,
            }).then((response) => {
              console.log(response.data);
              console.log(" user ",logged_user);
              //  rows=response.data;
              console.log("searchValue ",searchValue.length);
              if(response.data.length>=0){
                setAdminData(response.data);
                setDepartmentReg(response.data[0].department);
                email_val = response.data[0].email;
                console.log(email_val);
              }else{
                window.alert("Can't find");
              }
            })
            }else{
              window.alert("please type some character on search filed");
            }
        //   }, [])

          event.preventDefault();
      }

      


        const phoneRegExp=/^[0-9]{8}/
        const initialValues = {
            fname: '',
            mname: '',
            lname: '',
            // gender: '',
            phoneNumber: '',
            email: '',
            // college: '',
        }
        const validationSchema = Yup.object().shape({
            fname: Yup.string().min(3, "It's too short"),
            mname: Yup.string().min(3, "It's too short"),
            lname: Yup.string().min(3, "It's too short"),
            email: Yup.string().email("Enter valid email"),
            // phoneNumber: Yup.number().typeError("Enter valid Phone number"),
            phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number"),
        })
        const onSubmit = (values, props) => {

          let fname_val=JSON.stringify(values.fname).replace(/['"]+/g, '');
          let mname_val=JSON.stringify(values.mname).replace(/['"]+/g, '');
          let lname_val=JSON.stringify(values.lname).replace(/['"]+/g, '');
          let email_val=JSON.stringify(values.email).replace(/['"]+/g, '');
          let phone_val=JSON.stringify(values.phoneNumber).replace(/['"]+/g, '');


          if(values.fname.length<3){
            fname_val = rows[0].first_name;
          }

          if(values.mname.length<3){
            mname_val = rows[0].middle_name;
          }
          if(values.lname.length<3){
            lname_val = rows[0].last_name;
          }
          if(values.email.length<3){
            email_val = rows[0].email;
          }
          if(values.email.length<8){
            phone_val = rows[0].phone_number;
          }


          var fromOne=selectedTimeFrom+"he";
          var fromTwo=fromOne.split(" ");
          console.log(fromTwo[4]);

          var toOne=selectedTimeTo+"he";
          var toTwo=toOne.split(" ");
          console.log(toTwo[4]);
          var fromHour=fromTwo[4].split(":");
          var toHour=toTwo[4].split(":");
          console.log("fromHour ",fromHour[0]);
          console.log("toHour ",toHour[0]);
          
            // alert(JSON.stringify(values.fname), null, 2)
            // props.resetForm()
            console.log("schoolId_val ",email_val);
            console.log("fromHour ",parseInt(fromHour[0]));
            
            
                if (batchReg.length !=0 && courseReg.length !=0 && dateReg.length !=0){
                  if(parseInt(fromHour[0])<=12 && parseInt(toHour[0])<=12 && parseInt(fromHour[0])>=2 && parseInt(toHour[0])>=2){
                    if(parseInt(fromHour[0]) === parseInt(toHour[0])){
                      if(parseInt(fromHour[1])+20 <= parseInt(toHour[1])){
                        console.log(parseInt(fromHour[1]) , parseInt(toHour[1])+20 );
                        updateFun();
                      }else{
                        window.alert("it must be 20' difference");
                      }
                    }if(parseInt(fromHour[0]) < parseInt(toHour[0])){
                      updateFun();
                    }if(parseInt(fromHour[0]) > parseInt(toHour[0])){ 
                      console.log("first value must be less than or equal to the second");
                      window.alert("first value must be less than or equal to the second");
                    }
                  }else{
                    // window.alert("Select AM in your time picker and select  b/n 2:00 - 12:00");
                  }
                }else{
                  window.alert("please fill all filed");
                }
              
                function updateFun(){
                  Axios.put("http://localhost:3001/update_teacher_courses", {
              
              email: email_val,
              department: departmentReg,
              courses: courseReg,
              timefrom: fromTwo[4],
              timeto:  toTwo[4],
              date: dateReg,
              batch: batchReg,
            }).then((response) => {
              console.log(response);
              if (response.data.message==="Successfully Updated!") {
                // setLoginStatus(response.data.message);
                alert(response.data.message);
                window.location.reload();
              }else{
                alert(response.data.message);
              }
            });
                }
        }

let course=[];

const sw = ["C++", "Introduction to Software Engineering", "Web Design", "Java", "Web Service", "Mobile Programming", "Research", "Entrepreneur"];
const is = ["Digital Logic", "Artificial Intelligence", "C++", "Introduction to Software Engineering", "Web Design", "Java", "Web Service", "Mobile Programming", "Research", "Entrepreneur"];

const cve = ["Mechanics", "Hydraulics", "Surveying ", "Solid Mechanics"];
const me = ["Manufacturing and Design", "Dynamics", "Thermodynamics ", "Engineering Design", "Fluid Mechanics"];

if(departmentReg==="Software Engineering"){
  course=sw;
}if(departmentReg==="Information Systems"){
  course=is;
}if(departmentReg==="Civil Engineering"){
  course=cve;
}
if(departmentReg==="Mechanical Engineering"){
  course=me;
}


        const classes = useStyles();

        return (
            // <Grid container component="main" className={classes.root}>
    <div className="box">
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper} >
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Assign Course
          </Typography>
          <form>
          <div className="searchBar">
                                <div className="searchField">
                                <TextField
                                    className={classes.margin}
                                    id="input-with-icon-textfield"
                                    label="use Email"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setSearchValue(e.target.value);
                                      }}
                                    required
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        <BiSearchAlt />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                                </div>


                                <div className="searchButton">
                                <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        className={classes.button}
                                        startIcon={<SearchIcon />}
                                        onClick={SearchStudents}
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
          </form>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form noValidate>
                                {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                        onChange={props.handleChange} /> */}

                            

    
                        <legend>ID Information:</legend>
                                <Field 
                                    as={TextField}
                                    disabled
                                    variant="outlined"
                                    margin="normal"
                                    name='fid' 
                                    id="fingerprint_id"
                                    label={"Fingerprint Id : " + rows[0].fingerprint_id}
                                    fullWidth
                                    // error={props.errors.fid && props.touched.fid}
                                    // helperText={<ErrorMessage name='fid' />} 
                                    required
                                    type="text"
                                    // onChange={(e) => {
                                    //   setFirstNameReg(e.target.value);
                                    // }}
                                     />
 


                      <legend>Personal Information:</legend>


                                <div className="personal">
                                <div className="fname">
                                <Field 
                                    as={TextField}
                                    disabled
                                    variant="outlined"  
                                    margin="normal"
                                    name='fname' 
                                    id="first_name"
                                    label={"First Name : " + rows[0].first_name}
                                    fullWidth
                                    error={props.errors.fname && props.touched.fname}
                                    helperText={<ErrorMessage name='fname' />} 
                                    required
                                    type="text"
                                    autoFocus
                                    // onChange={(e) => {
                                    //   setFirstNameReg(e.target.value);
                                    // }}
                                     />
                                </div>

                                <div className="mname">   
                                     <Field 
                                    as={TextField}
                                    disabled
                                    variant="outlined"
                                    margin="normal"
                                    name='mname' 
                                    id="middle_name"
                                    label={'Middle Name : ' + rows[0].middle_name}
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
                                    disabled
                                    variant="outlined"
                                    margin="normal"
                                    name='lname' 
                                    id="last_name"
                                    label={'Last Name : ' + rows[0].last_name}
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
    
                          
                                <hr/>
                        <legend>Contact Information:</legend>
                        <div className="personal">
                                <div className="email">
                                <Field 
                                    as={TextField}
                                    disabled
                                    variant="outlined"
                                    margin="normal"
                                    name='email' 
                                    label={'Email : ' + rows[0].email}
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
                                    disabled
                                    variant="outlined"
                                    margin="normal"
                                    id="phone"
                                    label={"Phone Number : " + rows[0].phone_number}
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

                                <Field 
                                      as={TextField}
                                      disabled
                                      variant="outlined"
                                      margin="normal"
                                      name='department' 
                                      id="department"
                                      label={"Department : " + rows[0].department} 
                                      fullWidth
                                      error={props.errors.sid && props.touched.sid}
                                      helperText={<ErrorMessage name='sid' />} 
                                      required
                                      type="text"
                                      autoFocus
                                      // onChange={(e) => {
                                      //   setFirstNameReg(e.target.value);
                                      // }}
                                      />

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
                                        Update
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
      </Grid>
      {adminData.map((val) => {
        rows=adminData;
        console.log("data ", rows[0].id);
      })}
      </div>
    // </Grid>
        )
    }
    
    export default RegisterStudentOnCourses;