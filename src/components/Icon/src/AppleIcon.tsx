import { SVGProps } from 'react';

export const AppleIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M24 14 C 14 12 6 22 10 32 C 12 38 18 42 24 38 C 30 42 36 38 38 32 C 42 22 34 12 24 14 Z"
            fill="#E76F51"
        />
        <path d="M24 14 C 24 8 28 4 32 6" stroke="#2A2A2A" fill="none" />
        <path d="M28 8 C 32 6 36 10 34 12" fill="#588157" />
        <circle cx="20" cy="26" r="1.5" fill="#2A2A2A" />
        <circle cx="28" cy="26" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default AppleIcon;
