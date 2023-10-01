/*
создать БД, состоящую из одной таблицы (информация об одногруппниках) с четырьмя полями (добавить поле «Адрес»): id, name, age, address.
*/

DROP DATABASE IF EXISTS lesson_web4;
CREATE DATABASE lesson_web4;

USE lesson_web4;

CREATE TABLE mates( -- таблица
  id SERIAL PRIMARY KEY, -- SERIAL = BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE
  name1 VARCHAR(100) NOT NULL, -- имя 
  age INT UNSIGNED,     -- возраст
  address VARCHAR(100) -- адрес
);

-- Заполним таблицу данными
INSERT INTO `mates` (`name1`, `age`, `address`) VALUES ('Павел', '16', 'Парковая 1');
INSERT INTO `mates` (`name1`, `age`, `address`) VALUES ('Илья', '18', 'Речная 22');
INSERT INTO `mates` (`name1`, `age`, `address`) VALUES ('Сургей', '17', 'Сенная 5');

-- выведем таблицу
SELECT * FROM `mates`;