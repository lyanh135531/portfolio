import { ImageType } from './common';

export type ProjectLink = {
    label: string;
    href: string;
    type?: 'primary' | 'secondary';
};

export type ProjectStat = {
    label: string;
    value: string;
    helper?: string;
};

export type ProjectSection = {
    title: string;
    body: string;
    highlights?: string[];
};

export type ProjectFeature = {
    title: string;
    description: string;
    result?: string;
};

export type ProjectDetails = {
    hero: {
        summary: string;
        tags: string[];
    };
    cover: {
        admin: ImageType;
        user: ImageType;
    };
    stats: ProjectStat[];
    overview: ProjectSection[];
    features: ProjectFeature[];
    stack: string[];
    links: ProjectLink[];
    gallery: ImageType[];
};

export type ProjectData = {
    slug: string;
    image: ImageType;
    title: string;
    description: string;
    details: ProjectDetails;
};
