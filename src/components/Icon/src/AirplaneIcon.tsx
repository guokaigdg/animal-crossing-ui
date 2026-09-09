import { SVGProps } from 'react';

export const AirplaneIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M22 8 L26 8 L28 20 L42 22 L42 26 L28 28 L26 40 L22 40 L20 28 L6 26 L6 22 L20 20 Z" fill="#264653" />
        <path d="M22 20 L26 20 L26 28 L22 28 Z" fill="#E76F51" />
    </svg>
);

export default AirplaneIcon;
