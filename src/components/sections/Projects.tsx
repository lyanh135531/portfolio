import ProjectItem from '@/components/shared/ProjectItem';
import { projectData } from '@/data/project';

const Projects = () => {
    return (
        <section className="flex flex-col gap-20 py-20">
            <h2 className="text-4xl font-bold leading-none">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projectData.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
