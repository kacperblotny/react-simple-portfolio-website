import Navbar from './components/navbar'
import Footer from './components/footer'
import Tester from './components/tester'
import Landing from './components/landingpage'
import About from './components/about'

function App() {
  return (
    <div className='h-screen bg-white dark:bg-primaryBG'>
      <Navbar />
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
