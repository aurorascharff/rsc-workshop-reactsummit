'use client';

import React from 'react';
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function Error({ reset }: { reset: () => void }) {
  return <ErrorMessage onReset={reset}>Something went wrong while loading the contact form.</ErrorMessage>;
}
