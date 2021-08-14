

// import ReactFlexyTable from 'react-flexy-table'
// import 'react-flexy-table/dist/index.css'

// const App = () => {
//   return <ReactFlexyTable data={data} />
// }

// export default App


// import React, { useState } from 'react';
// // import './App.css';
// import MaterialTable from 'material-table'
// import GetAppIcon from '@material-ui/icons/GetApp';
// import AddIcon from '@material-ui/icons/Add';

// function App() {
//   const [tableData, setTableData] = useState([
//     { name: "Raj", email: "Raj@gmail.com", phone: 7894561230, age: null, gender: "M", city: "Chennai", fee: 78456 },
//     { name: "Mohan", email: "mohan@gmail.com", phone: 7845621590, age: 35, gender: "M", city: "Delhi", fee: 456125 },
//     { name: "Sweety", email: "sweety@gmail.com", phone: 741852912, age: 17, gender: "F", city: "Noida", fee: 458796 },
//     { name: "Vikas", email: "vikas@gmail.com", phone: 9876543210, age: 20, gender: "M", city: "Mumbai", fee: 874569 },
//     { name: "Neha", email: "neha@gmail.com", phone: 7845621301, age: 25, gender: "F", city: "Patna", fee: 748521 },
//     { name: "Mohan", email: "mohan@gmail.com", phone: 7845621590, age: 35, gender: "M", city: "Delhi", fee: 456125 },
//     { name: "Sweety", email: "sweety@gmail.com", phone: 741852912, age: 17, gender: "F", city: "Noida", fee: 458796 },
//     { name: "Vikas", email: "vikas@gmail.com", phone: 9876543210, age: 20, gender: "M", city: "Mumbai", fee: 874569 },
//     { name: "Raj", email: "Raj@gmail.com", phone: 7894561230, age: null, gender: "M", city: "Chennai", fee: 78456 },
//     { name: "Mohan", email: "mohan@gmail.com", phone: 7845621590, age: 35, gender: "M", city: "Delhi", fee: 456125 },
//     { name: "Sweety", email: "sweety@gmail.com", phone: 741852912, age: 17, gender: "F", city: "Noida", fee: 458796 },
//     { name: "Vikas", email: "vikas@gmail.com", phone: 9876543210, age: 20, gender: "M", city: "Mumbai", fee: 874569 },
//   ])
//   const columns = [
//     { title: "Name", field: "name", sorting: false, filtering: false, cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
//     { title: "Email", field: "email", filterPlaceholder: "filter" },
//     { title: "Phone Number", field: "phone", align: "center", grouping: false },
//     {
//       title: "Age", field: "age", emptyValue: () => <em>null</em>,
//       render: (rowData) => <div style={{ background: rowData.age >= 18 ? "#008000aa" : "#f90000aa",borderRadius:"4px",paddingLeft:5 }}>{rowData.age >= 18 ? "18+" : "18-"}</div>,
//        searchable: false, export: false
//     },
//     { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" } },
//     { title: "City", field: "city",filterPlaceholder:"filter" },
//     { title: "School Fee", field: "fee", type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
//     cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
//   ]
//   return (
//     <div className="App">
//       <h1 align="center">React-App</h1>
//       <h4 align='center'>Crash Course on Material Table </h4>

//       <MaterialTable columns={columns} data={tableData}
//         editable={{
//           onRowAdd: (newRow) => new Promise((resolve, reject) => {
//             setTableData([...tableData, newRow])

//             setTimeout(() => resolve(), 500)
//           }),
//           onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
//             const updatedData = [...tableData]
//             updatedData[oldRow.tableData.id] = newRow
//             setTableData(updatedData)
//             setTimeout(() => resolve(), 500)
//           }),
//           onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
//             const updatedData = [...tableData]
//             updatedData.splice(selectedRow.tableData.id, 1)
//             setTableData(updatedData)
//             setTimeout(() => resolve(), 1000)

