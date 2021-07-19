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

    let registrar_college=null;


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      width: '1500px',
    },
    
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
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

    const CreateDeanAccount = () => {

      React.useEffect(() => {
        if(localStorage.getItem("identify-registrar-college")) {
          registrar_college = JSON.parse(localStorage.getItem("identify-registrar-college"));
         console.log("registrar_college "+registrar_college);
        }
      }, []);

      const[genderReg, setGenderReg] = useState('');
      const[departmentReg, setDepartmentReg] = useState('');
      const[batchReg, setBatchReg] = useState('');

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
            batch: '',
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
        const onSubmit = (values, props) => {

            // alert(JSON.stringify(values.fname), null, 2)
            // props.resetForm()
            Axios.post("http://localhost:3001/addStudent", {
              schooolid: JSON.stringify(values.sid).replace(/['"]+/g, ''),
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
              role: JSON.stringify("student").replace(/['"]+/g, ''),
              
            }).then((response) => {
              console.log(response);
            });
            // var someStr =  JSON.stringify(values.fname).replace(/['"]+/g, '');
            // console.log(someStr);
            console.log(genderReg);



            // Axios.post("http://localhost:3001/createUserFromDean", {
            //   firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
            //   middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
            //   email: JSON.stringify(values.email).replace(/['"]+/g, ''),
            //   password: JSON.stringify(values.password).replace(/['"]+/g, ''),
            //   role: JSON.stringify("dean").replace(/['"]+/g, ''),
              
            // }).then((response) => {
            //   console.log(response);
            // });
        }


        const classes = useStyles();

        return (
            <Grid container component="main" className={classes.root}>
      <CssBaseline />
    <div className="form_box">
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Registration
          </Typography>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form noValidate>
                                {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                        onChange={props.handleChange} /> */}
    
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

                            <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    name='fid' 
                                    id="fingerprint_id"
                                    label='Fingerprint Id' 
                                    fullWidth
                                    error={props.errors.fid && props.touched.fid}
                                    helperText={<ErrorMessage name='fid' />} 
                                    required
                                    type="text"
                                    autoFocus
                                    // onChange={(e) => {
                                    //   setFirstNameReg(e.target.value);
                                    // }}
                                     />

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

                                    <FormControl 
                              fullWidth variant="outlined" 
                              className={classes.formControl}
                              name="department"
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
                                        <MenuItem value={"Software Engineering"}>Software Engineering</MenuItem>
                                        <MenuItem value={"Information Technology"}>Information Technology</MenuItem>
                                        <MenuItem value={"Information System"}>Information System</MenuItem>
                                        <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                    

                                      </Select>
                                    </FormControl>

                                        

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
                                        <MenuItem value={"1"}>1 st</MenuItem>
                                        <MenuItem value={"2"}>2 nd</MenuItem>
                                        <MenuItem value={"3"}>3 rd</MenuItem>
                                        <MenuItem value={"4"}>4 th</MenuItem>
                    

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
    </Grid>
        )
    }
    
    export default CreateDeanAccount;