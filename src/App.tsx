
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Index from './pages'
import About from './pages/about'
import Menu from './pages/menu'
import Dropdown from './components/Dropdown'
import { useEffect, useState } from 'react'
import Contact from './pages/contact'


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
         <Route  path="/" element={<Index/>} />
         <Route  path="/menu" element={<Menu/>} />
         <Route  path="/about" element={<About/>} />
         <Route  path="/contact" element={<Contact/>} />
         </Routes>
      <Footer/>
      </>
  )
}
