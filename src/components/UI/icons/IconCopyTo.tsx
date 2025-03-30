import { ComponentProps } from "react";

export const IconCopyTo = ({ width = 16, height = 16, color = "#6A6A69", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M12.6667 2.66669C14.1333 2.66669 15.3333 3.86669 15.3333 5.33335C15.3333 6.80002 14.1333 8.00002 12.6667 8.00002C11.2 8.00002 10 6.80002 10 5.33335C10 3.86669 11.2 2.66669 12.6667 2.66669Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33332 8.66669C4.79999 8.66669 5.99999 9.86669 5.99999 11.3334C5.99999 12.8 4.79999 14 3.33332 14C1.86666 14 0.666656 12.8 0.666656 11.3334C0.666656 9.86669 1.86666 8.66669 3.33332 8.66669Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
