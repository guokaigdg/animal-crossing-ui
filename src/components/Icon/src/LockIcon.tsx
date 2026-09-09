import { SVGProps } from 'react';

export const LockIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M16 21 L 16 15 C 16 7 32 7 32 15 L 32 21" stroke="#2A2A2A" stroke-width="4" fill="none" />
        <rect x="10" y="21" width="28" height="19" rx="3" fill="#E9C46A" />
        <circle cx="24" cy="29" r="3" fill="#2A2A2A" />
        <path d="M24 29 L 21.5 35 L 26.5 35 Z" fill="#2A2A2A" />
    </svg>
);

export default LockIcon;
