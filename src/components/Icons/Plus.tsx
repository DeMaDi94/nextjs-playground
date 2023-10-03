"use client";
import { HTMLAttributes } from "react";

const Plus = (props: HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 12H20M12 4V20"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default Plus;
