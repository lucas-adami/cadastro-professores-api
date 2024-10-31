import { Entity, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { ObjectId } from "mongodb";
import * as bcrypt from 'bcrypt';

@Entity('Professors') 
export class ProfessorEntity {
    @ObjectIdColumn()
    _id!: ObjectId;

    @Column() 
    nome!: string;

    @Column({ unique: true }) 
    email!: string;

    @Column({ select: false }) 
    password!: string;

    @Column() 
    titulacao!: string;

    @Column() 
    unidadeId!: string;

    @Column() 
    referencia!: string;

    @Column() 
    lattes!: string;

    @Column() 
    coursesId!: ObjectId[];

    @Column() 
    statusAtividade!: string;

    @Column() 
    notes!: string;

    @BeforeInsert() 
    @BeforeUpdate() 
    async hashPassword() {
        if (this.password) { 
            this.password = await bcrypt.hash(this.password, 10); 
        }
    }
}

