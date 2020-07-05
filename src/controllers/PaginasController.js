// importando conexão com banco de dados 
const connection = require('../database/connection');


const PaginaController = {

    // visualizar todos os paginas
    async index (req,res){
        connection.select().table('paginas').then((results)=>{
          return res.json(results)
        })

    },

    // criando um pagina
    async create( req,res){
      console.log(req.body)
      const {
        id_capitulo,
        numero_pagina,
        conteudo,

      }= req.body

        await connection.table('paginas').insert( {
            id_capitulo,
            numero_pagina,
            conteudo,
        } );
        return res.json( req.body);
      
    },

    // alterando um pagina
    async update(req,res){
        const{  
            id_capitulo,
            numero_pagina,
            conteudo,
        } = req.body;
        const{id} = req.params

        await connection('paginas').update({
            id_capitulo,
            numero_pagina,
            conteudo,
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um pagina
    async destroy(req,res){
      // selecionando um pagina
      const {id} = req.params
      // delerando um pagina
      await connection('paginas').where({id}).del()

      return res.json({mensagem: "pagina deletado com sucesso"})
    }
}

module.exports = PaginaController;
