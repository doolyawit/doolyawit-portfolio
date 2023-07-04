'use client';
import { ThemeContext } from '@/contexts/ThemeContext';
import React, { useContext } from 'react';

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    //transition smooth
    <div
      className={`flex flex-1 shrink grow basis-0 justify-center gap-2.5 self-center ${
        theme === 'dark' ? 'dark' : ''
      }`}
    >
      <div
        className="relative flex h-[69.25px] w-1/3 cursor-pointer items-center justify-center dark:bg-gray"
        onClick={toggleTheme}
      >
        <svg
          width="70"
          height="30"
          viewBox="0 0 70 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`self-center dark:hidden items-center${
            theme ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-300 ease-in-out`}
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
          className={`hidden dark:block ${
            theme ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 ease-in-out`}
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
