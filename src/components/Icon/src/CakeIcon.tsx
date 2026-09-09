import { SVGProps } from 'react';

export const CakeIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <rect x="9" y="28" width="30" height="12" rx="2" fill="#F4A6A4" />
        <rect x="13" y="18" width="22" height="10" rx="2" fill="#FAEDCD" />
        <path
            d="M13 20 C 15 24 17 20 19 23 C 21 26 23 20 25 23 C 27 26 29 20 31 23 C 33 26 34 21 35 22 L 35 18 L 13 18 Z"
            fill="#E76F51"
        />
        <rect x="22" y="8" width="4" height="8" fill="#2A9D8F" />
        <path d="M24 3 C 22 5.5 22 7.5 24 7.5 C 26 7.5 26 5.5 24 3 Z" fill="#E9C46A" />
        <path d="M6 40 L42 40" stroke="#8B5E3C" stroke-width="3" />
    </svg>
);

export default CakeIcon;
