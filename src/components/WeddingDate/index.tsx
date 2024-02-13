'use client';

import { useParams } from 'next/navigation';

import type { Locale } from '@/locales';

export default function WeddingDate() {
  const { locale } = useParams<{ locale: Locale }>();

  return <div className="py-[30px] bg-sky-100"></div>;
}
