CREATE TABLE `splendor`.`users` ( `UserID` INT UNSIGNED NOT NULL AUTO_INCREMENT , `UserName` VARCHAR(50) NULL UNIQUE, `UserPassword` VARCHAR(255) null, `UserEmail` VARCHAR(255) NOT NULL, `UserDisplayName` VARCHAR(100) NOT NULL , `UserImage` VARCHAR(255) NOT NULL DEFAULT '/images/no_image.png' , `UserRole` TINYINT(1) NOT NULL DEFAULT '0' , `UserOnlineStatus` ENUM('Online','Offline') NOT NULL DEFAULT 'Offline' , `RememberToken` VARCHAR(255) NULL , `CasualScore` INT NOT NULL DEFAULT '0' , `RankScore` INT NOT NULL DEFAULT '0' , `RankEXP` INT NOT NULL DEFAULT '0' , `RankName` VARCHAR(255) NOT NULL DEFAULT 'Unrank' , PRIMARY KEY (`UserID`)) ENGINE = InnoDB;