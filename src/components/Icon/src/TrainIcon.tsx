import { SVGProps } from 'react';

export const TrainIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <rect x="7" y="18" width="26" height="15" rx="3" fill="#E76F51" />
        <rect x="25" y="9" width="12" height="13" rx="2" fill="#2A9D8F" />
        <rect x="28" y="12" width="6" height="5" fill="#FAEDCD" />
        <rect x="10" y="10" width="6" height="8" fill="#264653" />
        <circle cx="13" cy="6" r="2.5" fill="#FAEDCD" />
        <rect x="5" y="33" width="36" height="4" fill="#264653" />
        <circle cx="13" cy="40" r="4" fill="#E9C46A" />
        <circle cx="24" cy="40" r="4" fill="#E9C46A" />
        <circle cx="35" cy="40" r="4" fill="#E9C46A" />
        <circle cx="13" cy="40" r="1.5" fill="#2A2A2A" />
        <circle cx="24" cy="40" r="1.5" fill="#2A2A2A" />
        <circle cx="35" cy="40" r="1.5" fill="#2A2A2A" />
    </svg>
);

export default TrainIcon;
