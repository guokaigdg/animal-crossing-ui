import { SVGProps } from 'react';

export const BalloonIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M24 5 C 14 5 9 13 9 19 C 9 26 15 31 24 31 C 33 31 39 26 39 19 C 39 13 34 5 24 5 Z" fill="#E76F51" />
        <path d="M21 31 L 27 31 L 24 35 Z" fill="#E76F51" />
        <path d="M24 35 C 20 38 28 40 24 44" stroke="#2A2A2A" stroke-width="2" fill="none" />
        <circle cx="17" cy="14" r="2.2" fill="#FFFFFF" />
        <circle cx="20.5" cy="19" r="1.4" fill="#2A2A2A" />
        <circle cx="27.5" cy="19" r="1.4" fill="#2A2A2A" />
        <path d="M21 23 Q 24 25 27 23" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
    </svg>
);

export default BalloonIcon;
