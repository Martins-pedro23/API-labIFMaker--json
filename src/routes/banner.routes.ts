import { FastifyRequest } from "fastify";
import { FastifyInstance } from "fastify/types/instance";

async function routes(fastify: FastifyInstance) {
  fastify.post(
    "/banner",
    async (
      request: FastifyRequest<{ Body: { alt: string; src: string } }>,
      reply
    ) => {}
  );
}

export default routes;
