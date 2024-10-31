import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

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
  nome!: string;

  @Column({ unique: true })
  codCourse!: string;

  @Column("simple-array")
  disciplinas!: string[];

  @Column({ unique: true })
  sigla!: string;

  @Column({ enum: CourseModel, default: CourseModel.INPERSON })
  modalidade!: string;

  @Column("array")
  professors!: ObjectId[];

  @Column()
  coordenador!: ObjectId;
}
