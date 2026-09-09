import { SVGProps } from 'react';

export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="24" r="10" fill="#E9C46A" />
        <path d="M24 4 L24 10" stroke="#2A2A2A" />
        <path d="M24 38 L24 44" stroke="#2A2A2A" />
        <path d="M4 24 L10 24" stroke="#2A2A2A" />
        <path d="M38 24 L44 24" stroke="#2A2A2A" />
        <path d="M10 10 L14 14" stroke="#2A2A2A" />
        <path d="M34 34 L38 38" stroke="#2A2A2A" />
        <path d="M10 38 L14 34" stroke="#2A2A2A" />
        <path d="M34 14 L38 10" stroke="#2A2A2A" />
    </svg>
);

export default SunIcon;
