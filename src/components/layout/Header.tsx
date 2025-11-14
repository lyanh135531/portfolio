'use client';

import { headerLinks } from '@/data/header';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };
    return (
        <header className="container sticky top-0 left-0 right-0 z-50 flex items-center justify-end py-12 bg-background border-b border-gray-200">
            <nav>
                <ul className="flex items-center gap-6">
                    {headerLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        'text-2xl font-medium hover:text-primary hover:underline transition-colors',
                                        {
                                            'text-primary underline': active,
                                            'hover:text-primary hover:underline': !active,
                                        },
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
