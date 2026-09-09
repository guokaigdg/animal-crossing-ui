import { SVGProps } from 'react';

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="24" r="17" fill="#E9C46A" />
        <path d="M24 15 L 24 33" stroke="#2A2A2A" stroke-width="4.5" />
        <path d="M15 24 L 33 24" stroke="#2A2A2A" stroke-width="4.5" />
    </svg>
);

export default PlusIcon;
