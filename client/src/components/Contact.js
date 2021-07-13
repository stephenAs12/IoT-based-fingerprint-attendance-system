import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     
    
      <main>
     
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/185248931_345652840313794_5749689097252734586_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nUT-0dxfZr8AX81fx6o&_nc_ht=scontent.fadd1-1.fna&oh=9d967aeaee43b9a12f9e4866b2a2e271&oe=60EB75DB"
                    title="Image title"
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Estifanos Aschale 
                    </Typography>
                    <Typography>
                        
                    <a href="https://estifanosaschale12@gmail.com/">estifanosaschale12@gmail.com</a>
                      
                    </Typography>
                    <Typography>
                      +251918819955
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/189355266_4049477301836745_2030669488391774574_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=aPopxin55pwAX99VSiL&_nc_ht=scontent.fadd1-1.fna&oh=b8b435603e12a481ee59a76a7c810a21&oe=60ECF057"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Esayas Totoba
                    </Typography>
                    <Typography>
                    esayastotoba@gmail.com
                    </Typography>
                    <Typography>
                    +251 924382406
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/89621196_1443602922467898_1721260344904515584_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-jvokO8Nei4AX-fv0Ig&_nc_ht=scontent.fadd1-1.fna&oh=4bd15b70884e5498bee9164198df4b7e&oe=60EB8F00"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nuh Asrar
                    </Typography>
                    <Typography>
                      nuhasrar28@gmail.com
                    </Typography>
                    <Typography>
                      +251 928675040
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
           
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      
    </React.Fragment>
  );
}