import { SVGProps } from 'react';

export const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M24 16 L24 40" stroke="#2A2A2A" stroke-width="4" />
        <path d="M14 24 L24 14 L34 24" fill="#E76F51" />
        <rect x="8" y="38" width="32" height="6" rx="2" fill="#2A9D8F" />
    </svg>
);

export default UploadIcon;
