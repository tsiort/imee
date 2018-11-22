CREATE DATABASE  IF NOT EXISTS `k109316pet_imee` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `k109316pet_imee`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: imeedb
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Κατηγορία 1'),(2,'Κατηγορία 2'),(3,'Κατηγορία 3'),(4,'Κατηγορία 4');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `context`
--

DROP TABLE IF EXISTS `context`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `context` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `progid` int(11) NOT NULL,
  `subcat` int(11) NOT NULL,
  `text` longtext,
  PRIMARY KEY (`id`,`progid`,`subcat`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `subcat_idx` (`subcat`),
  KEY `progid_idx` (`progid`),
  CONSTRAINT `progid` FOREIGN KEY (`progid`) REFERENCES `program` (`id`),
  CONSTRAINT `subcat` FOREIGN KEY (`subcat`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `context`
--

LOCK TABLES `context` WRITE;
/*!40000 ALTER TABLE `context` DISABLE KEYS */;
/*!40000 ALTER TABLE `context` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meganav`
--

DROP TABLE IF EXISTS `meganav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `meganav` (
  `id` int(11) NOT NULL,
  `meganav_title_1` varchar(45) DEFAULT NULL,
  `meganav_title_1_1` varchar(45) DEFAULT NULL,
  `meganav_title_1_2` varchar(45) DEFAULT NULL,
  `meganav_title_1_3` varchar(45) DEFAULT NULL,
  `meganav_title_1_1_prog` varchar(45) DEFAULT NULL,
  `meganav_title_1_2_prog` varchar(45) DEFAULT NULL,
  `meganav_title_1_3_prog` varchar(45) DEFAULT NULL,
  `meganav_title_2` varchar(45) DEFAULT NULL,
  `meganav_title_2_1` varchar(45) DEFAULT NULL,
  `meganav_title_2_2` varchar(45) DEFAULT NULL,
  `meganav_title_2_3` varchar(45) DEFAULT NULL,
  `meganav_title_2_1_prog` varchar(45) DEFAULT NULL,
  `meganav_title_2_2_prog` varchar(45) DEFAULT NULL,
  `meganav_title_2_3_prog` varchar(45) DEFAULT NULL,
  `meganav_featured` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meganav`
--

LOCK TABLES `meganav` WRITE;
/*!40000 ALTER TABLE `meganav` DISABLE KEYS */;
INSERT INTO `meganav` VALUES (1,'Στήλη 1','Σειρά 1','ads','asd','4','3','6','Στήλη 2','1','2','3','3',NULL,'4','4');
/*!40000 ALTER TABLE `meganav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_page` tinyint(4) DEFAULT NULL COMMENT '\n',
  `title` varchar(100) DEFAULT NULL,
  `text` longtext,
  `create_time` timestamp NULL DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (2,1,'Διαγωνισμός MASTER για τους επισκέπτες της Έκθεσης Beauty Winter 2017: Έχουμε Νικητή!','<p>&Omicron; &Delta;&iota;&alpha;&gamma;&omega;&nu;&iota;&sigma;&mu;ό&sigmaf; &tau;&eta;&sigmaf;&nbsp;MASTER &pi;&omicron;&upsilon; &delta;&iota;&omicron;&rho;&gamma;&alpha;&nu;ώ&theta;&eta;&kappa;&epsilon; &alpha;&pi;&omicron;&kappa;&lambda;&epsilon;&iota;&sigma;&tau;&iota;&kappa;ά &gamma;&iota;&alpha; &tau;&omicron;&upsilon;&sigmaf; &epsilon;&pi;&iota;&sigma;&kappa;έ&pi;&tau;&epsilon;&sigmaf; &tau;&eta;&sigmaf; Έ&kappa;&theta;&epsilon;&sigma;&eta;&sigmaf;&nbsp;Beauty Winter 2017, &Omicron;&Lambda;&Omicron;&Kappa;&Lambda;&Eta;&Rho;&Omega;&Theta;&Eta;&Kappa;&Epsilon;!</p><p>&Theta;έ&lambda;&omicron;&upsilon;&mu;&epsilon; &nu;&alpha; &epsilon;&upsilon;&chi;&alpha;&rho;&iota;&sigma;&tau;ή&sigma;&omicron;&upsilon;&mu;&epsilon; &iota;&delta;&iota;&alpha;&iota;&tau;έ&rho;&omega;&sigmaf; ό&lambda;&omicron;&upsilon;&sigmaf; ό&sigma;&omicron;&upsilon;&sigmaf; &pi;ή&rho;&alpha;&nu; &mu;έ&rho;&omicron;&sigmaf; &sigma;&tau;&omicron;&nu; &Delta;&iota;&alpha;&gamma;&omega;&nu;&iota;&sigma;&mu;ό &kappa;&alpha;&iota; &beta;&omicron;ή&theta;&eta;&sigma;&alpha;&nu; &nu;&alpha; &gamma;ί&nu;&epsilon;&iota; &epsilon;&pi;&iota;&tau;&upsilon;&chi;&eta;&mu;έ&nu;&omicron;&sigmaf;, &mu;&epsilon; &mu;&epsilon;&gamma;ά&lambda;&eta; &sigma;&upsilon;&mu;&mu;&epsilon;&tau;&omicron;&chi;ή.</p><p>&Epsilon;&kappa;&alpha;&tau;&omicron;&nu;&tau;ά&delta;&epsilon;&sigmaf; &epsilon;&pi;&iota;&sigma;&kappa;έ&pi;&tau;&epsilon;&sigmaf;, &gamma;&nu;ώ&rho;&iota;&sigma;&alpha;&nu; &mu;έ&sigma;&alpha; &alpha;&pi;ό &tau;&omicron; &Pi;&epsilon;&rho;ί&pi;&tau;&epsilon;&rho;&omicron; &tau;&eta;&sigmaf; MASTER &tau;&alpha; &Sigma;&eta;&mu;&epsilon;ί&alpha; &Upsilon;&pi;&epsilon;&rho;&omicron;&chi;ή&sigmaf; &tau;&omicron;&upsilon; &Epsilon;&kappa;&pi;&alpha;&iota;&delta;&epsilon;&upsilon;&tau;&iota;&kappa;&omicron;ύ &Omicron;&mu;ί&lambda;&omicron;&upsilon; &gamma;&iota;&alpha; &Epsilon;&pi;&alpha;&gamma;&gamma;&epsilon;&lambda;&mu;&alpha;&tau;&iota;&kappa;ή &epsilon;&xi;&epsilon;&iota;&delta;ί&kappa;&epsilon;&upsilon;&sigma;&eta; &kappa;&alpha;&iota; ά&mu;&epsilon;&sigma;&eta; &alpha;&pi;&omicron;&kappa;&alpha;&tau;ά&sigma;&tau;&alpha;&sigma;&eta; &mu;&epsilon; &tau;&alpha; &Sigma;&epsilon;&mu;&iota;&nu;ά&rho;&iota;&alpha; &Upsilon;&gamma;&epsilon;ί&alpha;&sigmaf;-&Omicron;&mu;&omicron;&rho;&phi;&iota;ά&sigmaf;-&Alpha;&iota;&sigma;&theta;&eta;&tau;&iota;&kappa;ή&sigmaf;.</p><p>&Tau;&alpha; &pi;&omicron;&lambda;&upsilon;ά&rho;&iota;&theta;&mu;&alpha; &kappa;&omicron;&upsilon;&pi;ό&nu;&iota;&alpha; &sigma;&upsilon;&mu;&mu;&epsilon;&tau;&omicron;&chi;ή&sigmaf; &mu;&pi;ή&kappa;&alpha;&nu; &sigma;&epsilon; &kappa;&lambda;ή&rho;&omega;&sigma;&eta; &kappa;&alpha;&iota; &mu;&iota;&alpha; &upsilon;&pi;&epsilon;&rho;&tau;&upsilon;&chi;&epsilon;&rho;ή &kappa;έ&rho;&delta;&iota;&sigma;&epsilon; έ&nu;&alpha; &Delta;&Omega;&Rho;&Epsilon;&Alpha;&Nu; &Omicron;&lambda;&omicron;&kappa;&lambda;&eta;&rho;&omega;&mu;έ&nu;&omicron; &Epsilon;&pi;&alpha;&gamma;&gamma;&epsilon;&lambda;&mu;&alpha;&tau;&iota;&kappa;ό &Pi;&rho;ό&gamma;&rho;&alpha;&mu;&mu;&alpha; &tau;&omicron;&upsilon; &Epsilon;&kappa;&pi;&alpha;&iota;&delta;&epsilon;&upsilon;&tau;&iota;&kappa;&omicron;ύ &Omicron;&rho;&gamma;&alpha;&nu;&iota;&sigma;&mu;&omicron;ύ MASTER &laquo;Extensions &Beta;&lambda;&epsilon;&phi;&alpha;&rho;ί&delta;&omega;&nu;&raquo;.</p><p>&Sigma;&upsilon;&gamma;&chi;&alpha;&rho;&eta;&tau;ή&rho;&iota;&alpha; &sigma;&tau;&eta;&nu; &kappa;&alpha; &Kappa;&alpha;&tau;&epsilon;&rho;ί&nu;&alpha; &Kappa;&omicron;&lambda;&upsilon;&beta;ά &eta; &omicron;&pi;&omicron;ί&alpha; &theta;&alpha; έ&chi;&epsilon;&iota; &tau;&eta;&nu; &epsilon;&upsilon;&kappa;&alpha;&iota;&rho;ί&alpha; &nu;&alpha; &mu;&pi;&epsilon;&iota; &delta;&upsilon;&nu;&alpha;&mu;&iota;&kappa;ά &sigma;&tau;&omicron; &chi;ώ&rho;&omicron; &tau;&eta;&sigmaf; &Omicron;&mu;&omicron;&rho;&phi;&iota;ά&sigmaf; &nbsp;&mu;έ&sigma;&omega; &tau;&eta;&sigmaf; &gamma;&rho;ή&gamma;&omicron;&rho;&eta;&sigmaf; &kappa;&alpha;&iota; &alpha;&pi;&omicron;&tau;&epsilon;&lambda;&epsilon;&sigma;&mu;&alpha;&tau;&iota;&kappa;ή&sigmaf; &epsilon;&kappa;&pi;&alpha;ί&delta;&epsilon;&upsilon;&sigma;&eta;&sigmaf; &tau;&omicron;&pi;&omicron;&theta;έ&tau;&eta;&sigma;&eta;&sigmaf; &Beta;&lambda;&epsilon;&phi;&alpha;&rho;ί&delta;&omega;&nu; &mu;&epsilon; &tau;&eta; &Mu;έ&theta;&omicron;&delta;&omicron; &laquo;One By One&raquo;.</p><p>&Eta; &tau;&omicron;&pi;&omicron;&theta;έ&tau;&eta;&sigma;&eta; &Beta;&lambda;&epsilon;&phi;&alpha;&rho;ί&delta;&omega;&nu; (Extensions &Beta;&lambda;&epsilon;&phi;&alpha;&rho;ί&delta;&omega;&nu;) &epsilon;ί&nu;&alpha;&iota; &mu;ί&alpha; &sigma;ύ&gamma;&chi;&rho;&omicron;&nu;&eta; &tau;&epsilon;&chi;&nu;&iota;&kappa;ή &eta; &omicron;&pi;&omicron;ί&alpha; &delta;ί&nu;&epsilon;&iota; ό&gamma;&kappa;&omicron; &kappa;&alpha;&iota; &mu;ή&kappa;&omicron;&sigmaf; &sigma;&tau;&iota;&sigmaf; &beta;&lambda;&epsilon;&phi;&alpha;&rho;ί&delta;&epsilon;&sigmaf;.&nbsp;H &sigma;&upsilon;&gamma;&kappa;&epsilon;&kappa;&rho;&iota;&mu;έ&nu;&eta; &mu;έ&theta;&omicron;&delta;&omicron;&sigmaf;, έ&chi;&epsilon;&iota; &mu;&epsilon;&gamma;ά&lambda;&eta; &zeta;ή&tau;&eta;&sigma;&eta; &sigma;&tau;&eta;&nu; &alpha;&gamma;&omicron;&rho;ά &epsilon;&rho;&gamma;&alpha;&sigma;ί&alpha;&sigmaf; &delta;&iota;ό&tau;&iota; &omicron;&iota; &Epsilon;&pi;&alpha;&gamma;&gamma;&epsilon;&lambda;&mu;&alpha;&tau;ί&epsilon;&sigmaf; &pi;&omicron;&upsilon; &gamma;&nu;&omega;&rho;ί&zeta;&omicron;&upsilon;&nu; &tau;&eta;&nu; &epsilon;&pi;ί&tau;&epsilon;&upsilon;&xi;ή &tau;&eta;&sigmaf; &sigma;&upsilon;&gamma;&kappa;&epsilon;&kappa;&rho;&iota;&mu;έ&nu;&eta;&sigmaf; &tau;&epsilon;&chi;&nu;&iota;&kappa;ή&sigmaf;, &epsilon;ί&nu;&alpha;&iota; &lambda;ί&gamma;&omicron;&iota;.</p><p>&Gamma;&nu;&omega;&rho;ί&sigma;&tau;&epsilon; &pi;&epsilon;&rho;&iota;&sigma;&sigma;ό&tau;&epsilon;&rho;&alpha; &gamma;&iota;&alpha; &tau;&alpha; &Sigma;&epsilon;&mu;&iota;&nu;ά&rho;&iota;&alpha; &Upsilon;&gamma;&epsilon;ί&alpha;&sigmaf;-&Omicron;&mu;&omicron;&rho;&phi;&iota;ά&sigmaf;-&Alpha;&iota;&sigma;&theta;&eta;&tau;&iota;&kappa;ή&sigmaf; &pi;&omicron;&upsilon; &mu;&pi;&omicron;&rho;&epsilon;ί&tau;&epsilon; &kappa;&alpha;&iota; &epsilon;&sigma;&epsilon;ί&sigmaf; &nu;&alpha; &pi;&alpha;&rho;&alpha;&kappa;&omicron;&lambda;&omicron;&upsilon;&theta;ή&sigma;&epsilon;&tau;&epsilon; &sigma;&epsilon; &mu;&omicron;&nu;&alpha;&delta;&iota;&kappa;έ&sigmaf; &epsilon;&kappa;&pi;&tau;ώ&sigma;&epsilon;&iota;&sigmaf; έ&omega;&sigmaf; 50% &gamma;&iota;&alpha; &pi;&epsilon;&rho;&iota;&omicron;&rho;&iota;&sigma;&mu;έ&nu;&omicron; &delta;&iota;ά&sigma;&tau;&eta;&mu;&alpha;.</p><p>&Mu;&eta; &delta;&iota;&sigma;&tau;ά&sigma;&epsilon;&tau;&epsilon; &nu;&alpha; &epsilon;&pi;&iota;&kappa;&omicron;&iota;&nu;&omega;&nu;ή&sigma;&epsilon;&tau;&epsilon; &mu;&alpha;&zeta;ί &mu;&alpha;&sigmaf; &kappa;&alpha;&iota; &nu;&alpha; &lambda;ά&beta;&epsilon;&tau;&epsilon; &tau;&eta;&nu; &Pi;&rho;&omicron;&sigma;&phi;&omicron;&rho;ά &mu;&alpha;&sigmaf; &gamma;&iota;&alpha; &tau;&omicron; &Sigma;&epsilon;&mu;&iota;&nu;ά&rho;&iota;&omicron; &tau;&eta;&sigmaf; &epsilon;&pi;&iota;&lambda;&omicron;&gamma;ή&sigmaf; &sigma;&alpha;&sigmaf;:</p>','2018-10-09 08:18:21','2018-10-09 12:52:34'),(3,1,'Εξετάσεις Πιστοποίησης Security: Aποτελέσματα εξετάσεων της 5ης Περιόδου 2017','<p>&Alpha;&nu;&alpha;&kappa;&omicron;&iota;&nu;ώ&theta;&eta;&kappa;&alpha;&nu; &tau;&alpha; &alpha;&pi;&omicron;&tau;&epsilon;&lambda;έ&sigma;&mu;&alpha;&tau;&alpha; &tau;&omega;&nu; &epsilon;&xi;&epsilon;&tau;ά&sigma;&epsilon;&omega;&nu; &tau;&eta;&sigmaf; 5&eta;&sigmaf; &Pi;&epsilon;&rho;&iota;ό&delta;&omicron;&upsilon; 2017 &alpha;&pi;ό &tau;&omicron; &Kappa;&Epsilon;.&Mu;&Epsilon;.&Alpha;.</p><p>&Gamma;&iota;&alpha; &pi;&epsilon;&rho;&iota;&sigma;&sigma;ό&tau;&epsilon;&rho;&epsilon;&sigmaf; &pi;&lambda;&eta;&rho;&omicron;&phi;&omicron;&rho;ί&epsilon;&sigmaf; &pi;&alpha;&rho;&alpha;&kappa;&alpha;&lambda;ώ &epsilon;&pi;&iota;&sigma;&kappa;&epsilon;&phi;&tau;&epsilon;ί&tau;&epsilon; &tau;&omicron;&nu; &sigma;ύ&nu;&delta;&epsilon;&sigma;&mu;&omicron;:</p><p><a href=\"http://www.kemea.gr/el/nea-prokirykseis/teleftaia-nea/627-5-2017-b\"></a><a href=\"http://www.kemea.gr/el/nea-prokirykseis/teleftaia-nea/627-5-2017-b\">http://www.kemea.gr/el/nea-prokirykseis/teleftaia-nea/627-5-2017-b</a></p><p>&Omicron;&iota; &epsilon;&pi;&iota;&tau;&upsilon;&chi;ό&nu;&tau;&epsilon;&sigmaf; &sigma;&tau;&iota;&sigmaf; &Epsilon;&xi;&epsilon;&tau;ά&sigma;&epsilon;&iota;&sigmaf; &Pi;&iota;&sigma;&tau;&omicron;&pi;&omicron;ί&eta;&sigma;&eta;&sigmaf; &tau;&eta;&sigmaf; 5&eta;&sigmaf; &Pi;&epsilon;&rho;&iota;ό&delta;&omicron;&upsilon; 2017 &tau;&omega;&nu; &Epsilon;&pi;&alpha;&gamma;&gamma;&epsilon;&lambda;&mu;&alpha;&tau;&iota;ώ&nu;, &omicron;&iota; &omicron;&pi;&omicron;ί&omicron;&iota; &delta;&epsilon; &delta;&iota;&alpha;&theta;έ&tau;&omicron;&upsilon;&nu; &alpha;&nu;&alpha;&gamma;&nu;&omega;&rho;&iota;&sigma;&mu;έ&nu;&omicron; &epsilon;&pi;&alpha;&gamma;&gamma;&epsilon;&lambda;&mu;&alpha;&tau;&iota;&kappa;ό &tau;ί&tau;&lambda;&omicron; &tau;&eta;&sigmaf; &epsilon;&iota;&delta;&iota;&kappa;ό&tau;&eta;&tau;&alpha;&sigmaf; &laquo;&Pi;&rho;&omicron;&sigma;&omega;&pi;&iota;&kappa;ό &Iota;&delta;&iota;&omega;&tau;&iota;&kappa;ή&sigmaf; &Alpha;&sigma;&phi;ά&lambda;&epsilon;&iota;&alpha;&sigmaf;&raquo;, &theta;&alpha; &pi;&alpha;&rho;&alpha;&lambda;ά&beta;&omicron;&upsilon;&nu; &tau;&iota;&sigmaf; &beta;&epsilon;&beta;&alpha;&iota;ώ&sigma;&epsilon;&iota;&sigmaf; &epsilon;&pi;ά&rho;&kappa;&epsilon;&iota;ά&sigmaf; &tau;&omicron;&upsilon;&sigmaf;, &omega;&sigmaf; &epsilon;&xi;ή&sigmaf;:</p><ul><li>Ό&sigma;&omicron;&iota; &delta;ή&lambda;&omega;&sigma;&alpha;&nu; &mu;έ&sigma;&omega; &epsilon;&tau;&alpha;&iota;&rho;&epsilon;ί&alpha;&sigmaf; &tau;&alpha;&chi;&upsilon;&mu;&epsilon;&tau;&alpha;&phi;&omicron;&rho;ώ&nu;, &theta;&alpha; &tau;&omicron;&upsilon;&sigmaf; &sigma;&tau;&alpha;&lambda;&epsilon;ί &sigma;&tau;&iota;&sigmaf; &delta;&iota;&epsilon;&upsilon;&theta;ύ&nu;&sigma;&epsilon;&iota;&sigmaf; &pi;&omicron;&upsilon; &delta;ή&lambda;&omega;&sigma;&alpha;&nu; &sigma;&tau;&eta;&nu; &alpha;ί&tau;&eta;&sigma;&eta; &gamma;&iota;&alpha; &tau;&eta; &sigma;&upsilon;&mu;&mu;&epsilon;&tau;&omicron;&chi;ή &tau;&omicron;&upsilon;&sigmaf; &sigma;&tau;&iota;&sigmaf; &epsilon;&xi;&epsilon;&tau;ά&sigma;&epsilon;&iota;&sigmaf;.</li><li>Ό&sigma;&omicron;&iota; &delta;ή&lambda;&omega;&sigma;&alpha;&nu; &alpha;&upsilon;&tau;&omicron;&pi;&rho;&omicron;&sigma;ώ&pi;&omega;&sigmaf;, &theta;&alpha; &tau;&iota;&sigmaf; &pi;&alpha;&rho;&alpha;&lambda;ά&beta;&omicron;&upsilon;&nu; &alpha;&pi;ό &tau;&iota;&sigmaf; &epsilon;&gamma;&kappa;&alpha;&tau;&alpha;&sigma;&tau;ά&sigma;&epsilon;&iota;&sigmaf; &tau;&omicron;&upsilon; &Kappa;&Epsilon;.&Mu;&Epsilon;.&Alpha;. , &Lambda;. &Mu;&epsilon;&sigma;&omicron;&gamma;&epsilon;ί&omega;&nu; 96, &Alpha;&theta;ή&nu;&alpha; (έ&nu;&alpha;&nu;&tau;&iota; &nu;&omicron;&sigma;&omicron;&kappa;&omicron;&mu;&epsilon;ί&omicron;&upsilon; &Epsilon;&rho;&rho;ί&kappa;&omicron;&sigmaf; &Nu;&tau;&upsilon;&nu;ά&nu;) &kappa;&alpha;&tau;ό&pi;&iota;&nu; &epsilon;&nu;&eta;&mu;έ&rho;&omega;&sigma;&eta;&sigmaf; &tau;&omicron;&upsilon;&sigmaf;.</li></ul>','2018-10-09 08:42:36','2018-10-09 11:57:14');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `firstPage` tinyint(4) DEFAULT NULL,
  `text` longtext,
  `categories` json DEFAULT NULL,
  `attachments` json DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `gallery` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program`
--

LOCK TABLES `program` WRITE;
/*!40000 ALTER TABLE `program` DISABLE KEYS */;
INSERT INTO `program` VALUES (3,'aaa2',1,'<p>das</p>','[\"2\", \"4\"]','[\"Scan.pdf\", \"SRAM COSMOTE_Third-party User Password and Token Reset Guide .pdf\", \"ΤΕΛΗ ΚΥΚΛΟΦΟΡΙΑΣ_2017.pdf\"]','atom_screen.jpg','[\"atom_screen.jpg\", \"food_chef.jpg\", \"image008.jpg\", \"Jellyfish.jpg\"]'),(4,'Πρόγραμμα Τεστ 2',1,'<p>Lorem ipsum dolor sit amet, choro rationibus at quo. Ne ferri timeam mea. Id his iisque tritani propriae. Aliquid rationibus vim ei, quem facilis probatus eam ad. Qui tempor facilisis ea.<br><br>Aliquip scripta ad ius. Mei et posse numquam. Eum eu veri eripuit definitionem, sea putent essent an. Vim eius voluptaria liberavisse no. At sit sanctus veritus omittam. An option aliquando ius, in mei quem adhuc. Accusam facilisi urbanitas usu cu, mei sint graece referrentur no.<br><br>Mel ne vide vidisse, sed ea partem aliquip debitis. His clita possim omnesque ex, sed ex prima impetus assueverit, at est tale augue. Suscipiantur definitiones ius ei. Mei et eius sensibus. His cu suas fastidii, te diam veri eum. Zril eripuit commune et sed, vis meis labore complectitur an.<br><br>Qui posse omnes utroque ne, eos soluta nusquam tacimates cu, at quo autem eirmod. Audire blandit petentium sea id, ei mea fierent explicari accusamus, errem detraxit philosophia nam no. Eum cu iisque suscipiantur necessitatibus, sit ad ferri expetendis. At quem animal meliore duo. Ea nec aeque choro tincidunt, esse solet ornatus et eum. Ut quot nominati liberavisse ius. Duis dicat assentior mel cu, nec id ferri audiam similique.<br><br>Ut dolore quaerendum per, consul phaedrum disputando has ex, at eos quod mundi recteque. Usu rebum fabellas voluptaria ei, ea iisque theophrastus mel. Id vim wisi delenit, vim ea graeco delectus, elitr corpora intellegebat in vis. Sumo eruditi efficiantur in cum. Ad equidem principes quo, cu eam error vocibus. Ut tale movet nusquam vel. Qui ullum inani dissentias cu, ne has principes intellegat.<img src=\"/files/uploads/images/%CE%95%CE%B9%CE%BA%CF%8C%CE%BD%CE%B1.jpg\" style=\"width: 296px; height: 158.853px;\" class=\"fr-fic fr-fil fr-dii\">Lorem ipsum dolor sit amet, choro rationibus at quo. Ne ferri timeam mea. Id his iisque tritani propriae. Aliquid rationibus vim ei, quem facilis probatus eam ad. Qui tempor facilisis ea.<br><br>Aliquip scripta ad ius. Mei et posse numquam. Eum eu veri eripuit definitionem, sea putent essent an. Vim eius voluptaria liberavisse no. At sit sanctus veritus omittam. An option aliquando ius, in mei quem adhuc. Accusam facilisi urbanitas usu cu, mei sint graece referrentur no.<br><br></p><p><br></p><p>Mel ne vide vidisse, sed ea partem aliquip debitis. His clita possim omnesque ex, sed ex prima impetus assueverit, at est tale augue. Suscipiantur definitiones ius ei. Mei et eius sensibus. His cu suas fastidii, te diam veri eum. Zril eripuit commune et sed, vis meis labore complectitur an.<br><br>Qui posse omnes utroque ne, eos soluta nusquam tacimates cu, at quo autem eirmod. Audire blandit petentium sea id, ei mea fierent explicari accusamus, errem detraxit philosophia nam no. Eum cu iisque suscipiantur necessitatibus, sit ad ferri expetendis. At quem animal meliore duo. Ea nec aeque choro tincidunt, esse solet ornatus et eum. Ut quot nominati liberavisse ius. Duis dicat assentior mel cu, nec id ferri audiam similique.<br><br>Ut dolore quaerendum per, consul phaedrum disputando has ex, at eos quod mundi recteque. Usu rebum fabellas voluptaria ei, ea iisque theophrastus mel. Id vim wisi delenit, vim ea graeco delectus, elitr corpora intellegebat in vis. Sumo eruditi efficiantur in cum. Ad equidem principes quo, cu eam error vocibus. Ut tale movet nusquam vel. Qui ullum inani dissentias cu, ne has principes intellegat.</p><p><br></p><table style=\"width: 100%;\"><tbody><tr><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\">dsa</td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td></tr><tr><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\">ss</td><td style=\"width: 14.2857%;\">s</td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td></tr><tr><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\">s</td><td style=\"width: 14.2857%;\">s</td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td><td style=\"width: 14.2857%;\"><br></td></tr></tbody></table>','[\"2\", \"4\"]','\"SRAM COSMOTE_Third-party User Password and Token Reset Guide .pdf\"','Jellyfish.jpg','[\"atom_screen.jpg\", \"cyber_security.jpg\", \"food_chef.jpg\", \"image005.jpg\", \"image008.jpg\", \"Jellyfish.jpg\", \"Lighthouse.jpg\", \"Logo OTE.jpg\", \"safety_first_aid.jpeg\", \"slider1.jpg\", \"work_desktop.jpg\", \"Εικόνα.jpg\"]'),(5,'Program 1',1,'<p>&nbsp;das das das d asdk ajslkd lasdl kasl dklask dlkas ldkals dkaslk dlsak dlkas ldksal k</p><p>djasj kdj asjd;a</p><p><br></p><p><br></p><p><br></p><p>skd jak;sjd kas</p><p>kda sjd</p><p><br></p><p><br></p><p>as dlas; d</p>','[\"2\", \"3\", \"4\"]','\"Scan.pdf\"','Lighthouse.jpg',NULL),(6,'Κάποιος τίτλος Προγράμματος',1,'<p>asda</p><p>d ajd</p><p><br></p><p>d asl;jd</p><p><br></p><p>&nbsp;dkasj</p><p><br></p><p><br></p><p>djsj a</p>','[\"1\", \"2\"]','\"ΤΕΛΗ ΚΥΚΛΟΦΟΡΙΑΣ_2017.pdf\"','slider1.jpg',NULL);
/*!40000 ALTER TABLE `program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `slider` (
  `id` int(11) NOT NULL DEFAULT '1',
  `slider1img` varchar(45) DEFAULT NULL,
  `slider1title` varchar(100) DEFAULT NULL,
  `slider1text` varchar(500) DEFAULT NULL,
  `slider1prog` int(11) DEFAULT NULL,
  `slider2img` varchar(45) DEFAULT NULL,
  `slider2title` varchar(100) DEFAULT NULL,
  `slider2text` varchar(500) DEFAULT NULL,
  `slider2prog` int(11) DEFAULT NULL,
  `slider3img` varchar(45) DEFAULT NULL,
  `slider3title` varchar(100) DEFAULT NULL,
  `slider3text` varchar(500) DEFAULT NULL,
  `slider3prog` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES (1,'work_desktop.jpg','Τίτλος 1 ','Κείμενο 1',4,'food_chef.jpg','Τίτλος 2','Κείμενο 2',3,'safety_first_aid.jpeg','Τίτλος 3','Κείμενο 3',6);
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subcategory` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) CHARACTER SET dec8 COLLATE dec8_swedish_ci NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `USERNAME_UNIQUE` (`USERNAME`),
  UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'imeedb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-14 17:15:26
