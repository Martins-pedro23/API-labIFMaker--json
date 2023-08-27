import mongoose from "mongoose";

interface IGaleryImnages {
  alt: string;
  url: string;
}

const GalerySchema = new mongoose.Schema({
  alt: String,
  url: String,
});

const GaleryModel = mongoose.model<IGaleryImnages>("Galery", GalerySchema);

export default GaleryModel;
