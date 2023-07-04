'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const currentLng = localStorage.getItem('i18nextLng');
    redirect(`/${currentLng}`);
  }, []);
}
