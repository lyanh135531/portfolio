import { SkillsData } from '@/types/skills';

export const skillsData: SkillsData = {
    title: 'Skills & Technologies',
    categories: [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', level: 'advanced' },
                { name: 'Next.js', level: 'advanced' },
                { name: 'TypeScript', level: 'advanced' },
                { name: 'Tailwind CSS', level: 'advanced' },
                { name: 'Zustand', level: 'intermediate' },
                { name: 'Redux, Context', level: 'intermediate' },
                { name: 'React Query', level: 'intermediate' },
                { name: 'React Hook Form', level: 'intermediate' },
            ],
        },
        {
            title: 'Backend Development',
            skills: [
                { name: '.NET Core', level: 'advanced' },
                { name: 'Python: FastAPI, Flask', level: 'intermediate' },
                { name: 'RESTful API', level: 'advanced' },
                { name: 'SQL Server', level: 'advanced' },
                { name: 'PostgreSQL', level: 'intermediate' },
                { name: 'MySQL', level: 'intermediate' },
                { name: 'Redis', level: 'basic' },
                { name: 'MongoDB', level: 'basic' },
                { name: 'GraphQL', level: 'basic' },
            ],
        },
        {
            title: 'AI & Machine Learning',
            skills: [
                { name: 'LLMs (OpenAI, Gemini)', level: 'advanced' },
                { name: 'RAG (Retrieval-Augmented Generation)', level: 'advanced' },
                { name: 'Model Context Protocol (MCP)', level: 'intermediate' },
                { name: 'Computer Vision (YOLO, ResNet)', level: 'intermediate' },
                { name: 'OCR Pipelines', level: 'intermediate' },
                { name: 'Hugging Face Transformers', level: 'basic' },
                { name: 'Open Source LLMs (Llama, Mistral)', level: 'basic' },
            ],
        },
        {
            title: 'DevOps & Infrastructure',
            skills: [
                { name: 'Docker', level: 'intermediate' },
                { name: 'Linux Server Administration', level: 'intermediate' },
                { name: 'CI/CD (GitLab CI)', level: 'intermediate' },
                { name: 'Nginx', level: 'basic' },
                { name: 'IIS', level: 'intermediate' },
                { name: 'Microservices', level: 'intermediate' },
                { name: 'Clean Architecture', level: 'intermediate' },
                { name: 'Kubernetes', level: 'basic' },
                { name: 'RabbitMQ', level: 'basic' },
                { name: 'Kafka', level: 'basic' },
                { name: 'Prometheus & Grafana', level: 'basic' },
            ],
        },
        {
            title: 'Project Management',
            skills: [
                { name: 'Agile/Scrum', level: 'intermediate' },
                { name: 'Jira', level: 'intermediate' },
                { name: 'GitHub', level: 'intermediate' },
                { name: 'GitLab', level: 'intermediate' },
                { name: 'Notion', level: 'basic' },
                { name: 'Redmine', level: 'basic' },
            ],
        },
        {
            title: 'Tools & IDEs',
            skills: [
                { name: 'Cursor', level: 'advanced' },
                { name: 'JetBrains IDEs (Rider, PyCharm, DataGrip)', level: 'advanced' },
                { name: 'VSCode', level: 'advanced' },
                { name: 'Git', level: 'advanced' },
                { name: 'PowerShell / Batch Scripting', level: 'intermediate' },
                { name: 'Postman', level: 'intermediate' },
                { name: 'Figma (Dev Mode)', level: 'intermediate' },
                { name: 'Docker Desktop', level: 'intermediate' },
                { name: 'Bitvise SSH Client', level: 'intermediate' },
            ],
        },
    ],
};
