import { FastifyReply, FastifyRequest } from "fastify";
import { AddBannerUseCase } from "./addBannerUseCase";

export class AddBannerController {
  constructor(private addBannerUseCase: AddBannerUseCase) {}

  public async handle(
    request: FastifyRequest<{ Body: { alt: string; src: string } }>,
    response: FastifyReply
  ): Promise<void> {
    try {
      const { alt, src } = request.body;
      const banner = await this.addBannerUseCase.execute({ alt, src });
      response.code(201).send(banner);
    } catch (err: any) {
      response.code(500).send({ error: err.message });
    }
  }
}
