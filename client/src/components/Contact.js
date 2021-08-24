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
                    image="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/185248931_345652840313794_5749689097252734586_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Rspr1FCt73EAX9HetL7&_nc_ht=scontent.fadd1-1.fna&oh=995ab1bbfa09c9fb5b6e7a7984da880a&oe=614A61DB"
                    title="Estifanos Aschale "
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Estifanos Aschale 
                    </Typography>
                    <Typography>
                    
                        
                    <a href="mailto:estifanosaschale12@gmail.com">estifanosaschale12@gmail.com</a>
                      
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
                    image="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/189355266_4049477301836745_2030669488391774574_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jOhYoZHQ96oAX-XUhX_&_nc_ht=scontent.fadd1-1.fna&oh=e970fff57e7461c25eef257c3fce830a&oe=6147E7D7"
                    title="Esayas Totoba"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Esayas Totoba
                    </Typography>
                    <Typography>
                    <a href="mailto:esayastotoba@gmail.com">esayastotoba@gmail.com</a>
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
                    image="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-1/s200x200/89621196_1443602922467898_1721260344904515584_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=f8IdX7MgsqUAX-D__9-&_nc_ht=scontent.fadd1-1.fna&oh=0f939e5bcee6f42fd1a0616757f0010e&oe=614A1C1A"
                    title="Nuh Asrar"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nuh Asrar
                    </Typography>
                    <Typography>
                      <a href="mailto:nuhasrar28@gmail.com">nuhasrar28@gmail.com</a>
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