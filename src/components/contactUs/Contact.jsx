import React, { useState } from 'react'
import ContactUs from '../../assets/lucullusAbout.png'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";

export const ContactUsForm = ({showContactUs, setShowContactUs}) =>(
  <section className='fixed top-8 inset-0 z-50 contact flex items-center justify-center bg-opacity-50 h-[]'>
    <div className={showContactUs ? 'overlays' : ''}
    onClick={() => setShowContactUs(false)}
    ></div>

    <div style={{padding: '1rem'}} className='bg-white w-5/6 sm:w-[500px] rounded-[15px] explore'>
      <div className='flex items-center justify-between'>
        <p></p>
        <p className='text-[22px] md:text-[28px] font-[600] text-[#094C41]'>Contact Us</p>
        <p><RxCross2 
        className='cursor-pointer text-[1.5rem]' 
        onClick={() => setShowContactUs(false)}
        /></p>
      </div>
      <div style={{padding: '1rem'}} className='mt-6'>
        <form action="">
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 justify-between flex-wrap md:flex-nowrap w-full'>
              <div className='w-full'>
                <label className='text-[15px]' htmlFor="">First Name </label>
                <input
                style={{padding: '.4rem'}}
                className='rounded-[10px] bg-[#F5F5F5] w-full'
                type="number" />
              </div>
              <div className='w-full'>
                <label className='text-[15px]' htmlFor="">Phone Number</label>
                <input
                style={{padding: '.4rem'}}
                className='rounded-[10px] bg-[#F5F5F5] w-full'
                type="text" />
              </div>
            </div>
            <div className='flex items-center gap-2 justify-between flex-wrap md:flex-nowrap w-full'>
              <div className='w-full'>
                <label className='text-[15px]' htmlFor="">Email Address </label>
                <input
                style={{padding: '.4rem'}}
                className='rounded-[10px] bg-[#F5F5F5] w-full'
                type="number" />
              </div>
              <div className='w-full'>
                <label className='text-[15px]' htmlFor="">Company Name</label>
                <input
                style={{padding: '.4rem'}}
                className='rounded-[10px] bg-[#F5F5F5] w-full'
                type="text" />
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-[15px]' htmlFor="">Reason for Reaching out to us</label> <br />
              <textarea
              placeholder='Box allows 400 characters'
              style={{padding: '.4rem'}} 
              className='rounded-[10px] bg-[#F5F5F5] w-full h-[7rem]'
              type="email" />
            </div>
          </div>
          <div style={{marginTop: '1rem'}} className='flex items-center justify-center text-white'><button style={{padding: '1rem'}} className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[185px]'>Send</button></div>
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
        <button 
        style={{padding: '.5rem 1rem', marginTop: '.5rem'}} 
        className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[185px] text-white hidden md:block'
        onClick={() => setShowContactUs(true)}
        >Contact Us</button>
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
          <ContactUsForm setShowContactUs={setShowContactUs} showContactUs={showContactUs}/>
        )
      }
    </>
  )
}

export default Contact