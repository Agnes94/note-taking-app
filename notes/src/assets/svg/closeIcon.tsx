import React from "react";

export const CloseIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || '24'}
    height={props.height || '24'}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.5 0.499L23.5 23.499"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.5 0.499L0.5 23.499"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
