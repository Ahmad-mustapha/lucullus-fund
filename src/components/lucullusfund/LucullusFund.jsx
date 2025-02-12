import React from 'react'
import LucullusFundImage from '../../assets/lucullusfund.png'

const LucullusFund = () => {
  return (
    <div style={{marginTop: '2rem'}} className='pad flex flex-row-reverse gap-8 justify-center flex-wrap md:flex-nowrap'>
        <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[22px] sm:text-[35px] lg:text-[49px] block md:hidden font-[--font-header]'>The Lucullus Fund</h2>
        <div className='w-full sm:w-5/6 md:w-3/6'><img src={LucullusFundImage} alt="" /></div>
        <div className='w-full sm:w-5/6 md:w-3/6 leading-[30px] lg:leading-[46px]'>
            <h2 style={{marginBottom: '1rem'}} className='text-[#094C41] font-[700] text-[22px] sm:text-[35px] lg:text-[49px] hidden md:block font-[--font-header]'>The Lucullus Fund</h2>
            <ul className='fund text-[13px] md:text-[18px] lg:text-[21px] font-[400] text-left font-primary'>
                <li>Primary industry focus: U.S.A. Consumer, Energy, Financials, Industrials, Technology, Healthcare and Transportation.</li>
                <li>This results in a diversified, idiosyncratic portfolio delivering highly uncorrelated returns.</li>
                <li>The Equity Strategy is run with low net exposure to both the market as a whole and to any single stock risk.</li>
                <li>We seek to deliver risk adjusted returns through a fundamental research process overlayed with the use of artificial intelligence. 
                    This multi-faceted research process allows us to follow thousands of stocks at once and be 
                    prepared to act when fundamentals change from the on-going accepted narrative.
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LucullusFund