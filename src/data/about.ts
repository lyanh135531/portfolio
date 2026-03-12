import { AboutData } from '@/types/about';

export const aboutData: AboutData = {
    introduction: {
        title: 'About Me',
        description:
            "I'm Ly Ly Anh—a Full Stack Software Engineer with over 5 years of experience building scalable web applications, enterprise platforms, and AI-powered systems. I thrive at the intersection of solid engineering and real-world impact: from architecting microservices and clean code foundations to integrating LLMs, Computer Vision, and RAG pipelines into production.\n\nMy background spans React, Next.js, .NET Core, and Python FastAPI—giving me the range to own the full delivery loop: requirements, data modeling, frontend polish, backend rigor, and DevOps. I've led greenfield projects from a blank canvas to production, mentored engineering teams, and consistently delivered ahead of schedule.\n\nWhether you're building a new product from scratch, integrating AI into an existing system, or scaling a growing platform—I'm ready to jump in, take ownership, and keep the momentum going.",
    },
    experience: {
        title: 'Experience',
        items: [
            {
                role: 'Middle Software Engineer / Full Stack Developer',
                company: 'AutoServer Vietnam',
                period: 'Jul 2024 – Present',
                description:
                    'Leading and mentoring developers to build core products from scratch using .NET Core, SQL Server, and TypeScript. Established coding standards, created architectural boilerplates, and spearheaded AI integration—including LLMs, YOLO/ResNet Computer Vision, and RAG/MCP pipelines. Achieved a 93% reduction in AI API latency (from 14s to <1s for 50 images). Built a microservices-based AI testing platform end-to-end. Optimized Docker images, reducing virtual memory footprint by 4GB. Managed GPU/VRAM allocation for AI inference and automated data workflows with Python.',
            },
            {
                role: 'Software Engineer (Promoted from Intern)',
                company: 'IDTEK JSC',
                period: 'Jun 2021 – Jun 2024',
                description:
                    'Delivered outsourcing projects ahead of schedule as a Key Developer on HR management and meeting-room booking platforms, pairing React frontends with .NET Core APIs. Developed Core Base Code reused company-wide. Promoted to Junior Software Engineer within just 2 months due to exceptional performance. Managed IIS deployments, engineered automated SQL backup scripts via PowerShell, and optimized SQL queries and stored procedures for large-scale applications.',
            },
        ],
    },
    education: {
        title: 'Education',
        items: [
            {
                degree: 'Bachelor of Computer Science',
                institution: 'Ton Duc Thang University',
                period: '2018 – 2022',
            },
        ],
    },
    learning: {
        title: 'Currently Learning',
        items: [
            {
                technology: 'Computer Vision & AI Models',
                description:
                    'Deepening expertise in YOLO, ResNet, and OCR pipelines for production-grade Computer Vision systems integrated into enterprise applications.',
                status: 'deepening',
            },
            {
                technology: 'LLM & RAG Engineering',
                description:
                    'Expanding knowledge of Retrieval-Augmented Generation, Model Context Protocol (MCP), and agentic AI workflows using OpenAI, Gemini, and open-source LLMs.',
                status: 'deepening',
            },
            {
                technology: '.NET Core & Modern Architecture',
                description:
                    'Leveling up on the latest .NET releases, native AOT, performance tuning, and Clean Architecture patterns for scalable enterprise systems.',
                status: 'deepening',
            },
            {
                technology: 'DevOps & Platform Engineering',
                description:
                    'Sharpening hands-on experience with Docker, Kubernetes, GitLab CI/CD, and observability stacks to ship and operate resilient, production-ready systems.',
                status: 'in-progress',
            },
        ],
    },
};
