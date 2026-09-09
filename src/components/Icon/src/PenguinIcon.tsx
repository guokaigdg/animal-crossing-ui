import { SVGProps } from 'react';

export const PenguinIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <ellipse cx="24" cy="26" rx="13" ry="17" fill="#264653" />
        <ellipse cx="24" cy="30" rx="7.5" ry="10" fill="#FFFFFF" />
        <circle cx="19" cy="19" r="2.5" fill="#FFFFFF" />
        <circle cx="29" cy="19" r="2.5" fill="#FFFFFF" />
        <circle cx="19" cy="20" r="1.3" fill="#2A2A2A" />
        <circle cx="29" cy="20" r="1.3" fill="#2A2A2A" />
        <path d="M21 23 L27 23 L24 26.5 Z" fill="#E76F51" />
        <path d="M11 26 C 7 30 8 36 12 38" fill="none" stroke="#2A2A2A" />
        <path d="M37 26 C 41 30 40 36 36 38" fill="none" stroke="#2A2A2A" />
        <ellipse cx="18" cy="43" rx="4.5" ry="2" fill="#E76F51" />
        <ellipse cx="30" cy="43" rx="4.5" ry="2" fill="#E76F51" />
    </svg>
);

export default PenguinIcon;
