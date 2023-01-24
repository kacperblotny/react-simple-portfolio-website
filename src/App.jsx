import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landingpage'
import About from './components/About'
import Socials from './components/Socials'
import Slider from './components/Slider'
import Projects from './components/Projects'
import Touch from './components/Touch'

function App() {
  return (
    <div className='h-screen bg-white dark:bg-primaryBG'>
      <Navbar />
      <Socials />
      <Landing />
      <About />
      <Slider />
      <Projects />
      <Touch />

      <Footer />
    </div>
  )
}

export default App
