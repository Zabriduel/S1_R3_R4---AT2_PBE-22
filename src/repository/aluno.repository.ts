import { db } from "../database/connection.database";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";

export class AlunoRepository {
    async findAll():  Promise<RowDataPacket[]>{
        const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM alunos');

        return rows;
    }

}