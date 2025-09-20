'use server';

import type { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { contactSchema } from '@/lib/schemas';

export type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(data: z.infer<typeof contactSchema>): Promise<ContactFormState> {
  try {
    await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return {
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
    };
  } catch (error) {
    console.error('Error adding document: ', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
