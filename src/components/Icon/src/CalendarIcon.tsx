import { SVGProps } from 'react';

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <rect x="8" y="12" width="32" height="28" rx="4" fill="#FAEDCD" />
        <path d="M8 20 L40 20" stroke="#2A2A2A" stroke-width="3" />
        <rect x="8" y="12" width="32" height="8" fill="#E76F51" />
        <path d="M16 8 L16 16" stroke="#2A2A2A" stroke-width="3" />
        <path d="M32 8 L32 16" stroke="#2A2A2A" stroke-width="3" />
        <circle cx="18" cy="28" r="1.5" fill="#2A2A2A" />
        <circle cx="24" cy="28" r="1.5" fill="#2A2A2A" />
        <circle cx="30" cy="28" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default CalendarIcon;
