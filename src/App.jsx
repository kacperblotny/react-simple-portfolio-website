import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Tester from './components/Tester'
import Landing from './components/Landingpage'
import About from './components/About'
import Socials from './components/Socials'
import Slider from './components/Slider'

function App() {
  return (
    <div className='h-screen bg-white dark:bg-primaryBG'>
      <Navbar />
      <Socials />
      <Landing />
      <About />
      <Slider />

      <Footer />
    </div>
  )
}

export default App
