'use client';

import React from 'react';

export default function ClientComponent({ children }: { children?: React.ReactNode }) {
  // Without "use client", we cannot use client-side features like event handlers and state and effects
  console.log('Rendering ClientComponent');
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      <button
        onClick={() => {
          return alert('Clicked!');
        }}
      >
        Click me
      </button>
      {children}
      ClientComponent
    </div>
  );
}
