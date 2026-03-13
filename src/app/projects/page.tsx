'use client';

import { projectData } from '@/data/project';
import { cubicBezier, motion } from 'framer-motion';

const ease = cubicBezier(0.16, 1, 0.3, 1);

const introSection = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease,
            when: 'beforeChildren',
            staggerChildren: 0.15,
        },
    },
};

const introItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease,
        },
    },
};

const ProjectsPage = () => {
    return (
        <motion.section
            className="space-y-16"
            initial="hidden"
            animate="visible"
            variants={introSection}
        >
            <motion.section className="space-y-6" variants={introItem}>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    Experience & Projects
                </span>
                <h1 className="text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl max-w-2xl">
                    Professional Background
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-neutral-700">
                    A detailed timeline of my professional experience, key projects, and the technical impact I&apos;ve delivered.
                </p>
            </motion.section>

            <motion.div className="flex flex-col relative" variants={introSection}>
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 sm:left-6 top-8 bottom-0 w-px bg-neutral-200 hidden sm:block" />

                {projectData.map((project) => {
                    const role = project.details.stats.find(s => s.label === 'Role')?.value;
                    const timeline = project.details.stats.find(s => s.label === 'Timeline')?.value;
                    const company = project.details.stats.find(s => s.label === 'Company')?.value;

                    return (
                        <motion.article
                            key={project.slug}
                            variants={introItem}
                            className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 sm:py-16 border-t border-neutral-100 first:border-t-0"
                        >
                            {/* Timeline Node */}
                            <div className="hidden sm:flex absolute left-6 top-16 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white bg-neutral-300 ring-4 ring-background" />

                            {/* Left Column: Timeline & Meta */}
                            <div className="sm:w-1/4 sm:pl-16 sm:pt-1 shrink-0 space-y-2">
                                {timeline && (
                                    <p className="text-sm font-semibold text-neutral-900">
                                        {timeline}
                                    </p>
                                )}
                                {company && (
                                    <p className="text-sm text-neutral-500 font-medium">
                                        @ {company}
                                    </p>
                                )}
                            </div>

                            {/* Right Column: Content */}
                            <div className="flex-1 space-y-5">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold text-neutral-900">
                                        {project.title}
                                    </h2>
                                    {role && (
                                        <h3 className="text-base font-semibold text-primary">
                                            {role}
                                        </h3>
                                    )}
                                </div>

                                <p className="text-base leading-relaxed text-neutral-700">
                                    {project.details.hero.summary || project.description}
                                </p>

                                {project.details.features && project.details.features.length > 0 && (
                                    <ul className="space-y-3 mt-4 text-neutral-700">
                                        {project.details.features.map((feature, i) => (
                                            <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                                <span className="text-neutral-300 mt-1.5 shrink-0">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                                                </span>
                                                <div>
                                                    <span className="font-semibold text-neutral-900">{feature.title}: </span>
                                                    {feature.description}
                                                    {feature.result && (
                                                        <span className="font-medium text-primary ml-1">
                                                            ({feature.result})
                                                        </span>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {project.details.stack && project.details.stack.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-6">
                                        {project.details.stack.map(tech => (
                                            <span 
                                                key={tech}
                                                className="px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-50 text-[10px] font-bold uppercase tracking-[0.1em] transition-transform hover:scale-105"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

export default ProjectsPage;
