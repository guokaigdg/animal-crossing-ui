import { SVGProps } from 'react';

export const StrawberryIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M24 16 C 13 16 8 23 12 31 C 15 37 20 41 24 42 C 28 41 33 37 36 31 C 40 23 35 16 24 16 Z"
            fill="#E76F51"
        />
        <path d="M14 17 L 18 9 L 22 15 L 24 7 L 26 15 L 30 9 L 34 17 Z" fill="#588157" />
        <circle cx="18" cy="24" r="1.2" fill="#E9C46A" />
        <circle cx="24" cy="26" r="1.2" fill="#E9C46A" />
        <circle cx="30" cy="24" r="1.2" fill="#E9C46A" />
        <circle cx="21" cy="32" r="1.2" fill="#E9C46A" />
        <circle cx="27" cy="32" r="1.2" fill="#E9C46A" />
        <circle cx="24" cy="37" r="1.2" fill="#E9C46A" />
    </svg>
);

export default StrawberryIcon;
