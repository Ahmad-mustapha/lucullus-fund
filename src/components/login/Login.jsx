import React, { useState } from 'react'
import { TfiLock } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import './login.css'
import Forgetpassword from '../forgetpassword/Forgetpassword';
const Login = () => {
  const [ showForgetPassword, setShowForgetPassword ] = useState(false)
  return (
    <div className='padlogin'>
      <div className='login flex flex-col items-center justify-center text-white'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h2 className='text-[29px] md:text-[49px] font-[700] text-center'>Investor Log In</h2>
          <p className='text[20px] font-[400] max-w-[500px] text-center'>If you are an Investor in the Lucullus Fund Log in here to see your performance</p>
        </div>
        <div className='w-full max-w-[400px]'>
          <form action="">
            <div style={{marginBottom: '1rem', marginTop: '1rem'}} className='w-full relative'>
              <label htmlFor="" className='text-[15px] font-[500]'>Email</label> <br />
              <input
              style={{padding: '.5rem 0 .5rem 2rem'}}
              className='w-full outline-hidden rounded-md bg-white/30 backdrop-blur-sm'
              type="email" />
              <span className='absolute left-2 bottom-[10px] text-[17px]'><MdOutlineMailOutline /></span>
            </div>
            <div className='w-full relative'>
              <label htmlFor="" className='text-[15px] font-[500]'>Pasword</label> <br />
              <input
              style={{padding: '.5rem 0 .5rem 2rem'}}
              className='w-full outline-hidden rounded-md bg-white/30 backdrop-blur-sm'
              type="password" />
              <span className='absolute left-2 bottom-[10px] text-[17px]'><TfiLock /></span>
            </div>
            <div style={{marginTop: '.7rem'}} className='flex items-center justify-end'>
              <Link 
              className='font-[500] text-[15px]'
              onClick={()=> setShowForgetPassword(true)}
              >Forgot Password?</Link></div>
            <div style={{marginTop: '1.4rem'}} className='flex items-center justify-center'><button style={{padding: '1rem'}} className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[185px]'>Log In</button></div>
          </form>
        </div>
      </div>
      {
        showForgetPassword && (
          <Forgetpassword showForgetPassword={showForgetPassword} setShowForgetPassword={setShowForgetPassword}/>
        )
      }
    </div>
  )
}

export default Login