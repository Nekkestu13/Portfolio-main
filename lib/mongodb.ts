import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export const getEnv = (): 'development' | 'preview' | 'production' => {
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV;
  if (env === 'production' || env === 'preview' || env === 'development') {
    return env;
  }
  throw new Error(`Environnement inconnu : ${env}`);
};

export function getClientPromise(): Promise<MongoClient> {
  if (global._mongoClientPromise) return global._mongoClientPromise;

  const env = getEnv();
  const uriMap: Record<string, string | undefined> = {
    development: process.env.MONGODB_URI_DEVELOPMENT,
    preview: process.env.MONGODB_URI_PREVIEW,
    production: process.env.MONGODB_URI_PRODUCTION,
  };

  const uri = uriMap[env];
  if (!uri) {
    throw new Error(`MongoDB URI missing for environment "${env}".`);
  }

  global._mongoClientPromise = new MongoClient(uri).connect();
  return global._mongoClientPromise;
}