import { Entity, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { ObjectId } from "mongodb";
import * as bcrypt from 'bcrypt';

@Entity('Professors') 
export class ProfessorEntity {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column() 
    name!: string;

    @Column({ unique: true }) 
    email!: string;

    @Column() 
    titration!: string;

    @Column() 
    unitId!: string;

    @Column() 
    reference!: string;

    @Column() 
    lattes!: string;

    @Column() 
    coursesId!: ObjectId[];

    @Column() 
    activityStatus!: string;

    @Column() 
    notes!: string;
}

