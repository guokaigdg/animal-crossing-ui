import { SVGProps } from 'react';

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <rect x="6" y="12" width="36" height="24" rx="3" fill="#F4A6A4" />
        <path d="M6 14 L24 28 L42 14" stroke="#2A2A2A" />
        <circle cx="20" cy="22" r="1.5" fill="#2A2A2A" />
        <circle cx="28" cy="22" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default MailIcon;
