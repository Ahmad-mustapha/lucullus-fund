import { Footer, About, Hero, Login, Contact} from '../../components/import'

const Home = ({ showContactUs, setShowContactUs }) => {
  return (
    <div className=''>
      <Hero 
      title='The Lucullus Fund'
      detail='Fundamental Research and Leading Edge AI working together for better Investment outcomes'
      showContactUs={showContactUs} 
      setShowContactUs={setShowContactUs} 
      />
      <About />
      <Login />
      <Contact showContactUs={showContactUs} setShowContactUs={setShowContactUs} />
      <Footer />
    </div>
  )
}

export default Home