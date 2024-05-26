-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 26 mai 2024 à 07:21
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `materiel`
--

-- --------------------------------------------------------

--
-- Structure de la table `materiel`
--

DROP TABLE IF EXISTS `materiel`;
CREATE TABLE IF NOT EXISTS `materiel` (
  `numMateriel` int NOT NULL AUTO_INCREMENT,
  `Designation` varchar(100) NOT NULL,
  `Etat` varchar(10) NOT NULL,
  `Quantite` int NOT NULL,
  PRIMARY KEY (`numMateriel`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `materiel`
--

INSERT INTO `materiel` (`numMateriel`, `Designation`, `Etat`, `Quantite`) VALUES
(32, 'Poubelle', 'bon', 90),
(30, 'Projecteur', 'abime', 20),
(29, 'Tableau', 'mauvais', 90),
(26, 'Chaise', 'abime', 85);

-- --------------------------------------------------------

--
-- Structure de la table `somme`
--

DROP TABLE IF EXISTS `somme`;
CREATE TABLE IF NOT EXISTS `somme` (
  `Bon` int NOT NULL,
  `Abime` int NOT NULL,
  `Mauvais` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `somme`
--

INSERT INTO `somme` (`Bon`, `Abime`, `Mauvais`) VALUES
(140, 140, 20);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
