'use client';

import { ProjectData } from '@/types/project';
import { cubicBezier, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
        <Link
            href={`/projects/${project.slug}`}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 rounded-lg"
        >
            <motion.div
                className="cursor-pointer flex flex-col gap-4"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="relative w-full h-72 overflow-hidden rounded-lg border border-neutral-200/60 bg-neutral-50">
                    <Image
                        src={project.image.src}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-3">{project.description}</p>
            </motion.div>
        </Link>
    );
};

export default ProjectItem;
