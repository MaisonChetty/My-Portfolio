"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight} from '@/utils/motion'

type Props = {
  title: string
  subtitle: string
  tagline: string
}

const SkillText = ({ title, subtitle, tagline }: Props) => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center z-[50]'>

      <h2 className="pb-8 text-center text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 sm:pb-10 sm:text-4xl lg:text-5xl 2xl:text-6xl">
        {title}
      </h2>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='mb-[15px] mt-[10px] text-center text-2xl font-medium text-white sm:text-3xl lg:text-4xl'
        >
            {subtitle}
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive mb-10 mt-[10px] text-center text-base text-gray-200 sm:text-lg lg:text-xl'
        >
            {tagline}
        </motion.div>
    </div>
  )
}

export default SkillText
