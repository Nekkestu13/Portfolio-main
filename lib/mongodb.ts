import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const getEnv = (): 'development' | 'preview' | 'production' => {
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV;
  if (env === 'production' || env === 'preview' || env === 'development') {
    return env;
  }
  throw new Error(`Environnement inconnu : ${env}`);
};

const env = getEnv();

const uriMap: Record<string, string | undefined> = {
  development: process.env.MONGODB_URI_DEVELOPMENT,
  preview: process.env.MONGODB_URI_PREVIEW,
  production: process.env.MONGODB_URI_PRODUCTION,
};

const uri = uriMap[env];
if (!uri) {
  throw new Error('La variable d\'environnement MONGODB_URI est manquante ou non définie.');
}
const options = {};
let clientPromise: Promise<MongoClient>;

if (env === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
