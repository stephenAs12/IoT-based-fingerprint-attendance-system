import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/common/copyright';

import "../App.css";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '150%',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(4),
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '130%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(5, 0, 6),
  },
}));

var userEmail=null;
export {userEmail};
var registrarCollege=null;
export {registrarCollege};
var headCollege=null;
export {headCollege};
var headDepartment=null;
export {headDepartment};

var logged_user_role=null;


export default function SignInSide() {

  const [email,  setEmail] = useState('');
  const [password,  setPassword] = useState('');

  // const [loginStatus, setLoginStatus] = useState("");

  React.useEffect(() => {
    localStorage.setItem("identify-logged-user-role", JSON.stringify(logged_user_role));
  });

  React.useEffect(() => {
    localStorage.setItem("identify-logged-user", JSON.stringify(null));
  });

  React.useEffect(() => {
    localStorage.setItem("identify-registrar-college", JSON.stringify(null));
});

React.useEffect(() => {
  localStorage.setItem("identify-head-department", JSON.stringify(null));
});

React.useEffect(() => {
  localStorage.setItem("identify-head-college", JSON.stringify(null));
});

React.useEffect(() => {
  localStorage.setItem("identify-dean-college", JSON.stringify(null));
});

React.useEffect(() => {
  localStorage.setItem("identify-teacher-course", JSON.stringify(null));
});

React.useEffect(() => {
localStorage.setItem("identify-teacher-department", JSON.stringify(null));
});

React.useEffect(() => {
localStorage.setItem("identify-teacher-college", JSON.stringify(null));
});

React.useEffect(() => {
localStorage.setItem("identify-teacher-batch", JSON.stringify(null));
});

React.useEffect(() => {
localStorage.setItem("identify-teacher-date", JSON.stringify(null));
});

  let status = "No";

 

  const history = useHistory();

  const Login = (event) => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
       console.log(response.data);
      
      if (response.data.message) {
        // setLoginStatus(response.data.message);
        alert(response.data.message);
      } else {
        userEmail=response.data[0].email;
        let path = null;
        console.log(response.data[0].role);
        if(response.data[0].role == "admin"){
          console.log("role: ",response.data[0].role);
          path =  'admin/index';
          logged_user_role=response.data[0].role;
          status="yes";


          Axios.put("http://localhost:3001/authorize_user", {
              
              
              email: response.data[0].email,
              password: response.data[0].password,
              role: response.data[0].role,
              status: "yes"
            }).then((response) => {
              console.log(response);
              if (response.data.message==="Successfully Updated!") {
                
              }else{
                
              }
            });


        }if(response.data[0].role === "head"){
          path =  'head/index';
          headCollege=response.data[0].college;
          console.log("headCollege from login page : "+headCollege);
          headDepartment=response.data[0].department;
          console.log("headDepartment from login page : "+headDepartment);

          logged_user_role=response.data[0].role;
          status="yes";


          Axios.put("http://localhost:3001/authorize_user", {
              
              
              email: response.data[0].email,
              password: response.data[0].password,
              role: response.data[0].role,
              status: "yes"
            }).then((response) => {
              console.log(response);
              if (response.data.message==="Successfully Updated!") {
                
              }else{
                
              }
            });

        } if(response.data[0].role == "registrar"){
          path = 'registrar/index';
          registrarCollege=response.data[0].college;
          console.log("from login page : "+registrarCollege);

          logged_user_role=response.data[0].role;
          status="yes";


          Axios.put("http://localhost:3001/authorize_user", {
              
              
              email: response.data[0].email,
              password: response.data[0].password,
              role: response.data[0].role,
              status: "yes"
            }).then((response) => {
              console.log(response);
              if (response.data.message==="Successfully Updated!") {
                
              }else{
                
              }
            });
        }

        if(response.data[0].role == "dean"){
          path = 'dean/index';
          registrarCollege=response.data[0].college;
          console.log("from login page : "+registrarCollege);

          logged_user_role=response.data[0].role;
          status="yes";


          Axios.put("http://localhost:3001/authorize_user", {
              
              
              email: response.data[0].email,
              password: response.data[0].password,
              role: response.data[0].role,
              status: "yes"
            }).then((response) => {
              console.log(response);
              if (response.data.message==="Successfully Updated!") {
                
              }else{
                
              }
            });
        }

        if(response.data[0].role == "teacher"){
          path = 'teacher/index';
          registrarCollege=response.data[0].college;
          console.log("from login page : "+registrarCollege);

          logged_user_role=response.data[0].role;
          status="yes";


          Axios.put("http://localhost:3001/authorize_user", {
              
              
              email: response.data[0].email,
              password: response.data[0].password,
              role: response.data[0].role,
              status: "yes"
            }).then((response) => {
              console.log(response);
              if (response.data.message==="Successfully Updated!") {
                
              }else{
                
              }
            });
        }

        history.push(path);
        // setLoginStatus(response.data[0].email);
      }

    });
   event.preventDefault();
  };

  
  React.useEffect(() => {
    localStorage.setItem("login-status", JSON.stringify(status));
  });
  console.log(status);


  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
     <div className="loginbox"> 
      <Grid item xs={8} sm={8} md={12} component={Paper} elevation={2} square >
        <div className={classes.paper} >
          <Bounce top>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          </Bounce>
          <Bounce top>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          </Bounce>
          <form method="POST" className={classes.form} >
          <Bounce top>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Bounce>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Bounce bottom>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={Login}
            >
              Sign in
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
              
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
            </Bounce>
          </form>
        </div>
      </Grid>
      </div>
    </Grid>
    
  );
}