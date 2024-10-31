import { ObjectId } from 'mongodb';

export type Titulacao = 'Mestre' | 'Doutor' | 'Especialista' | 'Graduado';

export type ProfessorType = {
  _id?: ObjectId;             
  nome: string;               
  email: string;              
  password: string;          
  titulacao: Titulacao;       
  coursesId: ObjectId[];      
  unidadeId?: string;         
  referencia: string;         
  lattes: string;             
  statusAtividade: string;    
  notes: string;              
};


export type FilterProfessorType = {
  nome?: string;               
  coursesId?: ObjectId[];      
  titulacao?: Titulacao[];     
  unidadeId?: string;        
};
