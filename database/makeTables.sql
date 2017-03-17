-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema magic947_toolshare
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema magic947_toolshare
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `magic947_toolshare` DEFAULT CHARACTER SET utf8 ;
USE `magic947_toolshare` ;

-- -----------------------------------------------------
-- Table `magic947_toolshare`.`RegUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magic947_toolshare`.`RegUsers` (
  `idRegisteredUsers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(200) NOT NULL,
  `password` VARCHAR(16) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `rating` FLOAT(5,4) NOT NULL DEFAULT 3,
  `zipcode` VARCHAR(5) NOT NULL,
  `numRatings` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idRegisteredUsers`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `magic947_toolshare`.`toolcondition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magic947_toolshare`.`toolcondition` (
  `idCondition` INT(11) NOT NULL AUTO_INCREMENT,
  `ToolCondition` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idCondition`),
  UNIQUE INDEX `ToolCondition` (`ToolCondition` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `magic947_toolshare`.`Tools`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magic947_toolshare`.`Tools` (
  `idTool` INT NOT NULL AUTO_INCREMENT,
  `RegUsers_OriginalUser` INT NOT NULL,
  `RegUsers_CurrentUser` INT NULL,
  `ToolState` INT NULL DEFAULT 0,
  `ToolName` VARCHAR(200) NULL,
  `ToolType` VARCHAR(50) NULL,
  `ToolBrand` VARCHAR(50) NULL,
  `ToolCondition` VARCHAR(45) NULL,
  `ImgFileLoc` VARCHAR(200) NULL,
  PRIMARY KEY (`idTool`),
  INDEX `fk_Tools_RegUsers_idx` (`RegUsers_OriginalUser` ASC),
  INDEX `fk_Tools_RegUsers1_idx` (`RegUsers_CurrentUser` ASC),
  CONSTRAINT `fk_Tools_RegUsers_OG`
    FOREIGN KEY (`RegUsers_OriginalUser`)
    REFERENCES `magic947_toolshare`.`RegUsers` (`idRegisteredUsers`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tools_RegUsers_Current`
    FOREIGN KEY (`RegUsers_CurrentUser`)
    REFERENCES `magic947_toolshare`.`RegUsers` (`idRegisteredUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `magic947_toolshare`.`tooltype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magic947_toolshare`.`tooltype` (
  `idToolType` INT(11) NOT NULL AUTO_INCREMENT,
  `ToolType` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`idToolType`),
  UNIQUE INDEX `ToolType` (`ToolType` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `magic947_toolshare`.`TransactionHistory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magic947_toolshare`.`TransactionHistory` (
  `transactionId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `OriginalUser` INT NOT NULL,
  `LoanedUser` INT NOT NULL,
  `Tools_idTool` INT NOT NULL,
  `Rating` DECIMAL(1) NULL DEFAULT 3,
  `Comment` VARCHAR(45) NULL,
  `DateBorrowed` DATETIME NULL,
  `DateReturned` DATETIME NULL,
  INDEX `fk_TransactionHistory_RegUsers1_idx` (`OriginalUser` ASC),
  INDEX `fk_TransactionHistory_RegUsers2_idx` (`LoanedUser` ASC),
  INDEX `fk_TransactionHistory_Tools1_idx` (`Tools_idTool` ASC),
  PRIMARY KEY (`transactionId`),
  CONSTRAINT `fk_TransactionHistory_RegUsers1`
    FOREIGN KEY (`OriginalUser`)
    REFERENCES `magic947_toolshare`.`RegUsers` (`idRegisteredUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TransactionHistory_RegUsers2`
    FOREIGN KEY (`LoanedUser`)
    REFERENCES `magic947_toolshare`.`RegUsers` (`idRegisteredUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TransactionHistory_Tools1`
    FOREIGN KEY (`Tools_idTool`)
    REFERENCES `magic947_toolshare`.`Tools` (`idTool`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `magic947_toolshare` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
