import React from 'react'

const Footer = () => {
    return (
        <footer className='relative overflow-hidden pt-16 text-[var(--text-color)]'>
            <div className='mx-[10%] border-t border-gray-300/70 py-8 sm:flex sm:items-center sm:justify-between'>
                <div className='text-center sm:text-left'>
                    <p className='text-lg font-semibold'>Moses Ajagbe</p>
                    <a
                        href='mailto:mosesajagbe2@gmail.com'
                        className='mt-2 block text-sm opacity-70 hover:opacity-100'
                    >
                        mosesajagbe2@gmail.com
                    </a>
                </div>

                <ul className='mt-6 flex justify-center items-center gap-8 text-sm sm:mt-0'>
                    <li>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-gray-500'
                            href="https://github.com/TheSilverbirdSage">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-gray-500'
                            href="https://www.linkedin.com/in/oluwanifemi-moses-ajagbe-183080370">
                            LinkedIn 
                        </a>
                    </li>
                </ul>
            </div>

            <div className='mx-[5%] mt-4'>
                <div
                    role='img'
                    aria-label='Tech skyline silhouette'
                    className='footer-silhouette'
                />
            </div>

            <p className='footer-copy absolute bottom-5 left-1/2 w-full -translate-x-1/2 px-6 text-center text-xs'>
                © 2025 Moses Ajagbe. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
