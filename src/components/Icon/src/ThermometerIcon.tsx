import { SVGProps } from 'react';

export const ThermometerIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path
            d="M24 6 C 20 6 18 10 18 14 L18 32 C 14 36 16 42 24 42 C 32 42 34 36 30 32 L30 14 C 30 10 28 6 24 6 Z"
            fill="#FAEDCD"
        />
        <circle cx="24" cy="36" r="5" fill="#E76F51" />
        <rect x="22" y="18" width="4" height="14" fill="#E76F51" />
    </svg>
);

export default ThermometerIcon;
