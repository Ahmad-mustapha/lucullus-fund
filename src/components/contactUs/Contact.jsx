import React, { useState } from 'react'
import ContactUs from '../../assets/lucullusAbout.png'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";

export const ContactUsForm = () =>(
  <section className='flex items-center justify-center'>
    <div style={{padding: '2rem'}} className='bg-red-300 w-[500px]'>
    <div className='flex items-center justify-between'>
      <p></p>
      <p className='text-[28px] font-[600] text-[#094C41]'>Contact Us</p>
      <p><RxCross2 /></p>
    </div>
    <div style={{padding: '1rem'}} className='mt-6'>
    <form action="">
      <div className='flex items-center gap-4 justify-between mb-4 flex-wrap md:flex-nowrap w-full'>
        <div className='w-full'>
          <label htmlFor="">First Name <span className='text-red-600'>*</span></label>
          <input
          className='border-[1px] rounded-xl p-2 w-full'
          type="number" />
        </div>
        <div className='w-full'>
          <label htmlFor="">Last Name</label>
          <input
          className='border-[1px] rounded-xl p-2 w-full'
          type="text" />
        </div>
      </div>
      <div className='mb-4'>
        <label htmlFor="">Email Address</label> <br />
        <input 
        className='border-[1px] rounded-xl p-2 w-full'
        type="email" />
      </div>
      <div className='flex items-end gap-3 mt-6 w-full flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-5/6'>
          <label htmlFor="">Your Role</label>
          <input 
            placeholder='Search For Members'
            type="text" 
            className='w-full border-[1px] border-slate-300 rounded-xl p-2 text-[14px]'/>
        </div>
      </div>
        {/* <button className='mt-6 text-white text-[18px] font-[600] bg-[#2C8CFB] p-[10px] rounded-xl w-full flex items-center justify-center gap-1'><IoCheckmarkCircleOutline /> Save Changes</button> */}
    </form>
  </div>
  </div>
  </section>
)


const Contact = () => {
  const [ showContactUs, setShowContactUs ] = useState(false)
  return (
    <>
      <section style={{padding: '2rem'}} className='flex items-center gap-8 justify-center flex-wrap-reverse md:flex-nowrap'>
      <div className='w-full sm:w-5/6 md:w-3/6'><img src={ContactUs} alt="" /></div>
      <div className='w-full sm:w-5/6 md:w-3/6 leading-[24px] md:leading-[30px] lg:leading-[46px] flex flex-col gap-4'>
        <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[17px] sm:text-[23px] md:text-[28px] lg:text-[39px] text-center md:text-left'>Are you an Individual Investor or Institution Allocator looking to Meet our Team</h2>
        <p className='text-[13px] md:text-[18px] lg:text-[21px] font-[400] md:leading-[41px] text-center md:text-left'>We are located in Short Hills, New Jersey. Use this Contact Form to Reach out to us!</p>
        <button style={{padding: '.5rem 1rem', marginTop: '.5rem'}} className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[185px] text-white hidden md:block'>Contact Us</button>
      </div>
      </section>
      <div className='flex items-center justify-center'>
        <button 
        style={{padding: '1rem'}} 
        className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[185px] text-white block md:hidden'
        onClick={() => setShowContactUs(true)}
        >Contact Us</button>
      </div>
      {
        showContactUs && (
          <ContactUsForm />
        )
      }
    </>
  )
}

export default Contact