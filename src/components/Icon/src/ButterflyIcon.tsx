import { SVGProps } from 'react';

export const ButterflyIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <ellipse cx="14" cy="17" rx="8" ry="6" transform="rotate(-25 14 17)" fill="#F4A6A4" />
        <ellipse cx="34" cy="17" rx="8" ry="6" transform="rotate(25 34 17)" fill="#F4A6A4" />
        <ellipse cx="15" cy="32" rx="6.5" ry="5" transform="rotate(20 15 32)" fill="#E76F51" />
        <ellipse cx="33" cy="32" rx="6.5" ry="5" transform="rotate(-20 33 32)" fill="#E76F51" />
        <circle cx="13" cy="16" r="1.8" fill="#FFFFFF" />
        <circle cx="35" cy="16" r="1.8" fill="#FFFFFF" />
        <circle cx="24" cy="11" r="3" fill="#264653" />
        <rect x="21.5" y="13" width="5" height="24" rx="2.5" fill="#264653" />
        <path d="M21 8 C 18 4 15 4 13 6" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
        <path d="M27 8 C 30 4 33 4 35 6" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
    </svg>
);

export default ButterflyIcon;
