import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PageContainer from '@/components/layout/PageContainer';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: 'Ly Anh',
    description: 'Ly Anh',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body
                className={cn(
                    geistSans.variable,
                    geistMono.variable,
                    'antialiased h-full',
                )}
            >
                <div className="container font-mono min-h-full flex flex-col w-full">
                    <Header />
                    <PageContainer>{children}</PageContainer>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
