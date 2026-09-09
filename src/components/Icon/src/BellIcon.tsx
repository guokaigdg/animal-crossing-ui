import { SVGProps } from 'react';

export const BellIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M10 34 C 10 12 38 12 38 34 Z" fill="#E9C46A" />
        <path d="M8 34 L40 34" stroke="#2A2A2A" stroke-width="3" />
        <path d="M20 38 C 20 42 28 42 28 38" fill="#E76F51" />
        <circle cx="24" cy="24" r="1.5" fill="#2A2A2A" />
        <circle cx="24" cy="29" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default BellIcon;
