import { Request, response, Response } from "express";
import { ObjectId } from "mongodb";
import * as UserService from "./userService"
import { UserType } from "../../types/userType";

    export async function findAllUsers (req: Request, res: Response) {
        try {
            const result = await UserService.findAllUsersService()

            if (!result || result.length == 0)
                res.status(404).send({ message: "No users found" })
            res.status(200).send(result)

        } catch (error) {
            res.status(400).send({message: "Bad request at function findAllUsers"})
        }
    }

    export async function findUserById (req: Request, res: Response) {
        try {
            const id: string = req.params.id
            if (!id)
                res.status(400).send({message: "Invalid id"})
            
            if (!ObjectId.isValid(id))
                res.status(400).send({ message: "Invalid ObjectId format" })

            const objectId = new ObjectId(id)

            const result = await UserService.findUserByIdService(objectId)

            if (!result)
                res.status(404).send({message: "User not found"})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message: "Bad request at function findUserById"})
        }
    }

    export async function createUser (req: Request, res: Response) {
        try {
            const userData: UserType = req.body

            if (!userData.username || !userData.email || !userData.password)
                res.status(400).send({message: "Bad request at function createUser"})

            const newUser = await UserService.createUserService(userData)

            res.status(201).send({message: "User created successfully", data: newUser})
        } catch (error) {
            res.status(405).send({message: "createUser function not allowed"})
        }
    }

    export async function deleteUser (req: Request, res: Response) {
        try {
            const id: string = req.params.id

            if (!ObjectId.isValid(id))
                res.status(400).send({ message: "Invalid ObjectId format" })
            
            const objectId = new ObjectId(id)

            const result = await UserService.findUserByIdService(objectId)

            if (!result)
                res.status(404).send({message: "User not found"})
            
            await UserService.deleteUserByIdService(objectId)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message: "Bad request at function deleteUser"})
        }
    }
