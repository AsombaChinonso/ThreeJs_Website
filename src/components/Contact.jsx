import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);


  // template ID - template_nd1cj5c
  // service ID - service_468whcb
  // public KEY - wqpgCBVn0OBifUYoe

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_468whcb",
        "template_nd1cj5c",
        {
          from_name: form.name,
          to_name: "GraphicsHub NG",
          from_email: form.email,
          to_email: "graphicshub2019@gmail.com",
          message: form.message,
        },
        "wqpgCBVn0OBifUYoe"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for emailing us. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className={`flex-[0.75] bg-[#232930] dark:bg-[#fff] p-8 rounded-2xl`}>
        <p className={`${styles.sectionSubText} text-gray-300`}>Get in touch with us</p>
        <h2 className={`${styles.sectionHeadText} dark:text-[#181e2e] `}>Tell us about your project.</h2>

        <form ref={formRef} action="" onSubmit={handleSubmit}
          className={`mt-12 flex flex-col gap-8`}>
          <label className='flex flex-col'>
            <span className={`text-white font-medium mb-4`}>Your Name</span>
            <input type='text' name='name' value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className={`bg-[#181E23] dark:bg-[#f5f7fc] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium`} />
          </label>
          <label className='flex flex-col'>
            <span className={`text-white font-medium mb-4`}>Your Email</span>
            <input type='email' name='email' value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className={`bg-[#181E23] dark:bg-[#f5f7fc] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium`} />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell us about that exciting project'
              className='bg-[#181E23] dark:bg-[#f5f7fc] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#181E23] dark:bg-[#f5f7fc] py-4 px-12 rounded-xl  outline-none 
             text-white dark:text-[#181e23] font-bold shadow-sm shadow-primary dark:shadow-secondary w-fit'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
      className={`xl:flex-1 xl:h-auto md:h-[550px] h-[350px]`}>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")