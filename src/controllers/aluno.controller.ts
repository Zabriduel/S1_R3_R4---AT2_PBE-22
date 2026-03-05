import { AlunoService } from "../services/aluno.service";
import { Request, Response } from "express";

export class AlunoController {
    constructor(private _service = new AlunoService()) { }

    selecionar = async (req: Request, res: Response) => {
        try {
            const alunos = await this._service.SelecionarTodos();
            if (alunos.length === 0) {
                res.status(200).json({ message: "Nenhuma categoria encontrada", alunos });
            }
            return res.status(200).json({ alunos });
        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro desconhecido' });
        }
    }
}