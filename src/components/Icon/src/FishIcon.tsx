import { SVGProps } from 'react';

export const FishIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M6 24 C 8 14 22 10 30 14 C 38 18 38 30 30 34 C 22 38 8 34 6 24 Z" fill="#2A9D8F" />
        <path d="M30 24 L42 14 L42 34 Z" fill="#E76F51" />
        <circle cx="14" cy="22" r="2" fill="#FFFFFF" />
        <circle cx="14" cy="22" r="1" fill="#2A2A2A" />
    </svg>
);

export default FishIcon;
