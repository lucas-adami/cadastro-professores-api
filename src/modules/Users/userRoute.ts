import { Router } from "express";
import * as UserController from "./userController";

export const userRouter = Router();

userRouter.get("/", UserController.findAllUsers);
userRouter.get("/:id", UserController.findUserById);
userRouter.post("/", UserController.createUser);
userRouter.delete("/:id", UserController.deleteUser);
