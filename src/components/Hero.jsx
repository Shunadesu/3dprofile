import React from 'react'
import {motion} from 'framer-motion'

import { style } from '../style'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex-row items-start isolate gap-5 flex`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${style.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'> Sunny </span></h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            I want to be a professional front-end developer
          </p>
        </div>

      </div>
        <ComputersCanvas />

        <div className='absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2 border-4 border-secondary'>
              <motion.dev 
                animate={{y:[0, 24, 0]}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType:'loop'
                }}

                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero