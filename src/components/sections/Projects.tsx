'use client';

import Link from 'next/link';
import { cubicBezier, motion } from 'framer-motion';
import ProjectItem from '@/components/shared/ProjectItem';
import { projectData } from '@/data/project';

const projectsEase = cubicBezier(0.16, 1, 0.3, 1);

const sectionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: projectsEase,
            when: 'beforeChildren',
            staggerChildren: 0.18,
        },
    },
};

const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: projectsEase,
        },
    },
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Projects = () => {
    return (
        <motion.section
            className="flex flex-col gap-20 py-20 border-b"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariants}
        >
            <motion.h2 className="text-4xl font-bold leading-none" variants={fadeVariants}>
                Featured Projects
            </motion.h2>
            <motion.div className="flex flex-col gap-8" variants={gridVariants}>
                <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" variants={gridVariants}>
                    {projectData.map((project) => (
                        <ProjectItem key={project.title} {...project} />
                    ))}
                </motion.div>
                <motion.div className="flex justify-end" variants={fadeVariants}>
                    <Link
                        href="/projects"
                        className="font-medium text-sm text-primary hover:underline w-fit"
                    >
                        SEE ALL PROJECTS
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;
