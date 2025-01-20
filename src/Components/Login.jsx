import { useRef, useState } from "react";
import Header from "./Header";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { checkValidData } from "../Utils/Validation";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Utils/Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [isSignIn, setSignIn] = useState(true);

  const [isShow, setShow] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  

  function ShowHandler() {
    setShow(!isShow);
    console.log(isShow);
  }

  const handelButtonclick = () => {

    console.log(email.current.value +' '+ password.current.value)
    
    //Validate funtion
    checkValidData(
      email.current.value,
      password.current.value,
      // firstName.current.value,
      // lastName.current.value
      
    );
    const message = checkValidData(
      email.current.value,
      password.current.value,
      //  
      
    );
    setErrorMessage(message);
    toast.error(message);

    if (message) return;

    //sign In and Sign Up Logic

    if (!isSignIn) {
      //sign up login
     
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.warning(errorMessage+ " "+errorCode)
          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorCode+" "+errorMessage)
  });
    }
  };

  // Add form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  function toggleHandler() {
    setSignIn(!isSignIn);
    // Reset form data when toggling
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
    });
  }

  // Add handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      console.log("Sign In Data:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords don't match!");
        return;
      }
      console.log("Sign Up Data:", formData);
    }
  };

  return (
    <div className="w-screen h-screen relative">
      <Header />
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form */}
      <div className=" bg-black/80 absolute inset-x-0 mx-auto mt-16 p-8 w-[35%] max-w-md rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <h1 className="text-white font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={firstName}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

          {!isSignIn && (
            <input
              ref={lastName}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

          {isSignIn && (
            <input
              ref={email}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email or mobile Number"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

          {!isSignIn && (
            <input
              ref={email}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

          <div className="flex items-center relative">
            <input
              ref={password}
              type={isShow ? "text" : "Password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
            <IoEye
              className=" text-white/90  absolute right-1 text-[2rem] cursor-pointer"
              onClick={ShowHandler}
            />

            <IoEyeOff
              className={` text-white/90  absolute right-1 text-[2rem] cursor-pointer ${
                isShow ? "hidden" : "block"
              } `}
              onClick={ShowHandler}
            />
          </div>

          <div className="flex items-center relative">
            {!isSignIn && (
              <input
                type={isShow ? "text" : "Password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
              />
            )}

            {!isSignIn && (
              <div>
                <IoEye
                  className=" text-white/90  absolute right-1 top-1 text-[2rem] cursor-pointer"
                  onClick={ShowHandler}
                />

                <IoEyeOff
                  className={` text-white/90  absolute right-1 top-1 text-[2rem] cursor-pointer ${
                    isShow ? "hidden" : "block"
                  } `}
                  onClick={ShowHandler}
                />
              </div>
            )}
          </div>

          {!isSignIn && (
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-sm">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-[#e50914] text-white font-semibold text-lg py-3 rounded-md hover:bg-[#f6121d]"
            onClick={handelButtonclick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center text-gray-400">OR</p>
          <button className="text-white bg-gray-700/70 font-medium py-3 rounded-md hover:opacity-80">
            Use a Sign-in code
          </button>

          <p className="text-white font-SegoeUI">
            {" "}
            {isSignIn ? "New to Netflix ?" : "Already Registered"}{" "}
            <span
              className="font-SegoeBold cursor-pointer"
              onClick={toggleHandler}
            >
              {isSignIn ? "Sign Up" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
