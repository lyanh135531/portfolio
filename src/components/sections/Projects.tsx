import ProjectItem from '@/components/shared/ProjectItem';
import { projectData } from '@/data/project';
import Link from 'next/link';

const Projects = () => {
    return (
        <section className="flex flex-col gap-20 py-20 border-b">
            <h2 className="text-4xl font-bold leading-none">Featured Projects</h2>
            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectData.map((project) => (
                        <ProjectItem key={project.title} {...project} />
                    ))}
                </div>
                <Link
                    href="/projects"
                    className="flex font-medium text-sm text-primary hover:underline w-fit self-end"
                >
                    SEE ALL PROJECTS
                </Link>
            </div>
        </section>
    );
};

export default Projects;
