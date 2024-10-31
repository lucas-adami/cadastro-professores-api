import { AppDataSource } from "../../data-source";
import { ProfessorEntity } from "./professorEntity";
import { ObjectId } from "mongodb";
import { ProfessorType } from "../../types/professorType";

const professorRepository = AppDataSource.getRepository(ProfessorEntity);

export async function findAllProfessorsService() {
    return await professorRepository.find();
}

export async function findByIdService(_id: ObjectId) {
    return await professorRepository.findOneBy({ _id });
}

export async function createProfessorService(professorData: ProfessorType) {
    const newProfessor = professorRepository.create(professorData);
    newProfessor._id = new ObjectId(); 
    return await professorRepository.save(newProfessor);
}

export async function updateProfessorService(_id: ObjectId, data: Partial<ProfessorType>) {
    await professorRepository.update({ _id }, data);
    return await findByIdService(_id); 
}

export async function deleteProfessorByIdService(_id: ObjectId) {
    return await professorRepository.delete({ _id });
}
