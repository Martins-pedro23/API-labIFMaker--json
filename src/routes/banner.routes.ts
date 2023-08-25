import { FastifyRequest } from "fastify";
import { FastifyInstance } from "fastify/types/instance";
import { addBannerController } from "../useCase/banners/addBanner";

async function routes(fastify: FastifyInstance) {
  fastify.post(
    "/banner",
    async (
      request: FastifyRequest<{ Body: { alt: string; src: string } }>,
      reply
    ) => {
      try {
        const banner = addBannerController.handle(request, reply);
        reply.code(201).send(banner);
      } catch (err: any) {
        reply.code(500).send({ error: err.message });
      }
    }
  );
}

export default routes;
