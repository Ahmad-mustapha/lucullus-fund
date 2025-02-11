import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/lucullusLogo.png'
import './navbar.css'

const items = [
  {id: 1, text: 'Home', link: '/'},
  {id: 1, text: 'About', link: '/#about'},
  {id: 1, text: 'Strategy', link: '/strategy'},
]

export const Sidebar = ({isOpen, setOpenNav}) =>(
  <ul className={`flex flex-col items-center justify-center gap-10 text-[#094C41] text-[16px] h-screen w-[70%] sm:w-[50%] fixed right-0 top-0 z-50 transition-transform duration-500 bg-[#040b16] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    {
      items.map((item, index) =>(
        <li className='relative' key={index}>
          {
            item.link.startsWith('/#') ? (
              <a className='eachlink' href="">{item.text}</a>
            ):(
              <Link className='eachlink'>{item.text}</Link>
            )
          }
        </li>
      ))
    }
  </ul>
)

const Navbar = () => {
  const [ openNav, setOpenNav ] = useState(false)
  const [ activeLink, setactiveLink ]= useState('')

  const handleActive = () =>{
    setactiveLink(link)
    setOpenNav(false)
  }
  const ToggleMenu = () =>{
    setOpenNav(!openNav)
  }
  return (
    <div className=''>
      <nav style={{padding: '1rem 1.5rem'}} className='md:bg-white flex items-center h-[4.6rem] rounded-none md:rounded-[50px] justify-between px-10 py-2 w-full z-30 bg-transparent backdrop-blur-[10px] border-b-[#dfdfdf] border-b-[1px] fixed left-0 top-0 md:sticky md:top-4'>
        <div><img src={Logo} alt="" /></div>
        <ul className='hidden md:flex flex-row items-center gap-10 text-[#094C41] text-[16px]'>
          {
            items.map((item, index) =>(
              <li className='relative' key={index}>
                {
                  item.link.startsWith('/#') ? (
                    <a className='eachlink' href="">{item.text}</a>
                  ):(
                    <Link className='eachlink'>{item.text}</Link>
                  )
                }
              </li>
            ))
          }
        </ul>
      </nav>
      <div className={`menu z-60 fixed top-8 right-[2rem] flex md:hideen flex-col gap-2 cursor-pointer`} onClick={ToggleMenu}>
          <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav? 'rotate-45 translate-y-[12px]': ''}`}></p>
          <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav? 'opacity-0': 'opacity-100'}`}></p>
          <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav? '-rotate-45 -translate-y-[8px]': ''}`}></p>
      </div>
      <Sidebar isOpen={openNav} setOpenNav={setOpenNav}/>
      <div 
        className={`${openNav ? 'bg-transparent backdrop-blur-[10px] h-screen w-full fixed left-0 top-0 z-40': 'hidden'}`}
        onClick={() => setOpenNav()}
      ></div>
    </div>
  )
}

export default Navbar