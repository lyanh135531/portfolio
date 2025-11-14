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
            className={clsx('flex flex-col flex-1 overflow-hidden bg-background', className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
        >
            <div className="flex flex-col gap-16 py-10 w-full flex-1">
                {children}
            </div>
        </motion.div>
    );
};

export default PageContainer;
