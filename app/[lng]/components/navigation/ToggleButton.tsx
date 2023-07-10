'use client';

import { useTheme } from 'next-themes';
import SunIcon from './svg/sun.svg';
import MoonIcon from './svg/moon.svg';
import { Theme } from '../../constants';

function ToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={'flex flex-1 shrink grow basis-0 items-center justify-center gap-2.5 self-center'}>
      <div
        className="relative z-[1] flex h-20 w-32 cursor-pointer items-center justify-center xl:h-[69.25px] xl:w-1/3"
        onClick={() => {
          setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
        }}
      >
        <div className="z-1 flex w-[86px] items-center justify-between rounded-[100px] border border-gray px-[5px] py-[5.1px] transition-colors duration-300 dark:border-beige">
          <div className="-z-[1] translate-y-0 opacity-100 transition-all delay-200 duration-300 ease-in dark:translate-y-[10px] dark:opacity-0 dark:delay-200 dark:ease-out">
            <SunIcon />
          </div>
          <div className="-z-[1] -translate-y-[10px] -rotate-45 opacity-0 transition-all delay-200 duration-300 ease-out dark:translate-y-0 dark:rotate-[16] dark:opacity-100 dark:delay-200 dark:ease-in">
            <MoonIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