//           })
//         }}
//         actions={[
//           {
//             icon: () => <GetAppIcon />,
//             tooltip: "Click me",
//             onClick: (e, data) => console.log(data),
//             // isFreeAction:true
//           }
//         ]}
//         onSelectionChange={(selectedRows) => console.log(selectedRows)}
//         options={{
//           sorting: true, search: true,
//           searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
//           filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
//           paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
//           exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
//           showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
//             disabled: rowData.age == null,
//             // color:"primary"
//           }),
//           grouping: true, columnsButton: true,
//           rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
//           headerStyle: { background: "#f44336",color:"#fff"}
//         }}
//         title="Student Information"
//         icons={{ Add: () => <AddIcon /> }} />
//         <h2>hh</h2>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect} from 'react';
import { DataGrid, GridToolbarContainer,
    GridToolbarExport,} from '@material-ui/data-grid';
import Axios from 'axios';

const columns = [
  { field: 'college', headerName: 'College Name', width: 200 },
  {
    field: 'first_name',
    headerName: 'Full name',
    width: 150,
    // editable: true,
  },
  {
    field: 'phone_number',
    headerName: 'Phone Number',
    width: 150,
    // editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    // type: 'number',
    width: 110,
    // editable: true,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
];

let rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
const handleSelectAllClick = (event) => {
    if (event.target.checked) {
    //   const newSelecteds = rows.map((n) => n.college);
    //   setSelected(newSelecteds);
    //   deleteThis=newSelecteds;
    console.log("clicked");
    //   return;
    }
    // setSelected([]);
  };

export default function DataGridDemo() {
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/registrar").then((response) => {
          console.log(response.data);
          //  rows=response.data;
          setStudentList(response.data);
          
        });
      }, [])
  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
            Toolbar: CustomToolbar,
          }}
        // checkboxSelection
        // onChange={handleSelectAllClick}
        // disableSelectionOnClick
      />
      {studentList.map((val) => {
        rows=studentList;
        console.log("data ",rows);
      })}
    </div>
  );
}


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import IconButton from '@material-ui/core/IconButton';
// import TextField from '@material-ui/core/TextField';
// import {
//   DataGrid,
//   GridToolbarDensitySelector,
//   GridToolbarFilterButton,
// } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';
// import ClearIcon from '@material-ui/icons/Clear';
// import SearchIcon from '@material-ui/icons/Search';
// import { createTheme } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/styles';

// function escapeRegExp(value) {
//   return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// }

// const defaultTheme = createTheme();
// const useStyles = makeStyles(
//   (theme) => ({
//     root: {
//       padding: theme.spacing(0.5, 0.5, 0),
//       justifyContent: 'space-between',
//       display: 'flex',
//       alignItems: 'flex-start',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       [theme.breakpoints.down('xs')]: {
//         width: '100%',
//       },
//       margin: theme.spacing(1, 0.5, 1.5),
//       '& .MuiSvgIcon-root': {
//         marginRight: theme.spacing(0.5),
//       },
//       '& .MuiInput-underline:before': {
//         borderBottom: `1px solid ${theme.palette.divider}`,
//       },
//     },
//   }),
//   { defaultTheme },
// );

// function QuickSearchToolbar(props) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <div>
//         <GridToolbarFilterButton />
//         <GridToolbarDensitySelector />
//       </div>
//       <TextField
//         variant="standard"
//         value={props.value}
//         onChange={props.onChange}
//         placeholder="Search…"
//         className={classes.textField}
//         InputProps={{
//           startAdornment: <SearchIcon fontSize="small" />,
//           endAdornment: (
//             <IconButton
//               title="Clear"
//               aria-label="Clear"
//               size="small"
//               style={{ visibility: props.value ? 'visible' : 'hidden' }}
//               onClick={props.clearSearch}
//             >
//               <ClearIcon fontSize="small" />
//             </IconButton>
//           ),
//         }}
//       />
//     </div>
//   );
// }

// QuickSearchToolbar.propTypes = {
//   clearSearch: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

// export default function QuickFilteringGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });

//   const [searchText, setSearchText] = React.useState('');
//   const [row_data, setRows] = React.useState(data.rows);

//   const requestSearch = (searchValue) => {
//     setSearchText(searchValue);
//     const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
//     const filteredRows = data.rows.filter((row) => {
//       return Object.keys(row).some((field) => {
//         return searchRegex.test(row[field].toString());
//       });
//     });
//     setRows(filteredRows);
//   };

