-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 04 jan. 2023 à 11:28
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quizizy`
--

-- --------------------------------------------------------

--
-- Structure de la table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `option1` varchar(255) NOT NULL,
  `option2` varchar(255) NOT NULL,
  `option3` varchar(255) NOT NULL,
  `option4` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `explanation` varchar(2255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`id`, `question`, `option1`, `option2`, `option3`, `option4`, `answer`, `explanation`) VALUES
(1, 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?', 'Amazon EC2 costs are billed on a monthly basis', 'Users retain full administrative access to their Amazon EC2 instances', 'Amazon EC2 instances can be launched on demand when needed', 'Users can permanently run enough instances to handle peak workloads', 'Amazon EC2 instances can be launched on demand when needed', 'The ability to launch instances on demand when needed allows users to launch and terminate instances inresponse to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load'),
(2, 'Which AWS service would simplify the migration of a database to AWS', 'AWS Storage Gateway', 'AWS Database Migration Service (AWS DMS)', 'Amazon EC2', 'Amazon AppStream 2.0', 'AWS Database Migration Service (AWS DMS)', 'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used com'),
(3, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?', 'AWS Config', 'AWS OpsWorks', 'AWS SDK', 'AWS Marketplace', 'AWS Marketplace', 'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS'),
(4, 'Which AWS networking service enables a company to create a virtual network within AWS?', 'AWS Config', 'Amazon Route 53', 'AWS Direct Connect', 'Amazon Virtual Private Cloud (Amazon VPC)', 'Amazon Virtual Private Cloud (Amazon VPC)', 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.'),
(5, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?', 'Configuring third-party applications', 'Maintaining physical hardware', 'Securing application access and data', 'Managing guest operating systems', 'Maintaining physical hardware', 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'),
(6, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?', 'AWS Regions', ' Edge locations', 'Availability Zones', 'Virtual Private Cloud (VPC)', ' Edge locations', 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide.'),
(7, 'How would a system administrator add an additional layer of login security to a user\'s AWS Management Console?', 'Use Amazon Cloud Directory', 'Audit AWS Identity and Access Management (IAM) roles', 'Enable multi-factor authentication', 'Enable AWS CloudTrail', 'Enable multi-factor authentication', 'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.'),
(8, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?', 'AWS Trusted Advisor', 'AWS CloudTrail', 'AWS X-Ray', 'AWS Identity and Access Management (AWS IAM)', 'AWS CloudTrail', 'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.'),
(9, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 'Amazon Simple Notification Service (Amazon SNS)', 'AWS CloudTrail', 'AWS Trusted Advisor', 'Amazon Route 53', 'Amazon Simple Notification Service (Amazon SNS)', 'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.'),
(10, 'Where can a user find information about prohibited actions on the AWS infrastructure?', 'AWS Trusted Advisor', 'AWS Identity and Access Management (IAM)', 'AWS Billing Console', 'AWS Acceptable Use Policy', 'AWS Acceptable Use Policy', 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
