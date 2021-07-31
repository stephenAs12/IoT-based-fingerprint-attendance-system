-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2021 at 02:31 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `faswu`
--

-- --------------------------------------------------------

--
-- Table structure for table `dean`
--

CREATE TABLE `dean` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(8) NOT NULL,
  `college` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dean`
--

INSERT INTO `dean` (`id`, `first_name`, `middle_name`, `last_name`, `sex`, `email`, `phone_number`, `college`, `password`, `role`) VALUES
(6, 'sewmehon', 'yghjskdk', 'sidaughk', 'Male', 'sew@gmail.com', '64564667', 'Medicine and Health Sciences', '74eef7673effd9eba74bb0c194b17c3c', 'dean'),
(13, 'Nuh', 'Asrar', 'Ali', 'Male', 'dean@gmail.com', '42645674', 'Computing and Informatics', '4d862b6a4ae7ce0a2d07601141534367', 'dean');

-- --------------------------------------------------------

--
-- Table structure for table `head`
--

CREATE TABLE `head` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(8) NOT NULL,
  `college` varchar(50) NOT NULL,
  `department` varchar(50) DEFAULT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `head`
--

INSERT INTO `head` (`id`, `first_name`, `middle_name`, `last_name`, `sex`, `email`, `phone_number`, `college`, `department`, `password`, `role`) VALUES
(10, 'Esayas', 'Totoba', 'sdfasd', 'Male', 'head@gmail.com', '34563456', 'Computing and Informatics', 'Software Engineering', 'cb30f7bb1b939ac5670b10a472a2ea0f', 'head'),
(12, 'Wendu', 'dfasdhjkhl', 'hsjdfsj', 'Male', 'wendu@gmail.com', '32341235', 'Medicine and Health Sciences', 'Computer Science', '269c8e9d6eb3d209d586fbf53884ba16', 'head');

-- --------------------------------------------------------

--
-- Table structure for table `registrar`
--

CREATE TABLE `registrar` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(8) NOT NULL,
  `college` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'registrar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registrar`
--

INSERT INTO `registrar` (`id`, `first_name`, `middle_name`, `last_name`, `sex`, `email`, `phone_number`, `college`, `password`, `role`) VALUES
(57, 'Estifanos', 'Aschale', 'Kassa', 'Male', 'registrar@gmail.com', '25634565', 'Computing and Informatics', 'db405506f199a0d2ecb3ca48bf426293', 'registrar'),
(58, 'Wendu', 'Gizachew', 'sdafd', 'Male', 'eng@gmail.com', '23452326', 'Engineering and Technology', '455b1075818334c5329a03b85d1ba370', 'registrar'),
(59, 'anbesaw', 'fsdaf', 'asdf', 'Male', 'an@gmail.com', '87687567', 'Medicine and Health Sciences', '81cef86139caf8428312c6984bc29522', 'registrar'),
(60, 'Bonsa', 'Fkadu', 'Getasew', 'Male', 'boni@gmail.com', '52465472', 'Natural and Computational Sciences', '550be1dbfe213d178f401521807dda66', 'registrar'),
(74, 'aaaaa', 'aaaaa', 'aaaaa', 'Male', 'daaaa@gmail.com', '46546354', 'Business and Economics', 'acf505dae63912af97f2adfef656c663', 'registrar');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `school_id` varchar(10) NOT NULL,
  `fingerprint_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone_number` varchar(8) DEFAULT NULL,
  `college` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `batch` int(11) NOT NULL,
  `course` varchar(500) NOT NULL,
  `role` varchar(50) NOT NULL,
  `registration_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `school_id`, `fingerprint_id`, `first_name`, `middle_name`, `last_name`, `sex`, `email`, `phone_number`, `college`, `department`, `batch`, `course`, `role`, `registration_date`) VALUES
(27, 'CIR/322/10', 1, 'Estifanos', 'Aschale', 'Kassa', 'Male', 'b@gmail.com', '46543573', 'Computing and Informatics', 'Software Engineering', 2, 'C++,Web Design,Java', 'student', '2021-07-31');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(50) NOT NULL,
  `college` varchar(50) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `middle_name`, `email`, `password`, `role`, `college`, `department`) VALUES
(3, 'Aschale', 'Aschale', 'admin@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 'admin', NULL, NULL),
(16, 'Estifanos', 'Aschale', 'registrar@gmail.com', 'db405506f199a0d2ecb3ca48bf426293', 'registrar', 'Computing and Informatics', NULL),
(30, 'Esayas', 'Totoba', 'head@gmail.com', 'cb30f7bb1b939ac5670b10a472a2ea0f', 'head', 'Computing and Informatics', 'Software Engineering'),
(31, 'Wendu', 'Gizachew', 'eng@gmail.com', '455b1075818334c5329a03b85d1ba370', 'registrar', 'Engineering and Technology', NULL),
(55, 'eeeeeeeeee', 'eeee', 'b@gmail.com', 'acf505dae63912af97f2adfef656c663', 'registrar', 'Social Science and Humanities', NULL),
(56, 'Nuh', 'Asrar', 'dean@gmail.com', '4d862b6a4ae7ce0a2d07601141534367', 'dean', 'Computing and Informatics', NULL),
(57, 'aaaaa', 'aaaaa', 'daaaa@gmail.com', 'acf505dae63912af97f2adfef656c663', 'registrar', 'Business and Economics', NULL),
(58, 'aaaaa', 'aaaaa', 'daaaa@gmail.com', 'acf505dae63912af97f2adfef656c663', 'registrar', 'Business and Economics', NULL),
(59, 'aaaaa', 'aaaaa', 'daaaa@gmail.com', 'acf505dae63912af97f2adfef656c663', 'registrar', 'Business and Economics', NULL),
(60, 'Estifanos', 'Aschale', 'daaaa@gmail.com', 'acf505dae63912af97f2adfef656c663', 'registrar', 'Agriculture Science', NULL),
(61, 'Estifanos', 'Aschale', 'daaaa@gmail.com', 'acf505dae63912af97f2adfef656c663', 'registrar', 'Agriculture Science', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dean`
--
ALTER TABLE `dean`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `college` (`college`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Indexes for table `head`
--
ALTER TABLE `head`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD UNIQUE KEY `department` (`department`);

--
-- Indexes for table `registrar`
--
ALTER TABLE `registrar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD UNIQUE KEY `college` (`college`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `school_id` (`school_id`),
  ADD UNIQUE KEY `fingerprint_id` (`fingerprint_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dean`
--
ALTER TABLE `dean`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `head`
--
ALTER TABLE `head`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `registrar`
--
ALTER TABLE `registrar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
