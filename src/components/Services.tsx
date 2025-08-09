"use client";
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services'
            className='w-full px-[12%] py-10 scroll-mt-20 '
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center text-lg mb-2'
            >
                What I Offer
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl'
            >
                My Services
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid md:grid-cols-4 grid-cols-[repeat(auto-fit,_minimax(200px,_1fr))] my-10 gap-6 '>
                {serviceData.map(({ icon, title, description, link, soon }, index) => (
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:shadow-[#000] hover:shadow-sm hover:-translate-y-1 duration-500'
                    >
                        <Image
                            src={icon}
                            alt='icon'
                            className='w-10'
                        />
                        <h3 className='text-lg my-4'>{title}</h3>
                        <p className='text-sm leading-5'>{description}</p>
                        <a
                            href={link}
                            className='flex items-center gap-2 text-sm mt-5'
                        >
                            Read more
                            <Image
                                src={assets.right_arrow}
                                alt='rightarw'
                                className='w-4'
                            />
                        </a>
                        <p className='text-red-500 text-sm mt-3'>{soon}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services