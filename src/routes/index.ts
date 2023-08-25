import { FastifyInstance } from "fastify";
import  bannerRouts  from "./banner.routes";

async function routes(fastify: FastifyInstance) {
    fastify.register(bannerRouts);
    fastify.get("/", async (request, reply) => {
        reply.send({status: "ok"}).status(200);
    });
}

export default routes;