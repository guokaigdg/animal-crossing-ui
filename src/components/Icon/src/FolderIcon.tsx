import { SVGProps } from 'react';

export const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M6 16 L6 38 L42 38 L42 18 L22 18 L18 12 L6 12 Z" fill="#E9C46A" />
        <path d="M6 18 L42 18" stroke="#2A2A2A" stroke-width="2" />
    </svg>
);

export default FolderIcon;
