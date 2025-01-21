import logo from '../assets/Images/Login/logo.svg'
import { IoSearch } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import userlogo from "../assets/Users/UserLogo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { LuCircleHelp } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { FaUsersGear } from "react-icons/fa6";
import { useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import { auth } from '../Utils/Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Header = () => {

 const[isclicked,setIsClicked]=useState(false)
 const navigate=useNavigate()

 function changeHandler(){
   setIsClicked(!isclicked)
  
 }

 const handelSignout=()=>{
  signOut(auth).then(() => {

  // Sign-out successful.

  navigate('/')
}).catch((error) => {
  // An error happened.
  navigate('/error')

});
 }

  return (
   <div className='relative'>
     <div className='absolute z-10  bg-gradient-to-b from-black  '>
         <div className=' mx-2  w-screen flex justify-between'>
      <div className='mx-32 my-6'>
      <img src={logo} alt="logo" className='w-[147px] h-[40px] ml-4 my-2 ' />
      </div>

      <div className='flex  items-center justify-center gap-x-5 mr-7'>
      <IoSearch className='text-[2rem] text-white' />
    <MdOutlineNotifications className='text-[2rem] text-white'/>

    <div className='flex items-center cursor-pointer hover:scale-105 'onClick={changeHandler}>
    <img src={userlogo} alt="" className='w-[50px] h-[50px] rounded-md' />

{isclicked ? (<IoMdArrowDropup className='text-[1.5rem] text-white' />):(<IoMdArrowDropdown className='text-[1.5rem] text-white'/>)}

    </div>
   
      </div>
         </div>

       

    </div>
    {
      isclicked && <div className='w-[230px] h-[300px] absolute top-24 mt-2 text-[1.2rem] left-[1320px] bg-black/90 rounded-lg flex flex-col gap-y-6 p-3 font-SegoeUI text-white cursor-pointer'>

      <div className='flex items-center mt-3 gap-x-3 font-bold'>
        <img src={userlogo} className='w-[30px] h-[30px] '  alt="" />
        <p>Abhishek</p>
      </div>
      <ul className='flex flex-col gap-y-2 '>
        <li className='flex items-center gap-x-3   hover:underline  duration-800 transition-all ' > <FaUsersGear /> Manage Profiles</li>
        <li  className='flex items-center gap-x-3  hover:underline' > <FiUserPlus />Transfer Profile</li>
        <li className='flex items-center gap-x-3  hover:underline'> <FaRegUser />Account</li>
        <li  className='flex items-center gap-x-3  hover:underline' > <LuCircleHelp />Help center</li>
       
      </ul>
      <button className='font-SegoeBold bg-[#e50914] p-2 rounded-lg hover:bg-[#f6121d] 'onClick={handelSignout} >Sign out Of Netflix</button>
</div>
    }
   </div>
  )
}

export default Header