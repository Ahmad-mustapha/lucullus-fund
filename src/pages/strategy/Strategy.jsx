import { Navbar, Footer, Hero, LucullusFund, Founder } from "../../components/import"
import { ContactUsForm } from "../../components/contactUs/Contact"
const Strategy = ({ showContactUs, setShowContactUs }) => {
  return (
    <div>
      <Hero 
      title='Strategy'
      detail='The Lucullus Fund is a Long - Short style Hedge Fund designed to invest primarily in large Cap US equities.'
      showContactUs={showContactUs} 
      setShowContactUs={setShowContactUs} 
      />
      <LucullusFund />
      <Founder />
      <Footer />
      {
        showContactUs && (
          <ContactUsForm setShowContactUs={setShowContactUs} showContactUs={showContactUs}/>
        )
      }
    </div>
  )
}

export default Strategy