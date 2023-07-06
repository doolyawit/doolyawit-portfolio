'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound({ params: { lng } }: { params: { lng: string } }) {
  useEffect(() => {
    redirect(`/${lng}`);
  }, []);
}
