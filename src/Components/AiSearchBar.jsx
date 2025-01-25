import { useNavigate } from 'react-router-dom'
import logo from '../assets/Images/Login/logo.svg'
import backimage from '../assets/Images/Login/backImage.jpg'
import lang from '../Utils/LanguageConstant'
import { SUPPORTED_LANGUAGES } from '../Utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../Features/ConfigSlice'

const AiSearchBar = () => {
const dispatch=useDispatch()

   const langKey=useSelector((store)=>store.config.lang);
 

    const handelLanguagechange=(e)=>{
        
        dispatch(changeLanguage(e.target.value))
    }

    const navigate=useNavigate()
  return (
    <div className="w-screen h-lvh bg-gradient-to-b from-black/50  p-4">

        <img src={backimage} className='absolute  -z-10 scale-125' alt="" />

        <div className='cursor-pointer  w-[10%] p-2 mt-[2%] ml-[7%]'>
        <img src={logo} alt=""className='w-[147px] h-[40px]    ' onClick={()=>{
            navigate('/')
        }}/>
        </div>

        <div className=' w-fit relative left-[83.3%] -top-11 h-4 cursor-pointer' onClick={()=>
            navigate('/')
        }>
            <img src="https://fontmeme.com/permalink/250125/de30b26cb20a7e626f8e0f01d229eb03.png" className='' alt=""  />
        </div>
        <select className='bg-gradient-to-r from-[#f6121d] to-[#8b050b] text-white border-2 border-transparent rounded-lg shadow-lg focus:outline-none  hover:scale-105 transform transition-all duration-300 absolute right-14 top-14 px-4 py-2 cursor-pointer' onChange={handelLanguagechange}>
    {
        SUPPORTED_LANGUAGES.map((item) => {
            return <option value={item.identifier} key={item.identifier} className='bg-[#f6121d] hover:bg-red-300 text-white font-SegoeBold transform transition-transform duration-300 hover:scale-110 cursor-pointer '>
                {item.name}
            </option>
        })
    }
</select>

        <div className="flex  ">
        <form action="" className="mt-[5%] flex justify-center gap-x-4 px-12   w-screen">
            <input type="text" className="font-SegoeUI w-[40%] p-3 border border-red-500 rounded-md" placeholder={lang[langKey].aisearachHolder} />
            <button className="px-6  rounded-lg font-SegoeBold text-white bg-[#f6121d]">{lang[langKey].search}</button>
        </form>
        </div>

       
    </div>
  )
}

export default AiSearchBar