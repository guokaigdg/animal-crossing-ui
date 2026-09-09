import { SVGProps } from 'react';

export const RainbowIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M7 34 A 17 17 0 0 1 41 34" stroke="#E76F51" stroke-width="4.5" fill="none" />
        <path d="M12.5 34 A 11.5 11.5 0 0 1 35.5 34" stroke="#E9C46A" stroke-width="4.5" fill="none" />
        <path d="M18 34 A 6 6 0 0 1 30 34" stroke="#2A9D8F" stroke-width="4.5" fill="none" />
        <circle cx="6" cy="37" r="3.5" fill="#FAEDCD" />
        <circle cx="11" cy="38.5" r="3" fill="#FAEDCD" />
        <circle cx="42" cy="37" r="3.5" fill="#FAEDCD" />
        <circle cx="37" cy="38.5" r="3" fill="#FAEDCD" />
    </svg>
);

export default RainbowIcon;
