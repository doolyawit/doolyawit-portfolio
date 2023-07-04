'use client';
import React, { useContext } from 'react';
import 'app/globals.css';
import NavBar from '@/components/navigation/NavBar';
import Introduction from '@/components/introduction/Introduction';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <NavBar />
      <Introduction />
    </div>
  );
}
