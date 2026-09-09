import { SVGProps } from 'react';

export const WatermelonIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M7 16 A 17 17 0 0 0 41 16 Z" fill="#588157" />
        <path d="M11 16 A 13 13 0 0 0 37 16 Z" fill="#FAEDCD" />
        <path d="M13.5 16 A 10.5 10.5 0 0 0 34.5 16 Z" fill="#E76F51" />
        <circle cx="19" cy="22" r="1.3" fill="#2A2A2A" />
        <circle cx="24" cy="25" r="1.3" fill="#2A2A2A" />
        <circle cx="29" cy="22" r="1.3" fill="#2A2A2A" />
        <circle cx="21.5" cy="29" r="1.3" fill="#2A2A2A" />
        <circle cx="26.5" cy="29" r="1.3" fill="#2A2A2A" />
    </svg>
);

export default WatermelonIcon;
