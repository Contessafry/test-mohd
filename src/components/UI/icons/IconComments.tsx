import { ComponentProps } from "react";

export const IconComments = ({ width = 24, height = 24, color = "white", ...rest }: ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M7.99927 16.858C9.23066 18.7713 11.8344 20.0951 14.8572 20.0951C15.4191 20.0951 15.9648 20.0465 16.4914 19.9598L20.5713 21.9998V18.1522C21.7532 17.1456 22.476 15.8285 22.476 14.3809C22.476 12.9029 21.7218 11.561 20.4942 10.5458"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0476 2.00018C5.78775 2.00018 1.52405 5.41152 1.52405 9.61903C1.52405 11.3304 2.23832 12.9047 3.42876 14.1761V19.1426L8.0315 16.8417C8.98005 17.095 9.9924 17.2379 11.0476 17.2379C16.3075 17.2379 20.5712 13.8265 20.5712 9.61903C20.5712 5.41152 16.3075 2.00018 11.0476 2.00018Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
