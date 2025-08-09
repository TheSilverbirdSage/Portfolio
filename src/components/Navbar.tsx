"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { assets } from '@/assets/assets';
import ArrowDown from "@/assets/arrow-icon.png"
import Close from "@/assets/close-black.png"

const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isMobile, setIsMobile] = useState(false);

    // Effect to handle window resize for responsiveness
    useEffect(() => {
        const handleResize = () => {
            // You can adjust this breakpoint (e.g., 768px for md, 1024px for lg)
            setIsMobile(window.innerWidth < 768);
            // Close drawer if it's open and screen becomes desktop size
            if (window.innerWidth >= 768 && isDrawerOpen) {
                setIsDrawerOpen(false);
            }
        };

        // Set initial state
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDrawerOpen]);

    // State for managing the current theme (light or dark)
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Initialize theme from localStorage or system preference on component mount
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                return storedTheme as 'light' | 'dark';
            }
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'light'; // Default to light if no preference found or not in browser
    });

    // Effect to apply the theme class to the <html> element and persist it
    useEffect(() => {
        if (typeof document !== 'undefined') {
            const root = document.documentElement; // Refers to the <html> tag

            if (theme === 'dark') {
                root.classList.add('dark-mode'); // Add custom 'dark-mode' class
            } else {
                root.classList.remove('dark-mode'); // Remove custom 'dark-mode' class
            }
            localStorage.setItem('theme', theme); // Save theme to localStorage
        }
    }, [theme]); // Re-run this effect when 'theme' state changes

    // Function to toggle the mobile drawer's visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Function to toggle the theme between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Effect to handle window resize for responsive behavior
    useEffect(() => {
        const handleResize = () => {
            // Set 'isMobile' based on screen width (breakpoint at 768px for 'md')
            setIsMobile(window.innerWidth < 768);
            // If screen becomes desktop size while drawer is open, close it
            if (window.innerWidth >= 768 && isDrawerOpen) {
                setIsDrawerOpen(false);
            }
        };

        // Set initial state on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDrawerOpen]); // Dependency array: Re-run if drawer state changes (to close on resize)

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                {/* {theme === 'light' ? (
                    <Image src={assets.header_bg_color} alt="Background" className="w-full" />
                ) : (
                    <div></div>
                )} */}
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between ${theme === 'light' ? 'bg-white' : 'bg-[var(--navbar-bg)]'} z-50`}>
                <a href="#top">
                    <h1 className='cursor-pointer mr-14'>Moses Ajagbe</h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${theme === 'light' ? 'bg-white' : 'bg-[var(--navbar-bg)]'} text-[var(--navbar-text)] shadow-sm bg-opacity-50`}>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={toggleTheme}>
                        {/* Conditionally render moon or sun icon based on theme */}
                        {theme === 'light' ? (
                            <Image src={assets.moon_icon} alt="Switch to Dark Mode" className="w-6" />
                        ) : (
                            <Image src={assets.sun_icon} alt="Switch to Light Mode" className="w-6" />
                        )}
                    </button>
                    <a
                        href="/OluwanifemiMosesAjagbe.pdf"
                        download="OluwanifemiMosesAjagbe_CV.pdf"
                        className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
                    >
                        My CV
                        <Image
                            src={ArrowDown}
                            alt='Arrow'
                            className='w-3'
                        />
                    </a>

                    <button onClick={toggleDrawer} className='block md:hidden ml-3'>
                        {theme === 'light' ? (
                            <Image src={assets.menu_black} alt="Switch to Dark Mode" className="w-6" />
                        ) : (
                            <Image src={assets.menu_white} alt="Switch to Light Mode" className="w-6" />
                        )}
                    </button>
                </div>

                {/* MOBILE MENU */}

                <ul className={`flex flex-col gap-4 fixed py-20 px-10 top-0 bottom-0 -right-64 h-full z-50 w-64 bg-gray-300 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden`}>

                    <div onClick={toggleDrawer} className='absolute right-6 top-6'>
                        <Image
                            src={Close}
                            alt='close'
                            className='w-5 cursor-pointer'
                        />
                    </div>

                    <li><a href="#top" onClick={toggleDrawer} >Home</a></li>
                    <li><a href="#about" onClick={toggleDrawer} >About Me</a></li>
                    <li><a href="#services" onClick={toggleDrawer} >Services</a></li>
                    <li><a href="#work" onClick={toggleDrawer} >Projects</a></li>
                    <li><a href="#contact" onClick={toggleDrawer} >Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar