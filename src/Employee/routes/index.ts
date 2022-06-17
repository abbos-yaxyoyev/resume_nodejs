import fp from 'fastify-plugin';
import { authorRoutes } from './author/routes';
import { bookRoutes } from './book/routes';
import { coursePartsRoutes } from './course/courseParts/routes';
import { coursesOfUserRoutes } from './course/coursesOfUser/routes';
import { courseRoutes } from './course/routes';
import { employeeRoutes } from './employee/routes';
import { genreRoutes } from './genre/routes';
import { roleRoutes } from './role/routes';
import { uploadFileRoutes } from './upload/routes';
import { userRoutes } from './user/routes';


const routes = [
  ...roleRoutes,
  ...bookRoutes,
  ...userRoutes,
  ...genreRoutes,
  ...courseRoutes,
  ...authorRoutes,
  ...employeeRoutes,
  ...uploadFileRoutes,
  ...coursePartsRoutes,
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

export const routesEmployeePlugin = fp(pl);
