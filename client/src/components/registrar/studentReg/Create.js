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


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


    let registrar_college=null;


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

    const AddStudent = () => {

      React.useEffect(() => {
        if(localStorage.getItem("identify-registrar-college")) {
          registrar_college = JSON.parse(localStorage.getItem("identify-registrar-college"));
         console.log("registrar_college "+registrar_college);
        }
      }, []);

      const[genderReg, setGenderReg] = useState('');
      const[departmentReg, setDepartmentReg] = useState('');
      const[batchReg, setBatchReg] = useState('');
      const [state, setState] = React.useState({
        checkedG: true,
      });
      const [courseReg, setCourseReg] = React.useState([]);

      var holdCourse=courseReg;

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setCourseReg(event.target.value);
      };
      
      
        const phoneRegExp=/^[0-9]{8}/
        const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const initialValues = {
            sid: '',
            fid: '',  
             fname: '',
            mname: '',
            lname: '',
            gender: '',
            phoneNumber: '',
            email: '',
            college: '',
            department: '',
            batch: '',
            course: '',
        }
        const validationSchema = Yup.object().shape({
            sid: Yup.string().min(3, "It's too short").required("Required"),
            // fid: Yup.string().min(3, "It's too short").required("Required"),
            fname: Yup.string().min(3, "It's too short").required("Required"),
            mname: Yup.string().min(3, "It's too short").required("Required"),
            lname: Yup.string().min(3, "It's too short").required("Required"),
            email: Yup.string().email("Enter valid email").required("Required"),
            // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
            phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number").required("Required"),
        })
        const onSubmit = (values, props) => {

            // alert(JSON.stringify(values.fname), null, 2)
            // props.resetForm()
            Axios.post("http://localhost:3001/addStudent", {
              schoolid: JSON.stringify(values.sid).replace(/['"]+/g, ''),
              fingerprintid: JSON.stringify(values.fid).replace(/['"]+/g, ''),
              firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
              middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
              lastname: JSON.stringify(values.lname).replace(/['"]+/g, ''),
              gender: genderReg,
              email: JSON.stringify(values.email).replace(/['"]+/g, ''),
              phonenumber: JSON.stringify(values.phoneNumber).replace(/['"]+/g, ''),
              college: registrar_college,
              department: departmentReg,
              batch: batchReg,
              course: courseReg.join(),
              role: JSON.stringify("student").replace(/['"]+/g, ''),
              
            }).then((response) => {
              console.log(response);
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
  
    if(registrar_college==="Computing and Informatics"){
      data=Computing_and_Informatics;
  }if(registrar_college==="Engineering and Technology"){
      data=Engineering_and_Technology;
  }
  if(registrar_college==="Medicine and Health Sciences"){
    data=Medicine_and_Health_Sciences;
}if(registrar_college==="Natural and Computational Sciences"){
  data=Natural_and_Computational_Sciences;
}if(registrar_college==="Social Science and Humanities"){
  data=Social_Science_and_Humanities;
}if(registrar_college==="Business and Economics"){
  data=Business_and_Economics;
}if(registrar_college==="Agriculture Science"){
  data=Agriculture_Science;
}

let course=[];

const sw = ["C++", "Introduction to Software Engineering", "Web Design", "Java", "Web Service", "Mobile Programming", "Research", "Entrepreneur"];
const is = ["Digital Logic", "Artificial Intelligence", "C++", "Introduction to Software Engineering", "Web Design", "Java", "Web Service", "Mobile Programming", "Research", "Entrepreneur"];

if(departmentReg==="Software Engineering"){
  course=sw;
}if(departmentReg==="Information Systems"){
  course=is;
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
            Register Student
          </Typography>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form noValidate>
                                {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                        onChange={props.handleChange} /> */}
    
                            <legend>ID Information:</legend>
                           <div className="idinfo">
                              <div className="sid">
                                    <Field 
                                      as={TextField}
                                      variant="outlined"
                                      margin="normal"
                                      name='sid' 
                                      id="school_id"
                                      label='School Id' 
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
                                <legend>Academic Information:</legend>
                           <div className="acinfo">
                                  <div className="dept">
                                      <FormControl 
                                          fullWidth variant="outlined" 
                                          className={classes.formControl}
                                          name="college"
                                          required
                                          >
                                                  <InputLabel id="demo-simple-select-outlined-label">Department of</InputLabel>
                                                  <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    required
                                                    label="Department of"
                                                    onChange={(e) => {
                                                      setDepartmentReg(e.target.value);
                                                    }}
                                                    
                                                  >
                                                    <MenuItem value="">
                                                      <em>None</em>
                                                    </MenuItem>
                                                    
                                                    {data.map(number => (
                                                        <MenuItem value={number}>
                                                              {number}
                                                          </MenuItem>
                                                        ))}
                                

                                                  </Select>
                                                </FormControl>
                                        </div>
                                        <p></p>

                                   <div className="batch">     
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
                                  

                                                    </Select>
                                                  </FormControl>
                                              </div>
                                    </div>                                            
                                          <p></p>

                                    <FormControl
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
                                      
                                    </FormControl>
                                    

                               

 
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
    
    export default AddStudent;