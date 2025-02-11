import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/lucullusLogo.png'


const items = [
  {id: 1, text: 'Home', link: '/'},
  {id: 1, text: 'About', link: '/#about'},
  {id: 1, text: 'Strategy', link: '/strategy'},
]

const Navbar = () => {
  return (
    <div style={{padding: '1rem 1.5rem'}} className='bg-white flex items-center h-[58px] rounded-[50px] justify-between px-10 py-2 w-full'>
      <div><img src={Logo} alt="" /></div>
      <ul className='flex flex-row items-center gap-10 text-[#094C41] text-[16px]'>
        {
          items.map((item, index) =>(
            <li key={index}>
              {
                item.link.startsWith('/#') ? (
                  <a href="">{item.text}</a>
                ):(
                  <Link>{item.text}</Link>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar