import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon, subtitle }) => {
  return (
    <>
      <Tilt className={`xs:w-[250px] w-full `}>
        <motion.div variants={fadeIn("right", "Spring", 0.5 * index, 0.75)}
          className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card box-shadow`}>
          <div
            className='bg-[#232930] dark:bg-[#FFFFFF] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}>
            <img src={icon} alt={title} className='w-16 h-16' />
            <h3 className='text-white dark:text-[#232930] text-[20px] font-bold text-center'>{title}</h3>
            <p className='text-white-100 dark:text-[#232930] text-[10px] font-normal text-center leading-3'>{subtitle}</p>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <div id='about' className={`dark:bg-[#FFFFFF] dark:rounded-[60px] dark:p-20  mt-14 `}>
      
      <motion.div >
        <p className={`${styles.sectionSubText} text-gray-300 dark:text-[#505357]`}>OUR</p>
        <h2 className={`${styles.sectionHeadText} dark:text-[#181E23] `}>services.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className={`mt-4 text-white-100 ${styles.heroSubText} leading-10 dark:text-[#181E23]`}>
      We serve individuals, organizations, businesses, and startups that keep our globe moving. Let's work together to bring your ideas to life!
      </motion.p>


      {/* Cards section */}
      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper (About, "about") 