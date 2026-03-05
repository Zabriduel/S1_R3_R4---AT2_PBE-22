import { Router } from "express";
import { AlunoController } from "../controllers/aluno.controller";

const alunoController = new AlunoController();
const alunoRoutes = Router();

alunoRoutes.get('/alunos',alunoController.selecionar);

export default alunoRoutes;