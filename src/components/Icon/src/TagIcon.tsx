import { SVGProps } from 'react';

export const TagIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M28 6 L42 6 L42 20 L24 38 L10 24 Z" fill="#F4A6A4" />
        <circle cx="34" cy="14" r="3" fill="#FFFFFF" />
    </svg>
);

export default TagIcon;
