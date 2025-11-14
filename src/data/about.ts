import { AboutData } from '@/types/about';

export const aboutData: AboutData = {
    introduction: {
        title: 'About Me',
        description:
            "Hi there! I'm a developer who loves building things and solving real problems with technology. I can work on the frontend to create clean, easy-to-use websites, build the backend so everything runs smoothly, explore AI to add smart features, and handle DevOps to keep everything online and updated. I enjoy learning new things and taking on any challenge, no matter how big or small. If you want someone who is reliable, quick to learn, and comfortable working across the whole stack, I’m excited to show you what I can do.",
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
