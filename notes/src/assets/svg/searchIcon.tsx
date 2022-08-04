import React from "react";

export const SearchIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || '24'}
    height={props.height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.9681 17.3771C17.2424 15.9856 18.7687 12.2031 17.3772 8.92874C15.9856 5.65438 12.2031 4.12808 8.92875 5.51965C5.65439 6.91122 4.12809 10.6937 5.51966 13.9681C6.91123 17.2424 10.6937 18.7687 13.9681 17.3771Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0039 16.0031L21.0001 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
