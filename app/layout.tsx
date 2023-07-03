import 'app/globals.css';
import { jakarta, satoshi } from './font';
import React from 'react';

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
    <html lang="en">
      <body className={`${jakarta.variable} ${satoshi.variable} bg-beige`}>
        {children}
      </body>
    </html>
  );
}
