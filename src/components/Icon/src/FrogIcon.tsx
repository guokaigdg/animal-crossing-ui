import { SVGProps } from 'react';

export const FrogIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="14" cy="14" r="6.5" fill="#588157" />
        <circle cx="34" cy="14" r="6.5" fill="#588157" />
        <circle cx="14" cy="14" r="3.5" fill="#FFFFFF" />
        <circle cx="34" cy="14" r="3.5" fill="#FFFFFF" />
        <circle cx="14" cy="15" r="1.8" fill="#2A2A2A" />
        <circle cx="34" cy="15" r="1.8" fill="#2A2A2A" />
        <ellipse cx="24" cy="29" rx="16" ry="12" fill="#588157" />
        <path d="M13 29 Q 24 39 35 29" stroke="#2A2A2A" fill="none" stroke-width="2.5" />
        <circle cx="11" cy="33" r="2" fill="#F4A6A4" />
        <circle cx="37" cy="33" r="2" fill="#F4A6A4" />
    </svg>
);

export default FrogIcon;
