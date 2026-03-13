import { projectData } from '@/data/project';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ProjectDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export const generateStaticParams = () =>
    projectData.map((project) => ({
        slug: project.slug,
    }));

export const generateMetadata = async ({
    params,
}: ProjectDetailPageProps): Promise<Metadata> => {
    const { slug } = await params;
    const project = projectData.find((item) => item.slug === slug);

    if (!project) {
        return {
            title: 'Project not found',
        };
    }

    return {
        title: `${project.title}`,
        description: project.description,
        openGraph: {
            title: `${project.title}`,
            description: project.description,
            images: [
                {
                    url: project.image.src,
                    alt: project.image.alt,
                },
            ],
        },
    };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
    const { slug } = await params;
    const project = projectData.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    const { details } = project;

    return (
        <div className="mx-auto flex w-full flex-col gap-12">
            <section className="space-y-6">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
                        {project.title}
                    </h1>
                    <p className="text-lg text-neutral-600">{details.hero.summary}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    {details.hero.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-neutral-300 px-4 py-1 text-sm font-medium text-neutral-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-3">
                {details.stats.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                            {stat.label}
                        </p>
                        <p className="text-2xl font-semibold text-neutral-900">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </section>

            <section className="space-y-8">
                {details.overview.map((item) => (
                    <article key={item.title} className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold text-neutral-900">
                                {item.title}
                            </h2>
                            <p className="text-base leading-relaxed text-neutral-600">
                                {item.body}
                            </p>
                        </div>
                        {item.highlights && (
                            <ul className="space-y-2 text-sm text-neutral-600">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-2">
                                        <span className="text-neutral-400">—</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </article>
                ))}
            </section>
        </div>
    );
};

export default ProjectDetailPage;
