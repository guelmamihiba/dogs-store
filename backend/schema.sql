-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema animal accesories store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema animal accesories store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `animal accesories store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `animal accesories store` ;

-- -----------------------------------------------------
-- Table `animal accesories store`.`pet shop`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `animal accesories store`.`pet shop` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Accessorie Name` VARCHAR(100) NOT NULL,
  `Accessorie Price` VARCHAR(50) NOT NULL,
  `Accessorie pic` VARCHAR(225) NOT NULL,
  `Accessorie description` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`, `Accessorie Name`, `Accessorie Price`, `Accessorie pic`, `Accessorie description`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
