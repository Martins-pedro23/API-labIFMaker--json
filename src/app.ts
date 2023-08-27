import fastify from "fastify";

import routes from "./routes";
import morgan from "morgan";

import { MorganLog } from "./utils/morganLog";

const app = fastify();

app.addHook("onResponse", (request, reply, done) => {
  const responseMessage = MorganLog(
    request.raw.method!,
    reply.raw.statusCode.toString()
  );

  morgan(responseMessage)(request.raw, reply.raw, done);

  done();
});
app.register(routes);

export { app };
