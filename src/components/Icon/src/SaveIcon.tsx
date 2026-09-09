import { SVGProps } from 'react';

export const SaveIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M10 7 L 32 7 L 40 15 L 40 41 L 8 41 L 8 7 Z" fill="#264653" />
        <rect x="15" y="7" width="14" height="11" fill="#F4A6A4" />
        <rect x="26" y="9.5" width="4" height="6" fill="#FAEDCD" />
        <rect x="15" y="25" width="18" height="16" fill="#FAEDCD" />
        <path d="M19 31 L 29 31 M 19 35 L 26 35" stroke="#2A2A2A" stroke-width="2" />
    </svg>
);

export default SaveIcon;
