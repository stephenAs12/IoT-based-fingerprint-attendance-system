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
import Axios from 'axios';
import "../../../App.css"

let userEmail=null;
let set_fname=null;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '1500px',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

export default function UpdateMyAccount() {


    const [firstNameReg,  setFirstNameReg] = useState('')
    const [middleNameReg,  setMiddleNameReg] = useState('')
    const [lastNameReg,  setLastNameReg] = useState('')
    const [phoneReg,  setPhoneReg] = useState('')
    const [emailReg,  setEmailReg] = useState('')
    const [passwordReg,  setPasswordReg] = useState('')
  

    React.useEffect(() => {
        if(localStorage.getItem("identify-logged-user")) {
        userEmail = JSON.parse(localStorage.getItem("identify-logged-user"));
        console.log("user email "+userEmail);
        }
      }, []);

      const view = (event) => {
      Axios.post("http://localhost:3001/view_profile", {
      email: userEmail,
    }).then((response) => {
       console.log(response.data);
       set_fname=response.data[0].first_name;
      
      if (response.data.message) {
        alert(response.data.message);
      } else {
        console.log("email : " + userEmail);
      }
    });
    event.preventDefault();
};



//   const register = (event) => {
//     Axios.post("http://localhost:3001/registration", {
//       firstname: firstNameReg,
//       middlename: middleNameReg,
//       lastname: lastNameReg,
//       phonenumber: phoneReg,
//       email: emailReg,
//       password: passwordReg,
//     }).then((response) => {
//       console.log(response);
//     });
//    event.preventDefault();
//   };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
    <div className="form_box">
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Registrar Account
          </Typography>
          <form  className={classes.form} >
              <label>{set_fname}</label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="First Name"
              name="first_name"
              type="text"
              autoFocus
              onChange={(e) => {
                setFirstNameReg(e.target.value);
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="middle_name"
              label="Middle Name"
              name="middle_name"
              type="text"
              onChange={(e) => {
                setMiddleNameReg(e.target.value);
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
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
                setPasswordReg(e.target.value);
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}



      <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={view}
            >
              view
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            //   onClick={register}
            >
              Update
            </Button>
          </form>
        </div>
      </Grid>
      </div>
    </Grid>
  );
}


