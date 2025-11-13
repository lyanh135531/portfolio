'use client';

import { cubicBezier, motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { Skill, SkillCategory, SkillLevel } from '@/types/skills';

const skillsEase = cubicBezier(0.16, 1, 0.3, 1);

const getLevelTagColor = (level: SkillLevel) => {
    switch (level) {
        case 'advanced':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'intermediate':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'basic':
            return 'bg-gray-200 text-gray-800 border-gray-200';
        default:
            return 'bg-gray-200 text-gray-800 border-gray-200';
    }
};

const getLevelText = (level: SkillLevel) => {
    switch (level) {
        case 'advanced':
            return 'Advanced';
        case 'intermediate':
            return 'Intermediate';
        case 'basic':
        default:
            return 'Basic';
    }
};

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: skillsEase,
            when: 'beforeChildren',
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: skillsEase,
        },
    },
};

const skillVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: skillsEase,
        },
    },
};

const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <motion.div
            className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0"
            variants={skillVariants}
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                <span className="font-medium text-gray-900">{skill.name}</span>
            </div>
            <span
                className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelTagColor(skill.level)}`}
            >
                {getLevelText(skill.level)}
            </span>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <motion.section
            className="flex flex-col gap-12 pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariants}
        >
            <motion.div className="flex flex-col gap-4" variants={cardVariants}>
                <h2 className="text-4xl font-bold leading-none">{skillsData.title}</h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                variants={sectionVariants}
            >
                {skillsData.categories.map((category: SkillCategory) => (
                    <motion.div key={category.title} className="flex flex-col gap-2" variants={cardVariants}>
                        <div>
                            <motion.h3 className="text-xl font-bold" variants={cardVariants}>
                                {category.title}
                            </motion.h3>
                        </div>

                        <motion.div className="rounded-lg p-4" variants={cardVariants}>
                            {category.skills
                                .sort((a, b) => {
                                    const levelOrder = {
                                        advanced: 3,
                                        intermediate: 2,
                                        basic: 1,
                                    };
                                    return levelOrder[b.level] - levelOrder[a.level];
                                })
                                .map((skill: Skill) => (
                                    <SkillItem key={skill.name} skill={skill} />
                                ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Skills;
