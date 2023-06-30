import React from 'react';
import Link from 'next/link';
import 'src/app/globals.css';

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/info/diwx" className="underline">
        DIWX
      </Link>
    </div>
  );
}
