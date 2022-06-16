import fp from 'fastify-plugin';
import mongoose from 'mongoose';
import { DB_REPLICA_SET, ENV } from '../config';

async function connect() {
  try {
    console.log("DB_REPLICA_SET: ", DB_REPLICA_SET);
    console.log('ENV.DB_URL: ', ENV.DB_URL);
    mongoose.set('debug', true);
    await mongoose.connect(ENV.DB_URL);
    console.log('db success connected');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

async function pl(instance, options, next) {
  connect();
  next();
}

export const dbPlugin = fp(pl);
