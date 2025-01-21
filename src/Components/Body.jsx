import { Routes ,Route } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react"
import { auth } from "../Utils/Firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../Features/UserSlice"
import Error from "./Error"
const Body = () => {

  const dispatch=useDispatch();


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      
       
      } else {
       dispatch(removeUser())
       
      }
    });

  },[])

  return (
    <div>
       
       <Routes>
            <Route path="/" element={<Login/>}> Login </Route>
            <Route path="/browse" element={<Browse/>}>Browse</Route>
            <Route path="/error" element={<Error/>}></Route>

       </Routes>
    </div>
  )
}

export default Body