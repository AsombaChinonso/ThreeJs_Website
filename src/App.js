import { BrowserRouter } from "react-router-dom";
import './App.css';
import { Navbar, Hero, About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas, Scroller, Footer } from "./components"
import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom"

import { styles } from './styles'
import { navLinks } from "./constants"

import { menu, close, sun, moon, gh_dark, gh_light } from './assets'



function App() {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState("")

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <BrowserRouter>
      <div className=" relative z-0 bg-primary">
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
          {/* start */}
          <nav className={`${styles.paddingX} w-full flex items-center py-1 top-0  bg-[#232930] fixed z-50
     dark:bg-[#fff] shadow-sm shadow-[#232930] dark:shadow-sm dark:shadow-[#fff] `}>

            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
              <Link to="/" className='flex items-center gap-2' onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}>
                <img src={theme === "dark" ? gh_dark : gh_light} alt='logo' className='w-20 h-20 rounded-full  object-contain' />
                <span className='text-[#DEDEDE] font-bold text-[13px]  md:text-[16px] sm:text-[10px]  cursor-pointer dark:text-[#181E23]'>
                  FOR UI/UX DESIGNERS.
                  <p className={`text-[6px]  md:text-[10px] sm:text-[4px] font-normal uppercase text-[#c3c3c3] dark:text-[#181E23]`}>Full-Stack Development | Design Consulating Firm</p>
                </span>
              </Link>

              {/* Ul */}
              <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((navLink) => (
                  <li key={navLink.id}
                    className={`${active === navLink.title ? "text-white dark:text-[#181E23] " : "text-gray-400"} hover:text-white text-[16px] font-normal cursor-pointer text-[#DEDEDE] dark:text-[#505357]`} onClick={() => setActive(navLink.title)}>
                    <a href={`#${navLink.id}`}>{navLink.title}</a>
                  </li>
                ))}

                {
                  theme === "dark" ?

                    <li className=''>
                      <img src={moon} alt="light" className={`moon cursor-pointer w-[22px] h-[22px`} onClick={handleThemeSwitch} />
                    </li>
                    :

                    <li className=''>
                      <img src={sun} alt="light" className={`sun cursor-pointer w-[22px] h-[22px`} onClick={handleThemeSwitch} />
                    </li>


                }



              </ul>

              {/* Menu-icon */}
              <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt='menu' className={`w-[28px] h-[28px] object-contain cursor-pointer`} onClick={() => setToggle(!toggle)} />

                <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl  `}>
                  <ul className='list-none flex flex-col items-start justify-end gap-4'>
                    {navLinks.map((navLink) => (
                      <li key={navLink.id} className={`${active === navLink.title ? "text-white" : "text-secondary"} font-poppins hover:text-white text-[16px] font-normal cursor-pointer`} onClick={() => {
                        setToggle(!toggle);
                        setActive(navLink.title)
                      }}>
                        <a href={`#${navLink.id}`}>{navLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </nav>
          {/* End */}
          <Hero theme={theme} />
        </div>

        {/* <Scroller /> */}
        <About theme={theme} />
        <Experience />
        <Works />
        <Tech />
        <Feedbacks />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
