import React from "react";

export const NoteIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || '24'}
    height={props.height || '24'}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.009,20.494h-7.5a1,1,0,0,1-1-1v-16a1,1,0,0,1,1-1h14a1,1,0,0,1,1,1v7.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.509 4.494L4.509 0.494"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.509 4.494L8.509 0.494"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.509 4.494L12.509 0.494"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.889,15.114l-7.63,7.63-3.75.75.75-3.75,7.63-7.63a2.115,2.115,0,0,1,2.991,0l.009.008A2.116,2.116,0,0,1,22.889,15.114Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
