import { SVGProps } from 'react';

export const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="13" cy="24" r="5.5" fill="#E76F51" />
        <circle cx="33" cy="11" r="5.5" fill="#2A9D8F" />
        <circle cx="33" cy="37" r="5.5" fill="#E9C46A" />
        <path d="M17.5 21.5 L 28.5 14" stroke="#2A2A2A" stroke-width="2.5" />
        <path d="M17.5 26.5 L 28.5 34" stroke="#2A2A2A" stroke-width="2.5" />
    </svg>
);

export default ShareIcon;
