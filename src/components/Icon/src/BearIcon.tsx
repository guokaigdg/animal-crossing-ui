import { SVGProps } from 'react';

export const BearIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="12" cy="14" r="5" fill="#8B5E3C" />
        <circle cx="36" cy="14" r="5" fill="#8B5E3C" />
        <circle cx="12" cy="14" r="2" fill="#F4A6A4" />
        <circle cx="36" cy="14" r="2" fill="#F4A6A4" />
        <circle cx="24" cy="27" r="15" fill="#8B5E3C" />
        <circle cx="18" cy="24" r="2.5" fill="#FFFFFF" />
        <circle cx="30" cy="24" r="2.5" fill="#FFFFFF" />
        <circle cx="18" cy="25" r="1.3" fill="#2A2A2A" />
        <circle cx="30" cy="25" r="1.3" fill="#2A2A2A" />
        <ellipse cx="24" cy="32" rx="6" ry="4.5" fill="#FAEDCD" />
        <ellipse cx="24" cy="30.5" rx="2.5" ry="1.8" fill="#2A2A2A" />
        <path
            d="M24 32.3 L24 34 M24 34 Q 21 36 19.5 34.5 M24 34 Q 27 36 28.5 34.5"
            stroke="#2A2A2A"
            fill="none"
            stroke-width="1.8"
        />
    </svg>
);

export default BearIcon;
