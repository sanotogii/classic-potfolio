"use client"
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import profilePic from '../images/profile.png'

const Intro = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start md:space-x-8'>
    <Image
      src={profilePic}
      alt="Khalid"
      width={200}
      height={200}
      className="mt-8 rounded-2xl"
      priority
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

        <h1 className="text-4xl pt-8 font-bold font-serif">Hey, I'm Khalid.</h1>
        <p className='text-gray-600 text-sm pt-3'>📍 Tangier, Morocco 🇲🇦</p>
        <p className='pt-4'>I'm a full stack software developer based in Tangier, Morocco with a passion for creating beautiful and functional web applications.</p>
    </motion.div>   
    </div>

  )
}

export default Intro
