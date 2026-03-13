import { ProjectData } from '@/types/project';

export const projectData: ProjectData[] = [
    {
        slug: 'asnet',
        title: 'ASNET',
        description:
            'Developed a specialized Machine Learning Inference Service focused on Computer Vision, responsible for context recognition, vehicle perspective classification, and automated privacy masking (blurring license plates and sensitive information). The system was engineered for massive parallel processing with ultra-low latency requirements.',
        image: {
            src: '/images/projects/asnet/thumbnail.png',
            alt: 'ASNET Project Thumbnail',
        },
        details: {
            hero: {
                summary:
                    'Developed a specialized Machine Learning Inference Service for Computer Vision with massive parallel processing and ultra-low latency.',
                tags: ['FastAPI', 'Microservices', 'TensorRT', 'Docker'],
            },
            stats: [
                { label: 'Role', value: 'Backend & AI Engineer' },
                { label: 'Team size', value: '5' },
            ],
            overview: [
                {
                    title: 'Description',
                    body: 'Developed a specialized Machine Learning Inference Service focused on Computer Vision, responsible for context recognition, vehicle perspective classification, and automated privacy masking (blurring license plates and sensitive information).',
                },
            ],
            features: [
                {
                    title: 'System Architecture',
                    description: 'Architected a decoupled Microservices system separating the API Layer (FastAPI) and the Core Inference Engine, utilizing asynchronous gRPC for high-speed inter-service communication.',
                },
                {
                    title: 'Infrastructure Optimization',
                    description: 'Deployed and optimized inference infrastructure using NVIDIA Triton Inference Server, converting AI models (YOLO, ResNet) to TensorRT Engines (FP16) for significant hardware acceleration.',
                },
                {
                    title: 'High-Throughput Pipelines',
                    description: 'Engineered high-throughput image processing pipelines including pre-processing (loading, resizing, padding) and complex post-processing (Non-Maximum Suppression, Multi-class Blur).',
                },
                {
                    title: 'Containerization',
                    description: 'Containerized the entire stack using Docker & Docker Compose, integrating NVIDIA Container Toolkit to maximize GPU utilization and ensure cross-environment consistency.',
                },
                {
                    title: 'Performance',
                    description: 'Optimized hardware utilization through FP16 precision while maintaining model accuracy.',
                    result: 'Doubled inference speed (2x)',
                },
                {
                    title: 'Stability',
                    description: 'Maintained ultra-low latency by implementing Dynamic Batching via Triton Server.',
                    result: 'Stable high-concurrency processing for thousands of images daily',
                },
            ],
            stack: ['FastAPI', 'Microservices', 'NVIDIA Triton Inference Server', 'NVIDIA TensorRT', 'Docker', 'Computer Vision'],
            links: [],
        },
    },
    {
        slug: 'vision-core',
        title: 'Vision Core',
        description:
            'Developed a core platform providing scalable AI and Computer Vision services, architected with Microservices to ensure high-performance parallel processing. The platform serves as the backbone for complex machine learning workflows.',
        image: {
            src: '/images/projects/vision-core/thumbnail.png',
            alt: 'Vision Core Thumbnail',
        },
        details: {
            hero: {
                summary:
                    'Developed a core platform providing scalable AI and Computer Vision services, serving as the backbone for machine learning workflows.',
                tags: ['FastAPI', 'YOLO', 'ResNet50', 'Microservices'],
            },
            stats: [
                { label: 'Role', value: 'Backend & AI Engineer' },
                { label: 'Team size', value: '1' },
            ],
            overview: [
                {
                    title: 'Description',
                    body: 'The platform serves as the backbone for complex machine learning workflows like Automated Privacy Masking (ResNet50 + YOLO), Multi-label Image Sorting, Advanced OCR & Document Processing, and Intelligent Routing across various AI models.',
                },
            ],
            features: [
                {
                    title: 'Microservices Ecosystem',
                    description: 'Architected and developed a robust Microservices ecosystem, decoupling AI functionalities into scalable services (YOLO, ResNet50, OCR).',
                },
                {
                    title: 'API Development',
                    description: 'Engineered high-performance API Gateways and RESTful APIs using FastAPI to orchestrate multi-step request routing synchronously.',
                },
                {
                    title: 'Model Integration',
                    description: 'Integrated deep learning models for production deployment leveraging NVIDIA GPU acceleration.',
                },
                {
                    title: 'Containerization',
                    description: 'Containerized the platform using Docker and Docker Compose supporting both GPU and CPU environments.',
                },
                {
                    title: 'Accuracy',
                    description: 'Implemented automated license plate masking leveraging ResNet50 and YOLO.',
                    result: 'Achieved 98% accuracy',
                },
                {
                    title: 'System Stability',
                    description: 'Ensured system stability with microservices architecture isolating GPU-intensive tasks.',
                },
                {
                    title: 'Standardization',
                    description: 'Standardized AI model deployment across classification, detection, and segmentation frameworks.',
                },
            ],
            stack: ['FastAPI', 'YOLO', 'ResNet50', 'OCR', 'LLM Proxy', 'Microservices', 'Docker'],
            links: [],
        },
    },
    {
        slug: 'schedule-planer',
        title: 'Schedule Planer (Pet Project)',
        description:
            'Developed a full-stack web application designed to streamline and automate the pre-registration process for students. Key feature: Automated course enrollment using Cron Jobs with conflict resolution and fallback classes.',
        image: {
            src: '/images/projects/schedule-planer/thumbnail.png',
            alt: 'Schedule Planer Thumbnail',
        },
        details: {
            hero: {
                summary:
                    'A full-stack web application designed to automate student pre-registration with schedule conflict resolution.',
                tags: ['Next.js', 'PostgreSQL', 'Docker', 'CronJobs'],
            },
            stats: [
                { label: 'Role', value: 'Full-stack Developer' },
                { label: 'Team size', value: '1' },
            ],
            overview: [
                {
                    title: 'Description',
                    body: 'Developed a full-stack web application designed to streamline and automate the pre-registration process for students. Key feature: Automated course enrollment using Cron Jobs with conflict resolution and fallback classes.',
                },
            ],
            features: [
                {
                    title: 'Full-stack Development',
                    description: 'End-to-End Full-stack Development using Next.js + TypeScript.',
                },
                {
                    title: 'Database Architecture',
                    description: 'Designed relational database schema using PostgreSQL + Drizzle ORM.',
                },
                {
                    title: 'API Development',
                    description: 'Developed APIs for schedule conflict detection and priority-based course selection.',
                },
                {
                    title: 'Automation Engine',
                    description: 'Implemented Cron Job automation for periodic enrollment processes and fallback classes.',
                },
                {
                    title: 'Containerization',
                    description: 'Containerized the entire system using Docker + Docker Compose.',
                },
                {
                    title: 'Impact',
                    description: 'Automated the course registration flow reducing manual effort.',
                },
                {
                    title: 'Precision',
                    description: 'Successfully prevented all booking conflicts.',
                    result: '100% accuracy in conflict prevention',
                },
            ],
            stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'CronJobs', 'Drizzle ORM'],
            links: [
                {
                    label: 'Live Demo',
                    href: 'https://schedule-planer.vercel.app',
                    type: 'primary',
                },
            ],
        },
    },
    {
        slug: 'resumse-ai',
        title: 'Resumse AI (Pet Project)',
        description:
            'Developed a premium web-based CV Builder and Multilingual Portfolio platform featuring a rich text editor, AI writing assistant, real-time preview, high-quality PDF export, and Dark Mode UI.',
        image: {
            src: '/images/projects/resumse-ai/thumbnail.png',
            alt: 'Resumse AI Thumbnail',
        },
        details: {
            hero: {
                summary:
                    'A premium web-based CV Builder and Multilingual Portfolio platform with an AI writing assistant.',
                tags: ['React', 'TypeScript', 'TipTap', 'Gemini AI'],
            },
            stats: [
                { label: 'Role', value: 'Frontend Developer' },
                { label: 'Team size', value: '1' },
            ],
            overview: [
                {
                    title: 'Features',
                    body: 'Rich text editor, AI writing assistant, real-time preview, high-quality PDF export, Dark Mode UI.',
                },
            ],
            features: [
                {
                    title: 'Application Development',
                    description: 'Built the application from scratch using React 19, TypeScript, Vite.',
                },
                {
                    title: 'UI/UX Design',
                    description: 'Designed premium UI using Vanilla CSS + Framer Motion for polished micro-interactions and premium UX.',
                },
                {
                    title: 'Rich Text & State',
                    description: 'Integrated TipTap rich text editor and implemented state management using Zustand.',
                },
                {
                    title: 'Generative AI Integration',
                    description: 'Integrated Google Generative AI (Gemini) to act as an AI writing assistant, significantly reducing resume creation time.',
                },
                {
                    title: 'Internationalization & Export',
                    description: 'Configured i18next internationalization and implemented custom PDF export using react-to-print.',
                },
                {
                    title: 'Performance',
                    description: 'Optimized transitions and rendering.',
                    result: 'Lightweight SPA with zero-latency transitions',
                },
            ],
            stack: ['React', 'TypeScript', 'i18next', 'TipTap', 'Google Generative AI'],
            links: [
                {
                    label: 'Live Beta',
                    href: 'https://resumse-ai-beta.vercel.app',
                    type: 'primary',
                },
            ],
        },
    },
];
