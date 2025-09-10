import Image from 'next/image';
import { ProjectData } from '@/types/project';

const ProjectItem = (project: ProjectData) => {
    return (
        <div className="group cursor-pointer flex flex-col gap-4">
            <div className="relative w-full h-72 overflow-hidden rounded-lg">
                <Image
                    src={project.image.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-3">{project.description}</p>
        </div>
    );
};

export default ProjectItem;
