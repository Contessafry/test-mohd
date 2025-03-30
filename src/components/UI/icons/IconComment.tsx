import { ComponentProps } from "react";

export const IconComment = ({ width = 21, height = 20, color = "#CCCCC9", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M17.5 14C18.8333 12.6666 19.6667 11 19.6667 9.16663C19.6667 4.99996 15.5833 1.66663 10.5 1.66663C5.41668 1.66663 1.33334 4.99996 1.33334 9.16663C1.33334 13.3333 5.41668 16.6666 10.5 16.6666C11.4167 16.6666 12.25 16.5833 13.0833 16.3333L18 18.3333L17.5 14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
