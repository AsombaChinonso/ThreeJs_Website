import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const TestimonialCard = ({index, testimonial, name, designation, company, image}) => {
  return (
    <div className=''>
      <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={`bg-[#232930] dark:bg-[#f5f7fc] p-10 rounded-3xl xs:w-[320px] w-full dark:shadow-secondary shadow-sm shadow-primary`}>
        <p className={`text-white dark:text-[#181e23] font-black text-[48px] `}>"</p>

        <div className='mt-1'>
          <p className='text-white  dark:text-[#181e23] tracking-wider text-[18px]'>{testimonial}</p>

          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className="flex-1 flex flex-col">
              <p className='text-white  dark:text-[#181e23] font-medium text-[16px]'><span className='blue-text-gradient'>@</span>{name}</p>
              <p className='text-secondary mt-1 text-[12px]'>{designation}, {company}</p>
            </div>

            <div>
              <img src={image} alt="image-feedback" className={`w-10 h-10 object-cover rounded-full `} />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#DEDEDE] dark:bg-[#fff rounded-[20px] `}>
      <div className={`${styles.padding} bg-[#232930]  dark:bg-[#F5F7FC] rounded-2xl min-h-[300px] `}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-gray-300 `}>Testimonials</p>
          <h2 className={`${styles.sectionHeadText} dark:text-[#181E23]`}>what they said about us.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 flex flex-wrap gap-10 items-end justify-center`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feedbacks")