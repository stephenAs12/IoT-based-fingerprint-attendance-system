import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/ViewComfyRounded';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/PersonAddRounded';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { FaUserGraduate} from 'react-icons/fa';
import { GrUpdate} from 'react-icons/gr';
import { GiTeacher} from 'react-icons/gi';




export const SidebarData1 = [
   
    {
        title: "View and Update",
        icon: <GrUpdate color="#092139" size="1.5em"/>,
        link: "/dean/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "View Teacher ",
        icon: <GiTeacher color="#092139" size="1.5em"/>,
        link: "/dean/index/view_attendance/from_dean/view_teacher"
    },
    {
        title: "View Student ",
        icon: <FaUserGraduate color="#092139" size="1.5em"/>,
        link: "/dean/index/view_attendance/from_dean/view_student"
    },
]

export const SidebarData3 = [
    {
        title: "View Student ",
        icon: <ViewmyaccountIcon fontSize="large" htmlColor="#092139"/>,
        link: "/admin/index/registrar_account/view_list"
    },
    
]