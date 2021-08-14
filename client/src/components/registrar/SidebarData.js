import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/AccountCircle';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Add';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';


export const SidebarData1 = [
   
    {
        title: "View and Update",
        icon: <UpdateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/registrar/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "Create Dean ",
        icon: <CreateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/registrar/index/dean_account/create_dean"
    },
    {
        title: "View Dean ",
        icon: <ViewmyaccountIcon fontSize="large" htmlColor="#092139"/>,
        link: "/registrar/index/dean_account/view_dean"
    },
]


export const SidebarData3 = [
    {
        title: "Create Head ",
        icon: <CreateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/registrar/index/head_account/create_head"
    },
    {
        title: "View Head ",
        icon: <ViewmyaccountIcon fontSize="large" htmlColor="#092139"/>,
        link: "/registrar/index/head_account/view_head"
    },
]

export const SidebarData4 = [
    {
        title: "Register Student ",
        icon: <CreateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/registrar/index/add/student"
    },
    {
        title: "View Student ",
        icon: <ViewmyaccountIcon fontSize="large" htmlColor="#092139"/>,
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