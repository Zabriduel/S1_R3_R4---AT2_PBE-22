import { Router } from "express";
import { AlunoController } from "../controllers/aluno.controller";

const alunoController = new AlunoController();
const alunoRoutes = Router();

alunoRoutes.get('/alunos',alunoController.selecionar);
alunoRoutes.post('/alunos',alunoController.criar);
alunoRoutes.patch('/produtos', alunoController.editar);
alunoRoutes.delete('/produtos', alunoController.deletar);

export default alunoRoutes;