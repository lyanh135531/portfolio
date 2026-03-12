import { HeroData } from '@/types/hero';

export const heroData: HeroData = {
    title: "I'm Ly Anh, a Full Stack Software Engineer.",
    description:
        'Full Stack Software Engineer with 5+ years of experience designing, building, and shipping scalable web applications and enterprise products. I specialize in React, Next.js, .NET Core, and Python—with a growing focus on AI integration including LLMs, RAG pipelines, Computer Vision (YOLO, ResNet), and OCR. I bring both engineering depth and product thinking to every build.',
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
