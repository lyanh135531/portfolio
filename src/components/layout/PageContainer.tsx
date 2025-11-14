'use client';

import clsx from 'clsx';
import { cubicBezier, motion } from 'framer-motion';
import { ReactNode } from 'react';

const ease = cubicBezier(0.16, 1, 0.3, 1);

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
    return (
        <motion.div
            className={clsx(
                'relative isolate min-h-screen overflow-hidden bg-background',
                className,
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
        >
            <main className="flex flex-col gap-16 py-10">{children}</main>
        </motion.div>
    );
};

export default PageContainer;
