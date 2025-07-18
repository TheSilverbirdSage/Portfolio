import Image from 'next/image'
import React from 'react'
import Profile from "@/assets/profile.jpeg"
import Wave from "@/assets/hand-icon.png"
import ArrowW from "@/assets/right-arrow-white.png"
import Download from "@/assets/download-icon.png"
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-11/12 max-w-3xl textcenter mx-auto h-screen">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image
                    src={Profile}
                    alt='ProfileImage'
                    className='rounded-full w-32 hidden md:block lg:block'
                />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hey! Im Moses Ajagbe
                <Image
                    src={Wave}
                    alt='wave'
                    className='w-6'
                />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[66px] px-6 md:px-0'>Front End Web Developer Based In Nigeria.</motion.h1>
            <motion.p
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto px-6 md:px-0'>Im a front end web developer with over 3 years of experience in creating responsive, UI centered designs.</motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className='flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500 bg-black text-white h-15'
                >
                    contact me
                    <Image
                        src={ArrowW}
                        alt='arrowwhite'
                        className='w-4'
                    />
                </motion.a>

                <motion.a
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/OluwanifemiMosesAjagbe.pdf"
                    download="OluwanifemiMosesAjagbe_CV.pdf"
                    className='flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500 h-15 w-40'>
                    my CV
                    <Image
                        src={Download}
                        alt='download'
                        className='w-4'
                    />
                </motion.a>
            </div>
        </div>
    )
}

export default Hero