//   React.useEffect(() => {
//     setRows(data.rows);
//   }, [data.rows]);

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         components={{ Toolbar: QuickSearchToolbar }}
//         rows={row_data}
//         columns={data.columns}
//         componentsProps={{
//           toolbar: {
//             value: searchText,
//             onChange: (event) => requestSearch(event.target.value),
//             clearSearch: () => requestSearch(''),
//           },
//         }}
//       />
//     </div>
//   );
// }


//  Export CSV

// import * as React from 'react';
// import {
//   DataGrid,
//   GridToolbarContainer,
//   GridToolbarExport,
// } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

// export default function ExportSelectorGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 4,
//     maxColumns: 16,
//   });

//   return (
//     <div style={{ height: 300, width: '100%' }}>
//       <DataGrid
//         {...data}
//         components={{
//           Toolbar: CustomToolbar,
//         }}
//       />
//     </div>
//   );
// }


//  controlled checkbox selection

// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

// export default function ControlledSelectionGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 10,
//     maxColumns: 6,
//   });

//   const [selectionModel, setSelectionModel] = React.useState([]);

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         checkboxSelection
//         onSelectionModelChange={(newSelectionModel) => {
//           setSelectionModel(newSelectionModel);
//         }}
//         selectionModel={selectionModel}
//         {...data}
//       />
//     </div>
//   );
// }



// uncontrolled checkbox selection

// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

// export default function CheckboxSelectionGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 10,
//     maxColumns: 6,
//   });

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid checkboxSelection {...data} />
//     </div>
//   );
// }

//  basic filtering

// import * as React from 'react';
// import { DataGrid, GridToolbar } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

// export default function BasicFilteringGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         {...data}
//         components={{
//           Toolbar: GridToolbar,
//         }}
//         filterModel={{
//           items: [
//             { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
//           ],
//         }}
//       />
//     </div>
//   );
// }


// multicolumn filter


// import * as React from 'react';
// import { XGrid } from '@material-ui/x-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

// export default function MultiFilteringGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 200,
//     maxColumns: 6,
//   });

//   const [filterModel, setFilterModel] = React.useState({
//     items: [
//       { id: 1, columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
//       { id: 2, columnField: 'quantity', operatorValue: '>=', value: '20000' },
//     ],
//   });

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <XGrid
//         {...data}
//         filterModel={filterModel}
//         onFilterModelChange={(model) => setFilterModel(model)}
//       />
//     </div>
//   );
// }

// Quick filter

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import IconButton from '@material-ui/core/IconButton';
// import TextField from '@material-ui/core/TextField';
// import {
//   DataGrid,
//   GridToolbarDensitySelector,
//   GridToolbarFilterButton,
// } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';
// import ClearIcon from '@material-ui/icons/Clear';
// import SearchIcon from '@material-ui/icons/Search';
// import { createTheme } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/styles';

// function escapeRegExp(value) {
//   return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// }

// const defaultTheme = createTheme();
// const useStyles = makeStyles(
//   (theme) => ({
//     root: {
//       padding: theme.spacing(0.5, 0.5, 0),
//       justifyContent: 'space-between',
//       display: 'flex',
//       alignItems: 'flex-start',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       [theme.breakpoints.down('xs')]: {
//         width: '100%',
//       },
//       margin: theme.spacing(1, 0.5, 1.5),
//       '& .MuiSvgIcon-root': {
//         marginRight: theme.spacing(0.5),
//       },
//       '& .MuiInput-underline:before': {
//         borderBottom: `1px solid ${theme.palette.divider}`,
//       },
//     },
//   }),
//   { defaultTheme },
// );

// function QuickSearchToolbar(props) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <div>
//         <GridToolbarFilterButton />
//         <GridToolbarDensitySelector />
//       </div>
//       <TextField
//         variant="standard"
//         value={props.value}
//         onChange={props.onChange}
//         placeholder="Search…"
//         className={classes.textField}
//         InputProps={{
//           startAdornment: <SearchIcon fontSize="small" />,
//           endAdornment: (
//             <IconButton
//               title="Clear"
//               aria-label="Clear"
//               size="small"
//               style={{ visibility: props.value ? 'visible' : 'hidden' }}
//               onClick={props.clearSearch}
//             >
//               <ClearIcon fontSize="small" />
//             </IconButton>
//           ),
//         }}
//       />
//     </div>
//   );
// }

