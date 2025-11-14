export interface AboutData {
    introduction: {
        title: string;
        description: string;
    };
    experience: {
        title: string;
        items: {
            role: string;
            company: string;
            period: string;
            description: string;
        }[];
    };
    education: {
        title: string;
        items: {
            degree: string;
            institution: string;
            period: string;
        }[];
    };
    learning: {
        title: string;
        items: {
            technology: string;
            description: string;
            status: 'in-progress' | 'exploring' | 'deepening';
        }[];
    };
}
