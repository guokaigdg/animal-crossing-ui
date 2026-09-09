import { SVGProps } from 'react';

export const BeeIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <ellipse cx="17" cy="13" rx="6" ry="4" transform="rotate(-25 17 13)" fill="#FAEDCD" />
        <ellipse cx="31" cy="13" rx="6" ry="4" transform="rotate(25 31 13)" fill="#FAEDCD" />
        <ellipse cx="24" cy="29" rx="12" ry="10" fill="#E9C46A" />
        <path d="M19 20 C 17 25 17 33 19 38" stroke="#2A2A2A" fill="none" stroke-width="3" />
        <path d="M27 19.5 C 25.5 25 25.5 33 27 38.5" stroke="#2A2A2A" fill="none" stroke-width="3" />
        <path d="M36 29 L41 27 L40 32 Z" fill="#2A2A2A" />
        <circle cx="15" cy="26" r="1.6" fill="#2A2A2A" />
        <path d="M13 31 Q 15 33 17.5 32" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
        <path d="M20 19 C 17 13 14 11 11 12" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
        <path d="M28 19 C 31 13 34 11 37 12" stroke="#2A2A2A" fill="none" stroke-width="1.8" />
    </svg>
);

export default BeeIcon;
