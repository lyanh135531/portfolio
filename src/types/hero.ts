export interface HeroData {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    socialLinks: SocialLink[];
}

export interface SocialLink {
    href: string;
    title: string;
    icon: string;
}
