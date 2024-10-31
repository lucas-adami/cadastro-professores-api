import { Router } from "express";
import * as courseController from "./courseController";
import { Request, Response } from "express";

const courseRouter = Router();

courseRouter.get("/", (req: Request, res: Response) => {
  courseController.findAllCourses(req, res);
});

courseRouter.get("/filter", (req: Request, res: Response) => {
  courseController.filterCourses(req, res);
});

courseRouter.post("/", (req: Request, res: Response) => {
  courseController.createCourse(req, res);
});

courseRouter.put("/", (req: Request, res: Response) => {
  courseController.updateCourse(req, res);
});

courseRouter.delete("/:id", (req: Request, res: Response) => {
  courseController.deleteCourse(req, res);
});

export { courseRouter };
