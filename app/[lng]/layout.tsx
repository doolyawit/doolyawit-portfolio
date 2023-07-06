import './../globals.css';
import { satoshi } from '../fonts';
import { NextThemeProvider } from './contexts/NextThemeProvider';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { ParamLanguage } from '../types';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "dY's Portfolio",
  description: 'Doolyawit Yodkaew Portfolio',
  openGraph: {
    type: 'profile',
    description: 'Doolyawit Yodkaew Portfolio',
    url: 'https://diwx.20cnx.xyz',
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top',
    ],
  },
  twitter: {
    title: "dY's Portfolio",
    card: 'summary_large_image',
    description: 'Doolyawit Yodkaew Portfolio',
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top',
    ],
  },
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
