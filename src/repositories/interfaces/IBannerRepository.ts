import { Banner } from "../../models/modelBanner";

export interface IBannerRepository {
    getAllBanners(): Promise<Banner[]>;
    getBanner(id: number): Promise<Banner>;
    addBanner(banner: Banner): Promise<Banner>;
    deleteBanner(id: number): Promise<void>;
    updateBanner(id: number, banner: Banner): Promise<Banner>;
}