import { SVGProps } from 'react';

export const CompassIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="24" r="18" fill="#264653" />
        <path d="M24 10 L29 24 L24 38 L19 24 Z" fill="#E76F51" />
        <path d="M24 10 L24 24" stroke="#2A2A2A" stroke-width="2" />
    </svg>
);

export default CompassIcon;
