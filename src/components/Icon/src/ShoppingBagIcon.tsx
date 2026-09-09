import { SVGProps } from 'react';

export const ShoppingBagIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M18 17 C 18 8 30 8 30 17" stroke="#2A2A2A" stroke-width="3" fill="none" />
        <path d="M10 16 L 38 16 L 36 42 L 12 42 Z" fill="#F4A6A4" />
        <circle cx="20" cy="26" r="1.6" fill="#2A2A2A" />
        <circle cx="28" cy="26" r="1.6" fill="#2A2A2A" />
        <path d="M20 30 Q 24 33 28 30" stroke="#2A2A2A" fill="none" stroke-width="2" />
    </svg>
);

export default ShoppingBagIcon;
