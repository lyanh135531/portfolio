import { AboutData } from '@/types/about';

export const aboutData: AboutData = {
    introduction: {
        title: 'About Me',
        description:
            "I'm Ly Anh—a one-person product team who loves turning ambitious ideas into shippable software. Over the past few years I've teamed up with founders, agencies, and enterprise squads to build everything from fast marketing sites and operational tooling to AI-enabled platforms that live in production.\n\nMy background spans React, Next.js, .NET Core, and Python, so I can handle the frontend polish, backend rigor, data modeling, and DevOps glue without breaking stride. I thrive on tough briefs, move quickly from discovery to delivery, and stay hands-on through monitoring and iteration.\n\nWhether you're validating a v1, scaling an internal system, or layering AI into an existing product, I'm ready to plug in, own the work, and keep the momentum going.",
    },
    experience: {
        title: 'Experience',
        items: [
            {
                role: '.NET Developer',
                company: 'AutoServer Vietnam',
                period: '2024 - Present',
                description:
                    'Joined AutoServer to build a greenfield .NET MVC platform, then moved into the internal AI team to leverage my Python experience. I now architect and deploy LLM-powered features for the product suite, containerize services with Docker on Linux servers, and operate them with monitoring stacks to keep everything observable and reliable. In parallel, I single-handedly designed, built, and shipped an internal AI proving ground—a full-stack web app (frontend, backend, data model, deployment) where the team can demo, tune, and validate every new capability before it reaches production.',
            },
            {
                role: 'Frontend Developer',
                company: 'Freelance',
                period: '2024 - Present',
                description:
                    'Deliver high-end marketing sites and lightweight admin tools using Next.js, translating Figma concepts into production-ready UI with responsive layouts, animation polish, and CMS-friendly components.',
            },
            {
                role: 'Full-Stack Developer',
                company: 'IDTEK JSC',
                period: '2021 - 2024',
                description:
                    'Led outsourced builds for HR management and meeting-room booking platforms, pairing React frontends with .NET Core APIs. Owned the full delivery loop from requirements and data modeling to deployments and ongoing enhancements.',
            },
        ],
    },
    education: {
        title: 'Education',
        items: [
            {
                degree: 'Bachelor of Information Technology',
                institution: 'Ton Duc Thang University',
                period: '2018 - 2022',
            },
        ],
    },
    learning: {
        title: 'Currently Learning',
        items: [
            {
                technology: '.NET Core 10',
                description:
                    'Leveling up on the newest .NET Core releases to take advantage of performance boosts, native AOT, and modern API patterns.',
                status: 'deepening',
            },
            {
                technology: 'React 19',
                description:
                    'Digging into the latest React features—new compiler work, Actions, and ergonomics—to keep frontends fast and maintainable.',
                status: 'deepening',
            },
            {
                technology: 'Next.js 15',
                description:
                    'Staying current with the App Router, Server Components, and emerging patterns for streaming UI and hybrid rendering.',
                status: 'deepening',
            },
            {
                technology: 'DevOps & Platform Skills',
                description:
                    'Sharpening hands-on experience with Docker, Kubernetes, RabbitMQ, Kafka, and observability stacks to ship and operate resilient systems.',
                status: 'in-progress',
            },
        ],
    },
};
