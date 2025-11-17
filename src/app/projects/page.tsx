'use client';

import ProjectItem from '@/components/shared/ProjectItem';
import { projectData } from '@/data/project';
import { cubicBezier, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const ease = cubicBezier(0.16, 1, 0.3, 1);
const PAGE_SIZE = 6;

const introSection = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease,
            when: 'beforeChildren',
            staggerChildren: 0.3,
        },
    },
};

const introItem = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease,
        },
    },
};

const ProjectsPage = () => {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const projectsToRender = useMemo(() => {
        return projectData.slice(0, visibleCount);
    }, [visibleCount]);

    const hasMore = visibleCount < projectData.length;

    useEffect(() => {
        if (!hasMore) {
            return;
        }

        const sentinel = observerRef.current;
        if (!sentinel) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting) {
                    setVisibleCount((prev) =>
                        Math.min(prev + PAGE_SIZE, projectData.length),
                    );
                }
            },
            {
                rootMargin: '240px 0px',
                threshold: 0.1,
            },
        );

        observer.observe(sentinel);

        return () => observer.disconnect();
    }, [hasMore]);

    return (
        <motion.section
            className="space-y-10"
            initial="hidden"
            animate="visible"
            variants={introSection}
        >
            <motion.section className="space-y-6" variants={introItem}>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    Project archive
                </span>
                <h1 className="text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl max-w-2xl">
                    Here are some of the things I&apos;ve been working on
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-neutral-700">
                    A running log of client launches, internal experiments, and
                    collaborative builds. Scroll to see everything I&apos;ve been shipping
                    recently.
                </p>
            </motion.section>
            <motion.div
                className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.12,
                            ease,
                            duration: 0.3,
                        },
                    },
                }}
            >
                {projectsToRender.map((project) => (
                    <motion.article
                        key={project.title}
                        variants={{
                            hidden: { opacity: 0, y: 28 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.3, ease },
                            },
                        }}
                        className="group"
                    >
                        <ProjectItem {...project} />
                    </motion.article>
                ))}
            </motion.div>

            {hasMore ? (
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-500 shadow-sm"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Scrolling in new work
                        <motion.span
                            animate={{ x: [0, 8, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.8,
                                ease: 'easeInOut',
                            }}
                        >
                            →
                        </motion.span>
                    </motion.div>
                    <div ref={observerRef} className="h-10 w-px bg-neutral-200" />
                </div>
            ) : (
                <div className="flex flex-col items-center gap-3 text-sm text-neutral-500">
                    <span>
                        That&apos;s the full archive — check back soon for fresh builds.
                    </span>
                </div>
            )}
        </motion.section>
    );
};

export default ProjectsPage;
