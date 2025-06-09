"use client"; // This is a Client Component as it uses useState, useRef, and browser APIs

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // No need for EmailJSResponseStatus unless you explicitly use its type
import { assets } from '@/assets/assets';

const Contact = () => {
    // useRef to get a direct reference to the form DOM element
    // Specify the type as HTMLFormElement and initialize with null
    const form = useRef<HTMLFormElement>(null);

    // State to manage feedback messages to the user
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Function to handle form submission
    // 'e' is a React form event with the target being an HTMLFormElement
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)

        // Reset status message and set submitting state
        setStatusMessage(null);
        setIsSubmitting(true);

        // Ensure form.current exists before proceeding with emailjs
        if (form.current) {
            emailjs
                .sendForm(
                    'service_9xvdc5t',    // Replace with your EmailJS Service ID
                    'template_qq9gzdt',   // Replace with your EmailJS Template ID
                    form.current,
                    {
                        publicKey: 'SaKGVrj-ZxLxly7B', // Replace with your EmailJS Public Key
                    }
                )
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setStatusMessage('Message sent successfully!');
                        if (form.current) { // Clear the form after successful submission
                            form.current.reset();
                        }
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setStatusMessage(`Failed to send message: ${error.text || 'Please try again.'}`);
                    }
                )
                .finally(() => {
                    setIsSubmitting(false); // Reset submitting state regardless of success/failure
                });
        } else {
            // Handle case where form.current is null (e.g., component not mounted yet)
            console.error('Form reference is null. Cannot send email.');
            setStatusMessage('An unexpected error occurred. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        // Add min-h-screen for better spacing, adjust as needed
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 min-h-screen'>
            <h4 className='text-center text-lg mb-2 text-[var(--text-color)]'>Connect With Me</h4>
            <h2 className='text-center text-5xl font-bold text-[var(--text-color)]'>Get In Touch</h2>

            <p className='text-center mx-auto mt-5 mb-12 max-w-2xl text-[var(--text-color)] opacity-80'>
                I'd love to work with you. If you have any feedback, questions or inquiries, please use the form below.
            </p>

            {/* The onSubmit handler is now on the form tag */}
            <form
                ref={form}
                onSubmit={sendEmail} // onSubmit goes here
                className='max-w-2xl mx-auto'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'> {/* Changed auto-fit to 1/2 */}
                    <input
                        type="text"
                        placeholder='Enter Your Name'
                        name="user_name"
                        required
                        // Fixed typo: border-gray-400 rounded-md
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                                   bg-[var(--card-background)] text-[var(--text-color)] placeholder:text-[var(--text-color)] placeholder:opacity-60 focus:border-blue-500'
                    />
                    <input
                        type="email"
                        placeholder='Enter Your Email Address'
                        name="user_email"
                        required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                                   bg-[var(--card-background)] text-[var(--text-color)] placeholder:text-[var(--text-color)] placeholder:opacity-60 focus:border-blue-500'
                    />
                </div>
                <textarea
                    rows={6}
                    placeholder='Enter Your Messsage 😉'
                    name="message" // Added name attribute for EmailJS
                    required
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md
                               bg-[var(--card-background)] text-[var(--text-color)] placeholder:text-[var(--text-color)] placeholder:opacity-60 mb-6 focus:border-blue-500'
                ></textarea> {/* Closing tag is correct */}

                <button
                    type='submit' // This makes it a submit button for the form
                    disabled={isSubmitting} // Disable button while submitting
                    className='flex items-center justify-between gap-2 bg-black/80 text-white
                               rounded-full mx-auto hover:bg-black duration-500 py-3 px-8 w-max
                               disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {isSubmitting ? 'Sending...' : 'Send It NOW!'}
                    <Image
                        src={assets.right_arrow_white}
                        alt='right arrow' // Better alt text
                        className='w-4'
                    />
                </button>

                {/* Feedback message display */}
                {statusMessage && (
                    <p className={`mt-4 text-center ${statusMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                        {statusMessage}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Contact;