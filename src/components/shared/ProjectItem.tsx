'use client';

import { ProjectData } from '@/types/project';
import { cubicBezier, motion } from 'framer-motion';
import Image from 'next/image';

const smoothEase = cubicBezier(0.33, 1, 0.68, 1);

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: smoothEase,
        },
    },
};

const ProjectItem = (project: ProjectData) => {
    return (
        <motion.div
            className="group cursor-pointer flex flex-col gap-4"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="relative w-full h-72 overflow-hidden rounded-lg">
                <Image
                    src={project.image.src}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-3">{project.description}</p>
        </motion.div>
    );
};

export default ProjectItem;
