import { ComponentProps } from "react";

export const IconGrid = ({ width = 20, height = 20, color = "#323232", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${20} ${20}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M8.3335 0.833008H0.833496V8.33301H8.3335V0.833008Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6668 8.33301L19.1668 8.33301L19.1668 0.833008L11.6668 0.833008L11.6668 8.33301Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.3335 11.666H0.833496V19.166H8.3335V11.666Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.667 19.166L19.167 19.166L19.167 11.666L11.667 11.666L11.667 19.166Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
