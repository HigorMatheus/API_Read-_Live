const express = require('express');

const UserController = require('./controllers/UserController');
const ProfController = require('./controllers/ProfConttroller');
const LivroController = require('./controllers/LivroController');
const EscolaController = require('./controllers/EscolaController');
const TurmaController = require('./controllers/TurmaController');
const DesafioController = require('./controllers/DesafioController');
const AlunoController = require('./controllers/AlunoController');
 
const routes = express.Router();


// router de cadastro de usuario
routes.post('/user' , UserController.create);
// router para visualizar os usuarios 
routes.get('/user' , UserController.index);
// router para editar um  usuario
routes.put('/user/:id' , UserController.update);
// router para deletar um  usuario
routes.delete('/user/:id' , UserController.destroy);

// router de cadastro de prof
routes.post('/prof' , ProfController.create);
// router para visualizar os profs 
routes.get('/prof' , ProfController.index);
// router para editar um  prof
routes.put('/prof/:id' , ProfController.update);
// router para deletar um  prof
routes.delete('/prof/:id' , ProfController.destroy);

// router de cadastro de livro
routes.post('/livro' , LivroController.create);
// router para visualizar os livros 
routes.get('/livro' , LivroController.index);
// router para editar um  livro
routes.put('/livro/:id' , LivroController.update);
// router para deletar um  livro
routes.delete('/livro/:id' , LivroController.destroy);

// router de cadastro de Escola
routes.post('/escola' , EscolaController.create);
// router para visualizar os Escolas 
routes.get('/escola' , EscolaController.index);
// router para editar um  Escola
routes.put('/escola/:id' , EscolaController.update);
// router para deletar um  Escola
routes.delete('/escola/:id' , EscolaController.destroy);

// router de cadastro de Turma
routes.post('/turma' , TurmaController.create);
// router para visualizar os Turmas 
routes.get('/turma' , TurmaController.index);
// router para editar um  Turma
routes.put('/turma/:id' , TurmaController.update);
// router para deletar um  Turma
routes.delete('/turma/:id' , TurmaController.destroy);

// router de cadastro de Desafio
routes.post('/desafio' , DesafioController.create);
// router para visualizar os Desafios 
routes.get('/desafio' , DesafioController.index);
// router para editar um  Desafio
routes.put('/desafio/:id' , DesafioController.update);
// router para deletar um  Desafio
routes.delete('/desafio/:id' , DesafioController.destroy);

// router de cadastro de Aluno
routes.post('/aluno' , AlunoController.create);
// router para visualizar os Alunos
routes.get('/aluno' , AlunoController.index);
// router para editar um  Aluno
routes.put('/aluno/:id' , AlunoController.update);
// router para deletar um  Aluno
routes.delete('/aluno/:id' , AlunoController.destroy);


module.exports = routes