'use client';

import 'app/globals.css';
import NavBar from './components/navigation/NavBar';
import Introduction from './components/introduction/Introduction';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
      <NavBar />
      <Introduction />
    </div>
  );
}
