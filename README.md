# 🚀 User Management API

Backend da aplicação **User Management**, responsável pelo gerenciamento de usuários por meio de uma API REST.

Este projeto foi desenvolvido durante meus estudos em Desenvolvimento Full Stack, com foco em boas práticas de organização, integração entre frontend e backend e persistência de dados utilizando MongoDB.

## 📌 Tecnologias utilizadas

* Node.js
* Express
* Prisma ORM
* MongoDB
* JavaScript
* CORS

## 📂 Estrutura do projeto

```
user-management-api
│
├── prisma/
├── generated/
├── server.js
├── package.json
└── .gitignore
```

## ⚙️ Funcionalidades

* Criar usuários
* Listar usuários
* Atualizar usuários
* Remover usuários

## 📡 Endpoints

| Método | Endpoint        | Descrição               |
| ------ | --------------- | ----------------------- |
| GET    | `/usuarios`     | Lista todos os usuários |
| POST   | `/usuarios`     | Cria um novo usuário    |
| PUT    | `/usuarios/:id` | Atualiza um usuário     |
| DELETE | `/usuarios/:id` | Remove um usuário       |

## ▶️ Como executar

Clone o repositório:

```bash
git clone https://github.com/ChristianPinho/user-management-api.git
```

Instale as dependências:

```bash
npm install
```

Configure um arquivo `.env` com sua conexão do MongoDB:

```env
DATABASE_URL="sua_string_de_conexao"
```

Inicie a aplicação:

```bash
node server.js
```

O servidor estará disponível em:

```
http://localhost:3000
```

## 💻 Frontend

A interface desta aplicação está disponível em:

👉 https://github.com/ChristianPinho/user-management-react

## 👨‍💻 Autor

Desenvolvido por **Christian Marcel de Pinho** 
