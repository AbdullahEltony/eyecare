// React Icons imports
import { IoHomeOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { RiUserHeartLine } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdListAlt } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineMedicalServices } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BsChatLeftText } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineCampaign } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

export const NavLinks = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: IoHomeOutline
    },
    {
        title:"Patients",
        path: "/patients",
        icon: TbUsers
    },
    {
        title:"Receptions",
        path: "/receptions",
        icon: HiOutlineUsers
    },
    {
        title:"Doctors",
        path: "/doctors",
        icon: RiUserHeartLine
    },
    {
        title:"Appointments",
        path: "/appointments",
        icon: MdOutlineCalendarMonth
    },
    {
        title:"Payments",
        path: "/payments",
        icon: MdListAlt
    },{
        title:"Invoices",
        path: "/invoices",
        icon: LiaFileInvoiceSolid

    },
    {
        title:"Services",
        path: "/services",
        icon: HiOutlineWrenchScrewdriver
    },
    {
        title:"Medicines",
        path: "/medicines",
        icon: MdOutlineMedicalServices
    },
    {
        title:"Chats",
        path: "/chats",
        icon: BsChatLeftText
    },
    {
        title:"Reviews",
        path: "/reviews",
        icon: MdOutlineReviews
    },
    {
        title:"Campaigns",
        path: "/campaigns",
        icon:MdOutlineCampaign

    },{
        title:"Settings",
        path: "/settings",
        icon: CiSettings
    }
]