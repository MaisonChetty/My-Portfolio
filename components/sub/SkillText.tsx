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

      <h2 className="pb-[clamp(2rem,3vw,2.5rem)] text-center text-[clamp(1.875rem,3vw,3.25rem)] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {title}
      </h2>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='mb-[15px] mt-[10px] text-center text-[clamp(1.25rem,2.1vw,2.25rem)] font-medium text-white'
        >
            {subtitle}
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive mb-8 mt-[10px] text-center text-[clamp(1rem,1.4vw,1.25rem)] text-gray-200'
        >
            {tagline}
        </motion.div>
    </div>
  )
}

export default SkillText
