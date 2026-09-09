import { SVGProps } from 'react';

export const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M8 10 L40 10 L40 32 L26 32 L20 40 L20 32 L8 32 Z" fill="#E9C46A" />
        <circle cx="16" cy="21" r="1.8" fill="#2A2A2A" />
        <circle cx="24" cy="21" r="1.8" fill="#2A2A2A" />
        <circle cx="32" cy="21" r="1.8" fill="#2A2A2A" />
    </svg>
);

export default ChatIcon;
