import { SVGProps } from 'react';

export const BicycleIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="13" cy="33" r="8" fill="none" stroke="#2A2A2A" stroke-width="3" />
        <circle cx="35" cy="33" r="8" fill="none" stroke="#2A2A2A" stroke-width="3" />
        <path d="M13 33 L 20 21 L 31 21" stroke="#2A2A2A" stroke-width="3" fill="none" />
        <path d="M20 21 L 26 33 L 13 33" stroke="#2A2A2A" stroke-width="3" fill="none" />
        <path d="M26 33 L 35 33 L 31 21" stroke="#2A2A2A" stroke-width="3" fill="none" />
        <path d="M31 21 L 33 14 L 38 14" stroke="#2A2A2A" stroke-width="3" fill="none" />
        <path d="M20 21 L 19 15 L 24 15" stroke="#2A2A2A" stroke-width="3" fill="none" />
        <circle cx="26" cy="33" r="2.5" fill="#E76F51" />
        <circle cx="13" cy="33" r="2" fill="#2A9D8F" />
        <circle cx="35" cy="33" r="2" fill="#2A9D8F" />
    </svg>
);

export default BicycleIcon;
