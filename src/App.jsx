// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Tester from './components/Tester'
import Landing from './components/Landingpage'
import About from './components/About'
import Socials from './components/Socials'

function App() {
  return (
    <div className='h-screen bg-white dark:bg-primaryBG'>
      {/* <Navbar /> */}
      <Socials />
      <Landing />
      <About />
      <div className='grid h-80 content-center'>
        <Tester />
      </div>

      <Footer />
    </div>
  )
}

export default App
