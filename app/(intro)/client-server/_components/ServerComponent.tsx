import React from 'react';
import { prisma } from '@/db';

export default async function ServerComponent() {
  // We can access the database directly from the Server Component
  const data = await prisma.contact.findMany();

  console.log('Rendering ServerComponent');

  return (
    <div className="rounded border-2 border-red-500 p-4">
      ServerComponent
      {data[0].first}
    </div>
  );
}
