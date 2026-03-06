import { Aluno } from "../models/aluno.model";
import { AlunoRepository } from "../repository/aluno.repository";

export class AlunoService {
    constructor(private _repository = new AlunoRepository()) { }

    async SelecionarTodos() {
        return await this._repository.findAll();
    }
    async criar(nomeAluno: string, email: string, matricula: string, curso: string, mediaFinal: number) {
        const aluno = Aluno.criar(nomeAluno, email, matricula, curso, mediaFinal)

        return await this._repository.create(aluno);
    }
    async editar(idAluno: number, nomeAluno: string, email: string, matricula: string, curso: string, mediaFinal: number) {
        const aluno = Aluno.editar(nomeAluno, email, matricula, curso, mediaFinal);
        return await this._repository.update(idAluno, aluno);
    }
    async deletar(idAluno: number) {
        return await this._repository.delete(idAluno);
    }
}