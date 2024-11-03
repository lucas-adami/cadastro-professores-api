import { ObjectId } from "mongodb";
import { ProfessorType } from "./professorType";
import { CourseModel } from "../modules/Courses/courseEntity";

export type CourseType = {
  id: ObjectId;
  name: string;
  codCourse: string;
  subjects?: string[];
  initialism: string;
  model: CourseModel;
  professors?: ProfessorType[];
  coordinator?: ProfessorType;
};
