import mongoose from "mongoose";

export interface InterfaceCourses {
  name: string;
  description: string;
  link: string;
  moodleLink: string;
}

const CoursesSchema = new mongoose.Schema({
  name: String,
  description: String,
  link: String,
  moodleLink: String,
});

const BannerModel = mongoose.model<InterfaceCourses>("Courses", CoursesSchema);

export default BannerModel;
