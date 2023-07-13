'use client';

import { ThemeProvider } from 'next-themes';
import { Theme } from '../constants';

export function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={Theme.LIGHT} enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
