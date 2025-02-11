import AboutImage from '../../assets/lucullusAbout.png'
const About = () => {
  return (
    <div style={{padding: '2rem', marginTop: '2rem'}} className='flex items-center gap-8 justify-center flex-wrap md:flex-nowrap'>
        <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[22px] sm:text-[35px] lg:text-[49px] block md:hidden'>About Us</h2>
        <div className='w-full sm:w-5/6 md:w-3/6'><img src={AboutImage} alt="" /></div>
        <div className='w-full sm:w-5/6 md:w-3/6 leading-[30px] lg:leading-[46px]'>
            <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[22px] sm:text-[35px] lg:text-[49px] hidden md:block'>About Us</h2>
            <p className='text-[13px] md:text-[18px] lg:text-[21px] font-[400] text-center md:text-left'>The Lucullus Fund was founded in 2023. The firm invests in public equities in a market neutral manner. We employ a rigorous analytical process, assisted by artificial intelligence and coupled with sound risk management. We have consistently delivered returns that are significantly above risk free rates and uncorrelated to passive markets. Our founder has been trading financial markets for over 30 years.</p>
        </div>
    </div>
  )
}

export default About