import { SVGProps } from 'react';

export const MicIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <rect x="18" y="5" width="12" height="20" rx="6" fill="#E76F51" />
        <path d="M12 21 C 12 31 16 33 24 33 C 32 33 36 31 36 21" stroke="#2A2A2A" stroke-width="3" fill="none" />
        <path d="M24 33 L 24 39" stroke="#2A2A2A" stroke-width="3" />
        <path d="M17 42 L 31 42" stroke="#2A2A2A" stroke-width="3.5" />
    </svg>
);

export default MicIcon;
