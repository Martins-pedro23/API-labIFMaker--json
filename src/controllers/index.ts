import { CourseController } from "./CourseController";
import { CourseRepository } from "@/repositories/implementations/CourseRepository";

const courseRepository = new CourseRepository();

const courseController = new CourseController(courseRepository);

export { courseController };
