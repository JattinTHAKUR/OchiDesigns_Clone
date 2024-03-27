import React from 'react'
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import MarqueScroll from './Components/MarqueScroll';
import About from './Components/About';
import OchiEye from './Components/OchiEye';
import Featured from './Components/Featured';
import BehanceCards from './Components/BehanceCards';
import ReadyStart from './Components/ReadyStart';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white' >  
    <Navbar />
    <LandingPage />
    <MarqueScroll />
    <About />
    <OchiEye />
    <Featured />
    <BehanceCards />
    <ReadyStart />
    <Footer />
    </div>
  )
}

export default App;
