import fs from 'fs';
import { Banner } from '../../models/modelBanner';
import { IBannerRepository } from '../interfaces/IBannerRepository';

export class BannerRepository implements IBannerRepository {
    async getAllBanners(): Promise<Banner[]> {
        const data = await fs.promises.readFile('./src/data/banners.json');
        const banners = JSON.parse(data.toString());
        return banners;
    }

    async getBanner(id: number): Promise<Banner> {
        const data = await fs.promises.readFile('./src/data/banners.json');
        const banners = JSON.parse(data.toString());
        const banner = banners.find((banner: Banner) => banner.id === id);
        return banner;
    }

    async addBanner(banner: Banner): Promise<Banner> {
        const data = fs.readFileSync('./src/data/banners.json');
        const banners = JSON.parse(data.toString());
        const newBanner = { ...banner, id: Date.now() };
        banners.push(newBanner);
        fs.writeFileSync('./src/data/banners.json', JSON.stringify(banners));
        return newBanner;
    }

    async deleteBanner(id: number): Promise<void> {
        const data = await fs.promises.readFile('./src/data/banners.json');
        const banners = JSON.parse(data.toString());
        const dataFiltered = banners.filter((banner: Banner) => banner.id !== id);
        banners.push(dataFiltered);
        await fs.promises.writeFile('./src/data/banners.json', JSON.stringify(dataFiltered));
    }

    async updateBanner(id: number, banner: Banner): Promise<Banner> {
        return banner;
    }
}