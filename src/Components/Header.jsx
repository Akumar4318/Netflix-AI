import logo from '../assets/Images/Login/logo.svg'
const Header = () => {
  return (
    <div className='absolute z-10'>
         <div className='mx-32'>
      <div className='mx-12 my-6'>
      <img src={logo} alt="logo" className='w-[147px] h-[40px] ml-4 my-2 bg-gradient-to-b from-black ' />
      </div>
         </div>
    </div>
  )
}

export default Header