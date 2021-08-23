import React from 'react'
import ViewmyaccountIcon from '@material-ui/icons/AccountCircle';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Add';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import AttendanceIcon from '@material-ui/icons/Timer';
import { GrUpdate} from 'react-icons/gr';
import { MdPersonAdd} from 'react-icons/md';
import { GrOverview} from 'react-icons/gr';
import { GiTimeBomb} from 'react-icons/gi';
import { FaBookReader} from 'react-icons/fa';


export const SidebarData1 = [
   
    {
        title: "View and Update",
        icon: <GrUpdate color="#092139" size="1.5em"/>,
        link: "/head/index/my_account/update"
    },
]

export const SidebarData2 = [
    {
        title: "Create Teacher ",
        icon: <MdPersonAdd color="#092139" size="2em"/>,
        link: "/head/index/teacher_account/create_teacher"
    },
    {
        title: "Assign for Courses ",
        icon: <FaBookReader color="#092139" size="2em"/>,
        link: "/head/index/teacher_account/assign_course_for_teacher"    
    },
    {
        title: "View Teacher ",
        icon: <GrOverview color="#092139" size="2em"/>,
        link: "/head/index/teacher_account/view_teacher"
    },
    {
        title: "Teacher Attendance",
        icon: <GiTimeBomb color="#092139" size="2em"/>,
        link: "/head/index/teacher_account/view_teacher_attendance"
    },
]


export const SidebarData3 = [
    {
        title: "View Student ",
        icon: <GrOverview color="#092139" size="2em"/>,
        link: "/head/index/student_management/view_student"
    },

    {
        title: "Student Attendance",
        icon:  <GiTimeBomb color="#092139" size="2em"/>,
        link: "/head/index/student_management/view_student_attendance"
    },
]

export const SidebarData4 = [
    {
        title: "Logout",
        icon: <LogoutIcon fontSize="large" color="secondary"/>,
        link: "/"
    },
    
]