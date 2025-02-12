import FounderImage from '../../assets/lucullusfounder.png'

const Founder = () => {
  return (
    <div style={{marginTop: '2rem'}} className='pad flex gap-8 justify-center flex-wrap md:flex-nowrap'>
      <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[22px] sm:text-[35px] lg:text-[49px] block md:hidden font-[--font-header] text-center md:text-start'>Meet our Chief Investment Officer and Founder</h2>
      <div className='w-full sm:w-5/6 md:w-3/6'><img src={FounderImage} alt="" /></div>
      <div className='w-full sm:w-5/6 md:w-3/6 leading-[33px] lg:leading-[46px]'>
        <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[22px] sm:text-[35px] lg:text-[49px] hidden md:block font-[--font-header]'>Meet our Chief Investment Officer and Founder</h2>
        <p className='text-[13px] md:text-[18px] lg:text-[21px] font-[400] text-center md:text-left font-primary'>David Hoffman is our CIO and Founder. His 30-year trading career as one of the leading macro traders took root at Deutsche Bank and Merrill Lynch from 1995 to 2008. After the Bank of America merger, he transitioned into a senior management role for the interest rate and FX teams, first in New York and then as the head of Japan and Australia. In 2012 he became a portfolio manager (PM) at two of the world’s largest hedge funds with a focus on diversified macro strategies in fixed income, equities, and FX. His ability to generate immediate returns while utilizing derivative structures to mitigate significant drawdowns made him a leading performer. David was the Head of Proprietary Trading for Nomura Securities in New York from 2015-2019 and founded The Lucullus Fund in late 2019, and has been trading the fund with live capital since late 2023.</p>
      </div>
    </div>
  )
}

export default Founder