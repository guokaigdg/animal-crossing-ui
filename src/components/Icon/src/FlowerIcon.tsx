import { SVGProps } from 'react';

export const FlowerIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="16" r="7" fill="#F4A6A4" />
        <circle cx="14" cy="22" r="7" fill="#F4A6A4" />
        <circle cx="34" cy="22" r="7" fill="#F4A6A4" />
        <circle cx="18" cy="32" r="7" fill="#F4A6A4" />
        <circle cx="30" cy="32" r="7" fill="#F4A6A4" />
        <circle cx="24" cy="24" r="6" fill="#E9C46A" />
    </svg>
);

export default FlowerIcon;
