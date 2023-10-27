-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 28 oct. 2023 à 01:03
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `royaume`
--

-- --------------------------------------------------------

--
-- Structure de la table `giveaway`
--

CREATE TABLE `giveaway` (
  `messageid` varchar(255) DEFAULT NULL,
  `channelid` varchar(255) DEFAULT NULL,
  `guildid` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `datems` varchar(255) DEFAULT NULL,
  `gain` varchar(255) DEFAULT NULL,
  `nbGagnant` varchar(255) DEFAULT NULL,
  `host` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `nbEntree` varchar(255) DEFAULT NULL,
  `gagnant` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `giveaway`
--

INSERT INTO `giveaway` (`messageid`, `channelid`, `guildid`, `date`, `datems`, `gain`, `nbGagnant`, `host`, `url`, `nbEntree`, `gagnant`) VALUES
('1167598112358027334', '1167247517424037973', '1167247516899758150', '4:00:00', '1698447482995', 'att', '1', '1021320661836238868', 'https://giveawaybot.party/summary#giveaway=415263623099973655/1167598163079733258', '0', 'Aucun gagnant');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
