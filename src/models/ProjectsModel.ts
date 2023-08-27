import mongoose from "mongoose";

export interface InterfaceProjects {
  name: string;
  description: string;
  authors: string[];
  image: string;
  status: "Ativo" | "Finalizado";
}

const CoursesSchema = new mongoose.Schema({
  name: String,
  description: String,
  authors: [String],
  image: String,
  status: {
    type: String,
    enum: ["Ativo", "Finalizado"],
  },
});

const BannerModel = mongoose.model<InterfaceProjects>(
  "Projects",
  CoursesSchema
);

export default BannerModel;
