import { Pessoa } from "./pessoa.model";

export class Professor extends Pessoa {
    private _disciplina: string;
    private _cargaHoraria: number;
    private _id?: number;

    constructor(nome: string, email: string, disciplina: string, cargaHoraria: number, id?: number) {
        super(nome, email);
        this._disciplina = disciplina;
        this._cargaHoraria = cargaHoraria;
        this._id = id;
    }
    public get Id(): number | undefined {
        return this._id;
    }
    public get Disciplina(): string {
        return this.Disciplina;
    }
    public get CargaHorario(): number {
        return this._cargaHoraria;
    }

    public mostrarDados(): string {
        return `${super.mostrarDados()} Disciplina: ${this._disciplina} Carga Horaria: ${this._cargaHoraria}`;
    }

    public static criar(nomeProfessor: string, email: string, disciplina: string, cargaHoraria: number): Professor {
        return new Professor(nomeProfessor, email, disciplina, cargaHoraria);
    }
    public static editar(idProfessor: number, nomeProfessor: string, email: string, disciplina: string, cargaHoraria: number): Professor {
        return new Professor(nomeProfessor, email, disciplina, cargaHoraria, idProfessor);
    }

}