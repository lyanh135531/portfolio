'use client';

import { cubicBezier, motion } from 'framer-motion';
import { headerLinks } from '@/data/header';
import Link from 'next/link';

const ease = cubicBezier(0.16, 1, 0.3, 1);

const headerVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease,
            when: 'beforeChildren',
            staggerChildren: 0.5,
        },
    },
};

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const linkVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease,
        },
    },
};

const Header = () => {
    return (
        <motion.header
            className="sticky top-0 left-0 right-0 z-50 flex items-center justify-end py-12 pr-40 bg-background border-b border-gray-200"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <nav>
                <motion.ul className="flex items-center gap-6" variants={listVariants}>
                    {headerLinks.map((link) => (
                        <motion.li
                            key={link.href}
                            variants={linkVariants}
                            whileHover={{ y: -2 }}
                        >
                            <Link
                                href={link.href}
                                className="text-2xl font-medium hover:text-primary hover:underline"
                            >
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
        </motion.header>
    );
};

export default Header;
