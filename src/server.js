require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");

// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, ".", "public")));

const filmesRoutes = require('./routes/filmes');

app.use(express.json());

app.use('/filmes', filmesRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// marcio araya