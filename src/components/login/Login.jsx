import React from 'react'
import { TfiLock } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import './login.css'
const Login = () => {
  return (
    <div style={{padding: '2rem'}}  className=''>
      <div className='login flex flex-col items-center justify-center text-white'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h2 className='text-[49px] font-[700]'>Investor Log In</h2>
          <p className='text[20px] font-[400] max-w-[500px] text-center'>If you are an Investor in the Lucullus Fund Log in here to see your performance</p>
        </div>
        <div>
          <form action="">
            <div style={{marginBottom: '1rem', marginTop: '1rem'}} className='w-[450px] relative'>
              <label htmlFor="" className='text-[15px] font-[500]'>Email</label> <br />
              <input
              style={{padding: '.5rem'}}
              className='w-full rounded-md bg-slate-500'
              type="email" />
              <span className='absolute left-2 bottom-[10px] text-[17px]'><MdOutlineMailOutline /></span>
            </div>
            <div className='w-[450px] relative'>
              <label htmlFor="" className='text-[15px] font-[500]'>Pasword</label> <br />
              <input
              style={{padding: '.5rem'}}
              className='w-full rounded-md bg-slate-500'
              type="password" />
              <span className='absolute left-2 bottom-[10px] text-[17px]'><TfiLock /></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login