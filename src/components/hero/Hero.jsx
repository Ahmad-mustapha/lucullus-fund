import './hero.css'
import { Navbar } from '../import'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar />
      <section className='flex flex-col items-center justify-center gap-6 text-white h-full'>
        <p className='font-[700] text-[29px] md:text-[54px] font-[Quattrocento] text-center'>The Lucullus Fund</p>
        <p className='font-[500] text-[23px] text-center max-w-[759px] font-[Montserrat]'>Fundamental Research and Leading Edge AI working together for better Investment outcomes</p>
        <button style={{padding: '1rem'}} className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[192px]'>Contact Us</button>
      </section>
    </div>
  )
}

export default Hero