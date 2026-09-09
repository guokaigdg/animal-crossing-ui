import { SVGProps } from 'react';

export const CoffeeIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M10 22 L10 36 C 10 40 14 42 18 42 L28 42 C 32 42 36 40 36 36 L36 22 Z" fill="#8B5E3C" />
        <path d="M36 26 C 42 26 42 34 36 34" fill="#8B5E3C" />
        <path d="M16 10 C 16 14 20 14 20 18" stroke="#2A2A2A" stroke-width="2" />
        <path d="M22 10 C 22 14 26 14 26 18" stroke="#2A2A2A" stroke-width="2" />
        <path d="M28 10 C 28 14 32 14 32 18" stroke="#2A2A2A" stroke-width="2" />
    </svg>
);

export default CoffeeIcon;
