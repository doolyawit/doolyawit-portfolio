function FourDots({ style }: { style: string }) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
    >
      <g clipPath="url(#clip0_2_723)">
        <mask id="mask0_2_723" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <path d="M200 0H0V200H200V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2_723)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 100C77.6142 100 100 77.6142 100 50C100 77.6142 122.386 100 150 100C122.386 100 100 122.386 100 150C100 122.386 77.6142 100 50 100ZM50 100C22.3858 100 0 122.386 0 150C0 177.614 22.3858 200 50 200C77.6142 200 100 177.614 100 150C100 177.614 122.386 200 150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C177.614 100 200 77.6142 200 50C200 22.3858 177.614 0 150 0C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
            fill="url(#paint0_linear_2_723)"
          />
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_2_723" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
          <stop stopColor={'currentColor'} />
        </linearGradient>
        <clipPath id="clip0_2_723">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FourDots;
