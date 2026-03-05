import { RowDataPacket } from "mysql2";
import { error } from "node:console";

export interface IPessoa {
    mostrarDados(): string;
}

export abstract class Pessoa implements IPessoa {
    protected _nome: string = '';
    protected _email: string;

    constructor(nome: string, email: string) {
        this.Nome = nome;
        this._email = email;
    }
    public abstract mostrarDados(): string;

    public get Nome(): string {
        return this._nome;
    }
    public get Email(): string {
        return this._email;
    }

    public set Nome(value: string) {
        this._validarNome(value);
        this._nome = value;
    }

    private _validarNome(value: string): void {
        if (!value || value.trim().length < 3) {
            throw new Error('Nome do aluno deve ter pelo menos 3 caracteres');
        }
    }
}
