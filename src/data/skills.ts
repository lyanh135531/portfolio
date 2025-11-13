import { SkillsData } from '@/types/skills';

export const skillsData: SkillsData = {
    title: 'Skills & Technologies',
    categories: [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', level: 'advanced' },
                { name: 'Next.js', level: 'basic' },
                { name: 'TypeScript', level: 'advanced' },
                { name: 'Tailwind CSS', level: 'advanced' },
                { name: 'Zustand', level: 'intermediate' },
                { name: 'Redux, Context', level: 'intermediate' },
                { name: 'Axios', level: 'intermediate' },
                { name: 'React Query', level: 'intermediate' },
                { name: 'React Hook Form', level: 'intermediate' },
            ],
        },
        {
            title: 'Backend Development',
            skills: [
                { name: '.NET Core', level: 'advanced' },
                { name: 'Python: Flask, FastAPI', level: 'intermediate' },
                { name: 'Next.js', level: 'basic' },
                { name: 'RESTful API', level: 'advanced' },
                { name: 'GraphQL', level: 'basic' },
                { name: 'PostgreSQL', level: 'intermediate' },
                { name: 'MySQL', level: 'intermediate' },
                { name: 'Redis', level: 'basic' },
                { name: 'MongoDB', level: 'basic' },
            ],
        },
        {
            title: 'DevOps & Infrastructure',
            skills: [
                { name: 'Docker', level: 'intermediate' },
                { name: 'Nginx', level: 'basic' },
                { name: 'CI/CD (GitLab CI)', level: 'intermediate' },
                { name: 'Microservices', level: 'intermediate' },
                { name: 'Monorepo', level: 'intermediate' },
                { name: 'Clean Architecture', level: 'intermediate' },
                { name: 'Kubernetes', level: 'basic' },
                { name: 'RabbitMQ', level: 'basic' },
                { name: 'Kafka', level: 'basic' },
                { name: 'Prometheus & Grafana (Monitoring)', level: 'basic' },
            ],
        },
        {
            title: 'Project Management',
            skills: [
                { name: 'Agile/Scrum', level: 'basic' },
                { name: 'Jira', level: 'intermediate' },
                { name: 'GitHub', level: 'intermediate' },
                { name: 'GitLab', level: 'intermediate' },
                { name: 'Notion', level: 'basic' },
                { name: 'Redmine', level: 'basic' },
            ],
        },
        {
            title: 'AI Integration',
            skills: [
                { name: 'Google Client APIs', level: 'advanced' },
                { name: 'OpenAI API', level: 'advanced' },
                { name: 'Model Context Protocol', level: 'intermediate' },
                { name: 'Retrieval-Augmented Generation', level: 'intermediate' },
                { name: 'Hugging Face Transformers', level: 'basic' },
                { name: 'Open Source LLMs (Llama, Mistral, etc.)', level: 'basic' },
            ],
        },
        {
            title: 'Tools & IDEs',
            skills: [
                { name: 'Cursor', level: 'advanced' },
                { name: 'JetBrains IDEs (Rider, PyCharm, DataGrip)', level: 'advanced' },
                { name: 'GitHub Desktop, SourceTree', level: 'advanced' },
                { name: 'VSCode', level: 'advanced' },
                { name: 'Git', level: 'advanced' },
                { name: 'Postman', level: 'intermediate' },
                { name: 'Figma (Dev mode)', level: 'intermediate' },
                { name: 'Docker Desktop', level: 'intermediate' },
                { name: 'Bitvise SSH Client', level: 'intermediate' },
            ],
        },
    ],
};
