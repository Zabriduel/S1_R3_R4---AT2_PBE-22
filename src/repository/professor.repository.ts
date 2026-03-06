import { db } from "../database/connection.database";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";
import { Professor } from "../models/professor.model";

export class ProfessorRepository {
    async findAll(): Promise<RowDataPacket[]> {
        const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM professores;');
        return rows;
    }

    async create(dados: Professor): Promise<ResultSetHeader> {
        const sql = 'INSERT INTO professores (nomeProfessor,email, disciplina,cargaHoraria) VALUES (?,?,?,?);';
        const values = [dados.Nome, dados.Email, dados.Disciplina, dados.CargaHorario];
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