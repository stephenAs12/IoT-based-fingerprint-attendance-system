import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/ViewComfyRounded';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/PersonAddRounded';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';



export const SidebarData1 = [
   
    {
        title: "View and Update",
        icon: <UpdateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/admin/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "Create Registrar ",
        icon: <CreateIcon fontSize="large" htmlColor="#092139"/>,
        link: "/admin/index/registrar_account/create_registrar"
    },
    {
        title: "View Registrar ",
        icon: <ViewmyaccountIcon fontSize="large" htmlColor="#092139"/>,
        link: "/admin/index/registrar_account/view_list"
    },
]

export const SidebarData3 = [
    {
        title: "Logout",
        icon: <LogoutIcon fontSize="large" color="secondary"/>,
        link: "/"
    },
    
]