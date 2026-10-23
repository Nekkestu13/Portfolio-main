import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const getEnv = (): 'development' | 'preview' | 'production' => {
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV;
  if (env === 'production' || env === 'preview' || env === 'development') {
    return env;
  }
  throw new Error(`Environnement inconnu : ${env}`);
};

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@') || email.length < 5) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const env = getEnv();
    const client = await clientPromise;
    const dbName = `portfolio_${env}`; // exemple : portfolio_dev
    const database = client.db(dbName);
    const collection = database.collection('subscribers');

    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 200 });
    }

    const result = await collection.insertOne({ email, subscribedAt: new Date() });
    return NextResponse.json({ message: 'Subscription successful', result }, { status: 201 });

  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
