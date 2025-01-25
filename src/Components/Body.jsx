import { Routes ,Route } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"

import Error from "./Error"
import AiSearch from "./AiSearch"
const Body = () => {

 


 

  return (
    <div>
       
       <Routes>
            <Route path="/" element={<Login/>}> Login </Route>
            <Route path="/browse" element={<Browse/>}>Browse</Route>
            <Route path="/error" element={<Error/>}></Route>
            <Route path="/aisearch" element={<AiSearch/>} ></Route>

       </Routes>
    </div>
  )
}

export default Body