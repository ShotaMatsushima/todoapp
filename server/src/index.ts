import express from "express";
import { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app: Express = express();
const PORT = 8080;

app.use(express.json());

app.get("/allTodos", async (req: Request, res: Response) => {
  const allTodos = await prisma.todo.findMany();
  return res.json(allTodos);
});

app.post("/createTodo", async (req: Request, res: Response) => {
  const { title, isCompleted } = req.body;
  const createTodo = await prisma.todo.create({
    data: {
      title,
      isCompleted,
    },
  });
  return res.json(createTodo);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}＼(^o^)／`));
