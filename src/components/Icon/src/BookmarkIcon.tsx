import { SVGProps } from 'react';

export const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M12 6 L36 6 L36 42 L24 32 L12 42 Z" fill="#E76F51" />
        <path d="M20 16 L28 16" stroke="#2A2A2A" stroke-width="2" />
    </svg>
);

export default BookmarkIcon;
