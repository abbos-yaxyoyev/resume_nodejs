import fastify from 'fastify';
import FastifyCors from 'fastify-cors';
import fastifyFileUploadAwait from 'fastify-file-upload-await';
import fastifyStatic from 'fastify-static';
import path from 'path';
import 'reflect-metadata';
//! .env file in config fle
import { ENV } from './common/config';
//! plugin
import { dbPlugin } from './common/db/db';
import { replyDecorator } from './common/decorators/reply.decorator';
import { authPlugin } from './common/plugin/authPlugin';
import { routesEmployeePlugin } from './Employee/routes';
import { routesUserPlugin } from './user/routes';

const server = fastify({ logger: true });
server.register(FastifyCors, { origin: true });

//! upload files
server.register(fastifyStatic, {
  root: path.join(__dirname, '../', 'public'),
  // prefix: '/public'
});
// server.register(fastifyFileUpload);
server.register(fastifyFileUploadAwait);

server.register(dbPlugin);
server.register(authPlugin);
server.register(replyDecorator);
server.register(routesUserPlugin);
server.register(routesEmployeePlugin);

async function start() {
  console.log('ENV.USER_PORT: ', ENV.USER_PORT);
  console.log('ENV.HOST: ', ENV.HOST);

  try {
    const options = {
      host: ENV.HOST,
      port: ENV.USER_PORT,
    };

    await server.listen(options);
    server.log.info(server.route);
    server.log.info('Started user successfully');
  } catch (error) {
    console.log('error user: ', error);
    process.exit(1);
  }
}

start();
