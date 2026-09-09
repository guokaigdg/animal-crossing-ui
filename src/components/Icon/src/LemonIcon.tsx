import { SVGProps } from 'react';

export const LemonIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <ellipse cx="24" cy="24" rx="14" ry="10" transform="rotate(-20 24 24)" fill="#E9C46A" />
        <path d="M10.5 30.5 C 7.5 32.5 5.5 30.5 7.5 28.5" stroke="#2A2A2A" stroke-width="2" fill="none" />
        <path d="M37.5 17.5 C 40.5 15.5 42.5 17.5 40.5 19.5" stroke="#2A2A2A" stroke-width="2" fill="none" />
        <circle cx="20" cy="21" r="1.5" fill="#2A2A2A" />
        <circle cx="27" cy="19" r="1.5" fill="#2A2A2A" />
        <path d="M21 26.5 Q 24 28.5 27 25.5" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
    </svg>
);

export default LemonIcon;
