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
import "../../../App.css"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'    
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Notification from '../Notification'
import { uuid } from 'uuidv4';

    let registrar_college=null;


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

    const CreateHeadAccount = () => {

      React.useEffect(() => {
        if(localStorage.getItem("identify-registrar-college")) {
          registrar_college = JSON.parse(localStorage.getItem("identify-registrar-college"));
         console.log("registrar_college "+registrar_college);
        }
      }, []);

      const[genderReg, setGenderReg] = useState('');
      const[departmentReg, setDepartmentReg] = useState('');
      const [notify, setNotify] = useState({isOpen:false, message:'', type:''})

        const phoneRegExp=/^[0-9]{8}/
        const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const initialValues = {
            fname: '',
            mname: '',
            lname: '',
            gender: '',
            phoneNumber: '',
            email: '',
            college: '',
            department: '',
            password: '',
            confirmPassword:'',
        }
        const validationSchema = Yup.object().shape({
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
        var uuid_val = uuid();
        const onSubmit = (values, props) => {

            // alert(JSON.stringify(values.fname), null, 2)
            // props.resetForm()
            Axios.post("http://localhost:3001/createHead", {
              specialid: uuid_val,
              firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
              middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
              lastname: JSON.stringify(values.lname).replace(/['"]+/g, ''),
              gender: genderReg,
              email: JSON.stringify(values.email).replace(/['"]+/g, ''),
              phonenumber: JSON.stringify(values.phoneNumber).replace(/['"]+/g, ''),
              college: registrar_college,
              department: departmentReg,
              password: JSON.stringify(values.password).replace(/['"]+/g, ''),
              role: JSON.stringify("head").replace(/['"]+/g, ''),
              
            }).then((response) => {
              console.log(response);
            });
            // var someStr =  JSON.stringify(values.fname).replace(/['"]+/g, '');
            // console.log(someStr);
            console.log(genderReg);



            Axios.post("http://localhost:3001/createUserFromHead", {
              specialid: uuid_val,
              firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
              middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
              email: JSON.stringify(values.email).replace(/['"]+/g, ''),
              password: JSON.stringify(values.password).replace(/['"]+/g, ''),
              role: JSON.stringify("head").replace(/['"]+/g, ''),
              college: registrar_college,
              department: departmentReg,
              
            }).then((response) => {
              console.log(response);
            });
            setNotify({
              isOpen: true,
              message: 'Successfully',
              type: 'success' 
          })
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

        const classes = useStyles();

        return (
            // <Grid container component="main" className={classes.root}>
      // <CssBaseline />
    <div className="box">
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Department Head
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
                                    autoFocus
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
      <Notification 
          notify={notify}
          setNotify={setNotify}
      />
      </div>
        )
      }
    
      
    
    
    export default CreateHeadAccount;