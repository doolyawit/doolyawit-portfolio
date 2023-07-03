import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const satoshi = localFont({
  src: './Satoshi-Variable.ttf',
  display: 'swap',
  variable: '--font-satoshi',
});
