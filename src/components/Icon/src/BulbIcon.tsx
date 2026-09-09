import { SVGProps } from 'react';

export const BulbIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M24 6 C 14 6 10 16 14 24 L14 30 L34 30 L34 24 C 38 16 34 6 24 6 Z" fill="#E9C46A" />
        <rect x="16" y="30" width="16" height="6" fill="#264653" />
        <rect x="18" y="36" width="12" height="4" fill="#264653" />
        <circle cx="20" cy="18" r="1.5" fill="#2A2A2A" />
        <circle cx="28" cy="18" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default BulbIcon;
