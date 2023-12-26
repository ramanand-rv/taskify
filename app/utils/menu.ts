import { FaHouse } from "react-icons/fa6";
import { MdPriorityHigh } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

const menu =[
    {
        id: 1,
        title:"All Tasks",
        link: "/",
        icon: FaHouse,
        
    },
    {
        id: 2,
        title:"Important",
        link: "important",
        icon: MdPriorityHigh,
        
    },
    {
        id: 3,
        title:"Completed",
        link: "/completed",
        icon: FaCheckDouble,
        
    },
    {
        id: 4,
        title:"Do it Now",
        link: "/todo",
        icon: LuListTodo,
        
    },
]

export default menu;