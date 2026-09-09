import { SVGProps } from 'react';

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="24" cy="24" r="17" fill="#FAEDCD" />
        <path d="M17 17 L 31 31" stroke="#E76F51" stroke-width="4.5" />
        <path d="M31 17 L 17 31" stroke="#E76F51" stroke-width="4.5" />
    </svg>
);

export default CloseIcon;
