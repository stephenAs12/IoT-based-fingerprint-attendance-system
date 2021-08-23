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
import "../head.css"
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
    width: 150 },
  {
    field: 'school_id',
    headerName: 'School Id',
    width: 150,
  },
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
    width: 120,
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

  

export default function RegistrarListPage() {
    const [studentList, setStudentList] = useState([]);
    const [personName, setPersonName] = React.useState([]);

    const [notify, setNotify] = useState({isOpen:false, message:'', type:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})

    const handleChange = (event) => {
      setPersonName(event.target.value);
    };

    useEffect(() => {


      if(localStorage.getItem("identify-head-department")) {
        head_department = JSON.parse(localStorage.getItem("identify-head-department"));
        // setDepartmentReg( JSON.parse(localStorage.getItem("identify-head-department")));
       console.log("head_department from teacher attendance "+head_department);
      }


        Axios.post("http://localhost:3001/student_attendance",{
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
          Student Attendance List
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


















// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import Axios from 'axios';

// // function createData(college, first_name, phone_number, email) {
// //   return {college , first_name, phone_number, email };
// // }

// let rows = [];
// Axios.post("http://localhost:3001/student_attendance", {
// }).then((response) => {
//   rows=response.data;
// });
// let deleteThis=null;

//   const deleteRegistrar = (deleteCollege) => {
//     Axios.delete(`http://localhost:3001/registrar/delete/${deleteCollege}`);
//     console.log(deleteThis);
//     console.log("clicked")
//   };

  

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   { id: 'fingerprint_id', numeric: false, disablePadding: true, label: 'Fingerprint Id' },
//   { id: 'school_id', numeric: false, disablePadding: true, label: 'School Id' },
//   { id: 'first_name', numeric: false, disablePadding: true, label: 'Full Name' },
//   { id: 'batch', numeric: false, disablePadding: false, label: 'Batch' },
//   { id: 'course', numeric: false, disablePadding: false, label: 'Course' },
//   { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
//   { id: 'time', numeric: true, disablePadding: false, label: 'Time of arrived' },
//   { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
// ];

// function EnhancedTableHead(props) {
//   const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };
 
//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'select all desserts' }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
              
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),                      // title :college registrar 
//     paddingRight: theme.spacing(1),                 // icon :filter change 
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: '1 1 100%',
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//            Student Attendance List
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete" onClick={() => {deleteRegistrar(deleteThis)}}>
//           <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '98%',        // table width
//     paddingTop: "10px",
//     paddingRight: "1%",
//     paddingLeft: "1%",
//   },
//   paper: {
//     width: '100%',           // table width
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 400,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 20,
//     width: 1,
//   },
// }));

// export default function StudentAttendanceListPage() {


//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('time');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.time);
//       setSelected(newSelecteds);
//       deleteThis=newSelecteds;
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, time) => {
//     const selectedIndex = selected.indexOf(time);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, time);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//     deleteThis=newSelected;
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (time) => selected.indexOf(time) !== -1;

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//             <EnhancedTableHead
//               classes={classes}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.time);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.time)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.time}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ 'aria-labelledby': labelId }}
//                         />
//                       </TableCell>
//                       <TableCell align="center">{row.fingerprint_id}</TableCell>
//                       <TableCell align="left">{row.school_id}</TableCell>
//                       <TableCell align="left">{row.first_name + " " + row.middle_name + " " + row.last_name}</TableCell>
//                       <TableCell align="left">{row.batch + " year" }</TableCell>
//                       <TableCell align="left">{row.course}</TableCell>
//                       <TableCell align="right">{row.date}</TableCell>
//                       <TableCell align="center">{row.arrive_time}</TableCell>
//                       <TableCell align="right">{row.status}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//       {/* <button onClick={Login}>Check</button> */}
//     </div>
//   );
// }
