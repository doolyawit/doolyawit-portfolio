import React from 'react';
import 'app/globals.css';
import NavBar from '@/components/navigation/NavBar';
import Introduction from '@/components/introduction/Introduction';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Introduction />
    </div>
  );
}
