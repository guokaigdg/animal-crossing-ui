import { SVGProps } from 'react';

export const LeafIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M8 40 C 8 18 24 6 40 8 C 40 24 26 40 8 40 Z" fill="#588157" />
        <path d="M8 40 L40 8" stroke="#2A2A2A" stroke-width="2" />
    </svg>
);

export default LeafIcon;
