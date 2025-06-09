import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link';

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work'
            className='w-full px-[12%] py-10 scroll-mt-20 '>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center text-lg mb-2'
            >
                My Projects
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl'
            >
                My Latest Projects
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid md:grid-cols-4 grid-cols-[repeat(auto-fit,_minimax(200px,_1fr))] my-10 gap-5'
            >
                {workData.map((project, index) => (
                    <Link
                        key={index} // Always use a unique key when mapping over lists
                        href={project.link} // Use the link property from your workData
                        target={project.link.startsWith('http') ? '_blank' : '_self'}
                        rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        >
                            <div className='flex items-center justify-between bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 duration-500 group-hover:bottom-7 '>
                                <div>
                                    <h2 className='font-semibold text-black'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='flex items-center justify-center broder border-black rounded-full w-9 aspect-square shadow-2xl group-hover:bg-lime-300 transition'>
                                    <Image
                                        src={assets.send_icon}
                                        alt='send'
                                        className='w-5'
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                href="https://github.com/TheSilverbirdSage"
                className='flex items-center justify-center gap-2 w-max border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:shadow-2xl'
            >
                Show More
                <Image
                    src={assets.right_arrow_bold}
                    alt='rightarwbold'
                    className='w-4'
                />
            </motion.a>
        </motion.div>
    )
}

export default Work
