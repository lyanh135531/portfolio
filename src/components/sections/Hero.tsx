'use client';

import { cubicBezier, motion } from 'framer-motion';
import { Icons } from '@/components/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from '@/data/hero';

const smoothEase = cubicBezier(0.33, 1, 0.68, 1);

const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: smoothEase,
            staggerChildren: 0.15,
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: smoothEase,
        },
    },
};

const socialVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: smoothEase,
            staggerChildren: 0.3,
        },
    },
};

const iconVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: smoothEase,
        },
    },
};

const Hero = () => {
    return (
        <motion.section
            className="grid grid-cols-2 gap-20 border-b pb-20 pt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
        >
            <div className="group relative h-screen overflow-hidden rounded-lg">
                <Image
                    src={heroData.image.src}
                    alt={heroData.image.alt}
                    fill
                    className="object-cover w-full h-full max-w-none transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
            <motion.div
                className="flex flex-col justify-center gap-8"
                variants={textVariants}
            >
                <motion.h1
                    className="text-5xl font-bold leading-snug"
                    variants={textVariants}
                >
                    {heroData.title}
                </motion.h1>
                <motion.p className="text-lg" variants={textVariants}>
                    {heroData.description}
                </motion.p>
                <motion.div className="flex gap-4" variants={socialVariants}>
                    {heroData.socialLinks.map((link) => (
                        <motion.div
                            key={link.href}
                            variants={iconVariants}
                            whileHover={{ y: -4 }}
                        >
                            <Link
                                href={link.href}
                                title={link.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {Icons[link.icon as keyof typeof Icons]({
                                    className: 'w-6 h-6',
                                })}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
