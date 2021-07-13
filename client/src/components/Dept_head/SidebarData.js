import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/AccountCircle';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Add';
import LogoutIcon from '@material-ui/icons/ExitToApp';


export const SidebarData1 = [
   
    {
        title: "View My Account",
        icon: <ViewmyaccountIcon fontSize="large"  color="primary"/>,
        link: "/admin/index/my_account/view"
    },
    {
        title: "Update My Account",
        icon: <UpdateIcon fontSize="large" color="primary"/>,
        link: "/admin/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "Create Registrar ",
        icon: <CreateIcon fontSize="large" color="primary"/>,
        link: "/admin/index/registrar_account/create_registrar"
    },
    {
        title: "View Registrar ",
        icon: <ViewmyaccountIcon fontSize="large" color="primary"/>,
        link: "/admin/index/registrar_account/view_list"
    },
]

export const SidebarData3 = [
    {
        title: "Logout",
        icon: <LogoutIcon fontSize="large" color="primary"/>,
        link: "/"
    },
    
]