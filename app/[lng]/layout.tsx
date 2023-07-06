import './../globals.css';
import { satoshi } from '../fonts';
import { NextThemeProvider } from './contexts/NextThemeProvider';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { ParamLanguage } from '../types';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: `dY's Portfolio`,
  description: 'Doolyawit Yodkaew Portfolio',
};

export default async function RootLayout({ children, params: { lng } }: ParamLanguage & { children: React.ReactNode }) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body className={`${satoshi.variable} transition-colors duration-300`}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
