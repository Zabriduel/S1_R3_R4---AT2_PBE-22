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
 
 CREATE TABLE professores(
 idProfessor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nomeProfessor VARCHAR(150) NOT NULL,
 email VARCHAR(150) NOT NULL,
 disciplina VARCHAR(100) NOT NULL,
 cargaHoraria INT NOT NULL,
 dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
 
 -- INSERT INTO alunos (nomeAluno, email,matricula, curso, mediaFinal) VALUES ('gabriel','gabs@','a123s','ADS',10);
 -- UPDATE alunos SET nomeAluno = 'Pedro', email = 'Pedrin', matricula = 'Pedrosa12', curso = 'pedreiro', mediaFinal = '100' WHERE idAluno = 1;
 -- DELETE FROM alunos WHERE idAluno = 1;
 
--  INSERT INTO professores (nomeProfessor,email, disciplina,cargaHoraria) VALUES ('Gabriel','gabs@docente.com','Backend',100);
-- UPDATE professores SET nomeProfessor = 'Pedro', email = 'Pedrin', disciplina = 'Pedraria', cargaHoraria = 50 WHERE idProfessor = 2;
-- DELETE FROM professores WHERE idProfessor = 1;
 
 -- drop database escola;
