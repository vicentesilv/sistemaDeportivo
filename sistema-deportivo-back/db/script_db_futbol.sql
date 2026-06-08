-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-12-2024 a las 07:37:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemaDeportivo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `idEquipo` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`idEquipo`, `nombre`, `img`) VALUES
(1, 'TIGRES', 'TIGRES.png'),
(2, 'MONTERREY', 'MONTERREY.png'),
(3, 'AMERICA', 'AMERICA.png'),
(4, 'SAN LUIS', 'SAN LUIS.png'),
(5, 'CRUZ AZUL', 'CRUZ AZUL.png'),
(6, 'PUMAS', 'PUMAS.png'),
(7, 'TIJUANA', 'TIJUANA.png'),
(8, 'ATLAS', 'ATLAS.png'),
(9, 'GUADALAJARA', 'GUADALAJARA.png'),
(10, 'NECAXA', 'NECAXA.png'),
(11, 'LEON', 'LEON.png'),
(12, 'PUEBLA', 'PUEBLA.png'),
(13, 'JUAREZ', 'JUAREZ.png'),
(14, 'PACHUCA', 'PACHUCA.png'),
(15, 'QUERETARO', 'QUERETARO.png'),
(16, 'SANTOS', 'SANTOS.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `goles`
--

CREATE TABLE `goles` (
  `idGol` int(11) NOT NULL,
  `gol` tinyint(1) DEFAULT NULL,
  `idJugador` int(11) DEFAULT NULL,
  `lugarTiro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `goles`
--

INSERT INTO `goles` (`idGol`, `gol`, `idJugador`, `lugarTiro`) VALUES
(1, 0, 1, 6),
(2, 1, 1, 6),
(3, 0, 1, 4),
(4, 1, 1, 4),
(5, 1, 1, 4),
(6, 1, 1, 5),
(7, 1, 1, 3),
(8, 1, 1, 4),
(9, 1, 1, 1),
(10, 1, 1, 6),
(11, 1, 1, 4),
(12, 1, 1, 1),
(13, 1, 1, 1),
(14, 1, 1, 4),
(15, 1, 1, 1),
(16, 1, 1, 4),
(17, 0, 1, 10),
(18, 1, 1, 1),
(19, 0, 1, 11),
(20, 1, 1, 4),
(21, 1, 1, 5),
(22, 1, 1, 6),
(23, 1, 1, 4),
(24, 1, 1, 6),
(25, 1, 1, 4),
(26, 1, 1, 4),
(27, 1, 1, 6),
(28, 1, 1, 2),
(29, 0, 1, 6),
(30, 1, 1, 6),
(31, 1, 1, 6),
(32, 0, 1, 10),
(33, 1, 2, 6),
(34, 0, 2, 4),
(35, 1, 2, 2),
(36, 1, 2, 6),
(37, 1, 2, 4),
(38, 0, 2, 6),
(39, 1, 2, 4),
(40, 1, 2, 6),
(41, 0, 2, 8),
(42, 1, 2, 6),
(43, 1, 2, 4),
(44, 1, 2, 4),
(45, 1, 2, 6),
(46, 1, 2, 4),
(47, 1, 3, 1),
(48, 1, 3, 4),
(49, 1, 3, 6),
(50, 1, 3, 6),
(51, 1, 3, 6),
(52, 1, 3, 4),
(53, 1, 3, 4),
(54, 1, 3, 3),
(55, 1, 3, 3),
(56, 0, 3, 5),
(57, 1, 4, 4),
(58, 1, 4, 5),
(59, 0, 4, 6),
(60, 1, 4, 6),
(61, 1, 4, 4),
(62, 1, 4, 5),
(63, 0, 4, 9),
(64, 1, 4, 3),
(65, 1, 4, 4),
(66, 0, 4, 4),
(67, 1, 5, 4),
(68, 1, 5, 4),
(69, 1, 5, 4),
(70, 0, 6, 6),
(71, 1, 6, 5),
(72, 0, 6, 4),
(73, 1, 6, 6),
(74, 1, 6, 4),
(75, 1, 6, 4),
(76, 1, 6, 4),
(77, 1, 7, 6),
(78, 1, 7, 6),
(79, 1, 7, 6),
(80, 1, 7, 6),
(81, 1, 7, 6),
(82, 1, 7, 4),
(83, 1, 7, 4),
(84, 1, 7, 6),
(85, 1, 8, 4),
(86, 1, 8, 4),
(87, 0, 8, 10),
(88, 1, 8, 5),
(89, 0, 8, 6),
(90, 1, 8, 6),
(91, 1, 8, 6),
(92, 1, 8, 4),
(93, 1, 8, 6),
(94, 1, 8, 4),
(95, 1, 9, 1),
(96, 1, 9, 4),
(97, 1, 9, 4),
(98, 1, 9, 4),
(99, 1, 9, 6),
(100, 1, 9, 4),
(101, 1, 9, 6),
(102, 1, 10, 6),
(103, 1, 10, 4),
(104, 1, 10, 6),
(105, 1, 10, 6),
(106, 1, 10, 6),
(107, 1, 11, 4),
(108, 0, 11, 10),
(109, 1, 11, 5),
(110, 1, 11, 4),
(111, 1, 11, 6),
(112, 1, 11, 5),
(113, 1, 11, 5),
(114, 1, 12, 6),
(115, 1, 12, 6),
(116, 1, 12, 4),
(117, 1, 12, 2),
(118, 1, 12, 6),
(119, 0, 12, 5),
(120, 0, 12, 6),
(121, 0, 12, 6),
(122, 1, 12, 4),
(123, 1, 13, 4),
(124, 1, 13, 6),
(125, 1, 13, 3),
(126, 1, 13, 5),
(127, 1, 13, 4),
(128, 1, 13, 2),
(129, 0, 13, 11),
(130, 0, 14, 6),
(131, 1, 14, 6),
(132, 1, 14, 5),
(133, 1, 14, 1),
(134, 0, 14, 9),
(135, 1, 14, 4),
(136, 1, 14, 5),
(137, 1, 14, 1),
(138, 1, 14, 6),
(139, 1, 14, 2),
(140, 0, 14, 6),
(141, 1, 14, 6),
(142, 1, 14, 6),
(143, 0, 14, 6),
(144, 1, 14, 6),
(145, 0, 14, 8),
(146, 1, 14, 3),
(147, 1, 14, 1),
(148, 1, 14, 6),
(149, 1, 14, 5),
(150, 1, 14, 5),
(151, 1, 14, 6),
(152, 1, 14, 2),
(153, 0, 14, 4),
(154, 0, 14, 14),
(155, 0, 15, 5),
(156, 1, 15, 3),
(157, 1, 15, 3),
(158, 1, 15, 6),
(159, 1, 15, 6),
(160, 1, 15, 2),
(161, 0, 15, 4),
(162, 1, 15, 5),
(163, 1, 15, 4),
(164, 1, 15, 2),
(165, 1, 16, 6),
(166, 1, 16, 5),
(167, 0, 16, 14),
(168, 1, 16, 4),
(169, 1, 16, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `idJugador` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `nacionalidad` varchar(255) NOT NULL,
  `posicion` varchar(255) NOT NULL,
  `idEquipo` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`idJugador`, `nombre`, `nacionalidad`, `posicion`, `idEquipo`, `img`) VALUES
(1, 'André-Pierre Gignac', 'Francesa', 'Delantero', 'TIGRES', 'André-Pierre Gignac.png'),
(2, 'Sergio Canales', 'Españala', 'Centrocampista', 'MONTERREY', 'Sergio Canales.png'),
(3, 'Henry Martin', 'Mexicana', 'Delantero', 'AMERICA', 'Henry Martin.png'),
(4, 'Franck Boli', 'Marfileña', 'Delantero', 'SAN LUIS', 'Franck Boli.png'),
(5, 'Carlos Rotondi', 'Argentina', 'Delantero', 'CRUZ AZUL', 'Carlos Rotondi.png'),
(6, 'Cesar Huerta', 'Mexicana', 'Delantero-extremo izquierdo', 'PUMAS', 'Cesar Huerta.png'),
(7, 'Christian Rivera', 'Colombiano', 'Mediocampista', 'TIJUANA', 'Christian Rivera.png'),
(8, 'Aldo Rocha', 'Mexicana', 'Mediocampista defensivo', 'ATLAS', 'Aldo Rocha.png'),
(9, 'Roberto Alvarado', 'Mexicana', 'Mediocampista', 'GUADALAJARA', 'Roberto Alvarado.png'),
(10, 'José Paradela', 'Argentina', 'Mediocampista', 'NECAXA', 'José Paradela.png'),
(11, 'Jhonder Cádiz', 'Venezolana', 'Delantero', 'LEON', 'Jhonder Cádiz.png'),
(12, 'Lucas Cavallini', 'Canadiense', 'Delantero', 'PUEBLA', 'Lucas Cavallini.png'),
(13, 'Avilés Hurtado', 'Colombiana', 'Mediapunta o extremo', 'JUAREZ', 'Avilés Hurtado.png'),
(14, 'Borja Bastón', 'Española', 'Delantero	', 'PACHUCA', 'Borja Bastón.png'),
(15, 'Pablo Barrera', 'Mexicana', 'Volante o extremo por banda', 'QUERETARO', 'Pablo Barrera.png'),
(16, 'Harold Preciado', 'Colombiana', 'Delantero central', 'SANTOS', 'Harold Preciado.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidos`
--

CREATE TABLE `partidos` (
  `idPartido` int(11) NOT NULL,
  `idEquipo` varchar(255) DEFAULT NULL,
  `idEquipoContrario` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `torneo` varchar(255) DEFAULT NULL,
  `sede` varchar(255) DEFAULT NULL,
  `arranque` tinyint(1) DEFAULT NULL,
  `marcadorF` int(11) DEFAULT NULL,
  `marcadorC` int(11) DEFAULT NULL,
  `minuto` int(11) DEFAULT NULL,
  `ronda` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partidos`
--

INSERT INTO `partidos` (`idPartido`, `idEquipo`, `idEquipoContrario`, `fecha`, `torneo`, `sede`, `arranque`, `marcadorF`, `marcadorC`, `minuto`, `ronda`) VALUES
(1, 'Monterrey', 'Juarez', '2024-09-18 00:00:00', 'LigaMXAP24', 'Local', 1, 1, 2, 79, 'Regular Season'),
(2, 'Monterrey', 'Queretaro', '2024-07-20 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 0, 28, 'Regular Season'),
(3, 'Monterrey', 'Leon', '2023-09-16 00:00:00', 'LigaMXAP23', 'local', 1, 1, 0, 46, 'Regular Season'),
(4, 'Monterrey', 'Guadalajara', '2023-09-03 00:00:00', 'LigaMXAP23', 'visitante', 1, 1, 0, 36, 'Regular Season'),
(5, 'Monterrey', 'Real Valladolid', '2023-02-18 00:00:00', 'LaLiga', 'Local', 1, 1, 1, 49, 'Regular Season'),
(6, 'Monterrey', 'Getafe', '2021-02-19 00:00:00', 'LaLiga', 'Local', 1, 0, 0, 76, 'Regular Season'),
(7, 'Monterrey', 'Sevilla', '2021-01-02 00:00:00', 'LaLiga', 'Local', 1, 0, 1, 53, 'Regular Season'),
(8, 'Monterrey', 'Levante', '2020-12-29 00:00:00', 'LaLiga', 'visitante', 1, 1, 4, 78, 'Regular Season'),
(9, 'Monterrey', 'Athletic Club', '2020-06-20 00:00:00', 'LaLiga', 'visitante', 1, 0, 1, 86, 'Regular Season'),
(10, 'Monterrey', 'Granada', '2020-06-15 00:00:00', 'LaLiga', 'Local', 1, 0, 1, 85, 'Regular Season'),
(11, 'Monterrey', 'Mallorca', '2020-02-21 00:00:00', 'LaLiga', 'Local', 1, 0, 1, 19, 'Regular Season'),
(12, 'Monterrey', 'Barcelona', '2020-02-09 00:00:00', 'LaLiga', 'Local', 1, 0, 0, 6, 'Regular Season'),
(13, 'Monterrey', 'Atletico de Madrid', '2019-02-03 00:00:00', 'LaLiga', 'Local', 1, 0, 0, 65, 'Regular Season'),
(14, 'Monterrey', 'Girona', '2019-01-20 00:00:00', 'LaLiga', 'Local', 1, 2, 2, 94, 'Regular Season'),
(15, 'TIGRES', 'Guadalajara', '2024-08-24 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 0, 42, 'Regular Season'),
(16, 'TIGRES', 'Necaxa', '2024-07-06 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 0, 19, 'Regular Season'),
(17, 'TIGRES', ' Colombus', '2024-04-09 00:00:00', 'ConcacafChampionsCup', 'Local', 1, 0, 0, 90, 'Cuartos'),
(18, 'TIGRES', 'Puebla', '2023-12-03 00:00:00', 'LigaMXAP23', 'Local', 1, 0, 0, 9, 'Cuartos'),
(19, 'TIGRES', 'Pachuca', '2023-10-07 00:00:00', 'LigaMXAP23', 'visitante', 1, 0, 0, 8, 'Regular Season'),
(20, 'TIGRES', 'Monterrey', '2023-09-23 00:00:00', 'LigaMXAP23', 'Local', 1, 1, 0, 59, 'Regular Season'),
(21, 'TIGRES', 'Queretaro', '2023-09-02 00:00:00', 'LigaMXAP23', 'Local', 1, 2, 0, 49, 'Regular Season'),
(22, 'TIGRES', 'Guadalajara', '2023-05-28 00:00:00', 'LigaMXCL23', 'visitante', 1, 0, 2, 65, 'Final'),
(23, 'TIGRES', 'Toluca', '2023-05-11 00:00:00', 'LigaMXCL23', 'Local', 1, 1, 1, 31, 'Cuartos'),
(24, 'TIGRES', 'Puebla', '2023-04-20 00:00:00', 'LigaMXCL23', 'local', 1, 0, 0, 49, 'Regular Season'),
(25, 'TIGRES', 'Pumas', '2023-03-11 00:00:00', 'LigaMXCL23', 'local', 1, 2, 1, 44, 'Regular Season'),
(26, 'TIGRES', 'Pachuca', '2022-10-13 00:00:00', 'LigaMXAP22', 'local', 1, 0, 0, 88, 'Cuartos'),
(27, 'TIGRES', 'Atlas', '2022-05-21 00:00:00', 'LigaMXCL22', 'Local', 1, 2, 1, 74, 'Semifinal'),
(28, 'TIGRES', 'Atlas', '2022-05-21 00:00:00', 'LigaMXCL22', 'Local', 1, 0, 1, 54, 'Semifinal'),
(29, 'TIGRES', 'Mazatlan', '2022-02-06 00:00:00', 'LigaMXCL22', 'Local', 1, 2, 2, 76, 'Regular Season'),
(30, 'TIGRES', 'Pumas', '2022-01-23 00:00:00', 'LigaMXCL22', 'visitante', 1, 1, 1, 97, 'Regular Season'),
(31, 'TIGRES', 'Puebla', '2022-01-15 00:00:00', 'LigaMXCL22', 'Local', 1, 0, 2, 88, 'Regular Season'),
(32, 'TIGRES', 'Monterrey', '2021-04-24 00:00:00', 'LigaMXCL21', 'Local', 1, 1, 1, 64, 'Regular Season'),
(33, 'TIGRES', 'Mazatlan', '2021-03-13 00:00:00', 'LigaMXCL21', 'Local', 1, 0, 2, 70, 'Regular Season'),
(34, 'TIGRES', 'Puebla', '2021-03-05 00:00:00', 'LigaMXCL21', 'visitante', 1, 1, 1, 11, 'Regular Season'),
(35, 'TIGRES', 'San', '2020-10-03 00:00:00', 'LigaMXAP20', 'Local', 1, 1, 0, 70, 'lar Season'),
(36, 'TIGRES', 'Toluca', '2020-08-16 00:00:00', 'LigaMXAP20', 'visitante', 1, 1, 2, 72, 'Regular Season'),
(37, 'TIGRES', 'Puebla', '2020-08-11 00:00:00', 'LigaMXAP20', 'Local', 1, 0, 0, 6, 'Regular Season'),
(38, 'TIGRES', 'Pumas', '2020-02-29 00:00:00', 'LigaMXCL20', 'Local', 1, 1, 0, 56, 'Regular Season'),
(39, 'TIGRES', 'Pumas', '2020-02-29 00:00:00', 'LigaMXCL20', 'Local', 1, 0, 0, 50, 'Regular Season'),
(40, 'TIGRES', 'Guadalajara', '2020-02-08 00:00:00', 'LigaMXCL20', 'Local', 1, 1, 0, 62, 'Regular Season'),
(41, 'TIGRES', 'America', '2019-11-28 00:00:00', 'LigaMXAP19', 'visitante', 1, 1, 1, 67, 'Cuartos'),
(42, 'TIGRES', 'Santos', '2019-10-05 00:00:00', 'LigaMXAP19', 'Local', 1, 2, 0, 48, 'Regular Season'),
(43, 'TIGRES', 'Atlas', '2019-08-27 00:00:00', 'LigaMXAP19', 'visitante', 1, 0, 0, 29, 'Regular Season'),
(44, 'TIGRES', 'Atlas', '2019-02-22 00:00:00', 'LigaMXCL19', 'visitante', 1, 0, 0, 93, 'Regular Season'),
(45, 'TIGRES', 'Leon', '2019-01-05 00:00:00', 'LigaMXCL19', 'visitante', 1, 1, 2, 95, 'Regular Season'),
(46, 'TIGRES', 'Santos', '2018-08-19 00:00:00', 'LigaMxAP18', 'visitante', 1, 0, 0, 9, 'Regular Season'),
(47, 'America', 'CruzAzul', '2024-05-26 00:00:00', 'LigaMXCL24', 'local', 1, 0, 0, 78, 'Final'),
(48, 'America', 'Pumas', '2024-04-20 00:00:00', 'LigaMXCL24', 'visitante', 1, 0, 0, 20, 'Regular Season'),
(49, 'America', 'Atlas', '2024-03-02 00:00:00', 'LigaMXCL24', 'visitante', 1, 1, 1, 56, 'Regular Season'),
(50, 'America', 'Tigres', '2023-12-14 00:00:00', 'LigaMXAP23', 'visitante', 1, 0, 0, 51, 'Final'),
(51, 'America', 'Pumas', '2023-04-22 00:00:00', 'LigaMXCL23', 'local', 1, 0, 1, 72, 'Regular Season'),
(52, 'America', 'Necaxa', '2023-02-11 00:00:00', 'LigaMXCL23', 'local', 1, 1, 0, 51, 'Regular Season'),
(53, 'America', 'Santos', '2023-02-04 00:00:00', 'LigaMXCL23', 'visitante', 1, 0, 2, 53, 'Regular Season'),
(54, 'America', 'Toluca', '2023-01-14 00:00:00', 'LigaMXCL23', 'visitante', 1, 1, 2, 76, 'Regular Season'),
(55, 'America', 'Guadalajara', '2022-09-17 00:00:00', 'LigaMXAP22', 'local', 1, 0, 0, 4, 'Regular Season'),
(56, 'America', 'SanLuis', '2022-09-06 00:00:00', 'LigaMXAP22', 'local', 1, 3, 0, 89, 'Regular Season'),
(57, 'San Luis', 'Queretaro', '2024-08-18 00:00:00', 'LigaMXAP24', 'local', 1, 3, 0, 86, 'Regular Season'),
(58, 'San Luis', 'America', '2024-03-29 00:00:00', 'LigaMXCL24', 'visitante', 1, 0, 2, 95, 'Regular Season'),
(59, 'San Luis', 'Sarpsborg', '2019-07-15 00:00:00', 'Eliteserien', 'local', 1, 1, 2, 48, 'Regular Season'),
(60, 'San Luis', 'Kristiansund', '2019-06-23 00:00:00', 'Eliteserien', 'visitante', 1, 0, 0, 89, 'Regular Season'),
(61, 'San Luis', 'Bodo', '2019-04-28 00:00:00', 'Eliteserien', 'local', 1, 1, 0, 25, 'Regular Season'),
(62, 'San Luis', 'Stromsgodset', '2018-11-24 00:00:00', 'Eliteserien', 'local', 1, 0, 0, 17, 'Regular Season'),
(63, 'San Luis', 'Brann', '2018-10-21 00:00:00', 'Eliteserien', 'local', 1, 0, 0, 5, 'Regular Season'),
(64, 'San Luis', 'Lillestrom', '2018-09-30 00:00:00', 'Eliteserien', 'visitante', 1, 0, 1, 69, 'Regular Season'),
(65, 'San Luis', 'Ranheim', '2018-09-23 00:00:00', 'Eliteserien', 'local', 1, 0, 1, 38, 'Regular Season'),
(66, 'San Luis', 'Sandefjord', '2018-09-01 00:00:00', 'Eliteserien', 'local', 1, 2, 3, 89, 'Regular Season'),
(67, 'Cruz Azul', 'Queretaro', '2024-08-23 00:00:00', 'LigaMXAP24', 'visitante', 1, 0, 0, 45, 'Regular Season'),
(68, 'Cruz Azul', 'Monterrey', '2024-07-13 00:00:00', 'LigaMXAP24', 'visitante', 1, 1, 0, 28, 'Regular Season'),
(69, 'Cruz Azul', 'San Luis', '2024-02-10 00:00:00', 'LigaMXCL24', 'local', 1, 0, 0, 38, 'Regular Season'),
(70, 'puma', 'Atlas', '2024-08-24 00:00:00', 'LigaMXAP24', 'visitante', 1, 0, 0, 9, 'Regular Season'),
(71, 'puma', 'Pachuca', '2024-07-21 00:00:00', 'LigaMXAP24', 'Local', 1, 1, 0, 51, 'Regular Season'),
(72, 'puma', 'Tigres', '2023-12-10 00:00:00', 'LigaMXAP23', 'visitante', 1, 0, 0, 16, 'semifinal'),
(73, 'puma', 'Guadalajara', '2023-12-03 00:00:00', 'LigaMXAP23', 'Local', 1, 1, 0, 18, 'cuartos'),
(74, 'puma', 'Cruz Azlu', '2023-10-07 00:00:00', 'LigaMXAP23', 'visitante', 1, 0, 0, 30, 'Regular Season'),
(75, 'puma', 'Puebla', '2023-09-22 00:00:00', 'LigaMXAP23', 'visitante', 1, 1, 0, 67, 'Regular Season'),
(76, 'puma', 'Puebla', '2023-09-22 00:00:00', 'LigaMXAP23', 'visitante', 1, 0, 0, 8, 'Regular Season'),
(77, 'Tijuana', 'Monterrey', '2024-08-23 00:00:00', 'LigaMXAP24', 'local', 1, 0, 1, 35, 'Regular Season'),
(78, 'Tijuana', 'Guadalajara', '2024-07-12 00:00:00', 'LigaMXAP24', 'local', 0, 2, 1, 86, 'Regular Season'),
(79, 'Tijuana', 'Santos', '2024-03-15 00:00:00', 'LigaMXCL24', 'local', 1, 1, 1, 70, 'Regular Season'),
(80, 'Tijuana', 'Pumas', '2024-03-10 00:00:00', 'LigaMXCL24', 'visitante', 1, 2, 3, 76, 'Regular Season'),
(81, 'Tijuana', 'Pumas', '2024-03-10 00:00:00', 'LigaMXCL24', 'visitante', 1, 1, 3, 53, 'Regular Season'),
(82, 'Tijuana', 'Pumas', '2024-03-10 00:00:00', 'LigaMXCL24', 'visitante', 1, 0, 2, 29, 'Regular Season'),
(83, 'Tijuana', 'Santos', '2024-03-03 00:00:00', 'LigaMXCL24', 'local', 1, 0, 1, 99, 'Regular Season'),
(84, 'Tijuana', 'Pachuca', '2024-02-03 00:00:00', 'LigaMXCL24', 'visitante', 1, 0, 2, 33, 'Regular Season'),
(85, 'Atlas', 'Santos', '2024-02-04 00:00:00', 'LigaMXCL24', 'Local', 1, 1, 0, 46, 'Regular Season'),
(86, 'Atlas', 'Tigres', '2022-05-21 00:00:00', 'LigaMXCL22', 'visitante', 1, 1, 4, 99, 'semifinal'),
(87, 'Atlas', 'Leon', '2021-12-12 00:00:00', 'LigaMXAP21', 'local', 0, 1, 1, 90, 'final'),
(88, 'Atlas', 'Chivas', '2021-10-02 00:00:00', 'LigaMXAP21', 'Visitante', 1, 0, 0, 27, 'Regular Season'),
(89, 'Atlas', 'Puebla', '2021-09-28 00:00:00', 'LigaMXAP21', 'local', 0, 0, 1, 54, 'Regular Season'),
(90, 'Atlas', 'Necaxa', '2021-04-30 00:00:00', 'LigaMXCL21', 'Visitante', 1, 3, 1, 88, 'Regular Season'),
(91, 'Atlas', 'Juarez', '2020-10-16 00:00:00', 'LigaMXAP20', 'Local', 1, 1, 0, 9, 'Regular Season'),
(92, 'Atlas', 'Queretaro', '2020-03-13 00:00:00', 'LigaMXCL20', 'local', 1, 1, 0, 52, 'Regular Season'),
(93, 'Atlas', 'Queretaro', '2020-03-13 00:00:00', 'LigaMXCL20', 'local', 1, 0, 0, 44, 'Regular Season'),
(94, 'Atlas', 'Cruz Azul', '2020-02-28 00:00:00', 'LigaMXCL20', 'local', 1, 1, 3, 84, 'Regular Season'),
(95, 'Guadalajara', 'Leon', '2024-09-18 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 0, 50, 'Regular Season'),
(96, 'Guadalajara', 'Juarez', '2024-08-31 00:00:00', 'LigaMXAP24', 'Local', 1, 2, 0, 44, 'Regular Season'),
(97, 'Guadalajara', 'Leon', '2024-03-09 00:00:00', 'LigaMXCL24', 'Local', 1, 0, 2, 95, 'Regular Season'),
(98, 'Guadalajara', 'Queretaro', '2023-10-31 00:00:00', 'LigaMXAP23', 'Visitante', 1, 1, 0, 34, 'Regular Season'),
(99, 'Guadalajara', 'Puebla', '2023-10-20 00:00:00', 'LigaMXAP23', 'Visitante', 1, 0, 0, 25, 'Regular Season'),
(100, 'Guadalajara', 'Atlas', '2023-10-07 00:00:00', 'LigaMXAP23', 'Local', 1, 3, 1, 93, 'Regular Season'),
(101, 'Guadalajara', 'Santos', '2023-08-26 00:00:00', 'LigaMXAP23', 'Visitante', 1, 0, 2, 84, 'Regular Season'),
(102, 'Necaxa', 'Tijuana', '2024-10-18 00:00:00', 'LigaMXCL24', 'Local', 1, 0, 1, 34, 'Regular Season'),
(103, 'Necaxa', 'Santos', '2024-09-01 00:00:00', 'LigaMXAP24', 'Visitante', 1, 0, 0, 34, 'Regular Season'),
(104, 'Necaxa', 'Juarez', '2024-08-24 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 0, 31, 'Regular Season'),
(105, 'Necaxa', 'Queretaro', '2024-05-02 00:00:00', 'LigaMXAP24', 'Visitante', 1, 2, 3, 99, 'final'),
(106, 'Necaxa', 'Tijuana', '2024-04-05 00:00:00', 'LigaMXAP24', 'Visitante', 1, 1, 2, 85, 'Regular Season'),
(107, 'Leon', 'Necaxa', '2024-07-21 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 1, 63, 'Regular Season'),
(108, 'Leon', 'Portimonense', '2024-04-21 00:00:00', 'LigaPortugal', 'Local', 1, 0, 1, 55, 'Regular Season'),
(109, 'Leon', 'Gil Vicente', '2024-03-29 00:00:00', 'LigaPortugal', 'Visitante', 1, 0, 0, 49, 'Regular Season'),
(110, 'Leon', 'Braga', '2024-01-18 00:00:00', 'LigaPortugal', 'Local', 1, 0, 0, 62, 'Regular Season'),
(111, 'Leon', 'Boavista', '2023-09-30 00:00:00', 'LigaPortugal', 'Visitante', 1, 0, 0, 12, 'Regular Season'),
(112, 'Leon', 'Benfica', '2019-04-14 00:00:00', 'LigaPortugal', 'Visitante', 1, 1, 4, 88, 'Regular Season'),
(113, 'Leon', 'Vitoria', '2019-02-23 00:00:00', 'LigaPortugal', 'Local', 1, 0, 1, 80, 'Regular Season'),
(114, 'Puebla', 'Leon', '2024-07-16 00:00:00', 'LigaMXAP24', 'Local', 1, 1, 2, 91, 'Regular Season'),
(115, 'Puebla', 'Santos', '2024-07-05 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 0, 96, 'Regular Season'),
(116, 'Puebla', 'Necaxa', '2024-01-19 00:00:00', 'LigaMXCL24', 'Local', 1, 0, 0, 59, 'Regular Season'),
(117, 'Puebla', 'Vancouver', '2022-05-28 00:00:00', 'MLS', 'Visitante', 1, 0, 0, 24, 'Regular Season'),
(118, 'Puebla', 'Dallas', '2022-05-18 00:00:00', 'MLS', 'Local', 1, 1, 1, 92, 'Regular Season'),
(119, 'Puebla', 'LA Galaxy', '2020-03-07 00:00:00', 'MLS', 'visitante', 1, 1, 0, 89, 'Regular Season'),
(120, 'Puebla', 'Cruz Azl', '2019-08-24 00:00:00', 'LigaMXAP19', 'visitante', 1, 1, 1, 88, 'Regular Season'),
(121, 'Puebla', 'Veracruz', '2019-01-25 00:00:00', 'LigaMXCL19', 'visitante', 1, 0, 0, 20, 'Regular Season'),
(122, 'Puebla', 'Cruz Azl', '2019-01-04 00:00:00', 'LigaMXCL19', 'Local', 1, 0, 1, 29, 'Regular Season'),
(123, 'Juarez', 'Atlas', '2024-07-05 00:00:00', 'LigaMXAP24', 'Local', 0, 1, 1, 72, 'Regular Season'),
(124, 'Juarez', 'Monterrey', '2023-10-07 00:00:00', 'LigaMXAP23', 'Visitante', 1, 0, 3, 52, 'Regular Season'),
(125, 'Juarez', 'Atlas', '2023-09-22 00:00:00', 'LigaMXAP23', 'Local', 1, 0, 2, 69, 'Regular Season'),
(126, 'Juarez', 'Pumas', '2023-08-22 00:00:00', 'LigaMXAP23', 'Local', 0, 3, 1, 81, 'Regular Season'),
(127, 'Juarez', 'Chivas', '2023-08-18 00:00:00', 'LigaMXAP23', 'Local', 0, 0, 1, 84, 'Regular Season'),
(128, 'Juarez', 'Monterrey', '2022-10-23 00:00:00', 'LigaMXAP22', 'Visitante', 0, 0, 0, 95, 'semifinal'),
(129, 'Juarez', 'Tigres', '2017-12-10 00:00:00', 'LigaMXAP17', 'Local', 1, 1, 2, 82, 'final'),
(130, 'Pachuca', 'Queretaro', '2024-08-31 00:00:00', 'LigaMXAP24', 'Local', 1, 0, 1, 55, 'Regular Season'),
(131, 'Pachuca', 'Burgos', '2024-02-17 00:00:00', 'LaLiga2', 'Local', 0, 4, 0, 89, 'Regular Season'),
(132, 'Pachuca', 'Eldense', '2024-02-04 00:00:00', 'LaLiga2', 'Local', 1, 0, 1, 71, 'Regular Season'),
(133, 'Pachuca', 'Sporting', '2022-12-17 00:00:00', 'LaLiga2', 'Local', 1, 0, 0, 74, 'Regular Season'),
(134, 'Pachuca', 'Ponferradina', '2022-11-19 00:00:00', 'LaLiga2', 'Visitante', 1, 1, 1, 98, 'Regular Season'),
(135, 'Pachuca', 'Malaga', '2022-10-24 00:00:00', 'LaLiga2', 'Local', 1, 0, 0, 50, 'Regular Season'),
(136, 'Pachuca', 'Racing de Santander', '2022-08-28 00:00:00', 'LaLiga2', 'Visitante', 1, 0, 0, 53, 'Regular Season'),
(137, 'Pachuca', 'Leganes', '2022-08-21 00:00:00', 'LaLiga2', 'Local', 1, 0, 0, 80, 'Regular Season'),
(138, 'Pachuca', 'UD Ibiza', '2022-05-29 00:00:00', 'LaLiga2', 'Local', 1, 2, 2, 95, 'Regular Season'),
(139, 'Pachuca', 'Real Zaragoza', '2022-05-16 00:00:00', 'LaLiga2', 'Local', 1, 0, 0, 14, 'Regular Season'),
(140, 'Pachuca', 'Real Zaragoza', '2022-05-16 00:00:00', 'LaLiga2', 'local', 1, 3, 3, 71, 'Regular Season'),
(141, 'Pachuca', 'Mirandes', '2022-04-30 00:00:00', 'LaLiga2', 'Local', 1, 1, 0, 57, 'Regular Season'),
(142, 'Pachuca', 'Lugo', '2022-03-19 00:00:00', 'LaLiga2', 'Visitante', 1, 0, 1, 92, 'Regular Season'),
(143, 'Pachuca', 'Real Sociedad B', '2022-02-26 00:00:00', 'LaLiga2', 'Local', 1, 0, 1, 91, 'Regular Season'),
(144, 'Pachuca', 'Burgos', '2022-02-20 00:00:00', 'LaLiga2', 'Visitante', 1, 0, 0, 60, 'Regular Season'),
(145, 'Pachuca', 'Real Valladolid', '2021-12-12 00:00:00', 'LaLiga2', 'Visitante', 1, 1, 2, 59, 'Regular Season'),
(146, 'Pachuca', 'Las Palmas', '2021-11-06 00:00:00', 'LaLiga2', 'Local', 1, 0, 0, 21, 'Regular Season'),
(147, 'Pachuca', 'Burgos', '2021-10-21 00:00:00', 'LaLiga2', 'Local', 1, 0, 1, 57, 'Regular Season'),
(148, 'Pachuca', 'Cartagena', '2021-09-12 00:00:00', 'LaLiga2', 'Local', 1, 0, 0, 48, 'Regular Season'),
(149, 'Pachuca', 'Sporting', '2020-12-21 00:00:00', 'LaLiga2', 'Visitante', 1, 0, 1, 96, 'Regular Season'),
(150, 'Pachuca', 'Logroñes', '2020-10-17 00:00:00', 'LaLiga2', 'Visitante', 1, 0, 0, 31, 'Regular Season'),
(151, 'Pachuca', 'Birmingham', '2019-08-25 00:00:00', 'Championship', 'Local', 1, 2, 0, 75, 'Regular Season'),
(152, 'Pachuca', 'Birmingham', '2019-08-21 00:00:00', 'Championship', 'Visitante', 1, 1, 1, 70, 'Regular Season'),
(153, 'Pachuca', 'Real Sociedad', '2017-12-10 00:00:00', 'LaLiga', 'Visitante', 1, 1, 0, 58, 'Regular Season'),
(154, 'Pachuca', 'Sporting', '2014-02-16 00:00:00', 'LaLiga2', 'Local', 1, 0, 1, 30, 'Regular Season'),
(155, 'Queretaro', 'Necaxa', '2024-05-02 00:00:00', 'LigaMXCL24', 'Visitante', 0, 1, 0, 75, 'Regular Season'),
(156, 'Queretaro', 'Leon', '2024-04-06 00:00:00', 'LigaMXCL24', 'Visitante', 1, 1, 0, 75, 'Regular Season'),
(157, 'Queretaro', 'Atlas', '2024-03-31 00:00:00', 'LigaMXCL24', 'Visitante', 1, 1, 2, 70, 'Regular Season'),
(158, 'Queretaro', 'San Luis', '2024-02-27 00:00:00', 'LigaMXCL24', 'Local', 1, 2, 0, 48, 'Regular Season'),
(159, 'Queretaro', 'Chivas', '2023-10-31 00:00:00', 'LigaMXAP23', 'Local', 1, 0, 2, 55, 'Regular Season'),
(160, 'Queretaro', 'Juarez', '2023-03-19 00:00:00', 'LigaMXCL23', 'Local', 1, 1, 2, 87, 'Regular Season'),
(161, 'Queretaro', 'Atlas', '2023-01-22 00:00:00', 'LigaMXCL23', 'local', 1, 0, 0, 21, 'Regular Season'),
(162, 'Queretaro', 'Toluca', '2020-02-15 00:00:00', 'LigaMXCL20', 'Visitante', 1, 0, 1, 34, 'Regular Season'),
(163, 'Queretaro', 'Necaxa', '2019-07-28 00:00:00', 'LigaMXAP19', 'Local', 0, 1, 0, 71, 'Regular Season'),
(164, 'Queretaro', 'Cruz Azul', '2019-04-20 00:00:00', 'LigaMXCL19', 'Visitante', 1, 0, 2, 64, 'Regular Season'),
(165, 'Santos', 'Puebla', '2024-01-30 00:00:00', 'LigaMXCL24', 'Local', 1, 0, 0, 65, 'Regular Season'),
(166, 'Santos', 'Leon', '2024-01-27 00:00:00', 'LigaMXCL24', 'Visitante', 1, 0, 0, 43, 'Regular Season'),
(167, 'Santos', 'Chivas', '2024-01-13 00:00:00', 'LigaMXCL24', 'Visitante', 0, 1, 1, 94, 'Regular Season'),
(168, 'Santos', 'Monterrey', '2023-04-16 00:00:00', 'LigaMXCL23', 'Visitante', 1, 1, 1, 94, 'Regular Season'),
(169, 'Santos', 'Pumas', '2023-01-14 00:00:00', 'LigaMXCL23', 'Local', 1, 2, 0, 87, 'Regular Season');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `nombre`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'vicente@gmail.com', 'vicente', '$2b$10$bu1Uj10ZKWnP8uyjAJsy1Ox/5gSzHhJMGuBHwDSnGq9Trx4DzkFAG', '2024-11-21 06:47:52', '2024-11-24 07:19:59');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`idEquipo`);

--
-- Indices de la tabla `goles`
--
ALTER TABLE `goles`
  ADD PRIMARY KEY (`idGol`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`idJugador`);

--
-- Indices de la tabla `partidos`
--
ALTER TABLE `partidos`
  ADD PRIMARY KEY (`idPartido`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `idEquipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `goles`
--
ALTER TABLE `goles`
  MODIFY `idGol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `idJugador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `partidos`
--
ALTER TABLE `partidos`
  MODIFY `idPartido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
