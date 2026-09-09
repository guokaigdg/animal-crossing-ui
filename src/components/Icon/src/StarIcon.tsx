import { SVGProps } from 'react';

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M24 6 L29 18 L42 19 L32 28 L35 41 L24 34 L13 41 L16 28 L6 19 L19 18 Z" fill="#E9C46A" />
        <circle cx="20" cy="22" r="1.3" fill="#2A2A2A" />
        <circle cx="28" cy="22" r="1.3" fill="#2A2A2A" />
    </svg>
);

export default StarIcon;
