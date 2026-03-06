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
    editar = async (req: Request, res: Response) => {
        try {
            const { nomeAluno, email, matricula, curso, mediaFinal } = req.body;
            const idAluno = Number(req.query.idAluno);
            if (!idAluno || isNaN(idAluno)) {
                throw new Error('Valor para ID aluno é inválido');
            }
            const alterado = await this._service.editar(idAluno, nomeAluno, email, matricula, curso, mediaFinal);

            return res.status(200).json({ message: "Registro alterado com sucesso!", alterado });
        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro desconhecido' });
        }
    }
    deletar = async (req: Request, res: Response) => {
        try {
            const idAluno = Number(req.query.idAluno);
            if (!idAluno || isNaN(idAluno)) {
                throw new Error('Valor para id deve ser um número válido.');
            }
            const deletado = await this._service.deletar(idAluno);
            if (deletado.affectedRows === 0) {
                return res.status(200).json({ message: "Nenhum registro encontrado para ser deletado" });
            }
            return res.status(200).json({ message: "Registro deletado com sucesso", data: deletado });
        }
        catch (error: unknown) {
            console.log(error);
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            return res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro desconhecido' });

        }
    }
}