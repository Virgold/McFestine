import React from 'react';
import logo from '../../../assets/images/McEstine_icon'

export const Form = () => {
  return (
    <div className="w-full lg:w-1/2 h-fit pb-20 bg-white pt-[2.8125rem] ">
    <div className="max-w-[80%] sm:max-w-[70%] mx-auto">
      <img className="w-[113px]" src={logo} alt="logo" />

      <p className="font-[900] text-[31px] mt-[79.86px] pb-[26px]">
        Welcome Back! 👋
      </p>

      <div className="flex flex-col gap-[26px]">
        <button className="flex xs:px-[5.5rem] py-5 rounded-[14px] items-center justify-center text-white hover:bg-[#508ff7] bg-[#4285F4]">
          <img src={googleLogo} alt="" className="w-5 sm:w-fit"/>
          <p className="font-bold ml-3 text-sm sm:text-lg">Continue with Google</p>
        </button>
        <button className="flex cc py-2 rounded-[14px] items-center justify-center text-white hover:bg-[#2f2f2f] bg-[#0D0D0D]">
          <img className="w-14 sm:w-20" src={appleLogo} alt="" />
          <p className="font-bold text-sm sm:text-lg">Log In with your Apple ID</p>
        </button>
      </div>

      <div className="pt-[28px]">
        <div className="flex items-center">
          <hr className="bg-[#D4D4D4] w-1/2" />
          <p className="uppercase px-4">or</p>
          <hr className="bg-[#D4D4D4] w-1/2" />
        </div>
      </div>
      <form action="" className="mt-6 flex flex-col gap-6">
        <div className="">
          <label className="font-[450] text-[16px]" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            className="bg-[#F8FBFC] p-5  w-full rounded-[14px] mt-[15px] focus:outline-none focus:ring text-[#D4D4D4] font-[450] text-[16px]"
          />
        </div>
        <div className="">
          <label className="font-[450] text-[16px]" htmlFor="password">
            Password
          </label>
          <div>
            <input
              type="password"
              className="bg-[#F8FBFC] p-5 w-full rounded-[14px] mt-[15px] focus:outline-none focus:ring text-[#D4D4D4] font-[450] text-[16px]"
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-md font-[400]">
          <span className="flex items-center gap-3">
            <input
              type="checkbox"
              name="rememberMe"
              id="checkbox"
              className=""
            />
            <label htmlFor="checkbox">Remember me</label>
          </span>
          <p>
            <u>Forget password</u>
          </p>
        </div>

        <button className="xs:px-[3.63rem] text-sm sm:text-lg py-5 rounded-[14px] font-[450]  text-white bg-black hover:bg-[#2f2f2f] ">
          Login
        </button>
      </form>

      <div className="flex items-center justify-center mt-5 font-[450] text-[16px]">
        <p>New to Hamlet?</p>
        <button className="text-[#654DE4] font-semibold ml-1">
          {" "}
          Create an account
        </button>
      </div>
    </div>
  </div>
  )
}
