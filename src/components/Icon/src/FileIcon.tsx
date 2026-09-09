import { SVGProps } from 'react';

export const FileIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M12 6 L12 42 L36 42 L36 18 L24 6 Z" fill="#FAEDCD" />
        <path d="M24 6 L24 18 L36 18" fill="#F4A6A4" />
        <path d="M16 26 L32 26" stroke="#2A2A2A" stroke-width="2" />
        <path d="M16 32 L28 32" stroke="#2A2A2A" stroke-width="2" />
    </svg>
);

export default FileIcon;
