import express from "express";
import { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app: Express = express();
const PORT = 8080;

app.get("/allTodos", async (req: Request, res: Response) => {
  const allTodos = await prisma.todo.findMany();
  return res.json(allTodos);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}＼(^o^)／`));
