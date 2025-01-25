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
import { useSelector } from 'react-redux';
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../Features/UserSlice"
import AIsearch from '../assets/Users/Ai.png'
import { toggleAISearchView } from '../Features/AISlice';

const Header = () => {
  

 const[isclicked,setIsClicked]=useState(false)
 const navigate=useNavigate()
 const user=useSelector(store=>store.user)
 const dispatch=useDispatch();
 const[isClicked1,setIsClicked1]=useState(true)


 function changeHandler(){
   setIsClicked(!isclicked)
  
 }

 function showHandler(){
  setIsClicked1(!isClicked1)
 }

 
 const HandelAISearch=()=>{
  dispatch(toggleAISearchView())
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

 useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate('/browse')
    
     
    } else {
     dispatch(removeUser())
     navigate('/')
     
    }
  });
// unsubscribe when component will unmount
  return ()=> unsubscribe();

},[])

  return (
   <div className='relative'>
     <div className='absolute z-10  bg-gradient-to-b from-black  '>
         <div className=' mx-2 font-SegoeUI  w-screen flex justify-between'>
      <div className='mx-32 my-6'>
      <img src={logo} alt="logo" className='w-[147px] h-[40px] ml-4 my-2 ' />
      </div>

      {user && <div className='flex  items-center justify-center gap-x-5 mr-7'>
      <div className='flex gap-2'>
        <input type="text" placeholder='search you Favi' className={`rounded-md font-SegoeBold bg-red-500 bg-opacity-30 text-white px-4   transition-all duration-1000 ease-in-out transform ${isClicked1 ? ("-translate-x-full opacity-0"):("translate-x-0 opacity-100")}`}/>
        <IoSearch className='text-[2rem] text-white cursor-pointer' onClick={showHandler} />
      </div>
    <MdOutlineNotifications className='text-[2rem] text-white'/>
    <button className='hover:scale-105  ' onClick={HandelAISearch}><img src={AIsearch} alt="" /></button>
    <div className='flex items-center cursor-pointer hover:scale-105 'onClick={changeHandler}>
    
    <img src={userlogo} alt="" className='w-[50px] h-[50px] rounded-md' />

    

{isclicked ? (<IoMdArrowDropup className='text-[1.5rem] text-white' />):(<IoMdArrowDropdown className='text-[1.5rem] text-white'/>)}

    </div>
   
      </div>}
         </div>

       

    </div>
    {
      isclicked && <div className='z-50 w-[230px] h-[300px] absolute top-24 mt-2 text-[1.2rem] left-[1320px] bg-black/90 rounded-lg flex flex-col gap-y-6 p-3 font-SegoeUI text-white cursor-pointer'>

      <div className='flex items-center mt-3 gap-x-3 font-bold'>
        <img src={user?.photourl} className='w-[30px] h-[30px] '  alt="" />
        <p>{user?.displayName}</p>
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