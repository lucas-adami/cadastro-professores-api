import { Router } from "express";
import * as ProfessorController from "./professorController";
import { Request, Response } from "express";

const professorRouter = Router();

professorRouter.get("/", (req: Request, res: Response) => {
    ProfessorController.findAllProfessors(req, res);
});

professorRouter.get("/:_id", (req: Request, res: Response) => {
    ProfessorController.findById(req, res);
});

professorRouter.post("/", (req: Request, res: Response) => {
    ProfessorController.createProfessor(req, res);
});

professorRouter.put("/:_id", (req: Request, res: Response) => {
    ProfessorController.updateProfessor(req, res);
});

professorRouter.delete("/:_id", (req: Request, res: Response) => {
    ProfessorController.deleteProfessor(req, res);
});

export { professorRouter };
