'use client';

import Link from 'next/link';
import { cubicBezier, motion } from 'framer-motion';
import { projectData } from '@/data/project';
import { useState } from 'react';

const projectsEase = cubicBezier(0.16, 1, 0.3, 1);

const sectionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: projectsEase,
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
};

const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: projectsEase,
        },
    },
};

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.section
            className="flex flex-col gap-12 lg:gap-20 py-24 sm:py-32 border-b border-neutral-200/60"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >
            <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6" variants={fadeVariants}>
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Selected Work
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
                        Engineering Impact
                    </h2>
                </div>
                <Link
                    href="/projects"
                    className="group flex flex-row items-center gap-3 text-sm font-semibold uppercase tracking-wider text-neutral-500 hover:text-primary transition-colors duration-300 pb-2 border-b border-transparent hover:border-primary/30 w-fit"
                >
                    View Timeline
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            </motion.div>

            <motion.div 
                className="flex flex-col border-t border-neutral-200" 
                variants={sectionVariants}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {projectData.map((project, index) => {
                    const isHovered = hoveredIndex === index;
                    const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

                    return (
                        <motion.div
                            key={project.slug}
                            variants={fadeVariants}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onClick={() => setHoveredIndex(isHovered ? null : index)}
                            animate={{ opacity: isDimmed ? 0.4 : 1 }}
                            transition={{ duration: 0.5, ease: projectsEase }}
                            className="group flex flex-col md:flex-row border-b border-neutral-200 py-12 md:py-16 gap-8 lg:gap-16 transition-colors"
                        >
                            {/* Left Column: Title */}
                            <div className="w-full md:w-[30%] flex flex-col justify-between">
                                <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 group-hover:text-primary transition-colors duration-500 tracking-tight">
                                    {project.title}
                                </h3>
                                {/* Expanding Line */}
                                <div className="h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-8 hidden md:block" />
                            </div>

                            {/* Right Column: Content */}
                            <div className="w-full md:w-[70%] flex flex-col gap-8 md:gap-12">
                                <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
                                    <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl group-hover:text-neutral-700 transition-colors duration-500">
                                        {project.details.hero.summary || project.description}
                                    </p>
                                </div>

                                {/* Refined Technologies Row */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:pr-16">
                                    {project.details.stack.map((tag, i) => (
                                        <div key={tag} className="flex items-center gap-4 group/tag">
                                            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400 group-hover:text-primary/70 transition-colors duration-500 whitespace-nowrap">
                                                {tag}
                                            </span>
                                            {i < project.details.stack.length - 1 && (
                                                <span className="w-1 h-1 rounded-full bg-neutral-200" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
