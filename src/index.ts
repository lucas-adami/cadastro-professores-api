import express  from "express";
import { AppDataSource } from "./data-source";
import { userRouter } from "./modules/Users/userRoute";

AppDataSource.initialize().then(() => {
    const app = express()
    const API_PORT = process.env.API_PORT ?? 3000

    app.use(express.json())

    app.use("/users", userRouter)

    return app.listen(API_PORT, () => {
        console.log(`Servidor rodando na porta ${API_PORT} 🚀`);
    })
}).catch((error: any) => console.log(error));