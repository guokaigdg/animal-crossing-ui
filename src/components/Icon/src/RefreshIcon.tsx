import { SVGProps } from 'react';

export const RefreshIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M37 16 A 14.5 14.5 0 1 0 38.5 24" stroke="#2A9D8F" stroke-width="3.5" fill="none" />
        <path d="M30 10 L 39 11 L 35 19 Z" fill="#E76F51" />
    </svg>
);

export default RefreshIcon;
