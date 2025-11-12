'use client';

import React from 'react';

export default function ClientComponent() {
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      <button
        onClick={() => {
          return alert('Clicked!');
        }}
      >
        Click me
      </button>
      ClientComponent
    </div>
  );
}
