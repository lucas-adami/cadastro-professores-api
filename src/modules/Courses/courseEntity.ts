import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";
import { ProfessorType } from "../../types/professorType";

export enum CourseModel {
  INPERSON = "in-person",
  BLENDED = "blended",
  HOMESCHOOL = "home-school",
}

@Entity("Courses")
export class CourseEntity {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  codCourse!: string;

  @Column("simple-array")
  subjects!: string[];

  @Column({ unique: true })
  initialism!: string;

  @Column({ enum: CourseModel, default: CourseModel.INPERSON })
  model: string;

  @Column("simple-json")
  professors!: ProfessorType[];

  @Column("simple-json")
  coordinator!: ProfessorType;
}
