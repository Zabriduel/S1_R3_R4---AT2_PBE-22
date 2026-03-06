import { db } from "../database/connection.database";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";
import { Professor } from "../models/professor.model";

export class ProfessorRepository {
    async findAll(): Promise<string[]> {
        const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM professores;');
        return rows.map(row => {
            const aluno = new Professor(row.nome, row.email, row.matricula, row.curso, row.mediaFinal);
            return aluno.mostrarDados();
        });
    }
    async findById(id: number): Promise<RowDataPacket[]> {
        const sql = 'SELECT * FROM professores WHERE id = ?;';
        const values = [id];
        const [rows] = await db.execute<RowDataPacket[]>(sql, values);
        return rows;

    }

    async create(dados: Professor): Promise<ResultSetHeader> {
        const sql = 'INSERT INTO professores (nomeProfessor,email, disciplina,cargaHoraria) VALUES (?,?,?,?);';
        const values = [dados.Nome, dados.Email, dados.Disciplina, dados.CargaHorario];


        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows
    }
    async update(id: number, dados: Professor): Promise<ResultSetHeader> {
        const sql = ' UPDATE professores SET nomeProfessor = ?, email = ?, disciplina = ?, cargaHoraria = ? WHERE idProfessor = ?;';
        const values = [dados.Nome, dados.Email, dados.Disciplina, dados.CargaHorario];

        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        console.log(rows);

        return rows
    }
    async delete(id: number): Promise<ResultSetHeader> {
        const sql = ' DELETE FROM professores WHERE idProfessor = ?;';
        const values = [id];
        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows;
    }

}