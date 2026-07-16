import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Rota GET para listar usuários
app.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Rota POST para criar usuário
app.post("/usuarios", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao atualizar usuário" });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    console.log("Usuário deletado:", deletedUser);
    res.status(200).json({ message: "Usuário deletado com sucesso", user: deletedUser });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(400).json({ error: "Erro ao deletar usuário" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
