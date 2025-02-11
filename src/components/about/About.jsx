import AboutImage from '../../assets/lucullusAbout.png'
const About = () => {
  return (
    <div style={{padding: '2rem'}} className='flex items-center gap-8'>
        <div className='w-3/6 h-[500px]'><img src={AboutImage} alt="" /></div>
        <div className='w-3/6 leading-[46px]'>
            <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[49px]'>About Us</h2>
            <p className='text-[21px] font-[400]'>The Lucullus Fund was founded in 2023. The firm invests in public equities in a market neutral manner. We employ a rigorous analytical process, assisted by artificial intelligence and coupled with sound risk management. We have consistently delivered returns that are significantly above risk free rates and uncorrelated to passive markets. Our founder has been trading financial markets for over 30 years.</p>
        </div>
    </div>
  )
}

export default About