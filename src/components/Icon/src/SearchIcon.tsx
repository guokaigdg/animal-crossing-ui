import { SVGProps } from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="20" cy="20" r="12" fill="#2A9D8F" />
        <circle cx="20" cy="20" r="6" fill="#FFFFFF" />
        <path d="M30 30 L42 42" stroke="#2A2A2A" stroke-width="4.5" />
    </svg>
);

export default SearchIcon;
