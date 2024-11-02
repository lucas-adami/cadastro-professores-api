import { Request, Response } from "express";
import { ObjectId } from "mongodb";
//import * as CourseService from "./courseService";
import { CourseType } from "../../types/courseType";

export async function findAllCourses(req: Request, res: Response) {
  try {
    const course = await CourseService.findAllCourseService();

    if (!course || course.length == 0)
      return res.status(404).send({ message: "No courses found" });

    return res.status(200).send(course);
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Bad request at function findAllCourses" });
  }
}

export async function filterCourses(req: Request, res: Response) {
  try {
    const { nome, modalidade, coordenador } = req.query;

    let filter: any = {};

    if (nome) {
      filter.nome = { $regex: nome, $options: "i" };
    }

    if (modalidade && typeof modalidade === "string") {
      filter.modalidade = { $in: modalidade.split(",") };
    }

    if (coordenador) {
      filter.coordenador = new ObjectId(coordenador as string);
    }

    const cursos = await CourseService.filterCourseService(filter);

    if (!cursos || cursos.length === 0) {
      return res
        .status(404)
        .send({ msg: "Nenhum curso encontrado com os critérios fornecidos." });
    }

    return res.status(200).json(cursos);
  } catch (err) {
    return res.status(500).send({ err: "Erro ao filtrar na busca dos cursos" });
  }
}

export async function createCourse(req: Request, res: Response) {
  try {
    const courseInfo = req.body;
    const course = await CourseService.createCourseService(courseInfo);

    if (!course) {
      return res.status(400).send({ message: "O curso não foi cadastrado" });
    }

    return res.status(201).send({
      msg: "O curso foi cadastrado com sucesso!",
      course, // Simplificando o retorno
    });
  } catch (error) {
    return res.status(500).send({ message: "Erro ao criar curso" });
  }
}

export async function updateCourse(req: Request, res: Response) {
  try {
    const courseId = req.courseId;
    const courseInfos = req.body;

    if (!courseId || !courseInfos) {
      return res
        .status(400)
        .send({ err: "ID do curso ou informações não fornecidas" });
    }

    const updatedCourse = await CourseService.updateCourseService(
      courseId,
      courseInfos
    );

    if (!updatedCourse) {
      return res
        .status(404)
        .send({ err: "Curso não encontrado ou não pôde ser atualizado" });
    }

    return res
      .status(200)
      .send({ msg: "Curso atualizado com sucesso!", course: updatedCourse });
  } catch (err) {
    return res.status(500).send({ err: "Erro ao atualizar um curso" });
  }
}

export async function deleteCourse(req: Request, res: Response) {
  try {
    const courseId = req.courseId; // Certifique-se de que este ID é obtido corretamente

    if (!courseId) {
      return res.status(400).send({ err: "ID do curso não fornecido" });
    }

    const deletedCourse = await CourseService.deleteCourseService(courseId);

    if (!deletedCourse) {
      return res
        .status(404)
        .send({ err: "Curso não encontrado ou não pôde ser deletado" });
    }

    return res.status(200).send({ msg: "O curso foi deletado com sucesso!" });
  } catch (err) {
    return res.status(500).send({ err: "Erro ao deletar um curso" });
  }
}
