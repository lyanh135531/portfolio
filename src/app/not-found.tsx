'use client';

import { cubicBezier, motion } from 'framer-motion';
import Link from 'next/link';

const ease = cubicBezier(0.16, 1, 0.3, 1);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease,
        },
    },
};

const NotFound = () => {
    return (
        <div className="m-auto">
            <motion.div
                className="flex flex-col items-center gap-8 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-8xl font-bold text-primary md:text-9xl"
                    variants={itemVariants}
                >
                    404
                </motion.h1>
                <motion.h2
                    className="text-2xl font-semibold md:text-3xl"
                    variants={itemVariants}
                >
                    Page Not Found
                </motion.h2>
                <motion.p className="max-w-xl text-neutral-600" variants={itemVariants}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-medium text-primary transition-colors"
                    >
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
