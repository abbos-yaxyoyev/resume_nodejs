import fp from 'fastify-plugin';
import { authorRoutes } from './author/routes';
import { bookRoutes } from './book/routes';
import { categoryRoutes } from './category/routes';
import { coursePartsRoutes } from './course/courseParts/routes';
import { coursesOfUserRoutes } from './course/coursesOfUser/routes';
import { courseRoutes } from './course/routes';
import { userRoutes } from './user/routes';


const routes = [
  ...userRoutes,
  ...bookRoutes,
  ...categoryRoutes,
  ...authorRoutes,
  ...courseRoutes,
  ...coursePartsRoutes,
  // ...uploadFileRoutes,
  ...coursesOfUserRoutes,
];

export async function pl(instance, _, next) {
  try {
    routes.map((route) => instance.route(route));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  next();
}

export const routesUserPlugin = fp(pl);
