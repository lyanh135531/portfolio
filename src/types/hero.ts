import { ImageType } from '@/types/common';

export interface HeroData {
    title: string;
    description: string;
    image: ImageType;
    socialLinks: SocialLink[];
}

export interface SocialLink {
    href: string;
    title: string;
    icon: string;
}
