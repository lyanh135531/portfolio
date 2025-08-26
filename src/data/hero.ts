import { HeroData } from '@/types/hero';

export const heroData: HeroData = {
    title: "I'm Ly Anh, a passionate software developer.",
    description:
        'I specialize in crafting scalable and efficient web applications using modern technologies. With a strong focus on clean code and user-centered design, I transform innovative ideas into high-quality digital products that drive business success.',
    image: {
        src: '/images/hero.jpg',
        alt: 'Ly Anh',
    },
    socialLinks: [
        {
            href: 'https://www.linkedin.com/in/lyanh-lian',
            title: 'Connect with me on LinkedIn',
            icon: 'linkedin',
        },
        {
            href: 'https://github.com/lyanh135531',
            title: 'View my projects on Github',
            icon: 'github',
        },
        {
            href: 'https://www.facebook.com/lyanh135',
            title: 'Connect with me on Facebook',
            icon: 'facebook',
        },
    ],
};
