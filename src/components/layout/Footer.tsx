'use client';

import { cubicBezier, motion } from 'framer-motion';

const footerEase = cubicBezier(0.16, 1, 0.3, 1);

const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: footerEase,
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            ease: footerEase,
        },
    },
};

const Footer = () => {
    return (
        <motion.footer
            className="py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.span
                className="flex justify-between bg-black text-white py-3 px-4 rounded-2xl"
                variants={itemVariants}
            >
                <motion.span className="text-xs gap-1" variants={itemVariants}>
                    <span>© 2025 All rights reserved</span>
                </motion.span>
                <motion.div className="flex gap-2 text-xs" variants={itemVariants}>
                    <span>Privacy</span>
                    <span>Terms</span>
                </motion.div>
            </motion.span>
        </motion.footer>
    );
};

export default Footer;
