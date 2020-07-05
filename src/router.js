const express = require('express');

const UserController = require('./controllers/UserController');
const ProfController = require('./controllers/ProfConttroller');
const LivroController = require('./controllers/LivroController');
const EscolaController = require('./controllers/EscolaController');
const TurmaController = require('./controllers/TurmaController');
const DesafioController = require('./controllers/DesafioController');
const AlunoController = require('./controllers/AlunoController');
const RespostaController = require('./controllers/RespostaController');
const DesafioPerguntaController = require('./controllers/DesafioPerguntaController')
const DesafioIndicacaoController = require('./controllers/DesafioIndicacaoController')
const AlunoLivroController = require('./controllers/AlunoLivroController')
const IndicacaoController = require('./controllers/IndicacaoController')
const ProfTurmaController = require('./controllers/ProfTurmaConttoler')

const routes = express.Router();

// routes usuario
routes.post('/auth',UserController.auth)
routes.post('/user' , UserController.create);
routes.get('/user' , UserController.index);
routes.put('/user/:id' , UserController.update);
routes.delete('/user/:id' , UserController.destroy);

// routes professor
routes.post('/prof' , ProfController.create); 
routes.get('/prof' , ProfController.index);
routes.put('/prof/:id' , ProfController.update);
routes.delete('/prof/:id' , ProfController.destroy);

// routes livro
routes.post('/livro' , LivroController.create);
routes.get('/livro' , LivroController.index);
routes.put('/livro/:id' , LivroController.update);
routes.delete('/livro/:id' , LivroController.destroy);

// routes Escola
routes.post('/escola' , EscolaController.create);
routes.get('/escola' , EscolaController.index);
routes.put('/escola/:id' , EscolaController.update);
routes.delete('/escola/:id' , EscolaController.destroy);

// routes Turma
routes.post('/turma' , TurmaController.create); 
routes.get('/turma' , TurmaController.index);
routes.put('/turma/:id' , TurmaController.update);
routes.delete('/turma/:id' , TurmaController.destroy);

// routes  prof turma
routes.post('/Prof/Turma' ,ProfTurmaController.create);
routes.get('/Prof/Turma' ,ProfTurmaController.index);
routes.put('/Prof/Turma/:id' ,ProfTurmaController.update);
routes.delete('/Prof/Turma/:id' ,ProfTurmaController.destroy);

// routes Desafio
routes.post('/desafio' , DesafioController.create); 
routes.get('/desafio' , DesafioController.index);
routes.put('/desafio/:id' , DesafioController.update);
routes.delete('/desafio/:id' , DesafioController.destroy);

// routes Aluno
routes.post('/aluno' , AlunoController.create);
routes.get('/aluno' , AlunoController.index);
routes.put('/aluno/:id' , AlunoController.update);
routes.delete('/aluno/:id' , AlunoController.destroy);

// routes Aluno livro
routes.post('/aluno/livro' , AlunoLivroController.create);
routes.get('/aluno/livro' , AlunoLivroController.index);
routes.put('/aluno/livro/:id' , AlunoLivroController.update);
routes.delete('/aluno/livro/:id' , AlunoLivroController.destroy);

// routes Resposta
routes.post('/resposta' , RespostaController.create);
routes.get('/resposta' , RespostaController.index);
routes.put('/resposta/:id' , RespostaController.update);
routes.delete('/resposta/:id' , RespostaController.destroy);

// routes desafio pergunta
routes.post('/desafio/pergunta' , DesafioPerguntaController.create);
routes.get('/desafio/pergunta' , DesafioPerguntaController.index);
routes.put('/desafio/pergunta/:id' , DesafioPerguntaController.update);
routes.delete('/desafio/pergunta/:id' , DesafioPerguntaController.destroy);

// routes  Desafio Indicacao
routes.post('/desafio/indicacao' , DesafioIndicacaoController.create);
routes.get('/desafio/indicacao' , DesafioIndicacaoController.index);
routes.put('/desafio/indicacao/:id' , DesafioIndicacaoController.update);
routes.delete('/desafio/indicacao/:id' , DesafioIndicacaoController.destroy);

// routes  Indicacao
routes.post('/indicacao' ,IndicacaoController.create);
routes.get('/indicacao' ,IndicacaoController.index);
routes.put('/indicacao/:id' ,IndicacaoController.update);
routes.delete('/indicacao/:id' ,IndicacaoController.destroy);


module.exports = routes