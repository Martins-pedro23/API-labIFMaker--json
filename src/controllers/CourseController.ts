import {
  CourseEntity,
  ICourseRepository,
  ValidateCurse,
} from "@/repositories/interfaces/ICourseRepository";
import { FastifyReply, FastifyRequest } from "fastify";

export class CourseController {
  constructor(private courseRepository: ICourseRepository) {}
  async create(
    request: FastifyRequest<{ Body: CourseEntity }>,
    reply: FastifyReply
  ) {
    const course = request.body;
    /*     ValidateCurse(course); */
    const courseCreated = await this.courseRepository.create(course);
    return courseCreated;
  }
}
