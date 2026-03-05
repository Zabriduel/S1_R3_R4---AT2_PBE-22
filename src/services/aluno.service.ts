import { Aluno } from "../models/aluno.model";
import { AlunoRepository } from "../repository/aluno.repository";

export class AlunoService{
    constructor (private _repository = new AlunoRepository()){}

    async SelecionarTodos(){
        return await this._repository.findAll();
    }
}