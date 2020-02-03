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
-- Database: `courselect`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `subjects` varchar(100) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `length` varchar(10) NOT NULL,
  `topics` varchar(100) DEFAULT NULL,
  `weightage` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `subjects`, `price`, `length`, `topics`, `weightage`) VALUES
(1, 'Web Design', 'Internet, BootStrap 3', 15999, '65:00', 'Web & Internet, HTML, CSS, JS, Datastructure', 100),
(2, 'JAVA', 'Data Structure, Oops, Java, ', 11999, '44:35', 'content over java', 100);

-- --------------------------------------------------------

--
-- Table structure for table `mapping`
--

CREATE TABLE `mapping` (
  `id` int(10) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `subject_id` int(10) UNSIGNED NOT NULL,
  `session_id` int(10) UNSIGNED NOT NULL,
  `course_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `name`, `run_on`) VALUES
(5, '/20191207102208-courselect', '2020-02-02 18:15:45');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `length` varchar(10) NOT NULL,
  `weightage` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `name`, `price`, `length`, `weightage`) VALUES
(1, 'Web & Internet', 4400, '40:00', 100),
(2, 'JAVA', 8500, '35:00', 100),
(3, 'Angular', 9500, '30:00', 100);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `length` varchar(10) NOT NULL,
  `topics` varchar(100) DEFAULT NULL,
  `weightage` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `name`, `price`, `length`, `topics`, `weightage`) VALUES
(1, 'Data Structure', 1300, '10:30', 'Basic, Linked List, Array,', 5),
(2, 'Big O Notation', 1399, '03:35', 'Big O Notation concept, Performance points, O(n), Log(n), O(n2)', 2),
(3, 'HTML', 2500, '12:45', 'Basic, Markup, Container tags, Empty tags, browsers, interpretation, rendering, debugging', 6),
(4, 'CSS', 2300, '15:33', 'CSS1, CSS2, CSS3, Measurement, Dynamic Width,  CSS inheritence, CSS Overriding, Effects, Animation', 8),
(5, 'Javascript', 1100, '12:25', 'Basic, Javascript 1.4, ES6, ', 5),
(6, 'Advance Javascript', 2500, '13:30', 'OOps, ES6 advance functions, Datastructure with JS, ', 7);

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float UNSIGNED NOT NULL,
  `length` varchar(10) NOT NULL,
  `weightage` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id`, `name`, `price`, `length`, `weightage`) VALUES
(2, 'Institute profile', 0, '0:30', 0),
(3, 'HTML - Introduction', 500, '5:00', 5),
(4, 'HTML - BASIC', 800, '10:00', 5),
(9, 'Record Sample', 399.99, '30:00', 20),
(11, 'Record Sample', 399.99, '30:00', 20);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` tinytext NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `firstname`, `lastname`) VALUES
(1, 'vin@vin.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODA2NTIwNzV9.GdPR98dWd7XOi0eqJdjzgMDVen2qqX-_QPXjgZTfrvk', 'Vinay', 'Rajput');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mapping`
--
ALTER TABLE `mapping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_fk` (`course_id`),
  ADD KEY `session_fk` (`session_id`),
  ADD KEY `subject_fk` (`subject_id`),
  ADD KEY `topic_fk` (`topic_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mapping`
--
ALTER TABLE `mapping`
  ADD CONSTRAINT `course_fk` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `session_fk` FOREIGN KEY (`session_id`) REFERENCES `session` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `subject_fk` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `topic_fk` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
