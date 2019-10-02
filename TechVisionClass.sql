-- MySQL dump 10.17  Distrib 10.3.16-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: TechVisionClass
-- ------------------------------------------------------
-- Server version	10.3.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `TechVisionClass`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `TechVisionClass` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `TechVisionClass`;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `studentid` int(5) DEFAULT NULL,
  `teacherid` int(5) DEFAULT NULL,
  `courseid` int(5) DEFAULT NULL,
  `class_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,3,4,2,'2019-09-15'),(2,7,5,3,'2019-09-15'),(3,2,3,6,'2019-09-15');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `courseid` int(5) NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`courseid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'MERN','MERN course is combination of learning 4 things: <br> <ol><li>Mongo</li><li>Express</li><li>ReactJS</li><li>Node.js</li></ol>'),(2,'MEAN','MEAN course is combination of learning 4 things: <br> <ol><li>Mongo</li><li>Express</li><li>Angular 5+ </li><li>Node.js</li></ol>'),(3,'Angular 5+','Angular oriented course to learn Anuglar framework which version is equivalent 5 or higher'),(4,'.NET','.NET course from Microsoft Technologies'),(5,'JAVA','JAVA course of Oracle Java, version 8+'),(6,'Web Design',' course of Oracle Java, version 8+');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollment`
--

DROP TABLE IF EXISTS `enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enrollment` (
  `reg_no` int(5) NOT NULL AUTO_INCREMENT,
  `courseid` int(5) DEFAULT NULL,
  `studentid` int(5) DEFAULT NULL,
  `description` tinytext DEFAULT NULL,
  PRIMARY KEY (`reg_no`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollment`
--

LOCK TABLES `enrollment` WRITE;
/*!40000 ALTER TABLE `enrollment` DISABLE KEYS */;
INSERT INTO `enrollment` VALUES (1,1,1,'Vinay joined for MERN Course'),(2,3,2,'Jasmeet joined for Angular 5+ Course'),(3,1,4,''),(4,4,5,''),(5,3,6,''),(6,2,7,'');
/*!40000 ALTER TABLE `enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `fname` text DEFAULT NULL,
  `mname` tinytext DEFAULT NULL,
  `lname` tinytext DEFAULT NULL,
  `address` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Vinay','Kumar','Rajput','C-30, 2nd Floor, Gulab Bagh, Om Vihar, Uttam Nagar, New Delhi-110059'),(2,'Jasmeet','','Singh','Tilak Nagar'),(3,'Chanda','.','Kochhar','Tilak Nagar'),(4,'Vicky',NULL,'Singh','New Delhi'),(5,'Princy',NULL,'Singh','Rajouri Garden'),(6,'Nitin',NULL,'Kumar','Tagore Garden'),(7,'Puneet',NULL,'Kumar','Tagore Garden');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teachers` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `fname` tinytext DEFAULT NULL,
  `mname` tinytext DEFAULT NULL,
  `lname` tinytext DEFAULT NULL,
  `expertise` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'Sachin',NULL,'Bansal','Accountancy'),(2,'Alok',NULL,'Pathak','Computer Science'),(3,'Anukriti',NULL,'Prasad','Graphics Design'),(4,'Anumansh',NULL,'Singh','Angular, React, Javascript'),(5,'Anshuman',NULL,'Sethi','Java, .NET, Python, Linux, Virtual Machine, Nodejs, Javascript, Angular, React, '),(7,'Umesh','Chandra','Joshi','Data Structure');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacherseveshift`
--

DROP TABLE IF EXISTS `teacherseveshift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacherseveshift` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `fname` tinytext DEFAULT NULL,
  `mname` tinytext DEFAULT NULL,
  `lname` tinytext DEFAULT NULL,
  `expertise` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacherseveshift`
--

LOCK TABLES `teacherseveshift` WRITE;
/*!40000 ALTER TABLE `teacherseveshift` DISABLE KEYS */;
INSERT INTO `teacherseveshift` VALUES (2,'Alok',NULL,'Pathak','Computer Science'),(5,'Anshuman',NULL,'Sethi','Java, .NET, Python, Linux, Virtual Machine, Nodejs, Javascript, Angular, React, '),(6,'Vinay','Kumar','Rajput','Photoshop, Graphic Design'),(8,'Jasmeeet',NULL,'Singh','yadd haii-'),(9,'Jasmeeet',NULL,'Singh','yadd haii-'),(10,'Jasmeeet',NULL,'Singh','yadd haii-'),(11,'Jasmeeet',NULL,'Singh','yadd haii-'),(12,'Jasmeeet',NULL,'Singh','yadd haii-');
/*!40000 ALTER TABLE `teacherseveshift` ENABLE KEYS */;
UNLOCK TABLES;


-- Dump completed on 2019-10-03  0:07:48
