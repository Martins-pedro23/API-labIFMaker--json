import { BannerRepository } from "../../../repositories/implementations/BannerRepository";
import { AddBannerController } from "./addBannerController";
import { AddBannerUseCase } from "./addBannerUseCase";

const bannerRepository = new BannerRepository();
const addBannerUseCase = new AddBannerUseCase(bannerRepository);
const addBannerController = new AddBannerController(addBannerUseCase);

export { addBannerController, addBannerUseCase };