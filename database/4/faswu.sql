-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2021 at 08:50 PM
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
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `school_id` varchar(10) DEFAULT NULL,
  `fingerprint_id` int(11) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `college` varchar(50) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `course` varchar(50) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `arrive_time` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'Absent',
  `full_time_info` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `school_id`, `fingerprint_id`, `first_name`, `middle_name`, `last_name`, `college`, `department`, `batch`, `course`, `date`, `arrive_time`, `role`, `status`, `full_time_info`) VALUES
(21, 'CIR/322/10', 1, 'Estifanos', 'Aschale', 'Kassa', 'Computing and Informatics', 'Software Engineering', 4, 'C++', 'Fri', '14:37:46', 'student', NULL, '2021-08-20 14:37:46.006'),
(22, 'CIR/302/10', 2, 'Nuh', 'Asrar', 'Ali', 'Computing and Informatics', 'Software Engineering', 4, 'C++', 'Fri', '15:29:08', 'student', NULL, '2021-08-20 15:29:08.527'),
(23, NULL, 55, 'Honey', 'Asrat', 'Ododo', 'Engineering and Technology', 'Civil Engineering', 4, 'Mechanics', 'fri', '14:37:46', 'teacher', 'Absent', '2021-08-20 14:37:46.006'),
(24, NULL, 45, 'Beshada', 'Kassa', 'Ododo', 'Engineering and Technology', 'Mechanical Engineering', 5, 'Manufacturing and Design', 'Fri', '15:29:08', 'teacher', 'Absent', '2021-08-20 15:29:08.527'),
(25, 'CIR/522/10', 29, 'Lema', 'Molla', 'Kebede', 'Engineering and Technology', 'Civil Engineering', 6, 'Mechanics', 'Thr', '14:37:46', 'student', 'Absent', '2021-08-20 15:29:08.527'),
(26, 'CIR/422/10', 44, 'Waqoya', 'Aschale', 'Ododo', 'Engineering and Technology', 'Mechanical Engineering', 7, 'Manufacturing and Design', 'mon', '14:37:46', 'student', 'Absent', '2021-08-20 15:29:08.527');

-- --------------------------------------------------------

--
-- Table structure for table `authorize`
--

