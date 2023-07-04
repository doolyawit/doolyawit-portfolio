import 'app/globals.css';
import { jakarta, satoshi } from './fonts';
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata = {
  title: `dY's Portfolio`,
  description: 'Doolyawit Yodkaew Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${jakarta.variable} ${satoshi.variable} bg-beige`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
