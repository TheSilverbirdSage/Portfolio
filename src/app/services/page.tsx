"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "motion/react";

const services = [
    {
        id: "web-development",
        title: "Web Development",
        summary: "Fast, responsive websites and web apps that look polished, load smoothly, and help visitors take action.",
        deliverables: [
            "Responsive landing pages, portfolios, dashboards, and business websites",
            "Frontend builds with React, Next.js, TypeScript, and Tailwind CSS",
            "Clean page structure, reusable components, and mobile-first layouts",
            "Performance-minded implementation with clear calls to action",
        ],
    },
    {
        id: "mobile-app-development",
        title: "Mobile App Development",
        summary: "User-friendly mobile app experiences for founders and teams who need an app that feels simple, useful, and focused.",
        deliverables: [
            "Flutter app screens and user flows",
            "Clean interface implementation from design files or rough ideas",
            "Reusable UI components for consistent app experiences",
            "Frontend integration planning for APIs, auth, and data-driven screens",
        ],
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        summary: "Thoughtful interface design that turns your idea into a clear, usable experience before development starts.",
        deliverables: [
            "Wireframes and page flow planning",
            "High-fidelity website and app interface designs",
            "Design systems with buttons, cards, forms, colors, and spacing rules",
            "User journey improvements for clearer navigation and better conversions",
        ],
    },
    {
        id: "graphics-design",
        title: "Graphics Design",
        summary: "Visual assets that help your brand show up consistently across digital platforms.",
        deliverables: [
            "Social media graphics and promotional visuals",
            "Simple brand visuals for launches and campaigns",
            "Website graphics, banners, and supporting visuals",
            "Clean design assets prepared for web and social use",
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="relative z-10 px-[8%] pt-32 text-[var(--text-color)]">
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-5xl text-center"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-lg"
                    >
                        Services
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl"
                    >
                        What I Can Deliver For You
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 0.75, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mx-auto mt-6 max-w-2xl text-base"
                    >
                        A clearer breakdown of the work I can handle for clients, from polished frontend builds to design support and launch-ready visuals.
                    </motion.p>
                </motion.section>

                <section className="mx-auto mt-20 max-w-6xl space-y-20">
                    {services.map((service, index) => {
                        const isReversed = index % 2 === 1;

                        return (
                            <motion.article
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.65, delay: 0.08 }}
                                className="grid scroll-mt-28 items-start gap-8 border-t border-gray-300/80 pt-12 lg:grid-cols-2 lg:gap-16"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: isReversed ? 24 : -24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    className={isReversed ? "lg:order-2" : ""}
                                >
                                    <p className="text-sm font-medium uppercase tracking-[0.18em] opacity-60">
                                        0{index + 1}
                                    </p>
                                    <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                                        {service.title}
                                    </h2>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: isReversed ? -24 : 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{ duration: 0.6, delay: 0.25 }}
                                    className={isReversed ? "lg:order-1" : ""}
                                >
                                    <p className="text-lg leading-8 opacity-80">
                                        {service.summary}
                                    </p>
                                    <ul className="mt-6 space-y-4">
                                        {service.deliverables.map((item, itemIndex) => (
                                            <motion.li
                                                key={item}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.45, delay: 0.3 + itemIndex * 0.08 }}
                                                className="flex gap-3 text-base leading-7"
                                            >
                                                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-pink-500" />
                                                <span>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.article>
                        );
                    })}
                </section>

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto my-24 max-w-3xl text-center"
                >
                    <h2 className="text-3xl font-semibold">Have a project in mind?</h2>
                    <p className="mt-4 opacity-75">
                        Send me the details and I can help turn the idea into a clear design, build, or launch plan.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="mx-auto mt-8 w-max"
                    >
                        <Link
                            href="/#contact"
                            className="flex items-center justify-center rounded-full bg-black px-8 py-3 text-white"
                        >
                            Contact me
                        </Link>
                    </motion.div>
                </motion.section>
            </main>
            <Footer />
        </>
    );
}
