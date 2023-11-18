import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './sections/Home'
import AboutUs from './sections/AboutUs'
import Skills from './sections/Skills'
import ContactMe from './sections/ContactMe'
import { arrowUpHandle, onScroll } from './components/ArrowUpHandle'

function App() {
  const [scrollPos,setScrollPos] = useState(0);
    const [visible,setVisible] = useState(false);
    
    const handleScroll = () =>{
        const currentScrollPos = window.scrollY;
        
        setVisible(currentScrollPos < scrollPos)||(scrollPos > currentScrollPos && scrollPos - currentScrollPos > 70)  ;

        setScrollPos(currentScrollPos);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return() => window.removeEventListener("scroll",handleScroll);

        
    },[visible, scrollPos, handleScroll])
  

  return (
   <div className=' bg-slate-50' >
   <Header />
    <Home />
    <AboutUs />
    <Skills />
    <ContactMe />
    <div className='relative'>
      <button className={`fixed bottom-1 right-1 p-3 bg-primary-color rounded-full text-white text-lg ${ visible ? "hidden" : "visible"}`} onClick={arrowUpHandle} id='arrow-up'> <i className='bx bxs-chevron-up'></i></button>
    </div>
    
   </div>
  )
}

export default App
