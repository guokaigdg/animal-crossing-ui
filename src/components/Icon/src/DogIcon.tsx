import { SVGProps } from 'react';

export const DogIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <ellipse cx="10" cy="18" rx="6" ry="10" fill="#8B5E3C" />
        <ellipse cx="38" cy="18" rx="6" ry="10" fill="#8B5E3C" />
        <circle cx="24" cy="26" r="16" fill="#8B5E3C" />
        <circle cx="18" cy="24" r="2.5" fill="#FFFFFF" />
        <circle cx="30" cy="24" r="2.5" fill="#FFFFFF" />
        <circle cx="18" cy="25" r="1.3" fill="#2A2A2A" />
        <circle cx="30" cy="25" r="1.3" fill="#2A2A2A" />
        <ellipse cx="24" cy="32" rx="4" ry="3" fill="#2A2A2A" />
    </svg>
);

export default DogIcon;
