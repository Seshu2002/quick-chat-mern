import React from 'react';
import { IoMdChatboxes } from 'react-icons/io'
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import Avatar from "./Avatar"

const Sidebar = () => {
    return (
        <div className='w-full h-full'>
            <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-700 flex flex-col justify-between'>
                <div>
                    <NavLink className={({ isActive }) => `w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title='Chat'>
                        <IoMdChatboxes size={20} />
                    </NavLink>
                    <div className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded' title='add friend'>
                        <FaUserPlus size={20} />
                    </div>
                </div>
                <div>
                    <button className='flex justify-center ml-1.5'>
                        <Avatar width={30}/>
                    </button>
                    <button className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded' title='logout'>
                        <span className="-ml-2">
                        <BiLogOut size={20} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar