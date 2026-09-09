import { SVGProps } from 'react';

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path
            d="M32 6 C 22 8 14 16 14 26 C 14 36 22 42 32 42 C 24 40 20 32 22 24 C 24 16 28 10 32 6 Z"
            fill="#E9C46A"
        />
        <circle cx="36" cy="14" r="1.5" fill="#2A2A2A" />
        <circle cx="40" cy="22" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default MoonIcon;
