import React, { useState, useEffect} from 'react';
import clsx from 'clsx';
import { DataGrid, GridToolbarContainer,
    GridToolbarExport,} from '@material-ui/data-grid';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import "../dean.css"
import { makeStyles , useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Notification from '../Notification'
import ConfirmDialog from '../ConfirmDialog'

var head_department = null;

const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: theme.spacing(1, 10),
    marginLeft: '1%',
    
    alignItems: 'center',
    width: "98%",    //  text fild width
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: '18%',
  },
  typo: {
    marginRight: '50%',
    marginBottom: '1%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

let names = [
];


const columns = [
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 130 },
  {
    field: 'fingerprint_id',
    headerName: 'Fingerprint Id',
    width: 170,
    type: 'number',
  },
  {
    field: 'first_name',
    headerName: 'First Name',
    width: 150,
  },
  {
    field: 'middle_name',
    headerName: 'Middle Name',
    width: 170,
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
    width: 150,
  },
  {
    field: 'batch',
    headerName: 'Batch',
    width: 120,
  },
  {
    field: 'course',
    headerName: 'Course',
    width: 250,
  },
  {
    field: 'date',
    headerName: 'Day',
    width: 150,
  },
  {
    field: 'full_time_info',
    headerName: 'Date Info',
    width: 250,
  },
];


let rows = [];
let colleges = [];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  

export default function TeacherAttendanceForDean() {
    const [studentList, setStudentList] = useState([]);
    const [personName, setPersonName] = React.useState([]);

    const [notify, setNotify] = useState({isOpen:false, message:'', type:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})

    const handleChange = (event) => {
      setPersonName(event.target.value);
    };

    useEffect(() => {


      if(localStorage.getItem("identify-dean-college")) {
        head_department = JSON.parse(localStorage.getItem("identify-dean-college"));
        // setDepartmentReg( JSON.parse(localStorage.getItem("identify-head-department")));
       console.log("head_department from teacher attendance "+head_department);
      }

        Axios.post("http://localhost:3001/teacher_attendance_for_dean",{
          headdepartment: head_department,
        }).then((response) => {
          if(response.data.length>0){
            setStudentList(response.data);
            
            for(var i=0;  i<response.data.length; i++){
              colleges=colleges.concat(response.data[i].college);
            }
          }else{

          }
          
          console.log(names);
          console.log(colleges);
        });
      }, [])

      const classes = useStyles();

  return (

    <div className="box">
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper} >
          
          <div className="whole">
            <div className="title_icon">
            <Avatar className={classes.avatar}>
            <ViewComfyRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.typo}>
            Teacher Attendance List
          </Typography>

            </div>
          </div>


    <div style={{ height: 430, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
            Toolbar: CustomToolbar,
          }}
      />
      {
        studentList.map((val) => {
          rows=studentList;
          console.log("data ",rows);
        })
      }
    </div>

    </div>
      </Grid>

      <Notification 
          notify={notify}
          setNotify={setNotify}
      />

      <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
      />

      </div>
  );
}