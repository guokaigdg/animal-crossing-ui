import { SVGProps } from 'react';

export const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M24 6 C 14 6 8 14 8 22 C 8 32 24 42 24 42 C 24 42 40 32 40 22 C 40 14 34 6 24 6 Z" fill="#E76F51" />
        <circle cx="24" cy="22" r="6" fill="#FAEDCD" />
    </svg>
);

export default LocationIcon;
