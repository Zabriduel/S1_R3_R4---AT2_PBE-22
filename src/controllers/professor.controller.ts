import { ProfessorService } from "../services/professor.service";
import { Request, Response } from "express";

export class ProfessorController {
    constructor(private _service = new ProfessorService()) { }

    selecionar = async (req: Request, res: Response) => {
        try {
            const id = Number(req.query.id);
            if (id || isNaN(id)) {
                if (!id || isNaN(id)) {
                    throw new Error('Valor para id deve ser um número válido.');
                }
                const professor = await this._service.selecionarPorId(id);
                if (professor.length === 0) {
                    return res.status(200).json({ message: "Nenhum aluno encontrado", professor });
                }
                return res.status(200).json({ professor });
            } else {

                const professores = await this._service.SelecionarTodos();
                if (professores.length === 0) {
                    res.status(200).json({ message: "Nenhum Professor encontrado", professores });
                }
                return res.status(200).json({ professores });
            }
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
            const { nomeProfessor, email, disciplina, cargaHoraria } = req.body;
            const novo = await this._service.criar(nomeProfessor, email, disciplina, cargaHoraria);

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
            const { nomeProfessor, email, disciplina, cargaHoraria } = req.body;
            const idProfessor = Number(req.query.idProfessor);
            if (!idProfessor || isNaN(idProfessor)) {
                throw new Error('Valor para ID aluno é inválido');
            }
            const alterado = await this._service.editar(idProfessor, nomeProfessor, email, disciplina, cargaHoraria);

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
            const idProfessor = Number(req.query.idProfessor);
            if (!idProfessor || isNaN(idProfessor)) {
                throw new Error('Valor para id deve ser um número válido.');
            }
            const deletado = await this._service.deletar(idProfessor);
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