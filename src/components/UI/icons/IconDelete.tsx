import { ComponentProps } from "react";

export const IconDelete = ({ width = 16, height = 16, color = "#6A6A69", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M2.5 5.5V14C2.5 14.828 3.172 15.5 4 15.5H12C12.828 15.5 13.5 14.828 13.5 14V5.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 3.5H14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 3.5V0.5H10.5V3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 12.5L10.5 7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 12.5L5.5 7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
