import { SVGProps } from 'react';

export const OwlIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M12 14 L15 5 L21 12 Z" fill="#264653" />
        <path d="M36 14 L33 5 L27 12 Z" fill="#264653" />
        <ellipse cx="24" cy="27" rx="15" ry="16" fill="#264653" />
        <circle cx="18" cy="22" r="6" fill="#FFFFFF" />
        <circle cx="30" cy="22" r="6" fill="#FFFFFF" />
        <circle cx="18" cy="23" r="2.5" fill="#2A2A2A" />
        <circle cx="30" cy="23" r="2.5" fill="#2A2A2A" />
        <path d="M21.5 28 L26.5 28 L24 32 Z" fill="#E9C46A" />
        <path d="M17 37 Q 20 39 23 37" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
        <path d="M25 37 Q 28 39 31 37" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
        <ellipse cx="18" cy="43" rx="3.5" ry="1.8" fill="#E9C46A" />
        <ellipse cx="30" cy="43" rx="3.5" ry="1.8" fill="#E9C46A" />
    </svg>
);

export default OwlIcon;
