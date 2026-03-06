import { db } from "../database/connection.database";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";
import { Aluno } from "../models/aluno.model";

export class AlunoRepository {
    async findAll(): Promise<RowDataPacket[]> {
        const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM alunos;');
        return rows;
    }

    async create(dados: Aluno): Promise<ResultSetHeader> {
        const sql = 'INSERT INTO alunos (nomeAluno, email,matricula, curso, mediaFinal) VALUES (?,?,?,?,?);';
        const values = [dados.Nome, dados.Email, dados.Matricula, dados.Curso, dados.MediaFinal];
        console.log(values);

        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows
    }
    async update(id: number, dados: Aluno): Promise<ResultSetHeader> {
        const sql = ' UPDATE alunos SET nomeAluno = ?, email = ?, matricula = ?, curso = ?, mediaFinal = ? WHERE idAluno = ?;';
        const values = [dados.Nome, dados.Email, dados.Matricula, dados.Curso, dados.MediaFinal, id];

        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        console.log(rows);

        return rows
    }
    async delete(id: number): Promise<ResultSetHeader> {
        const sql = 'DELETE FROM alunos WHERE idAluno = 1';
        const values = [id];
        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows;
    }

}