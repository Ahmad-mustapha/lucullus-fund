import React from 'react'
import { RxCross2 } from 'react-icons/rx'
const Enteremail = ({ setStep, closeModal }) => {
    const handleResetClick = (e) => {
        e.preventDefault();
        setStep(2); // Move to Step 2
      };
  return (
    <div style={{padding: '1rem'}} className='bg-white w-5/6 sm:w-[500px] rounded-[15px] explore'>
      <div className='flex items-center justify-between'>
        <p></p>
        <p className='text-[22px] md:text-[28px] font-[600] text-[#094C41]'>Forget Password?</p>
        <p><RxCross2 
        className='cursor-pointer text-[1.5rem]' 
        onClick={closeModal}
        /></p>
      </div>
      <div style={{padding: '1rem'}} className='mt-6'>
        <form action="">
            <div className='w-full'>
                <label className='text-[15px]' htmlFor="">Enter Email Address</label>
                <input
                style={{padding: '.4rem'}}
                className='rounded-[10px] bg-[#F5F5F5] w-full'
                type="email" />
            </div>
            <div style={{marginTop: '1.5rem'}} className='flex items-center justify-center text-white'>
                <button style={{padding: '1rem'}} className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[185px]'
                onClick={handleResetClick}
                >Reset</button></div>
        </form>
      </div>
    </div>
  )
}

export default Enteremail