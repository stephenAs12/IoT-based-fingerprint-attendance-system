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
    
let rows = [{uuid: null, college: null, email: null, first_name: null, id: null, last_name: null, middle_name: null, password: null, phone_number: null, role: null, sex: null}];


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

    const UpdateMyAccount = () => {

      const[genderReg, setGenderReg] = useState('');
      // const[firstNameReg, setFirstNameReg] = useState('');
      const [adminData, setAdminData] = useState([]);
      let logged_user=null;
      React.useEffect(() => {
        if(localStorage.getItem("identify-logged-user")) {
          logged_user = JSON.parse(localStorage.getItem("identify-logged-user"));
         console.log(logged_user);
        }
      }, []);


      useEffect(() => {
        Axios.post("http://localhost:3001/view_head_info_in_head", {
          email: logged_user,
        }).then((response) => {
          console.log(response.data);
          console.log(" user ",logged_user);
          //  rows=response.data;
          setAdminData(response.data);
        })
      }, [])


        const phoneRegExp=/^[0-9]{8}/
        const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const initialValues = {
            fname: '',
            mname: '',
            lname: '',
            // gender: '',
            phoneNumber: '',
            email: '',
            // college: '',
            password: '',
            confirmPassword:'',
        }
        const validationSchema = Yup.object().shape({
            fname: Yup.string().min(3, "It's too short"),
            mname: Yup.string().min(3, "It's too short"),
            lname: Yup.string().min(3, "It's too short"),
            email: Yup.string().email("Enter valid email"),
            // phoneNumber: Yup.number().typeError("Enter valid Phone number"),
            phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number"),
            password: Yup.string().min(8, "Minimum characters should be 8")
            .matches(passwordRegExp,"Password must have one upper, lower case, number, special symbol"),
            confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches"),
        })
        const onSubmit = (values, props) => {

          let fname_val=JSON.stringify(values.fname).replace(/['"]+/g, '');
          let mname_val=JSON.stringify(values.mname).replace(/['"]+/g, '');
          let lname_val=JSON.stringify(values.lname).replace(/['"]+/g, '');
          let email_val=JSON.stringify(values.email).replace(/['"]+/g, '');
          let phone_val=JSON.stringify(values.phoneNumber).replace(/['"]+/g, '');
          let password_val= JSON.stringify(values.password).replace(/['"]+/g, '');

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

          if(values.password.length<3){
            password_val = rows[0].password;
          }
            
          
            // alert(JSON.stringify(values.fname), null, 2)
            // props.resetForm()
            Axios.put("http://localhost:3001/update_head_info_in_user", {
              uuid_val: rows[0].uuid,
              firstname: fname_val,
              middlename: mname_val,
              email: email_val,
              password: password_val,
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


            Axios.put("http://localhost:3001/update_head_info_in_head", {
              uuid_val: rows[0].uuid,
              firstname: fname_val,
              middlename: mname_val,
              lastname: lname_val,
              email: email_val,
              phone: phone_val,
              password: password_val,
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
            // var someStr =  JSON.stringify(values.fname).replace(/['"]+/g, '');
            // console.log(someStr);
            // console.log(genderReg);



            // Axios.post("http://localhost:3001/createUserFromRegistrar", {
            //   firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
            //   middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
            //   email: JSON.stringify(values.email).replace(/['"]+/g, ''),
            //   password: JSON.stringify(values.password).replace(/['"]+/g, ''),
            //   role: JSON.stringify("registrar").replace(/['"]+/g, ''),
            //   college: collegeReg,
              
            // }).then((response) => {
            //   console.log(response);
            // });
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
            Update Account
          </Typography>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form noValidate>
                                {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                        onChange={props.handleChange} /> */}
    
                    

                      <legend>Personal Information:</legend>


                                <div className="personal">
                                <div className="fname">
                                <Field 
                                    as={TextField}
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
                           
                                    <hr/>
                                    <legend>Password Information:</legend>
                                    <div className="personal">
                                <div className="password">
                                {/* <p>{rows[0].password} </p> */}
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
                                {/* <p>{rows[0].password} </p> */}
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
    
    export default UpdateMyAccount;






































// import React, { useState, useEffect } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import { Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Copyright from '../../common/copyright';
// import Sex from '../../common/genderComponent';
// import Role from '../../common/role';
// import Axios from 'axios';
// import "../../../App.css"
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'    
// import InputAdornment from '@material-ui/core/InputAdornment';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import Divider from '@material-ui/core/Divider';
    
// let rows = [{college: null, department: null, email: null, first_name: null, id: null, middle_name: null, password: null, role: null}];

// const useStyles = makeStyles((theme) => ({
//     root: {
//       height: '100vh',
//       width: "50%",
//       paddingLeft: '0%'
//     },
    
//     paper: {
//       margin: theme.spacing(1, 4),
      
//       alignItems: 'center',
//       width: "90%",    //  text fild width
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//       marginLeft: '48%',
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//     minDivision:{
//       border: '2px solid red'
//     },
//   }));

//     const UpdateMyAccount = () => {

//       const[genderReg, setGenderReg] = useState('');
//       // const[firstNameReg, setFirstNameReg] = useState('');
//       const [adminData, setAdminData] = useState([]);


//       useEffect(() => {
//         Axios.get("http://localhost:3001/view_admin_info").then((response) => {
//           console.log(response.data);
//           //  rows=response.data;
//           setAdminData(response.data);
          
//         });
//       }, [])


//         // const phoneRegExp=/^[0-9]{8}/
//         const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
//         const initialValues = {
//             fname: '',
//             mname: '',
//             // lname: '',
//             // gender: '',
//             // phoneNumber: '',
//             email: '',
//             // college: '',
//             password: '',
//             confirmPassword:'',
//         }
//         const validationSchema = Yup.object().shape({
//             fname: Yup.string().min(3, "It's too short"),
//             mname: Yup.string().min(3, "It's too short"),
//             // lname: Yup.string().min(3, "It's too short").required("Required"),
//             email: Yup.string().email("Enter valid email"),
//             // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
//             // phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number").required("Required"),
//             password: Yup.string().min(8, "Minimum characters should be 8")
//             .matches(passwordRegExp,"Password must have one upper, lower case, number, special symbol"),
//             confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches"),
//         })
//         const onSubmit = (values, props) => {

//           let fname_val=JSON.stringify(values.fname).replace(/['"]+/g, '');
//           let mname_val=JSON.stringify(values.mname).replace(/['"]+/g, '');
//           let email_val=JSON.stringify(values.email).replace(/['"]+/g, '');
//           let password_val= JSON.stringify(values.password).replace(/['"]+/g, '');

//           if(values.fname.length<3){
//             fname_val = rows[0].first_name;
//           }

//           if(values.mname.length<3){
//             mname_val = rows[0].middle_name;
//           }
//           if(values.email.length<3){
//             email_val = rows[0].email;
//           }

//           if(values.password.length<3){
//             password_val = rows[0].password;
//           }
            
          
//             // alert(JSON.stringify(values.fname), null, 2)
//             // props.resetForm()
//             Axios.put("http://localhost:3001/update_admin_info", {
              
//               firstname: fname_val,
//               middlename: mname_val,
//               email: email_val,
//               password: password_val,
//             }).then((response) => {
//               console.log(response);
//               if (response.data.message==="Successfully Updated!") {
//                 // setLoginStatus(response.data.message);
//                 alert(response.data.message);
//                 window.location.reload();
//               }else{
//                 alert(response.data.message);
//               }
//             });
//             // var someStr =  JSON.stringify(values.fname).replace(/['"]+/g, '');
//             // console.log(someStr);
//             // console.log(genderReg);



//             // Axios.post("http://localhost:3001/createUserFromRegistrar", {
//             //   firstname: JSON.stringify(values.fname).replace(/['"]+/g, ''),
//             //   middlename: JSON.stringify(values.mname).replace(/['"]+/g, ''),
//             //   email: JSON.stringify(values.email).replace(/['"]+/g, ''),
//             //   password: JSON.stringify(values.password).replace(/['"]+/g, ''),
//             //   role: JSON.stringify("registrar").replace(/['"]+/g, ''),
//             //   college: collegeReg,
              
//             // }).then((response) => {
//             //   console.log(response);
//             // });
//         }


//         const classes = useStyles();

//         return (
//             // <Grid container component="main" className={classes.root}>
//     <div className="box">
//       <Grid item component={Paper} elevation={6} square>
//         <div className={classes.paper} >
//           <Avatar className={classes.avatar}>
//             <PersonAddIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Update My Account
//           </Typography>
//                     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//                         {(props) => (
//                             <Form noValidate>
//                                 {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
//                         onChange={props.handleChange} /> */}
    
                    

//                       <legend>Personal Information:</legend>


//                                 <div className="personal">
//                                 <div className="update_admin_fname">
//                                 <Field 
//                                     as={TextField}
//                                     variant="outlined"  
//                                     margin="normal"
//                                     name='fname' 
//                                     id="first_name"
//                                     label={"First Name : " + rows[0].first_name}
//                                     fullWidth
//                                     error={props.errors.fname && props.touched.fname}
//                                     helperText={<ErrorMessage name='fname' />} 
//                                     required
//                                     type="text"
//                                     autoFocus
//                                     // onChange={(e) => {
//                                     //   setFirstNameReg(e.target.value);
//                                     // }}
//                                      />
//                                 </div>

//                                 <div className="update_admin_mname">   
//                                      <Field 
//                                     as={TextField}
//                                     variant="outlined"
//                                     margin="normal"
//                                     name='mname' 
//                                     id="middle_name"
//                                     label={'Middle Name : ' + rows[0].middle_name}
//                                     fullWidth
//                                     error={props.errors.mname && props.touched.mname}
//                                     helperText={<ErrorMessage name='mname' />} 
//                                     required
//                                     type="text"
                                    
//                                     // onChange={(e) => {
//                                     //   setMiddleNameReg(e.target.value);
//                                     // }}
//                                      />
//                                 </div>
//                                 </div>
    
                          
//                         <hr/>
//                         <legend>Contact Information:</legend>
//                                 <Field 
//                                     as={TextField}
//                                     variant="outlined"
//                                     margin="normal"
//                                     name='email' 
//                                     label={'Email : ' + rows[0].email}
//                                     fullWidth
//                                     error={props.errors.email && props.touched.email}
//                                     helperText={<ErrorMessage name='email' />} 
//                                     required 
//                                     // onChange={(e) => {
//                                     //   setEmailReg(e.target.value);
//                                     // }}
//                                 />
                           
//                                     <hr/>
//                                     <legend>Password Information:</legend>
//                                     <div className="personal">
//                                 <div className="password">
//                                 {/* <p>{rows[0].password} </p> */}
//                                 <Field 
//                                     as={TextField} 
//                                     variant="outlined"
//                                     margin="normal"
//                                     name='password' 
//                                     label={'Password : ' + rows[0].password}
//                                     type='password' 
//                                     fullWidth
//                                     error={props.errors.password && props.touched.password}
//                                     helperText={<ErrorMessage name='password' />} 
//                                     required 
//                                     // onChange={(e) => {
//                                     //   setPasswordReg(e.target.value);
//                                     // }}
//                                 />
//                                 </div>
    
//                                 <div className="confirmpassword">
//                                 {/* <p>{rows[0].password} </p> */}
//                                 <Field 
//                                     as={TextField} 
//                                     variant="outlined"
//                                     margin="normal"
//                                     name='confirmPassword' 
//                                     label={'Confirm Password : ' + rows[0].password}
//                                     type='password' 
//                                     fullWidth
//                                     error={props.errors.confirmPassword && props.touched.confirmPassword}
//                                     helperText={<ErrorMessage name='confirmPassword' />}
//                                     required 
//                                     // onChange={(e) => {
//                                     //   setPasswordReg(e.target.value);
//                                     // }}
//                                 />
//                                 </div>

//                               </div>
    
//                                 <Button 
//                                     type='submit' 
//                                     fullWidth
//                                     variant='contained'
//                                     color='primary'
//                                     className={classes.submit}
//                                     // onClick={register}
//                                     >
//                                         Update
//                                 </Button>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//       </Grid>
//       {adminData.map((val) => {
//         rows=adminData;
//         console.log("data ", rows[0].id);
//       })}
//       </div>
//     // </Grid>
//         )
//     }
    
//     export default UpdateMyAccount;