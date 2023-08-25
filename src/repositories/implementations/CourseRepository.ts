import { dbAllDataInFolder, dbFiles, dbSearchFile, dbUrl } from "@ud";
import {
  CourseEntity,
  ICourseRepository,
} from "../interfaces/ICourseRepository";
import fs from "fs";
import path from "path";

export class CourseRepository implements ICourseRepository {
  public async create(course: CourseEntity): Promise<CourseEntity[]> {
    try {
      const teste = (await dbAllDataInFolder(path)) as CourseEntity[];
      const outrosTeste = await dbSearchFile("courses");
      console.log(outrosTeste);
      return teste;
    } catch (err) {
      console.log(err);
      throw new Error("Error on create course");
    }
  }
}
