import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='text-center text-4xl'>
                <div className='flex items-center gap-2 w-max mx-auto text-sm'>
                    <Image
                        src={assets.mail_icon}
                        alt=''
                        className='w-4'
                    />
                    mosesajagbe2@gmail.com
                </div>
            </div>

            <div className='sm:flex items-center justify-between text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Moses Ajagbe. All rights reserved.</p>
                <ul className='flex justify-center items-center gap-10 mt-4 sm:mt-0'>
                    <li>
                        <a
                            target='_blank'
                            href="https://github.com/TheSilverbirdSage">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            href="https://www.linkedin.com/in/oluwanifemi-moses-ajagbe-183080370">
                            LinkedIn 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer