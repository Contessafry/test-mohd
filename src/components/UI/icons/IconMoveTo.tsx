import { ComponentProps } from "react";

export const IconMoveTo = ({ width = 16, height = 16, color = "#6A6A69", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M9.33334 4H5.33334C4.22878 4 3.33334 4.89543 3.33334 6V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66669 6.66665L9.33335 3.99998L6.66669 1.33331" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.3333 6C13.6167 6 14.6667 7.05 14.6667 8.33333C14.6667 9.61667 13.6167 10.6667 12.3333 10.6667C11.05 10.6667 10 9.61667 10 8.33333C10 7.05 11.05 6 12.3333 6Z"
        stroke="#6A6A69"
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.66668 10.6666C4.95001 10.6666 6.00001 11.7166 6.00001 13C6.00001 14.2833 4.95001 15.3333 3.66668 15.3333C2.38334 15.3333 1.33334 14.2833 1.33334 13C1.33334 11.7166 2.38334 10.6666 3.66668 10.6666Z"
        stroke="#6A6A69"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
