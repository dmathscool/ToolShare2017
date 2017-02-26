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
  `rating` DECIMAL(2,1) NOT NULL DEFAULT 3,
  `zipcode` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`idRegisteredUsers`))
ENGINE = InnoDB;


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

USE `magic947_toolshare` ;

-- -----------------------------------------------------
-- Placeholder table for view `magic947_toolshare`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magic947_toolshare`.`view1` (`id` INT);

-- -----------------------------------------------------
-- Placeholder table for view `magic947_toolshare`.`view2`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magic947_toolshare`.`view2` (`id` INT);

-- -----------------------------------------------------
-- View `magic947_toolshare`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `magic947_toolshare`.`view1`;
USE `magic947_toolshare`;


-- -----------------------------------------------------
-- View `magic947_toolshare`.`view2`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `magic947_toolshare`.`view2`;
USE `magic947_toolshare`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
