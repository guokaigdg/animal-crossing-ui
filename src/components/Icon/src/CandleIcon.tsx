import { SVGProps } from 'react';

export const CandleIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <rect x="18" y="18" width="12" height="22" rx="2" fill="#FAEDCD" />
        <path d="M24 5 C 21 9 21 12.5 24 13.5 C 27 12.5 27 9 24 5 Z" fill="#E76F51" />
        <path d="M24 8.5 C 22.8 10.5 22.8 12 24 12.4 C 25.2 12 25.2 10.5 24 8.5 Z" fill="#E9C46A" />
        <path d="M24 13.5 L 24 18" stroke="#2A2A2A" stroke-width="2" />
        <rect x="13" y="40" width="22" height="4" rx="2" fill="#8B5E3C" />
        <path d="M18 22 C 19 24 20 24 20 22" stroke="#F4A6A4" stroke-width="1.5" fill="none" />
    </svg>
);

export default CandleIcon;
