import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/AccountCircle';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Add';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import { GrUpdate} from 'react-icons/gr';
import { MdPersonAdd} from 'react-icons/md';
import { GrOverview} from 'react-icons/gr';
import { FaBookReader} from 'react-icons/fa';


export const SidebarData1 = [
   
    {
        title: "View and Update",
        icon: <GrUpdate color="#092139" size="1.5em"/>,
        link: "/registrar/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "Create Dean ",
        icon: <MdPersonAdd color="#092139" size="2em"/>,
        link: "/registrar/index/dean_account/create_dean"
    },
    {
        title: "View Dean ",
        icon: <GrOverview color="#092139" size="2em"/>,
        link: "/registrar/index/dean_account/view_dean"
    },
]


export const SidebarData3 = [
    {
        title: "Create Head ",
        icon: <MdPersonAdd color="#092139" size="2em"/>,
        link: "/registrar/index/head_account/create_head"
    },
    {
        title: "View Head ",
        icon: <GrOverview color="#092139" size="2em"/>,
        link: "/registrar/index/head_account/view_head"
    },
]

export const SidebarData4 = [
    {
        title: "Register Student ",
        icon: <MdPersonAdd color="#092139" size="2em"/>,
        link: "/registrar/index/add/student"
    },
    {
        title: "Register on Courses ",
        icon: <FaBookReader color="#092139" size="2em"/>,
        link: "/registrar/index/studentReg/register_on_courses"    
    },
    {
        title: "View Student ",
        icon: <GrOverview color="#092139" size="2em"/>,
        link: "/registrar/index/view_registered/student"
    },
]

export const SidebarData5 = [
    {
        title: "Logout",
        icon: <LogoutIcon fontSize="large" color="secondary"/>,
        link: "/"
    },
    
]