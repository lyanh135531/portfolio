import { SkillsData } from '@/types/skills';

export const skillsData: SkillsData = {
    title: 'Skills & Technologies',
    categories: [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', level: 'expert' },
                { name: 'Next.js', level: 'advanced' },
                { name: 'TypeScript', level: 'expert' },
                { name: 'Tailwind CSS', level: 'expert' },
                { name: 'Shadcn/ui', level: 'expert' },
            ],
        },
        {
            title: 'Backend Development',
            skills: [
                { name: '.NET Core', level: 'expert' },
                { name: 'Python: Flask, FastAPI', level: 'advanced' },
                { name: 'Next.js', level: 'intermediate' },
                { name: 'RESTful API', level: 'expert' },
                { name: 'GraphQL', level: 'intermediate' },
                { name: 'PostgreSQL, MySQL', level: 'expert' },
                { name: 'Redis', level: 'intermediate' },
                { name: 'MongoDB', level: 'intermediate' },
                { name: 'RabbitMQ', level: 'intermediate' },
                { name: 'Kafka', level: 'intermediate' },
                { name: 'Kubernetes', level: 'intermediate' },
            ],
        },
        {
            title: 'DevOps & Infrastructure',
            skills: [
                { name: 'Docker', level: 'expert' },
                { name: 'Nginx', level: 'advanced' },
                { name: 'CI/CD (GitLab CI)', level: 'advanced' },
                { name: 'Microservices', level: 'advanced' },
                { name: 'Monorepo', level: 'expert' },
                { name: 'Clean Architecture', level: 'expert' },
                { name: 'Prometheus & Grafana (Monitoring)', level: 'intermediate' },
            ],
        },
        {
            title: 'Testing & Quality Assurance',
            skills: [
                { name: 'Unit Testing (NUnit)', level: 'intermediate' },
                { name: 'Postman', level: 'expert' },
            ],
        },
        {
            title: 'AI Integration',
            skills: [
                { name: 'Google Client APIs', level: 'advanced' },
                { name: 'OpenAI API', level: 'advanced' },
                { name: 'MCP', level: 'advanced' },
                { name: 'RAG', level: 'advanced' },
            ],
        },
        {
            title: 'Tools & IDEs',
            skills: [
                { name: 'Git', level: 'expert' },
                { name: 'JetBrains IDEs (Rider, PyCharm, DataGrip)', level: 'expert' },
                { name: 'GitHub Desktop, SourceTree', level: 'expert' },
                { name: 'Cursor', level: 'expert' },
                { name: 'VSCode', level: 'expert' },
            ],
        },
    ],
};
