import { ProjectData } from '@/types/project';

export const projectData: ProjectData[] = [
    {
        slug: 'autoserver-ai-platform',
        title: 'AutoServer AI Platform',
        description:
            'An internal AI testing and integration platform built end-to-end at AutoServer Vietnam, enabling the team to demo, validate, and deploy AI capabilities into production.',
        image: {
            src: '/images/projects/autoserver-ai-platform/thumbnail.jpg',
            alt: 'AutoServer AI Platform UI',
        },
        details: {
            hero: {
                summary:
                    'Designed and built a full-stack microservices AI platform—frontend, backend, data model, and deployment—achieving a 93% reduction in AI API latency (14s → <1s for 50 images).',
                tags: ['Next.js', 'TypeScript', '.NET Core', 'Python', 'Docker', 'AI/ML'],
            },
            cover: {
                admin: {
                    src: '/images/projects/autoserver-ai-platform/detail/admin.jpg',
                    alt: 'AI Platform admin dashboard',
                },
                user: {
                    src: '/images/projects/autoserver-ai-platform/detail/user.jpg',
                    alt: 'AI Platform inference UI',
                },
            },
            stats: [
                { label: 'Role', value: 'Tech Lead & Architect' },
                { label: 'Timeline', value: 'Jul 2024 – Present' },
                {
                    label: 'Latency Reduction',
                    value: '93%',
                    helper: '14s → <1s for 50 images',
                },
            ],
            overview: [
                {
                    title: 'Context & Goals',
                    body: 'AutoServer needed a centralized environment to test, tune, and validate AI capabilities before integrating them into production products. No such infrastructure existed.',
                    highlights: [
                        'Build a full-stack AI testing platform from scratch',
                        'Integrate LLMs, YOLO/ResNet vision models, and OCR pipelines',
                        'Establish RAG and MCP-based context-aware AI workflows',
                    ],
                },
                {
                    title: 'Engineering Strategy',
                    body: 'Designed as a microservices system using .NET Core for the API layer, Python FastAPI for AI model inference, and Next.js for the frontend. Docker and Linux server management ensured portability and reliability.',
                },
            ],
            features: [
                {
                    title: 'AI Inference Engine',
                    description:
                        'Integrated YOLO, ResNet, and OCR models with a batching strategy that reduced API latency by 93%—from 14 seconds to under 1 second for 50 concurrent images.',
                    result: '93% latency improvement',
                },
                {
                    title: 'LLM & RAG Integration',
                    description:
                        'Built Retrieval-Augmented Generation pipelines using OpenAI and Gemini APIs with Model Context Protocol (MCP) for context-aware, grounded AI responses.',
                },
                {
                    title: 'Docker Optimization',
                    description:
                        'Optimized Docker image configuration to reduce virtual memory footprint by 4GB per deployment. Managed GPU/VRAM allocation for high-throughput AI inference workloads.',
                    result: '4GB memory saved per deployment',
                },
            ],
            stack: [
                'Next.js',
                '.NET Core',
                'Python FastAPI',
                'SQL Server',
                'Docker',
                'GitLab CI/CD',
                'Linux',
            ],
            links: [
                {
                    label: 'View on LinkedIn',
                    href: 'https://www.linkedin.com/in/lyanh-lian',
                    type: 'primary',
                },
            ],
            gallery: [
                {
                    src: '/images/projects/autoserver-ai-platform/detail/overview.jpg',
                    alt: 'AI Platform overview dashboard',
                },
                {
                    src: '/images/projects/autoserver-ai-platform/detail/inference.jpg',
                    alt: 'AI inference results panel',
                },
                {
                    src: '/images/projects/autoserver-ai-platform/detail/monitoring.jpg',
                    alt: 'System monitoring dashboard',
                },
            ],
        },
    },
    {
        slug: 'hr-management-platform',
        title: 'HR Management Platform',
        description:
            'A full-featured human resources management platform built at IDTEK JSC, covering employee lifecycle, payroll, attendance, leave management, and reporting.',
        image: {
            src: '/images/projects/hr-management-platform/thumbnail.jpg',
            alt: 'HR Management Platform',
        },
        details: {
            hero: {
                summary:
                    'Led frontend and backend development of an outsourced HR platform—delivered ahead of schedule as a key developer, with Core Base Code reused across the company.',
                tags: ['React', 'TypeScript', '.NET Core', 'SQL Server', 'RESTful API'],
            },
            cover: {
                admin: {
                    src: '/images/projects/hr-management-platform/detail/admin.jpg',
                    alt: 'HR Platform admin view',
                },
                user: {
                    src: '/images/projects/hr-management-platform/detail/user.jpg',
                    alt: 'HR Platform employee view',
                },
            },
            stats: [
                { label: 'Role', value: 'Key Developer' },
                { label: 'Timeline', value: '2021 – 2022' },
                { label: 'Company', value: 'IDTEK JSC' },
            ],
            overview: [
                {
                    title: 'Problem',
                    body: 'The client needed a centralized HR system to replace scattered spreadsheets and manual workflows, with multi-branch support and role-based access.',
                },
                {
                    title: 'Solution',
                    body: 'Built a monolithic-to-modular .NET Core API with a React frontend, implementing clean architecture patterns and reusable base code that became the company standard.',
                },
            ],
            features: [
                {
                    title: 'Employee Lifecycle Management',
                    description:
                        'Onboarding, contract tracking, performance reviews, and offboarding workflows with multi-level approval chains.',
                },
                {
                    title: 'Attendance & Leave Module',
                    description:
                        'Integration with timekeeping hardware, automated leave balance calculations, and approval workflows.',
                },
                {
                    title: 'Reporting & Analytics',
                    description:
                        'Dynamic report generation with export to Excel/PDF, powered by optimized SQL stored procedures for large datasets.',
                },
            ],
            stack: ['React', 'TypeScript', '.NET Core', 'SQL Server', 'IIS', 'Redmine'],
            links: [
                {
                    label: 'View on LinkedIn',
                    href: 'https://www.linkedin.com/in/lyanh-lian',
                    type: 'primary',
                },
            ],
            gallery: [
                {
                    src: '/images/projects/hr-management-platform/detail/employees.jpg',
                    alt: 'Employee management list',
                },
                {
                    src: '/images/projects/hr-management-platform/detail/attendance.jpg',
                    alt: 'Attendance tracking module',
                },
            ],
        },
    },
    {
        slug: 'meeting-room-booking',
        title: 'Meeting Room Booking System',
        description:
            'An enterprise meeting room reservation platform built at IDTEK JSC, with real-time availability, resource management, and automated notifications.',
        image: {
            src: '/images/projects/meeting-room-booking/thumbnail.jpg',
            alt: 'Meeting Room Booking System',
        },
        details: {
            hero: {
                summary:
                    'Built a real-time meeting room booking platform with conflict detection, resource allocation, and multi-channel reminders—delivered ahead of deadline.',
                tags: ['React', '.NET Core', 'SQL Server', 'SignalR', 'TypeScript'],
            },
            cover: {
                admin: {
                    src: '/images/projects/meeting-room-booking/detail/admin.jpg',
                    alt: 'Meeting room admin dashboard',
                },
                user: {
                    src: '/images/projects/meeting-room-booking/detail/user.jpg',
                    alt: 'Meeting room booking UI',
                },
            },
            stats: [
                { label: 'Role', value: 'Full-Stack Developer' },
                { label: 'Timeline', value: '2022 – 2023' },
                { label: 'Company', value: 'IDTEK JSC' },
            ],
            overview: [
                {
                    title: 'Challenge',
                    body: 'Enterprise clients needed a centralized system to eliminate double-booking, manage AV resources, and streamline meeting workflows across multiple office floors.',
                },
                {
                    title: 'Approach',
                    body: 'Used SignalR for real-time availability updates, combined with a clean React calendar UI and automated email/notification reminders to reduce no-shows.',
                },
            ],
            features: [
                {
                    title: 'Real-Time Availability',
                    description:
                        'SignalR-powered live updates prevent double-booking and instantly reflect cancellations across all connected clients.',
                },
                {
                    title: 'Resource Management',
                    description:
                        'Book projectors, video conferencing setups, and catering alongside room reservations in a single workflow.',
                },
                {
                    title: 'Smart Notifications',
                    description:
                        'Automated reminders via email and in-app notifications, with recurring meeting support and calendar integration.',
                },
            ],
            stack: ['React', 'TypeScript', '.NET Core', 'SignalR', 'SQL Server', 'IIS'],
            links: [
                {
                    label: 'View on LinkedIn',
                    href: 'https://www.linkedin.com/in/lyanh-lian',
                    type: 'primary',
                },
            ],
            gallery: [
                {
                    src: '/images/projects/meeting-room-booking/detail/calendar.jpg',
                    alt: 'Room calendar view',
                },
                {
                    src: '/images/projects/meeting-room-booking/detail/booking.jpg',
                    alt: 'Booking flow UI',
                },
            ],
        },
    },
    {
        slug: 'friendly-jewellery',
        title: 'Friendly Jewellery',
        description:
            'A multi-store management platform for a premium jewelry brand, synchronizing inventory, sales, and loyalty programs across all locations.',
        image: {
            src: '/images/projects/friendly-jewellery/thumbnail.jpg',
            alt: 'Friendly Jewellery storefront UI',
        },
        details: {
            hero: {
                summary:
                    'Built a multi-store management platform, synchronizing products, orders, and loyalty programs for a premium jewelry brand.',
                tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Firebase'],
            },
            cover: {
                admin: {
                    src: '/images/projects/friendly-jewellery/detail/admin.jpg',
                    alt: 'Friendly Jewellery admin view',
                },
                user: {
                    src: '/images/projects/friendly-jewellery/detail/user.jpg',
                    alt: 'Friendly Jewellery user view',
                },
            },
            stats: [
                { label: 'Role', value: 'Tech Lead' },
                { label: 'Timeline', value: '2023 – 2024' },
                {
                    label: 'Team Size',
                    value: '4 members',
                    helper: 'Product, Design, FE, BE',
                },
            ],
            overview: [
                {
                    title: 'Context & Goals',
                    body: 'The store chain needed a unified system to prevent data gaps between stores and central warehouse, while accelerating expansion.',
                    highlights: [
                        'Standardize purchase – sales – after-sales flow',
                        'Centralize customer data',
                        'Automate revenue reports by store',
                    ],
                },
                {
                    title: 'Implementation Strategy',
                    body: 'Split into two layers: headless commerce core and employee experience layer, combined with micro-interactions to reduce training pressure.',
                },
            ],
            features: [
                {
                    title: 'Real-time Inventory Sync',
                    description:
                        'WebSocket + 15-minute cron reconciliation helps management know exact inventory for each store.',
                    result: '+38% inventory accuracy',
                },
                {
                    title: 'Loyalty Customer Pipeline',
                    description:
                        'Segment customers by purchase behavior, create automated campaigns based on journey.',
                },
                {
                    title: 'Internal Design System',
                    description:
                        'Built component library based on Tailwind + Framer Motion enabling new screens in hours.',
                },
            ],
            stack: [
                'Next.js 14',
                'NestJS',
                'PostgreSQL',
                'Tailwind CSS',
                'AWS S3',
                'Framer Motion',
            ],
            links: [
                {
                    label: 'View Demo',
                    href: 'https://friendly-jewellery.example.com',
                    type: 'primary',
                },
            ],
            gallery: [
                {
                    src: '/images/projects/friendly-jewellery/detail/overview.jpg',
                    alt: 'Friendly Jewellery inventory overview',
                },
                {
                    src: '/images/projects/friendly-jewellery/detail/loyalty.jpg',
                    alt: 'Friendly Jewellery loyalty automation',
                },
                {
                    src: '/images/projects/friendly-jewellery/detail/report.jpg',
                    alt: 'Friendly Jewellery revenue report',
                },
            ],
        },
    },
    {
        slug: 'doctor-booking-system',
        title: 'Doctor Booking System',
        description:
            'A booking platform for patients and a capacity optimization tool for specialty clinics.',
        image: {
            src: '/images/projects/doctor-booking-system/thumbnail.jpg',
            alt: 'Doctor booking hero section',
        },
        details: {
            hero: {
                summary:
                    'Focused on patient experience: find the right doctor, quick booking, automatic reminders.',
                tags: ['Healthcare', 'Marketplace', 'Automation'],
            },
            cover: {
                admin: {
                    src: '/images/projects/doctor-booking-system/detail/admin.jpg',
                    alt: 'Doctor booking admin view',
                },
                user: {
                    src: '/images/projects/doctor-booking-system/detail/user.jpg',
                    alt: 'Doctor booking user view',
                },
            },
            stats: [
                { label: 'Role', value: 'Product Engineer' },
                { label: 'Timeline', value: '6 months' },
                { label: 'Patients', value: '25k+ users' },
            ],
            overview: [
                {
                    title: 'Insight',
                    body: 'Users need clear information about doctor specialties and weekly availability.',
                },
                {
                    title: 'Solution Design',
                    body: 'Created deep profiles, flexible filters, with booking + payment funnel without leaving the page.',
                },
            ],
            features: [
                {
                    title: 'Smart Search',
                    description: 'Filter by symptoms, time, insurance.',
                },
                {
                    title: 'Multi-channel Reminders',
                    description: 'Email + SMS + Zalo, reduced no-show rate by 27%.',
                },
                {
                    title: 'Clinic Coordination Board',
                    description:
                        'Drag-drop interface for staff, syncs with doctor schedules.',
                },
            ],
            stack: ['Next.js', 'Node.js', 'MongoDB', 'Twilio', 'Tailwind CSS'],
            links: [
                {
                    label: 'Product tour',
                    href: 'https://doctor-booking.example.com',
                    type: 'primary',
                },
            ],
            gallery: [
                {
                    src: '/images/projects/doctor-booking-system/detail/search.jpg',
                    alt: 'Doctor search UI',
                },
                {
                    src: '/images/projects/doctor-booking-system/detail/calendar.jpg',
                    alt: 'Clinic calendar',
                },
            ],
        },
    },
    {
        slug: 'portfolio-website',
        title: 'This Portfolio',
        description:
            'A modern, performance-focused personal portfolio built with Next.js 15 and Tailwind CSS, showcasing projects, skills, and professional experience.',
        image: {
            src: '/images/projects/portfolio-website/thumbnail.jpg',
            alt: 'Portfolio website screenshot',
        },
        details: {
            hero: {
                summary:
                    'Designed and built this portfolio from scratch with a focus on clean aesthetics, fast load times, and seamless content management via TypeScript data files.',
                tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            },
            cover: {
                admin: {
                    src: '/images/projects/portfolio-website/detail/admin.jpg',
                    alt: 'Portfolio source code',
                },
                user: {
                    src: '/images/projects/portfolio-website/detail/user.jpg',
                    alt: 'Portfolio live site',
                },
            },
            stats: [
                { label: 'Role', value: 'Designer & Developer' },
                { label: 'Timeline', value: '2025' },
                { label: 'Stack', value: 'Next.js 15' },
            ],
            overview: [
                {
                    title: 'Goals',
                    body: 'Create a professional online presence that accurately reflects engineering depth, AI specialization, and real-world project experience—without relying on templates.',
                },
                {
                    title: 'Approach',
                    body: 'Built with Next.js App Router, TypeScript-first data management, and a modular component system. SEO-optimized, mobile-first, and fully customizable.',
                },
            ],
            features: [
                {
                    title: 'Content-Driven Architecture',
                    description:
                        'All content managed through TypeScript data files—no CMS required, full type safety, and easy updates.',
                },
                {
                    title: 'Dynamic Project Pages',
                    description:
                        'Each project has a dedicated detail page generated from the data layer with rich content sections.',
                },
                {
                    title: 'Performance Optimized',
                    description:
                        'Next.js App Router with Server Components, image optimization, and minimal JavaScript for fast page loads.',
                },
            ],
            stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
            links: [
                {
                    label: 'View Live',
                    href: 'https://lylyanh.vercel.app',
                    type: 'primary',
                },
                {
                    label: 'GitHub Repo',
                    href: 'https://github.com/lyanh135531',
                },
            ],
            gallery: [
                {
                    src: '/images/projects/portfolio-website/detail/home.jpg',
                    alt: 'Portfolio home page',
                },
                {
                    src: '/images/projects/portfolio-website/detail/projects.jpg',
                    alt: 'Portfolio projects page',
                },
            ],
        },
    },
];
