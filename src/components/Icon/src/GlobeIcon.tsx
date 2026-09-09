import { SVGProps } from 'react';

export const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="21" r="14" fill="#2A9D8F" />
        <ellipse cx="24" cy="21" rx="6" ry="14" stroke="#2A2A2A" stroke-width="2" fill="none" />
        <path d="M10 21 L 38 21" stroke="#2A2A2A" stroke-width="2" />
        <path d="M17 13 C 19 10 24 10 25 13 C 23 15 19 16 17 13 Z" fill="#588157" />
        <path d="M26 27 C 28 25 32 26 31 29 C 29 31 25 30 26 27 Z" fill="#588157" />
        <path d="M24 35 L 24 39" stroke="#2A2A2A" stroke-width="3" />
        <path d="M15 42 L 33 42" stroke="#2A2A2A" stroke-width="3.5" />
    </svg>
);

export default GlobeIcon;
