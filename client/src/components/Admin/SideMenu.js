import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import {SidebarData1} from './SidebarData';
import {SidebarData2} from './SidebarData';
import {SidebarData3} from './SidebarData';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {userEmail} from '../login';
import CustomizedDialogs from '../dialog';
import "./admin.css";


const drawerWidth = 240;




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#092139',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,

  },
  hide: {
    display: 'none',
  },
  drawer: {
    
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  
  drawerOpen: {
  
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    
    flexGrow: 1,
    padding: theme.spacing(0),

  },
  search: {
    position: 'absolute',
    
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft:950,
    width: '100%',
   
  },


 
 
  inputRoot: {
    color: 'inherit',
  },
 
  logo_design: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  wku: {
    paddingLeft: "20px",
  } ,
  if1: {
      width: "100%",
      height: "70vh",
      border: "none"
  }
}));


const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {

      
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',

      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(0),
    },
  }))(MuiAccordionDetails);


export default function SideMenu() {
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    if(localStorage.getItem("identify-logged-user")) {
     const user = JSON.parse(localStorage.getItem("identify-logged-user"));
     console.log(user);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("identify-logged-user", JSON.stringify(userEmail));
  });

  // var Transferuser=user;
  // console.log("Transferuser"+Transferuser);




  
  return (
    <div className={classes.root}>
    
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
          
            <MenuIcon />
          </IconButton>
          <Avatar 
            alt="WKU logo" 
            src="data:image/jpeg;base64,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" 
            className={classes.large} 
           
            />
        <Typography variant="h6" className={classes.wku} >
            FAS for WKU
          </Typography>

          <div className={classes.search}>
            
            <p>{userEmail}</p>
            
          </div>
          
        </Toolbar>
      </AppBar>
     
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        
        <Divider />
            <List >
                
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
                <Typography >My Own</Typography>
                
                </AccordionSummary>
                <AccordionDetails> <div>
                {SidebarData1.map((val,key) => {
                    return (
                        <ListItem
                            key={key}
                            className="row"
                            >
                            
                            <Link to={val.link} variant="body2" target="content"  className="row">
                                <ListItemIcon className="icon"> {val.icon}</ListItemIcon>
                                <ListItemText className="title">{val.title}</ListItemText>
                          </Link>
                        </ListItem>
                    )
                })}</div>
                </AccordionDetails>
            </Accordion>
                
                
            <Divider />
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Registrar</Typography>
                </AccordionSummary>
                <AccordionDetails> <div>
            {SidebarData2.map((val,key) => {
                    return (
                        <ListItem
                            key={key}
                            className="row"
                            >
                            <Link to={val.link} variant="body2" target="content"  className="row">
                                <ListItemIcon className="icon"> {val.icon}</ListItemIcon>
                                <ListItemText className="title">{val.title}</ListItemText>
                          </Link>
                        </ListItem>
                    )
                })}</div>
                </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Other</Typography>
                </AccordionSummary>
                <AccordionDetails> <div>
            {SidebarData3.map((val,key) => {
                    return (
                        <ListItem
                            key={key}
                            className="row"
                            >
                            <Link to={val.link} variant="body2" className="row">
                                <ListItemIcon className="icon"> {val.icon}</ListItemIcon>
                                <ListItemText className="title">{val.title}</ListItemText>
                          </Link>
                        </ListItem>
                    )
                })}</div>
                </AccordionDetails>
            </Accordion>
            </List>        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <iframe title="iframe" name="content" className={classes.if1} id="content" src="/images/111.png" >
       
        </iframe>
        
        
        
      </main>
    </div>
    
  );
}
