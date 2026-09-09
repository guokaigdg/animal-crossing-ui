import { SVGProps } from 'react';

export const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="24" r="20" fill="#2A9D8F" />
        <path d="M19 16 L34 24 L19 32 Z" fill="#E9C46A" />
    </svg>
);

export default PlayIcon;
