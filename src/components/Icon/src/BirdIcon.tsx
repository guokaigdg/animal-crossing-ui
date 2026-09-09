import { SVGProps } from 'react';

export const BirdIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <ellipse cx="22" cy="26" rx="16" ry="12" fill="#2A9D8F" />
        <path d="M36 24 L42 20 L42 28 Z" fill="#E76F51" />
        <path d="M28 18 L36 14 L34 22 Z" fill="#264653" />
        <circle cx="34" cy="22" r="2" fill="#FFFFFF" />
        <circle cx="34" cy="22" r="1" fill="#2A2A2A" />
    </svg>
);

export default BirdIcon;