CREATE TABLE `authorize` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(50) DEFAULT NULL,
  `status` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authorize`
--

INSERT INTO `authorize` (`id`, `email`, `password`, `role`, `status`) VALUES
(1, 'soft@gmail.com', 'd00bc4f97ebafc301d164dc409104a6f', 'head', 'yes');

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
(16, 'Adugna', 'Teshale', 'Molla', 'Male', 'adu@gmail.com', '12123454', 'Computing and Informatics', 'ccf7e9198813d76a7e19cf4f71a61c20', 'dean'),
(20, 'Desalegn', 'Dana', 'Waqo', 'Male', 'desu@gmail.com', '12345665', 'Engineering and Technology', '564524c1328a5fd399f6e06b93f99fb4', 'dean');

-- --------------------------------------------------------

--
-- Table structure for table `head`
--

CREATE TABLE `head` (
  `id` int(11) NOT NULL,
  `uuid` varchar(250) DEFAULT NULL,
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

INSERT INTO `head` (`id`, `uuid`, `first_name`, `middle_name`, `last_name`, `sex`, `email`, `phone_number`, `college`, `department`, `password`, `role`) VALUES
(17, NULL, 'Anbesaw', 'Simachew', 'Kassa', 'Male', 'civil@gmail.com', '12123456', 'Engineering and Technology', 'Civil Engineering', '06275cefcc5f587ccd10961b5eafb51c', 'head'),
(18, NULL, 'Bonsa', 'Dodofa', 'Asefa', 'Male', 'boni@gmail.com', '90875676', 'Engineering and Technology', 'Chemical Engineering', '550be1dbfe213d178f401521807dda66', 'head'),
(20, '2f21108e-8ec5-4c77-82ba-90920a78af9c', 'Nuh', 'Aschale', 'Kassa', 'Male', 'soft@gmail.com', '12312343', 'Computing and Informatics', 'Software Engineering', 'd00bc4f97ebafc301d164dc409104a6f', 'head');

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
(94, 'Nuh', 'Asrar', 'Ali', 'Male', 'cci@gmail.com', '12345674', 'Computing and Informatics', '9b129015348da8ff8b84ae011a046c96', 'registrar'),
(95, 'Estifanos', 'Asrar', 'Ali', 'Male', 'eng@gmail.com', '12341230', 'Engineering and Technology', '455b1075818334c5329a03b85d1ba370', 'registrar'),
(96, 'Esayas', 'Totoba', 'Kassa', 'Male', 'med@gmail.com', '11112217', 'Medicine and Health Sciences', '85198ba9a9f96a085f03901295271329', 'registrar'),
(97, 'Rahiel', 'Teshale', 'Molla', 'Female', 'ncs@gmail.com', '99998884', 'Natural and Computational Sciences', 'ba41d10c85beecea7babe77a7e466710', 'registrar'),
(98, 'Tsedeniya', 'Aschale', 'Kassa', 'Female', 'ssh@gmail.com', '22223329', 'Social Science and Humanities', '5c7424013dd2901473732c18cea235cc', 'registrar'),
(99, 'Mulu', 'Shumet', 'Tegegne', 'Female', 'bae@gmail.com', '77778884', 'Business and Economics', '6730e0fda755d47aaf488212cfe74699', 'registrar'),
(100, 'Aschale', 'Kassa', 'Ngussie', 'Male', 'ags@gmail.com', '12123434', 'Agriculture Science', '78817757b357ea13248e3854daea81bb', 'registrar');

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
(36, 'CIR/322/10', 1, 'Estifanos', 'Aschale', 'Kassa', 'Male', 'b@gmail.com', '11112346', 'Computing and Informatics', 'Software Engineering', 4, 'Research,Entrepreneur,Java,Web Service', 'student', '2021-08-20'),
(38, 'CIR/320/10', 3, 'Esayas', 'Totoba', 'Kassa', 'Male', 'head@gmail.com', '56898745', 'Computing and Informatics', 'Software Engineering', 4, 'C++,Mobile Programming', 'student', '2021-08-20'),
(39, 'CIR/122/10', 5, 'Tsiwonawot', 'Taye', 'Denda', 'Female', 'tsi@gmail.com', '12312343', 'Engineering and Technology', 'Civil Engineering', 5, 'Hydraulics,Solid Mechanics', 'student', '2021-08-22');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `uuid` varchar(250) DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `fingerprint_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(8) NOT NULL,
  `password` varchar(250) NOT NULL,
  `college` varchar(50) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  `batch` int(11) NOT NULL,
  `course` varchar(500) DEFAULT NULL,
  `date` varchar(50) NOT NULL,
  `time_from` varchar(50) NOT NULL,
  `time_to` varchar(50) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  `registration_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `uuid`, `first_name`, `middle_name`, `last_name`, `sex`, `fingerprint_id`, `email`, `phone_number`, `password`, `college`, `department`, `batch`, `course`, `date`, `time_from`, `time_to`, `role`, `registration_date`) VALUES
(18, NULL, 'Eyosi', 'Tesfaw', 'Kassa', 'Male', 6, 'b@gmail.com', '23542346', '285d6568a6078b726ec4d49b213ab07c', 'Computing and Informatics', 'Software Engineering', 2, 'Java', 'Wed', '03:30:00', '05:30:00', 'teacher', '2021-08-23'),
(19, NULL, 'Friew', 'Aschale', 'Kassa', 'Male', 8, 'bb@gmail.com', '35423646', '285d6568a6078b726ec4d49b213ab07c', 'Computing and Informatics', 'Software Engineering', 3, 'Mobile Programming', 'Tue', '02:30:00', '05:30:00', 'teacher', '2021-08-23'),
(20, NULL, 'Abebayehu', 'Alaro', 'Minamo', 'Male', 8, 'alaro@gmail.com', '12323451', 'ad4657736027823878b6b6603353bb11', 'Computing and Informatics', 'Software Engineering', 3, 'Research', 'Fri', '08:30:00', '11:30:00', 'teacher', '2021-08-23'),
(29, '6e2f1f95-09cb-4c6a-b4d7-a70a072eaac3', 'Ephrem', 'Tesfaye', 'Mamo', 'Male', 10, 'sfs@gmail.com', '12222343', 'e5774460c5888f31d661b43bd8d4827a', 'Computing and Informatics', 'Software Engineering', 3, 'Introduction to Software Engineering', 'Thu', '04:30:00', '06:30:00', 'teacher', '2021-08-23'),
(30, 'ecc5fd0c-cefe-4f70-938a-ce0ff2510e37', 'Eqqqqqqqqqqqphrem', 'Tesfaye', 'Mamo', 'Male', 10, 'sferts@gmail.com', '12222343', 'e5774460c5888f31d661b43bd8d4827a', 'Computing and Informatics', 'Software Engineering', 2, 'Web Service', 'Thu', '04:30:00', '06:30:00', 'teacher', '2021-08-23'),
(31, '89e9e27a-c7b3-4a93-b073-82a45200972b', 'Ibssa', 'Mohammed', 'Nur', 'Male', 45, 'hyd@gmail.com', '12344434', '79820a8576bff7c0f37bc8de64d1b0f7', 'Engineering and Technology', 'Civil Engineering', 6, 'Surveying ', 'Thu', '03:30:00', '05:30:00', 'teacher', '2021-08-23'),
(32, '929413a7-9515-401a-a969-e2a0efd5a3e1', 'Joseph', 'Mohammed', 'Nur', 'Male', 45, 'mech@gmail.com', '12344434', 'd31b41b9cd68b230f081b81b3cd6b20b', 'Engineering and Technology', 'Civil Engineering', 2, 'Mechanics', 'Tue', '02:30:00', '06:30:00', 'teacher', '2021-08-23');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uuid` varchar(250) DEFAULT NULL,
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

