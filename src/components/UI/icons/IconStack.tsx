import { ComponentProps } from "react";

export const IconStack = ({ width = 20, height = 20, color = "#A3A3A0", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${20} ${20}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_2093)">
        <path d="M1.66699 5.8335L10.0003 0.833496L18.3337 5.8335L10.0003 10.8335L1.66699 5.8335Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.3337 10.0002L10.0003 15.0002L1.66699 10.0002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.3337 14.1668L10.0003 19.1668L1.66699 14.1668" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};
