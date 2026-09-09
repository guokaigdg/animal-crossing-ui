import { SVGProps } from 'react';

export const FoxIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M11 18 L14 5 L21 14 Z" fill="#E76F51" />
        <path d="M37 18 L34 5 L27 14 Z" fill="#E76F51" />
        <path d="M13.5 15 L15 9 L18.5 13.5 Z" fill="#F4A6A4" />
        <path d="M34.5 15 L33 9 L29.5 13.5 Z" fill="#F4A6A4" />
        <path d="M24 13 C 14 13 9 20 10 26 L 24 41 L 38 26 C 39 20 34 13 24 13 Z" fill="#E76F51" />
        <path d="M10 26 L 24 41 L 38 26 C 35 31 30 33 24 33 C 18 33 13 31 10 26 Z" fill="#FAEDCD" />
        <circle cx="18" cy="22" r="1.6" fill="#2A2A2A" />
        <circle cx="30" cy="22" r="1.6" fill="#2A2A2A" />
        <ellipse cx="24" cy="37.5" rx="2.5" ry="2" fill="#2A2A2A" />
    </svg>
);

export default FoxIcon;
