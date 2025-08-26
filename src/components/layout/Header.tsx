import { headerLinks } from '@/data/header';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="container sticky top-0 left-0 right-0 z-50 flex items-center justify-end py-12 bg-background">
            <nav>
                <ul className="flex items-center gap-6">
                    {headerLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-2xl font-medium hover:text-primary hover:underline transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
