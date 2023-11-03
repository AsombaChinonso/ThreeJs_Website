import React from 'react'
import { motion } from "framer-motion"
import { styles } from '../styles'
import { ComputersCanvas, EarthCanvas } from './canvas'

const Hero = (props) => {
  console.log(props.theme)
  return (
    <section className={`relative w-full h-screen mx-auto mt-16 z-0 dark:bg-[#f6f6f6]`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[50px] max-w-7xl flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#F08803]' />
          <div className='w-1 sm:h-80 h-40 orange-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#DEDEDE] mt-8 dark:text-[#181e23] `}>
            We are crafting a <br className='sm:block hidden' />  <span className='text-[#F08803]'>digital experience</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 dark:text-[#181e23]`}>Helping UI/UX designers develop & craft 3D visuals, user interfaces & web applications.</p>
        </div>

        {/* Computer Canvas */}

      </div>
        <ComputersCanvas className={`md:hidden sm:hidden block`} />

      <div className={``}>

      </div>
      {/* <EarthCanvas /> */}



    </section>
  )
}

export default Hero