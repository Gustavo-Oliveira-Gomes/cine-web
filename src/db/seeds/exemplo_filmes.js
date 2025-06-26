exports.seed = async function(knex) {
  await knex('filmes').del();

  await knex('filmes').insert([

  { titulo: 'O Poderoso Chefão', duracao: '02:55:00', genero: 'Crime', diretor: 'Francis Ford Coppola' },

  { titulo: 'Vingadores: Ultimato', duracao: '03:01:00', genero: 'Ação', diretor: 'Anthony Russo, Joe Russo' },

  { titulo: 'A Origem', duracao: '02:28:00', genero: 'Ficção Científica', diretor: 'Christopher Nolan' },

  { titulo: 'Titanic', duracao: '03:14:00', genero: 'Romance', diretor: 'James Cameron' },

  { titulo: 'Cidade de Deus', duracao: '02:10:00', genero: 'Drama', diretor: 'Fernando Meirelles' },

  { titulo: 'Homem-Aranha: Através do Aranhaverso', duracao: '02:00:00', genero: 'Ação, Animação,', diretor: ' Joaquim Dos Santos, Kemp Powers, Justin Thompson' }
  
  ]);
};
