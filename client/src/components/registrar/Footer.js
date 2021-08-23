import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Language from '@material-ui/icons/Language';
import Facebook from '@material-ui/icons/Facebook';
import YouTube from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Telegram from '@material-ui/icons/Telegram';
import IconButton from '@material-ui/core/IconButton';
import Copyright from '../common/copyright';
import "./registrar.css";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        height: "118px",
    },
  }));

  export default function FooterPage() {
    const classes = useStyles();
  
    return (
      <footer>
          <div className={classes.root}>
          <Paper className={classes.paper}>
              <Grid container spacing={0}>
                  <Grid item xs={6} className="resource">
                      {/* <p className="mainText">RESOURCE</p>  */}
                      <div className="anchor">
                      <strong>RESOURCE</strong>
                          <Link to="/about" target="content">
                              <i  className="about"> About</i>
                          </Link>
                          <Link to="/contact"  target="content" >
                             <i  className="contact"> Contact</i>
                          </Link>
                      </div>
                  </Grid>
                  <Grid item xs={6} className="social">
                      <div className="anchor">
                      <strong>STAY CONNECTED</strong>
                      <div className="iconLink">
                         
                         <IconButton href="https://www.wku.edu.et/index.php/en/" target="content">
                             <Language >
                             </Language>
                         </IconButton>
                         <IconButton href="https://www.facebook.com/Wolkite-University-1686935588230920/" target="content">
                             <Facebook  className="facebook"  />
                         </IconButton>
                         <IconButton href="https://www.youtube.com/channel/UCJo63Hv71UAZTe6oPKFR9ow" target="content">
                             <YouTube  className="youtube"/>
                         </IconButton>
                         <IconButton href="https://twitter.com/wolkitevniversi?lang=en" target="content">
                             <Twitter  className="twitter"/>
                         </IconButton>
                         <IconButton  href="https://www.linkedin.com/company/wolkite-university/" target="content">
                             <LinkedIn  className="linkedin"/>
                         </IconButton>
                         <IconButton  href="https://t.me/wkusu" target="content">
                             <Telegram  className="telegram"/>
                         </IconButton>
                         </div>
                      </div>
                  
                          
                  </Grid>
                  <Grid item xs={12} className="copy">
                      <Copyright></Copyright>
                  </Grid>
              </Grid>
          </Paper>
          </div>
      </footer>
    );
  }