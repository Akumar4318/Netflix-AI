import Body from "./Components/Body"
import{ToastContainer,} from 'react-toastify'
const App = () => {
  return (
    <div className="w-[147px] h-[39px]">
      <Body/>
      <ToastContainer theme="colored" />
    </div>
  )
}

export default App