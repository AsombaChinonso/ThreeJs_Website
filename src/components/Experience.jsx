import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css"
import { fadeIn, textVariant } from '../utils/motion'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'

const ExperienceCard = ({experience, index}) => {
  return (
    <>
      <VerticalTimelineElement 
      contentStyle={{background: "#232930", color: "#fff"}} contentArrowStyle={{borderRight:"7px solid #232631"}} 
      date={experience.date} 
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className={`flex justify-center items-center w-full h-full`}>
          <img src={experience.icon} alt={experience.company_name} className='w-[65%] h-[65%] object-contain' />
        </div>
      }
      >
        <div>
          <h3 className={`font-bold text-white  text-[24px]`}>{experience.title}</h3>
          <p className={`text-secondary text-[16px] font-semibold `} style={{margin:0}}>{experience.company_name}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1  tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      </VerticalTimelineElement>
    </>
  )
}


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-300`}>Completed Projects</p>
        <h2 className={`${styles.sectionHeadText}  dark:text-[#181E23]`}>case studies</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className={`mt-4 dark:text-[#181E23] text-white-100 ${styles.heroSubText}`}>
      Through challenging core assumptions, we shape the products and services that improve the lives of thousands every single day.
      </motion.p>


    <div className='mt-20 flex flex-col'>

    
      <VerticalTimeline>
        {experiences.map((experience, index) =>(
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>

    </>
  )
}

export default SectionWrapper (Experience,  "experience")