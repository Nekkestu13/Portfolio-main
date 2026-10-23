"use client"

import { useState } from 'react';
import Image from 'next/image';
import Avatar01 from '@/public/images/avatar-01.jpg';
import Avatar02 from '@/public/images/avatar-02.jpg';
import Avatar03 from '@/public/images/avatar-03.jpg';
import Avatar04 from '@/public/images/avatar-04.jpg';
import Avatar05 from '@/public/images/avatar-05.jpg';
import Toast from './toast';

export default function WidgetNewsletter() {
  const [email, setEmail] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | ''>('');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifiez si l'email est valide avant d'envoyer la requête
    if (!email || !email.includes('@') || email.length < 5) {
      setToastType('error');
      setToastMessage('Invalid email address. Please enter a valid email.');
      setToastOpen(true);
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.status === 201) {
        setToastType('success');
        setToastMessage('Subscription successful!');
        setEmail('');
      } else if (response.status === 200 && data.message === 'Email already subscribed') {
        setToastType('warning');
        setToastMessage('You are already subscribed!');
      } else {
        setToastType('error');
        setToastMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setToastType('error');
      setToastMessage('An error occurred. Please try again.');
    } finally {
      setToastOpen(true);
    }
  };

  const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault(); // Empêche le message d'erreur par défaut du navigateur
    setToastType('error');
    setToastMessage('Invalid email address. Please enter a valid email.');
    setToastOpen(true);
  };

  return (
    <div>
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
        <div className="text-center mb-4">
          <div className="inline-flex -space-x-3 -ml-0.5">
            <Image
              className="rounded-full border-2 border-white dark:border-slate-800 box-content"
              src={Avatar01}
              width={24}
              height={24}
              alt="Avatar 01"
            />
            <Image
              className="rounded-full border-2 border-white dark:border-slate-800 box-content"
              src={Avatar02}
              width={24}
              height={24}
              alt="Avatar 02"
            />
            <Image
              className="rounded-full border-2 border-white dark:border-slate-800 box-content"
              src={Avatar03}
              width={24}
              height={24}
              alt="Avatar 03"
            />
            <Image
              className="rounded-full border-2 border-white dark:border-slate-800 box-content"
              src={Avatar04}
              width={24}
              height={24}
              alt="Avatar 04"
            />
            <Image
              className="rounded-full border-2 border-white dark:border-slate-800 box-content"
              src={Avatar05}
              width={24}
              height={24}
              alt="Avatar 05"
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="font-aspekta font-[650] mb-1">Never miss an update!</div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Receive my latest updates and projects directly in your inbox. 🚀</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="sr-only" htmlFor="newsletter">
              Your email…
            </label>
            <input
              id="newsletter"
              type="email"
              className="form-input py-1 w-full"
              placeholder="Your email…"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onInvalid={handleInvalid} // Ajout du gestionnaire pour override le comportement par défaut
            />
          </div>
          <button className="btn-sm w-full text-slate-100 bg-sky-500 hover:bg-sky-600" type="submit">
            Subscribe
          </button>
        </form>
      </div>
      <div className='mt-4'>
        <Toast type={toastType} open={toastOpen} setOpen={setToastOpen}>
          {toastMessage}
        </Toast>
      </div>
    </div>
  );
}