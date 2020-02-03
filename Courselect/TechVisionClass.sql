-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 03, 2020 at 03:23 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TechVisionClass`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(5) NOT NULL,
  `studentid` int(5) DEFAULT NULL,
  `teacherid` int(5) DEFAULT NULL,
  `courseid` int(5) DEFAULT NULL,
  `class_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `studentid`, `teacherid`, `courseid`, `class_time`) VALUES
(1, 3, 4, 2, '2019-09-15'),
(2, 7, 5, 3, '2019-09-15'),
(3, 2, 3, 6, '2019-09-15');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `courseid` int(5) NOT NULL,
  `name` tinytext NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`courseid`, `name`, `description`) VALUES
(1, 'MERN', 'MERN course is combination of learning 4 things: <br> <ol><li>Mongo</li><li>Express</li><li>ReactJS</li><li>Node.js</li></ol>'),
(2, 'MEAN', 'MEAN course is combination of learning 4 things: <br> <ol><li>Mongo</li><li>Express</li><li>Angular 5+ </li><li>Node.js</li></ol>'),
(3, 'Angular 5+', 'Angular oriented course to learn Anuglar framework which version is equivalent 5 or higher'),
(4, '.NET', '.NET course from Microsoft Technologies'),
(5, 'JAVA', 'JAVA course of Oracle Java, version 8+'),
(6, 'Web Design', ' course of Oracle Java, version 8+');

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `regid` int(5) NOT NULL,
  `license` tinytext NOT NULL,
  `dob` date NOT NULL,
  `photo` longblob NOT NULL,
  `documents` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `enrollment`
--

CREATE TABLE `enrollment` (
  `reg_no` int(5) NOT NULL,
  `courseid` int(5) DEFAULT NULL,
  `studentid` int(5) DEFAULT NULL,
  `description` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enrollment`
--

INSERT INTO `enrollment` (`reg_no`, `courseid`, `studentid`, `description`) VALUES
(1, 1, 1, 'Vinay joined for MERN Course'),
(2, 3, 2, 'Jasmeet joined for Angular 5+ Course'),
(3, 1, 4, ''),
(4, 4, 5, ''),
(5, 3, 6, ''),
(6, 2, 7, '');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(5) NOT NULL,
  `fname` text DEFAULT NULL,
  `mname` tinytext DEFAULT NULL,
  `lname` tinytext DEFAULT NULL,
  `address` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `fname`, `mname`, `lname`, `address`) VALUES
(1, 'Vinay', 'Kumar', 'Rajput', 'C-30, 2nd Floor, Gulab Bagh, Om Vihar, Uttam Nagar, New Delhi-110059'),
(2, 'Jasmeet', '', 'Singh', 'Tilak Nagar'),
(3, 'Chanda', '.', 'Kochhar', 'Tilak Nagar'),
(4, 'Vicky', NULL, 'Singh', 'New Delhi'),
(5, 'Princy', NULL, 'Singh', 'Rajouri Garden'),
(6, 'Nitin', NULL, 'Kumar', 'Tagore Garden'),
(7, 'Puneet', NULL, 'Kumar', 'Tagore Garden');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(5) NOT NULL,
  `fname` tinytext DEFAULT NULL,
  `mname` tinytext DEFAULT NULL,
  `lname` tinytext DEFAULT NULL,
  `expertise` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `fname`, `mname`, `lname`, `expertise`) VALUES
(1, 'Sachin', NULL, 'Bansal', 'Accountancy'),
(2, 'Alok', NULL, 'Pathak', 'Computer Science'),
(3, 'Anukriti', NULL, 'Prasad', 'Graphics Design'),
(4, 'Anumansh', NULL, 'Singh', 'Angular, React, Javascript'),
(5, 'Anshuman', NULL, 'Sethi', 'Java, .NET, Python, Linux, Virtual Machine, Nodejs, Javascript, Angular, React, '),
(7, 'Umesh', 'Chandra', 'Joshi', 'Data Structure');

-- --------------------------------------------------------

--
-- Table structure for table `teacherseveshift`
--

CREATE TABLE `teacherseveshift` (
  `id` int(5) NOT NULL,
  `fname` tinytext DEFAULT NULL,
  `mname` tinytext DEFAULT NULL,
  `lname` tinytext DEFAULT NULL,
  `expertise` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacherseveshift`
--

INSERT INTO `teacherseveshift` (`id`, `fname`, `mname`, `lname`, `expertise`) VALUES
(2, 'Alok', NULL, 'Pathak', 'Computer Science'),
(5, 'Anshuman', NULL, 'Sethi', 'Java, .NET, Python, Linux, Virtual Machine, Nodejs, Javascript, Angular, React, '),
(6, 'Vinay', 'Kumar', 'Rajput', 'Photoshop, Graphic Design'),
(8, 'Jasmeeet', NULL, 'Singh', 'yadd haii-'),
(9, 'Jasmeeet', NULL, 'Singh', 'yadd haii-'),
(10, 'Jasmeeet', NULL, 'Singh', 'yadd haii-'),
(11, 'Jasmeeet', NULL, 'Singh', 'yadd haii-'),
(12, 'Jasmeeet', NULL, 'Singh', 'yadd haii-');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id` int(5) NOT NULL,
  `model` tinytext DEFAULT NULL,
  `make` tinytext DEFAULT NULL,
  `registration_no` tinytext DEFAULT NULL,
  `city` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`courseid`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`regid`);

--
-- Indexes for table `enrollment`
--
ALTER TABLE `enrollment`
  ADD PRIMARY KEY (`reg_no`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacherseveshift`
--
ALTER TABLE `teacherseveshift`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `courseid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `regid` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `enrollment`
--
ALTER TABLE `enrollment`
  MODIFY `reg_no` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `teacherseveshift`
--
ALTER TABLE `teacherseveshift`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
