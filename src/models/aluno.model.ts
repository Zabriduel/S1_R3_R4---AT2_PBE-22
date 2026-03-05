import { Pessoa } from "./pessoa.model";

export class Aluno extends Pessoa {
    private _matricula: string;
    private _curso: string;
    private _mediaFinal:Number;

    constructor(nome:string,email:string,matricula:string,curso:string,mediaFinal:Number){
        super(nome,email);
        this._matricula=matricula;
        this._curso=curso;
        this._mediaFinal=mediaFinal;
    };

    public mostrarDados(): string {
        return 'oi';
    }
}