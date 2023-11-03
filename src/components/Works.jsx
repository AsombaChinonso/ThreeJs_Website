import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, online } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#232930] dark:bg-[#fff] p-5 rounded-2xl xs:w-[320px] w-full shadow-lg'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-[#F7F7F7]  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-[#DEDEDE] hover:border-[#fff] hover:bg-[#F08803] border-2 shadow-sm shadow-secondary'
            >
              <img
                src={online}
                alt='source code'
                className='w-1/2 h-1/2 object-contain hover:text-white'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[#F7F7F7] dark:text-[#181E23] font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
     <div className={``}>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-300 `}>Completed Projects</p>
        <h2 className={`${styles.sectionHeadText} dark:text-[#181E23] `}>projet réussi</h2>
      </motion.div>

      <div className=''>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className={`mt-4 text-white-100 ${styles.heroSubText} dark:text-[#181E23]`}>
          Stand aware of accomplishments, stay awake to achieve more.
        </motion.p>

      </div>
     </div>

        <div className='mt-20  flex flex-wrap gap-10 items-center justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(Works, "work")