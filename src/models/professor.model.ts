import { Pessoa } from "./pessoa.model";

export class Professor extends Pessoa {
    private _disciplina: string;
    private _cargaHoraria: Number

    constructor(nome: string, email: string, disciplina: string, cargaHoraria: number) {
        super(nome, email);
        this._disciplina = disciplina;
        this._cargaHoraria = cargaHoraria;
    }
    public mostrarDados(): string {
        return 'oi';
    }


}