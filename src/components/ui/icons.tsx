import FacebookIcon from '@/icons/FacebookIcon';
import GithubIcon from '@/icons/GithubIcon';
import LinkedInIcon from '@/icons/LinkedInIcon';
import { LucideIcon, LucideProps } from 'lucide-react';

export const Icons = {
    linkedin: (props: LucideProps) => <LinkedInIcon {...props} />,
    github: (props: LucideProps) => <GithubIcon {...props} />,
    facebook: (props: LucideProps) => <FacebookIcon {...props} />,
} as const;

export type Icon = LucideIcon;
export type IconKey = keyof typeof Icons;
