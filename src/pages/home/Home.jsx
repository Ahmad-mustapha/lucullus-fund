import React from 'react'
import { Footer, About, Hero, Login, Contact} from '../../components/import'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <About />
      <Login />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home