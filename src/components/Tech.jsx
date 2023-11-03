import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { styles } from '../styles'


const Tech = () => {
  return (
    <>
      <motion.div>
        {/* <h2 className={`${styles.sectionHeadText} text-center justify-center mb-6`}>tools.</h2> */}
        <p className={`${styles.sectionSubText} text-gray-300`}>tools of warfare</p>
        <h2 className={`${styles.sectionHeadText} dark:text-[#181E23] mb-6`}>our weaponry.</h2>
      </motion.div>
      <div className={`flex flex-row flex-wrap items-center justify-center gap-10 `}>
        {technologies.map((tech) => (
          <div className={`w-28 h-28`} key={tech.name}>
            <BallCanvas icon={tech.icon} />
            <p className='text-white-100  text-[10px] font-normal text-center'>{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")