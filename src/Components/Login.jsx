import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
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
        alert("Passwords don't match!");
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
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

         

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email or mobile Number"
            className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
          />

          {!isSignIn && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className="w-full h-12 px-4 rounded-md border bg-black/40 text-white focus:outline-none focus:border-white"
            />
          )}

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
