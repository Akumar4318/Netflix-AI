import { Routes ,Route } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"


const Body = () => {


  return (
    <div>
       
       <Routes>
            <Route path="/" element={<Login/>}> Login </Route>
            <Route path="/browse" element={<Browse/>}>Browse</Route>

       </Routes>
    </div>
  )
}

export default Body