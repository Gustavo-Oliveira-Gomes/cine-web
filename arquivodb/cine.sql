-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/06/2025 às 05:06
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cine`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `filmes`
--

CREATE TABLE `filmes` (
  `idfilmes` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `duracao` time DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `diretor` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `filmes`
--

INSERT INTO `filmes` (`idfilmes`, `titulo`, `duracao`, `genero`, `diretor`) VALUES
(1, 'Homem-Aranha: Através do Aranhaverso', '02:00:00', 'Ação, Aventura, Animação, Fantasia', ' Joaquim Dos Santos, Kemp Powers, Justin Thompson'),
(2, 'O Poderoso Chefão', '02:55:00', 'Crime', 'Francis Ford Coppola'),
(3, 'Vingadores: Ultimato', '03:01:00', 'Ação', 'Anthony Russo, Joe Russo'),
(4, 'A Origem', '02:28:00', 'Ficção Científica', 'Christopher Nolan'),
(5, 'Titanic', '03:14:00', 'Romance', 'James Cameron'),
(6, 'Cidade de Deus', '02:10:00', 'Drama', 'Fernando Meirelles'),
(7, 'Homem-Aranha: Através do Aranhaverso', '02:00:00', 'Ação, Animação,', ' Joaquim Dos Santos, Kemp Powers, Justin Thompson');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`idfilmes`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `filmes`
--
ALTER TABLE `filmes`
  MODIFY `idfilmes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
