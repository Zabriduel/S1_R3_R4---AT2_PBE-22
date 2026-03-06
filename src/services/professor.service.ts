import { Professor } from "../models/professor.model";
import { ProfessorRepository } from "../repository/professor.repository";

export class ProfessorService {
    constructor(private _repository = new ProfessorRepository()) { }

    async SelecionarTodos() {
        return await this._repository.findAll();
    }
    async selecionarPorId(id: number) {
        return await this._repository.findById(id);
    }   
    async criar(nomeProfessor: string, email: string, disciplina: string, cargaHoraria: number) {
        const professor = Professor.criar(nomeProfessor, email, disciplina, cargaHoraria);

        return await this._repository.create(professor);
    }
    async editar(idProfessor: number, nomeProfessor: string, email: string, disciplina: string, cargaHoraria: number) {
        const professor = Professor.editar(idProfessor, nomeProfessor, email, disciplina, cargaHoraria);
        return await this._repository.update(idProfessor, professor);
    }
    async deletar(idAluno: number) {
        return await this._repository.delete(idAluno);
    }
}