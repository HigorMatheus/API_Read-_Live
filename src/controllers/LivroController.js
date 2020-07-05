// importando conexão com banco de dados 
const connection = require('../database/connection');


const LivroController = {

    // visualizar todos os livros 
    async index (req,res){
 
        connection.select().table('livros').then((results)=>{
          return res.json(results)
        })

    },

    // criando um livro 
    async create( req,res){
    //   console.log(req.body)
      const {
        titulo,
        data_publicacao,
        autor,
        genero,
        editora,
        numero_paginas,
        capa
      }= req.body

        await connection.table('livros').insert( {
          titulo,
          data_publicacao,
          autor,
          genero,
          editora,
          numero_paginas,
          capa
        } );
        return res.json( req.body);
      
    },

    // alterando um livro
    async update(req,res){
        const{  
          titulo,
          data_publicacao,
          autor,
          genero,
          editora,
          numero_paginas,
          capa
        } = req.body;
        const{id} = req.params

        await connection('livros').update({
          titulo,
          data_publicacao,
          autor,
          genero,
          editora,
          numero_paginas,
          capa
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um livro 
    async destroy(req,res){
      // selecionando um livro 
      const {id} = req.params
      // delerando um livro
      await connection('livros').where({id}).del()

      return res.json({mensagem: "livro deletado com sucesso"})
    }
}

module.exports = LivroController;
