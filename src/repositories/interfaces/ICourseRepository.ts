import { z } from "zod";

export interface CourseEntity {
  name: string;
  description: string;
  link: string;
  moodleLink: string;
}

export const ValidateCurse = (course: CourseEntity) => {
  if (!course.name) throw new Error("Name is required");
  if (!course.description) throw new Error("Description is required");
  if (!course.link) throw new Error("Link is required");
  if (!course.moodleLink) throw new Error("Moodle link is required");

  const courseSchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    link: z.string().min(3).max(255),
    moodleLink: z.string().min(3).max(255),
  });

  if (!courseSchema.safeParse(course)) throw new Error("Invalid course");
};

export interface ICourseRepository {
  create(course: CourseEntity): Promise<CourseEntity[]>;
  /*   update(course: CourseEntity): Promise<CourseEntity>;
  delete(id: string): Promise<CourseEntity>;
  findAll(): Promise<CourseEntity[]>;
  findById(id: string): Promise<CourseEntity>; */
}
