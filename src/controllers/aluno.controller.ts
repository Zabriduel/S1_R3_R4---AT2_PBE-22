import { noDeprecation } from "node:process";
import { AlunoService } from "../services/aluno.service";
import { Request, Response } from "express";

export class AlunoController {
    constructor(private _service = new AlunoService()) { }

    selecionar = async (req: Request, res: Response) => {
        try {
            const alunos = await this._service.SelecionarTodos();
            if (alunos.length === 0) {
                res.status(200).json({ message: "Nenhum aluno encontrado", alunos });
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
    criar = async (req: Request, res: Response) => {
        try {
            const { nomeAluno, email, matricula, curso, mediaFinal } = req.body;
            const novo = await this._service.criar(nomeAluno, email, matricula, curso, mediaFinal);

            res.status(201).json({ message: "Registro incluido com sucesso", novo });

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }

            return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro desconhecido' });
        }
    }
}