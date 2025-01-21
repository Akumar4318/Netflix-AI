import { useRef, useState } from "react";
import Header from "./Header";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { checkValidData } from "../Utils/Validation";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Utils/Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";
import photourl from '../assets/Users/UserLogo.png'
import { useDispatch } from "react-redux";
import { addUser } from "../Features/UserSlice";
import Loadder from "./Loadder";




const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const dispatch = useDispatch();
  const [isShow, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const confirmPassword = useRef(null);
  const dateOfBirth = useRef(null);
  const [isLoading,setIsLoading]=useState(true)

  function ShowHandler() {
    setShow(!isShow);
  }

  const handelButtonclick = (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Validate based on sign in/up state
    const message = isSignIn 
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          firstName.current?.value
        );

    setErrorMessage(message);
    if (message) {
      toast.error(message);
      return;
    }

    if (!isSignIn) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: firstName.current.value,
            photoURL: photourl
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid, email, displayName, photoURL}));
            // navigate('/browse');
          }).catch((error) => {
            toast.error(error.message);
          });
        })
        .catch((error) => {
          toast.warning(error.message);
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/browse')
    console.log(user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
    }
  };

  function toggleHandler() {
    setSignIn(!isSignIn);
  }

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
        <form onSubmit={handelButtonclick} className="flex flex-col gap-y-6">
          <h1 className="text-white font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={firstName}
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

          {!isSignIn && (
            <input
              ref={lastName}
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

          <input
            ref={email}
            type="email"
            name="email"
            placeholder={isSignIn ? "Email or mobile Number" : "Enter your Email"}
            className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
          />

          <div className="flex items-center relative">
            <input
              ref={password}
              type={isShow ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
            <IoEye
              className="text-white/90 absolute right-1 text-[2rem] cursor-pointer"
              onClick={ShowHandler}
            />
            <IoEyeOff
              className={`text-white/90 absolute right-1 text-[2rem] cursor-pointer ${
                isShow ? "hidden" : "block"
              }`}
              onClick={ShowHandler}
            />
          </div>

          {!isSignIn && (
            <div className="flex items-center relative">
              <input
                ref={confirmPassword}
                type={isShow ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
              />
              <div>
                <IoEye
                  className="text-white/90 absolute right-1 top-1 text-[2rem] cursor-pointer"
                  onClick={ShowHandler}
                />
                <IoEyeOff
                  className={`text-white/90 absolute right-1 top-1 text-[2rem] cursor-pointer ${
                    isShow ? "hidden" : "block"
                  }`}
                  onClick={ShowHandler}
                />
              </div>
            </div>
          )}

          {!isSignIn && (
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-sm">Date of Birth</label>
              <input
                ref={dateOfBirth}
                type="date"
                name="dateOfBirth"
                className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-[#e50914] text-white font-semibold text-lg py-3 rounded-md hover:bg-[#f6121d]"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center text-gray-400">OR</p>
          <button 
            type="button" 
            className="text-white bg-gray-700/70 font-medium py-3 rounded-md hover:opacity-80"
          >
            Use a Sign-in code
          </button>

          <p className="text-white font-SegoeUI">
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