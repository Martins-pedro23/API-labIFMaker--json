import mongoose from "mongoose";

export interface IBanner {
  id?: number;
  alt: string;
  src: string;
}

const BannerSchema = new mongoose.Schema({
  id: Number,
  alt: String,
  src: String,
});

const BannerModel = mongoose.model<IBanner>("Banner", BannerSchema);

export default BannerModel;
