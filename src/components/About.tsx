"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { infoList, assets, toolsData } from '@/assets/assets';
import UserImage from "@/assets/profile.jpeg"
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about'
            className='w-full px-[12%] py-10 scroll-mt-20 '>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center text-lg mb-2'
            >
                Introduction
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl'
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col lg:flex-row items-center w-full gap-20 my-20'
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image
                        src={UserImage}
                        alt='user'
                        className='w-full rounded-3xl'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className='flex-1'
                >
                    <p className='mb-10 max-w-2xl'>
                        I am an experienced Front End Developer with over 3 years of professional training in my field.
                        I am focused on user-centered development, and i've had the privilege to collaborate with multiple organisations,
                        contributing to their sucess and growth.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                    >
                        {infoList.map((service, index) => ( // No explicit type needed here, TypeScript infers it!
                            <motion.li
                                whileInView={{ scale: 1.05 }}
                                key={index}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[#000] hover:shadow-2xl"
                            >
                                {/* Display the icon */}
                                {service.icon && (
                                    <Image
                                        src={service.icon}
                                        alt={service.title || 'Service Icon'} // Add a fallback alt text
                                        className="w-7 mt-3"
                                    />
                                )}
                                <h3 className="my-4 font-semibold">{service.title}</h3>
                                <p className="text-sm">{service.description}</p>
                                {/* {service.link && ( // Only show link if it exists
                                    <a href={service.link} className="text-blue-600 hover:underline">
                                        Learn More
                                    </a>
                                )} */}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <h4 className='my-6 text-gray-700'>Tools I Use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li
                                key={index}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                            >
                                <Image
                                    src={tool}
                                    alt='Tool'
                                    className='w-5 sm:w-7'
                                />
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About