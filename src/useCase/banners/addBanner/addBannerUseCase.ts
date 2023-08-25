import { Banner } from "../../../models/modelBanner";
import { IBannerRepository } from "../../../repositories/interfaces/IBannerRepository";

export class AddBannerUseCase {
    constructor(private bannerRepository: IBannerRepository) { }

    public async execute(props: Banner): Promise<Banner> {
        try{
            const banner = await this.bannerRepository.addBanner(props);
            return banner;
        }
        catch(err){
            throw err;
        }
    }
}