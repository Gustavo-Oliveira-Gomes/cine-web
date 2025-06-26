const db = require('../db/knex');

exports.obter = async (req, res) => {
  try {
    const filmes = await db("filmes").where({ idfilmes: req.params.idfilmes }).first();
    if (!filmes) {
      return res.status(404).json({ erro: "filme não encontrado" });
    }
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar filme" });
  }
};

exports.listar = async (req, res) => {
  try {
    const filmes = await db('filmes');
    res.json(filmes);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar Filmes' });
  }
};

exports.inserir = async (req, res) => {
  try {
    const { titulo, duracao, genero, diretor } = req.body;
    await db('filmes').insert({ titulo, duracao, genero, diretor });
    res.status(201).json({ mensagem: 'Filme inserido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao inserir Filme' });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const { idfilmes } = req.params;
    const { titulo, duracao, genero, diretor } = req.body;
    await db('filmes').where({ idfilmes }).update({ titulo, duracao, genero, diretor });
    res.json({ mensagem: 'Filme atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar Filme' });
  }
};

exports.excluir = async (req, res) => {
  try {
    const { idfilmes } = req.params;
    await db('filmes').where({ idfilmes }).del();
    res.json({ mensagem: 'Filme excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir Filme' });
  }
};
