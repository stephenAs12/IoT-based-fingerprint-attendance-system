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
import Home_reg from './components/registrar/Home_reg';
import Home_dept from './components/Dept_head/Home_dept';
import Home_dean from './components/College_dean/Home_dean';




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
      <Route path="/registrar/home_reg" exact component={Home_reg}/>
      <Route path="/Dept_head/home_reg" exact component={Home_dept}/>
      <Route path="/College_dean/home_dean" exact component={Home_dean}/>







    </Switch>
    </>  
  );
}

export default App;
