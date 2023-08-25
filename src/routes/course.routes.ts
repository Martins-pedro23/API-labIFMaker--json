import { courseController } from "@/controllers";
import { CourseEntity } from "@/repositories/interfaces/ICourseRepository";
import { FastifyRequest } from "fastify";
import { FastifyInstance } from "fastify/types/instance";

async function routes(fastify: FastifyInstance) {
  fastify.get(
    "/course",
    async (request: FastifyRequest<{ Body: CourseEntity }>, reply) => {
      const result = courseController.create(request, reply);
      return result;
    }
  );
}

export default routes;
