'use client';

import React, { useTransition } from 'react';
import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/data/actions/deleteContact';

export default function DeleteContactButton({ contactId }: { contactId: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <form
      action={async () => {
        const response = confirm('Please confirm you want to delete this record.');
        if (response) {
          startTransition(async () => {
            await deleteContact(contactId);
          });
        }
      }}
    >
      <SubmitButton loading={isPending} theme="destroy">
        Delete
      </SubmitButton>
    </form>
  );
}
