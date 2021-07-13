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
import Sex from './common/genderComponent';
import Role from './common/role';
import Axios from 'axios';
import "../App.css"



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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

export default function SignupSide() {

  const [firstNameReg,  setFirstNameReg] = useState('')
  const [middleNameReg,  setMiddleNameReg] = useState('')
  const [lastNameReg,  setLastNameReg] = useState('')
  const [phoneReg,  setPhoneReg] = useState('')
  const [emailReg,  setEmailReg] = useState('')
  const [passwordReg,  setPasswordReg] = useState('')

  const register = (event) => {
    Axios.post("http://localhost:3001/registration", {
      firstname: firstNameReg,
      middlename: middleNameReg,
      lastname: lastNameReg,
      phonenumber: phoneReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
   event.preventDefault();
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
    <div className="box">
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form  className={classes.form} >
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
              id="last_name"
              label="Last Name"
              name="last_name"
              type="text"
              onChange={(e) => {
                setLastNameReg(e.target.value);
              }}
            />



<TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              type="number"
              onChange={(e) => {
                setPhoneReg(e.target.value);
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

            <div className="sr">
              <Role></Role>
              <Sex></Sex>
            </div>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={register}
            >
              Sign Up
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
              <Link to="/" variant="body2">
                  <p>Do you have an account? Sign In</p>
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      </div>
    </Grid>
  );
}