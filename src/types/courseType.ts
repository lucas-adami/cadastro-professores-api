import { ObjectId } from "mongodb";

export type CourseType = {
  id: ObjectId;
  nome: string;
  codCourse: string;
  disciplinas: string[];
  sigla: string;
  modalidade: string;

  professors: ObjectId[];
  coordenador: ObjectId;
};
