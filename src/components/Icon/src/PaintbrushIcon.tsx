import { SVGProps } from 'react';

export const PaintbrushIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M13 31 L 27 17 L 31 21 L 17 35 Z" fill="#8B5E3C" />
        <path d="M27 17 L 31 13 L 35 17 L 31 21 Z" fill="#264653" />
        <path d="M31 13 C 33 7 39 5 42 7 C 42 12 37 16 35 17 Z" fill="#F4A6A4" />
        <circle cx="11" cy="40" r="3" fill="#2A9D8F" />
    </svg>
);

export default PaintbrushIcon;
