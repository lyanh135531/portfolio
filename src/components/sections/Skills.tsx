import React from 'react';
import { skillsData } from '@/data/skills';
import { Skill, SkillCategory, SkillLevel } from '@/types/skills';

const getLevelTagColor = (level: SkillLevel) => {
    switch (level) {
        case 'expert':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'advanced':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'intermediate':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'beginner':
            return 'bg-gray-100 text-gray-800 border-gray-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

const getLevelText = (level: SkillLevel) => {
    switch (level) {
        case 'expert':
            return 'Expert';
        case 'advanced':
            return 'Advanced';
        case 'intermediate':
            return 'Intermediate';
        case 'beginner':
            return 'Beginner';
        default:
            return 'Beginner';
    }
};

const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                <span className="font-medium text-gray-900">{skill.name}</span>
            </div>
            <span
                className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelTagColor(skill.level)}`}
            >
                {getLevelText(skill.level)}
            </span>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="flex flex-col gap-12 pt-20">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold leading-none">{skillsData.title}</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skillsData.categories.map((category: SkillCategory) => (
                    <div key={category.title} className="flex flex-col gap-2">
                        <div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>

                        <div className="rounded-lg p-4">
                            {category.skills
                                .sort((a, b) => {
                                    const levelOrder = {
                                        expert: 4,
                                        advanced: 3,
                                        intermediate: 2,
                                        beginner: 1,
                                    };
                                    return levelOrder[b.level] - levelOrder[a.level];
                                })
                                .map((skill: Skill) => (
                                    <SkillItem key={skill.name} skill={skill} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
