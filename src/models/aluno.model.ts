import { Pessoa } from "./pessoa.model";

export class Aluno extends Pessoa {
    private _matricula: string;
    private _curso: string;
    private _mediaFinal:number;

    constructor(nome:string,email:string,matricula:string,curso:string,mediaFinal:number){
        super(nome,email);
        this._matricula=matricula;
        this._curso=curso;
        this._mediaFinal=mediaFinal;
    };

    public get Matricula():string{
        return this._matricula;
    }
    public get Curso():string{
        return this._curso;
    }
    public get MediaFinal():number{
        return this._mediaFinal;
    }

    public mostrarDados(): string {
        return 'oi';
    }

   public static criar(nomeAluno:string, email:string,matricula:string, curso:string, mediaFinal:number):Aluno{
        return new Aluno(nomeAluno,email,matricula,curso,mediaFinal);
    }
}