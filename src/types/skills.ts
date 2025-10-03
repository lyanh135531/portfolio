export type SkillLevel = 'basic' | 'intermediate' | 'advanced';

export type Skill = {
    name: string;
    level: SkillLevel;
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
};

export type SkillsData = {
    title: string;
    categories: SkillCategory[];
};
