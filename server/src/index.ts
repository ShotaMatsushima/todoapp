import express from "express";
import { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 8080;

app.get("/allTodos", (req: Request, res: Response) => {
  return res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}＼(^o^)／`));
