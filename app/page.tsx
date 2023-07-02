import React from 'react';
import Link from 'next/link';
import 'app/globals.css';

export default function Home() {
  return (
    <div>
      <h1 className="font-jk font-bold text-orange">Hello world</h1>
      <p className="font-st font-thin">Diwx</p>
      <Link href="/info/diwx" className="underline">
        DIWX
      </Link>
    </div>
  );
}
