import { SVGProps } from 'react';

export const AnchorIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="10" r="4" fill="#264653" />
        <path d="M24 14 L24 38" stroke="#2A2A2A" stroke-width="4" />
        <path d="M16 22 L24 22 L32 22" stroke="#2A2A2A" stroke-width="3" />
        <path d="M8 30 C 8 38 14 42 24 42 C 34 42 40 38 40 30" fill="none" stroke="#2A2A2A" />
        <path d="M8 30 L12 26 L16 30" fill="#264653" />
        <path d="M32 30 L36 26 L40 30" fill="#264653" />
    </svg>
);

export default AnchorIcon;
