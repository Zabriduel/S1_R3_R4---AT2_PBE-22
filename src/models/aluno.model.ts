import { Pessoa } from "./pessoa.model";

export class Aluno extends Pessoa {
    private _matricula: string;
    private _curso: string;
    private _mediaFinal: number;
    private _id?: number;

    constructor(nome: string, email: string, matricula: string, curso: string, mediaFinal: number, id?: number) {
        super(nome, email);
        this._matricula = matricula;
        this._curso = curso;
        this._mediaFinal = mediaFinal;
        this._id = id;
    };

    public get Id(): number | undefined {
        return this._id;
    }
    public get Matricula(): string {
        return this._matricula;
    }
    public get Curso(): string {
        return this._curso;
    }
    public get MediaFinal(): number {
        return this._mediaFinal;
    }

    public set Id(value: number) {
        this._id = value;
    }
    public mostrarDados(): string {
        return `${super.mostrarDados()} Matricula: ${this._matricula} Curso: ${this._curso} Media Final: ${this.MediaFinal}`;
    }
    public estaAprovado(media:number): Boolean {
        return media > 7 ? true : false;
    }

    public static criar(nomeAluno: string, email: string, matricula: string, curso: string, mediaFinal: number): Aluno {
        return new Aluno(nomeAluno, email, matricula, curso, mediaFinal);
    }
    public static editar(idAluno: number, nomeAluno: string, email: string, matricula: string, curso: string, mediaFinal: number): Aluno {
        return new Aluno(nomeAluno, email, matricula, curso, mediaFinal, idAluno);
    }
}