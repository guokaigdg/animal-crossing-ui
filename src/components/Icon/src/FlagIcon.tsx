import { SVGProps } from 'react';

export const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M12 5 L 12 43" stroke="#2A2A2A" stroke-width="3.5" />
        <path d="M12 8 C 19 4 26 12 33 8 L 33 22 C 26 26 19 18 12 22 Z" fill="#E76F51" />
        <circle cx="12" cy="5" r="2.5" fill="#E9C46A" />
    </svg>
);

export default FlagIcon;
