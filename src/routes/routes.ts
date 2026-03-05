import { Router } from "express";
import alunoRoutes from "./aluno.route";

const router = Router();
router.use('/', alunoRoutes);

export default router;