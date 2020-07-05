// importando conexão com banco de dados 
const connection = require('../database/connection');
// utilizamos para criptografar senha 
// const crypto = require('crypto')
const bcrypt = require('bcryptjs')
// const erro = require('../server')

const UserController = {

    // visualizar todos os usuarios 
    async index (req,res){
 
        connection.select(
          'email',
          'senha',
          'token',
          'papel',
        ).table('users').then((results)=>{
          return res.json(results)
        })

    },

    // criando um usuario 
    async create( req,res){
    //   console.log(req.body)
      const{
        email,
        senha,
        token,
        papel,
      } = req.body

      bcrypt.genSalt(10, ( erro, salt)=>{
          bcrypt.hash(senha,salt, async (erro,hash)=>{
            if(erro){
              req.json('erro ao salvar usuario')
              res.redirect("/")
            }
             await connection.table('users').insert( {
              email,
              senha:hash,
              token,
              papel,
            } );
            return res.json( req.body);
          });
        });
    },

    // alterando um usuario
    async update(req,res){
      const{
        email,
        senha,
        token,
        papel,
      } = req.body;
      const{id} = req.params

      await connection('users').update({
        email,
        senha,
        token,
        papel,
      }).where({id})
      return res.json(res.body)
    },
    
    //deletando um usuario 
    async destroy(req,res){
      // selecionando um usuario 
      const {id} = req.params
      // delerando um usuario
      await connection('users').where({id}).del()

      return res.json({mensagem: "usuario deletado com sucesso"})
    }
}

module.exports = UserController;