import { SVGProps } from 'react';

export const CherryIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M15 27 C 15 17 22 11 29 7" stroke="#8B5E3C" stroke-width="2.5" fill="none" />
        <path d="M33 29 C 33 20 32 12 29 7" stroke="#8B5E3C" stroke-width="2.5" fill="none" />
        <ellipse cx="27" cy="7" rx="5" ry="2.5" transform="rotate(-15 27 7)" fill="#588157" />
        <circle cx="14" cy="33" r="8" fill="#E76F51" />
        <circle cx="33" cy="35" r="8" fill="#E76F51" />
        <circle cx="11" cy="30" r="1.8" fill="#FFFFFF" />
        <circle cx="30" cy="32" r="1.8" fill="#FFFFFF" />
    </svg>
);

export default CherryIcon;