INSERT INTO `user` (`id`, `uuid`, `first_name`, `middle_name`, `email`, `password`, `role`, `college`, `department`) VALUES
(3, NULL, 'Estifanos', 'Asrar', 'admin@gmail.com', '65b8ecad75f146cffbe8b6d358730f35', 'admin', NULL, NULL),
(74, NULL, 'Nuh', 'Asrar', 'cci@gmail.com', '9b129015348da8ff8b84ae011a046c96', 'registrar', 'Computing and Informatics', NULL),
(75, NULL, 'Estifanos', 'Asrar', 'eng@gmail.com', '455b1075818334c5329a03b85d1ba370', 'registrar', 'Engineering and Technology', NULL),
(76, NULL, 'Esayas', 'Totoba', 'med@gmail.com', '85198ba9a9f96a085f03901295271329', 'registrar', 'Medicine and Health Sciences', NULL),
(77, NULL, 'Rahiel', 'Teshale', 'ncs@gmail.com', 'ba41d10c85beecea7babe77a7e466710', 'registrar', 'Natural and Computational Sciences', NULL),
(78, NULL, 'Tsedeniya', 'Aschale', 'ssh@gmail.com', '5c7424013dd2901473732c18cea235cc', 'registrar', 'Social Science and Humanities', NULL),
(79, NULL, 'Mulu', 'Shumet', 'bae@gmail.com', '6730e0fda755d47aaf488212cfe74699', 'registrar', 'Business and Economics', NULL),
(80, NULL, 'Aschale', 'Kassa', 'ags@gmail.com', '78817757b357ea13248e3854daea81bb', 'registrar', 'Agriculture Science', NULL),
(82, NULL, 'Fentahun', 'Shumet', 'fent@gmail.com', 'a0aadd714bdc401b6986d84b855b68ab', 'registrar', 'Engineering and Technology', NULL),
(96, NULL, 'Anbesaw', 'Simachew', 'civil@gmail.com', '06275cefcc5f587ccd10961b5eafb51c', 'head', 'Engineering and Technology', 'Civil Engineering'),
(98, NULL, 'Adugna', 'Teshale', 'adu@gmail.com', 'ccf7e9198813d76a7e19cf4f71a61c20', 'dean', 'Computing and Informatics', NULL),
(102, NULL, 'Desalegn', 'Dana', 'desu@gmail.com', '564524c1328a5fd399f6e06b93f99fb4', 'dean', 'Engineering and Technology', NULL),
(103, NULL, 'Bonsa', 'Dodofa', 'boni@gmail.com', '550be1dbfe213d178f401521807dda66', 'head', 'Engineering and Technology', 'Chemical Engineering'),
(105, '2f21108e-8ec5-4c77-82ba-90920a78af9c', 'Nuh', 'Aschale', 'soft@gmail.com', 'd00bc4f97ebafc301d164dc409104a6f', 'head', 'Computing and Informatics', 'Software Engineering'),
(108, '6e2f1f95-09cb-4c6a-b4d7-a70a072eaac3', 'Ephrem', 'Tesfaye', 'sfs@gmail.com', 'e5774460c5888f31d661b43bd8d4827a', 'teacher', 'Computing and Informatics', 'Software Engineering'),
(109, 'ecc5fd0c-cefe-4f70-938a-ce0ff2510e37', 'Eqqqqqqqqqqqphrem', 'Tesfaye', 'sferts@gmail.com', 'e5774460c5888f31d661b43bd8d4827a', 'teacher', 'Computing and Informatics', 'Software Engineering'),
(110, '89e9e27a-c7b3-4a93-b073-82a45200972b', 'Ibssa', 'Mohammed', 'hyd@gmail.com', '79820a8576bff7c0f37bc8de64d1b0f7', 'teacher', 'Engineering and Technology', 'Civil Engineering'),
(111, '929413a7-9515-401a-a969-e2a0efd5a3e1', 'Joseph', 'Mohammed', 'mech@gmail.com', 'd31b41b9cd68b230f081b81b3cd6b20b', 'teacher', 'Engineering and Technology', 'Civil Engineering');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authorize`
--
ALTER TABLE `authorize`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `authorize`
--
ALTER TABLE `authorize`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dean`
--
ALTER TABLE `dean`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `head`
--
ALTER TABLE `head`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `registrar`
--
ALTER TABLE `registrar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
