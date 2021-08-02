import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/AccountCircle';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Add';
import LogoutIcon from '@material-ui/icons/ExitToApp';


export const SidebarData1 = [
   
    {
        title: "View and Update",
        icon: <UpdateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/head/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "Create Teacher ",
        icon: <CreateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/head/index/teacher_account/create_teacher"
    },
    {
        title: "View Teacher ",
        icon: <ViewmyaccountIcon fontSize="large" htmlColor="#092139"/>,
        link: "/head/index/teacher_account/view_teacher"
    },
]


export const SidebarData3 = [
    {
        title: "View Student ",
        icon: <ViewmyaccountIcon fontSize="large" htmlColor="#092139"/>,
        link: "/head/index/student_management/view_student"
    },
]

export const SidebarData4 = [
    {
        title: "Logout",
        icon: <LogoutIcon fontSize="large" color="secondary"/>,
        link: "/"
    },
    
]