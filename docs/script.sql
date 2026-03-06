CREATE DATABASE escola;
USE escola;
CREATE TABLE alunos(
 idAluno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nomeAluno VARCHAR(150) NOT NULL,
 email VARCHAR(150) NOT NULL,
 matricula VARCHAR(50) NOT NULL,
 curso VARCHAR(100) NOT NULL,
 mediaFinal DECIMAL(5,2) NOT NULL,
 dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
 
 CREATE TABLE professor(
 idAluno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nomeProfessor VARCHAR(150) NOT NULL,
 disciplina VARCHAR(100) NOT NULL,
 cargaHoraria INT NOT NULL,
 dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
 
 CREATE TABLE disciplina (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nomeDisciplina VARCHAR (100) NOT NULL
 );
 
 INSERT INTO alunos (nomeAluno, email,matricula, curso, mediaFinal) VALUES ('gabriel','gabs@','a123s','ADS',10);
 UPDATE alunos SET nomeAluno = 'Pedro', email = 'Pedrin', matricula = 'Pedrosa12', curso = 'pedreiro', mediaFinal = '100' WHERE idAluno = 1;