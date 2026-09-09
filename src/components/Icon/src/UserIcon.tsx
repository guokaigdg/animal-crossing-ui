import { SVGProps } from 'react';

export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="17" r="8" fill="#E76F51" />
        <path d="M8 42 C 8 32 14 28 24 28 C 34 28 40 32 40 42" fill="#2A9D8F" />
        <circle cx="21" cy="17" r="1.5" fill="#2A2A2A" />
        <circle cx="27" cy="17" r="1.5" fill="#2A2A2A" />
        <path d="M21 21 Q 24 23 27 21" stroke="#2A2A2A" fill="none" />
    </svg>
);

export default UserIcon;
