import 'app/globals.css';
import { satoshi } from './fonts';
import { NextThemeProvider } from './contexts/NextThemeProvider';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.variable}`}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
