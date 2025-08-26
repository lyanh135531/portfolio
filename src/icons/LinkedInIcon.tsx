import { LucideProps } from 'lucide-react';

const LinkedInIcon = (props: LucideProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 119.2 120"
            aria-label="LinkedIn icon"
            {...props}
        >
            <path
                d="M110.4 0H8.8C3.9 0 0 3.8 0 8.6v102.8c0 4.7 3.9 8.6 8.8 8.6h101.6c4.9 0 8.8-3.9 8.8-8.6V8.6c0-4.8-3.9-8.6-8.8-8.6ZM36.1 100.4h-18V46.2h18v54.2Zm-9-61.5H27c-6 0-9.9-4.2-9.9-9.4s4-9.4 10.2-9.4 9.9 4 10.1 9.4c0 5.2-3.9 9.4-10.2 9.4Zm74 61.5h-18v-29c0-7.3-2.6-12.2-9.1-12.2s-7.9 3.3-9.2 6.6c-.5 1.2-.6 2.8-.6 4.4v30.3h-18s.2-49.1 0-54.2h18V54c2.4-3.7 6.7-8.9 16.2-8.9s20.7 7.7 20.7 24.4v31.1Z"
                style={{ fill: '#151313' }}
            ></path>
        </svg>
    );
};

export default LinkedInIcon;
