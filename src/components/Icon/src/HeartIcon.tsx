import { SVGProps } from 'react';

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#2A2A2A"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M24 40 C 8 30 4 18 12 12 C 18 8 22 12 24 16 C 26 12 30 8 36 12 C 44 18 40 30 24 40 Z" fill="#E76F51" />
        <circle cx="18" cy="20" r="1.5" fill="#2A2A2A" />
        <circle cx="30" cy="20" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default HeartIcon;
