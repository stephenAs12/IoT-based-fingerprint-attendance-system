import SignInSide  from './components/login';
import {Switch,Route} from 'react-router-dom';
import SignupSide  from './components/signup';
import UserRegistrationForm from './components/UserRegistration';
import AdminIndex from './components/Admin/index';
import UpdateAdminAccount from './components/Admin/my_account/Update';
import CreateRegistrarAccount from './components/Admin/registrarAcc/Create';
import viewRegistrarList from './components/Admin/registrarAcc/RegistrarList';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/teacher/Home';
import RegistrarIndex from './components/registrar/index';
import CreateDeanAccount from './components/registrar/deanAcc/Create';
import viewCollegeDean from './components/registrar/deanAcc/ViewDean';
import UpdateRegistrarAccount from './components/registrar/my_account/Update';
import CreateHeadAccount from './components/registrar/headAcc/Create';
import viewDepartmentHead from './components/registrar/headAcc/HeadList';
import RegisterStudent from './components/registrar/studentReg/Create';
import viewRegisteredStudent from './components/registrar/studentReg/StudentList';
import HeadIndex from './components/Dept_head/index';
import UpdateHeadAccount from './components/Dept_head/my_account/Update';
import CreateTeacherAccount from './components/Dept_head/teacherAcc/Create';
import viewTeacher from './components/Dept_head/teacherAcc/TeacherList';
import viewStudent from './components/Dept_head/studentManagement/StudentList';





function App() {
  return (
    <>
    <Switch>
    <Route path="/" exact component={SignInSide}/>
      <Route path="/signup" exact component={SignupSide}/>
      <Route path="/user/registration" exact component={UserRegistrationForm}/>
      <Route path="/admin/index" exact component={AdminIndex}/>
      <Route path="/admin/index/my_account/update" exact component={UpdateAdminAccount}/>
      <Route path="/admin/index/registrar_account/create_registrar" exact component={CreateRegistrarAccount}/>
      <Route path="/admin/index/registrar_account/view_list" exact component={viewRegistrarList}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/teacher/home" exact component={Home}/>
      <Route path="/registrar/index" exact component={RegistrarIndex}/>
      <Route path="/registrar/index/dean_account/create_dean" exact component={CreateDeanAccount}/>
      <Route path="/registrar/index/dean_account/view_dean" exact component={viewCollegeDean}/>
      <Route path="/registrar/index/my_account/update" exact component={UpdateRegistrarAccount}/>
      <Route path="/registrar/index/head_account/create_head" exact component={CreateHeadAccount}/>
      <Route path="/registrar/index/head_account/view_head" exact component={viewDepartmentHead}/>
      <Route path="/registrar/index/add/student" exact component={RegisterStudent}/>
      <Route path="/registrar/index/view_registered/student" exact component={viewRegisteredStudent}/>
      <Route path="/head/index" exact component={HeadIndex}/>
      <Route path="/head/index/my_account/update" exact component={UpdateHeadAccount}/>
      <Route path="/head/index/teacher_account/create_teacher" exact component={CreateTeacherAccount}/>
      <Route path="/head/index/teacher_account/view_teacher" exact component={viewTeacher}/>
      <Route path="/head/index/student_management/view_student" exact component={viewStudent}/>







    </Switch>
    </>  
  );
}

export default App;
