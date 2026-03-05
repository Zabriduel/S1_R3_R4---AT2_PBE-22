import { db } from "../database/connection.database";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";
import { Aluno } from "../models/aluno.model";

export class AlunoRepository {
    async findAll():  Promise<RowDataPacket[]>{
        const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM alunos;');

        return rows;
    }
    async create(dados:Aluno):Promise<ResultSetHeader>{
        const sql = 'insert into alunos (nomeAluno, email,matricula, curso, mediaFinal) Values (?,?,?,?,?);';
        const values = [dados.Nome, dados.Email, dados.Matricula,dados.Curso,dados.MediaFinal ];
        console.log(values);
        
        const [rows] = await db.execute<ResultSetHeader>(sql,values);
        return rows
    }

}