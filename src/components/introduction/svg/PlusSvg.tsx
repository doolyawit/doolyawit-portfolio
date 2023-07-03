import React from 'react';
interface PlusSvgProps {
  width: string;
  height: string;
  color: string;
}
function PlusSvg({ width, height, color }: PlusSvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_713)">
        <mask
          id="mask0_2_713"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="200"
          height="200"
        >
          <path d="M200 0H0V200H200V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2_713)">
          <path
            d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z"
            fill="url(#paint0_linear_2_713)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2_713"
          x1="100"
          y1="2.5e-06"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
        </linearGradient>
        <clipPath id="clip0_2_713">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlusSvg;
