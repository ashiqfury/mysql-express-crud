USE nodemysql;
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  mark INT NOT NULL
);

INSERT INTO users (name, age, mark) VALUES('fury', 20, 89);
UPDATE users SET mark=99 WHERE id=2;

SELECT * FROM users;


-- 2 ways to run sql file in terminal
-- mysql> source ./filename.sql
-- mysql -u root -p dbname < ./filename.sql