import { ComponentProps } from "react";

export const IconSearchContent = ({ width = 16, height = 16, color = "#A3A3A0", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_2517)">
        <path d="M15.3333 12.6667L12.552 9.88533" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.33329 6H0.666626" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.33329 10H0.666626" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6666 14H0.666626" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6666 2H0.666626" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M10.6667 10.6667C12.1394 10.6667 13.3333 9.47276 13.3333 8C13.3333 6.52724 12.1394 5.33333 10.6667 5.33333C9.19391 5.33333 8 6.52724 8 8C8 9.47276 9.19391 10.6667 10.6667 10.6667Z"
          stroke={color}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
