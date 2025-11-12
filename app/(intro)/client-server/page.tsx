import React from 'react';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function ClientServerPage() {
  // We can wrap our Server Component with a Client Component
  return (
    <div>
      ClientServerPage
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
