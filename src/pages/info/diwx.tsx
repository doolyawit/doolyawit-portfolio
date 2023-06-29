import Link from 'next/link';
import React from 'react';
import 'src/app/globals.css';

function diwx() {
  return (
    <div>
      <h2>Hello World</h2>
      <Link href="/" className="underline">
        Back to Home
      </Link>
    </div>
  );
}

export default diwx;
