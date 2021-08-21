import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/ViewComfyRounded';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/PersonAddRounded';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import { GrUpdate} from 'react-icons/gr';
import { MdPersonAdd} from 'react-icons/md';
import { GrOverview} from 'react-icons/gr';



export const SidebarData1 = [
   
    {
        title: "View and Update",
        icon: <GrUpdate color="#092139" size="1.5em"/>,
        link: "/admin/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "Create Registrar ",
        icon: <MdPersonAdd color="#092139" size="2em"/>,
        link: "/admin/index/registrar_account/create_registrar"
    },
    {
        title: "View Registrar ",
        icon: <GrOverview color="#092139" size="2em"/>,
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