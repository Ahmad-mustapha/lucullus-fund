import './hero.css'
import { Navbar } from '../import'
import { Link } from 'react-router-dom'

const Hero = ({ showContactUs, setShowContactUs, detail, title }) => {
  return (
    <div className='hero'>
      <Navbar />
      <section className='flex flex-col items-center justify-center gap-[1.3rem] text-white h-full'>
        <p style={{fontFamily: "var(--font-header)"}}  className='font-[700] text-[29px] md:text-[54px] text-center'>{title}</p>
        <p style={{fontFamily: "var(--font-primary)"}}  className='font-[500] text-[13px] sm:text-[15px] md:text-[17px] lg:text-[23px] text-center max-w-[759px] font-primary'>{detail}</p>
        <button 
        style={{padding: '1rem', fontFamily: "var(--font-primary)"}} 
        className='bg-[#094C41] text-center rounded-[100px] font-[600] text-[15px] w-[192px] font-primary'
        onClick={() => setShowContactUs(true)}
        >Contact Us</button>
      </section>
    </div>
  )
}

export default Hero