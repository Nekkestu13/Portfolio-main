import { NextResponse } from 'next/server';
import { getClientPromise, getEnv } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@') || email.length < 5) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const client = await getClientPromise();
    const collection = client.db(`portfolio_${getEnv()}`).collection('subscribers');

    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 200 });
    }

    await collection.insertOne({ email, subscribedAt: new Date() });
    return NextResponse.json({ message: 'Subscription successful' }, { status: 201 });
  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}