import React from 'react'
import ContactUs from '../../assets/lucullusAbout.png'

const Contact = () => {
  return (
    <section style={{padding: '2rem'}} className='flex items-center gap-8 justify-center flex-wrap md:flex-nowrap'>
      <div className='w-full sm:w-5/6 md:w-3/6'><img src={ContactUs} alt="" /></div>
      <div className='w-full sm:w-5/6 md:w-3/6 leading-[20px] md:leading-[30px] lg:leading-[46px]'>
          <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[17px] md:text-[28px] lg:text-[39px]'>Are you an Individual Investor or Institution Allocator looking to Meet our Team</h2>
          <p className='text-[13px] md:text-[18px] lg:text-[21px] font-[400] md:leading-[41px]'>We are located in Short Hills, New Jersey. Use this Contact Form to Reach out to us!</p>
      </div>
    </section>
  )
}

export default Contact