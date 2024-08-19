import './App.css'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Prising from './components/Prising'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Working from './components/Working'

function App() {


  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Working />
      <Prising />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