// QuickSearchToolbar.propTypes = {
//   clearSearch: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

// export default function QuickFilteringGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });

//   const [searchText, setSearchText] = React.useState('');
//   const [rows, setRows] = React.useState(data.rows);

//   const requestSearch = (searchValue) => {
//     setSearchText(searchValue);
//     const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
//     const filteredRows = data.rows.filter((row) => {
//       return Object.keys(row).some((field) => {
//         return searchRegex.test(row[field].toString());
//       });
//     });
//     setRows(filteredRows);
//   };

//   React.useEffect(() => {
//     setRows(data.rows);
//   }, [data.rows]);

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         components={{ Toolbar: QuickSearchToolbar }}
//         rows={rows}
//         columns={data.columns}
//         componentsProps={{
//           toolbar: {
//             value: searchText,
//             onChange: (event) => requestSearch(event.target.value),
//             clearSearch: () => requestSearch(''),
//           },
//         }}
//       />
//     </div>
//   );
// }



// import React, { useState, useEffect} from 'react';
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
// import { TextField } from '@material-ui/core';
// import { Search } from "@material-ui/icons";
// import InputAdornment from '@material-ui/core/InputAdornment';

// // function createData(college, first_name, phone_number, email) {
// //   return {college , first_name, phone_number, email };
// // }

// let rows = [];

// let deleteThis=null;

//   const deleteRegistrar = (deleteCollege) => {
//     Axios.delete(`http://localhost:3001/registrar/delete/${deleteCollege}`);
//     console.log(deleteThis);
//     console.log("clicked");
//     window.location.reload();
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
//   { id: 'college', numeric: false, disablePadding: true, label: 'College Name' },
//   { id: 'first_name', numeric: false, disablePadding: false, label: 'Registrars Name' },
//   { id: 'phone_number', numeric: true, disablePadding: false, label: 'Phone Number' },
//   { id: 'email', numeric: false, disablePadding: false, label: 'Email Address' },
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
//   const [filterFn, setFilterFn] = React.useState({ fn: items => { return items; } })

//   const handleSearch = e => {
//     let target = e.target;
//     setFilterFn({
//         fn: items => {
//             if (target.value == "")
//                 return items;
//             else
//                 return items.filter(x => x.first_name.toLowerCase().includes(target.value))
//         }
//     })
// }


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
//           Registered Student 
//         </Typography>
//       )}
//       <TextField 
//          label="Search Employees"
//          className={classes.searchInput}
//          InputProps={{
//              startAdornment: (<InputAdornment position="start">
//                  <Search />
//              </InputAdornment>)
//          }}
//          onChange={handleSearch}
//                      />

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
//     width: '80%',        // table width
//     paddingTop: "70px",
//     paddingLeft: "18%",
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

// export default function RegistrarListPage() {


//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('first_name');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [studentList, setStudentList] = useState([]);
  

//   useEffect(() => {
//     Axios.get("http://localhost:3001/registrar").then((response) => {
//       console.log(response.data);
//       //  rows=response.data;
//       setStudentList(response.data);
      
//     });
//   }, [])

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.college);
//       setSelected(newSelecteds);
//       deleteThis=newSelecteds;
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, college) => {
//     const selectedIndex = selected.indexOf(college);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, college);
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

//   const isSelected = (college) => selected.indexOf(college) !== -1;

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
//                   const isItemSelected = isSelected(row.college);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.college)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.college}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ 'aria-labelledby': labelId }}
//                         />
//                       </TableCell>
//                       <TableCell component="th" id={labelId} scope="row" padding="none">
//                         {row.college}
//                       </TableCell>
//                       <TableCell align="left">{row.first_name+" "+row.middle_name}</TableCell>
//                       <TableCell align="right">+2519{row.phone_number}</TableCell>
//                       <TableCell align="left">{row.email}</TableCell>
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
//       {studentList.map((val) => {
//         rows=studentList;
//         console.log("data ",rows);
//       })}
//     </div>
//   );
// }


