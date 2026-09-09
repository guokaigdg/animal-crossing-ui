import { SVGProps } from 'react';

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="24" r="18" fill="#2A9D8F" />
        <path d="M24 24 L24 13" stroke="#FFFFFF" stroke-width="3" />
        <path d="M24 24 L33 28" stroke="#FFFFFF" stroke-width="3" />
        <circle cx="24" cy="24" r="2" fill="#2A2A2A" />
    </svg>
);

export default ClockIcon;
