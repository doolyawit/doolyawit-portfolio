'use client';

import { useTheme } from 'next-themes';

function ToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`flex flex-1 shrink grow basis-0 justify-center gap-2.5 self-center`}
    >
      <div
        className="relative flex h-[69.25px] w-1/3 cursor-pointer items-center justify-center dark:bg-gray"
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        <svg
          width="70"
          height="30"
          viewBox="0 0 70 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`items-center self-center transition-opacity duration-300 ease-in-out dark:hidden`}
        >
          <rect
            x="0.5"
            y="0.5"
            width="69"
            height="29"
            rx="14.5"
            stroke="#1B1B1B"
          />
          <ellipse cx="15.6384" cy="15" rx="9.68085" ry="9.75" fill="#F36336" />
          <ellipse
            cx="4.84065"
            cy="15.375"
            rx="1.11702"
            ry="1.125"
            fill="#FFFEF5"
          />
        </svg>
        <svg
          width="71"
          height="31"
          viewBox="0 0 71 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`hidden transition-opacity duration-300 ease-in-out dark:block`}
        >
          <g id="Group 81">
            <rect
              id="Rectangle 1"
              x="1.08508"
              y="0.875"
              width="69"
              height="29"
              rx="14.5"
              stroke="#FFFEF5"
            />
            <ellipse
              id="Ellipse 1"
              cx="54.6356"
              cy="15.375"
              rx="9.74684"
              ry="9.9"
              fill="#FFDA58"
            />
            <ellipse
              id="Ellipse 2"
              cx="48.7287"
              cy="15.375"
              rx="8.27004"
              ry="8.4"
              fill="#1B1B1B"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default ToggleButton;
