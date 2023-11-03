import React from 'react'
import { motion } from 'framer-motion'

const Scroller = () => {
    return (
        <div>
                <a href="#about">
            <div className='bg-[#181E23] xs:bottom-10 bottom-32 w-full flex justify-center items-center  z-0 '>
                    <div className={`w-[35px] h-[64px] border-[#505357] border-4 
           rounded-3xl flex justify-center items-start p-2 z-50`}>
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className={`w-3 h-3 rounded-full bg-secondary`}
                        />
                    </div>

            </div>
                </a>
        </div>
    )
}

export default Scroller
