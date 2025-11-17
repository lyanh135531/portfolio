'use client';

import { aboutData } from '@/data/about';
import { cubicBezier, motion } from 'framer-motion';
import Link from 'next/link';

const ease = cubicBezier(0.16, 1, 0.3, 1);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 5,
            ease,
            staggerChildren: 0.15,
        },
    },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease,
        },
    },
};

const AboutPage = () => {
    const introParagraphs = aboutData.introduction.description
        .split('\n')
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

    return (
        <motion.div
            className="flex flex-col gap-16 lg:gap-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-start"
                variants={sectionVariants}
            >
                <div className="space-y-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                        The one-person tech team
                    </span>
                    <h1 className="text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl">
                        The one-man tech team ready to bring your next big idea to life.
                    </h1>
                    <p className="text-lg leading-relaxed text-neutral-700">
                        I&apos;m Ly Anh, a software developer currently in Vietnam,
                        building dependable product experiences for teams of every size.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
                        <span className="rounded-full border border-neutral-300 px-4 py-2">
                            Full-stack delivery
                        </span>
                        <span className="rounded-full border border-neutral-300 px-4 py-2">
                            AI & automation
                        </span>
                        <span className="rounded-full border border-neutral-300 px-4 py-2">
                            DevOps & observability
                        </span>
                    </div>
                </div>
            </motion.section>

            <motion.hr
                className="h-px border-0 bg-neutral-300"
                variants={sectionVariants}
            />

            <motion.section
                className="grid gap-10 text-lg leading-relaxed text-neutral-700 lg:grid-cols-2 border-b pb-20"
                variants={sectionVariants}
            >
                <div className="space-y-5">
                    {introParagraphs.slice(0, 2).map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
                <div className="space-y-5">
                    {introParagraphs.slice(2).map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                    <p className="text-base font-medium text-neutral-900">
                        Want to chat more →{' '}
                        <Link
                            href="mailto:lylyanh135@gmail.com"
                            className="underline underline-offset-4 text-primary"
                        >
                            Send me an email
                        </Link>
                    </p>
                </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                className="flex flex-col gap-12 border-b pb-20"
                variants={sectionVariants}
            >
                <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
                    {aboutData.experience.title}
                </motion.h2>
                <div className="flex flex-col gap-8">
                    {aboutData.experience.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-3"
                            variants={itemVariants}
                            whileHover={{ x: 8 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-2xl font-bold">{item.role}</h3>
                                    <p className="text-lg text-neutral-600">
                                        {item.company}
                                    </p>
                                </div>
                                <span className="text-sm text-neutral-500 whitespace-nowrap pr-2">
                                    {item.period}
                                </span>
                            </div>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
                className="flex flex-col gap-12 border-b pb-20"
                variants={sectionVariants}
            >
                <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
                    {aboutData.education.title}
                </motion.h2>
                <div className="flex flex-col gap-8">
                    {aboutData.education.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-3"
                            variants={itemVariants}
                            whileHover={{ x: 8 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-2xl font-bold">{item.degree}</h3>
                                    <p className="text-lg text-neutral-600">
                                        {item.institution}
                                    </p>
                                </div>
                                <span className="text-sm text-neutral-500 whitespace-nowrap pr-2">
                                    {item.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Learning Section */}
            <motion.section
                className="flex flex-col gap-12"
                variants={sectionVariants}
            >
                <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
                    {aboutData.learning.title}
                </motion.h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {aboutData.learning.items.map((item, index) => {
                        const statusColors = {
                            'in-progress': 'border-l-primary bg-primary/5',
                            exploring: 'border-l-blue-500 bg-blue-500/5',
                            deepening: 'border-l-purple-500 bg-purple-500/5',
                        };
                        const statusLabels = {
                            'in-progress': 'In Progress',
                            exploring: 'Exploring',
                            deepening: 'Deepening',
                        };

                        return (
                            <motion.div
                                key={index}
                                className={`flex flex-col gap-3 p-6 rounded-lg border-l-4 border-t border-r border-b border-neutral-200 ${statusColors[item.status]}`}
                                variants={itemVariants}
                                whileHover={{ y: -4, borderColor: 'var(--primary)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-xl font-bold">
                                        {item.technology}
                                    </h3>
                                    <span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border border-neutral-300 whitespace-nowrap">
                                        {statusLabels[item.status]}
                                    </span>
                                </div>
                                <p className="text-base text-neutral-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>
        </motion.div>
    );
};

export default AboutPage;
