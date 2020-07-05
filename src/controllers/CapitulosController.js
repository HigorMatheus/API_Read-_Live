// importando conexão com banco de dados 
const connection = require('../database/connection');


const CapituloController = {

    // visualizar todos os capitulos
    async index (req,res){
        connection.select().table('capitulos').then((results)=>{
          return res.json(results)
        })

    },

    // criando um capitulo
    async create( req,res){
      // console.log(req.body)
      const {
        // id,
        id_livro,
        titulo,
        numero_capitulo,
        numero_pagina_inicial,
        numero_pagina_final
      }= req.body

        await connection.table('capitulos').insert( {
            // id,
            id_livro,
            titulo,
            numero_capitulo,
            numero_pagina_inicial,
            numero_pagina_final
        } );
        return res.json( req.body);
      
    },

    // alterando um capitulo
    async update(req,res){
        const{  
            // id,
            id_livro,
            titulo,
            numero_capitulo,
            numero_pagina_inicial,
            numero_pagina_final
        } = req.body;
        const{id} = req.params

        await connection('capitulos').update({
            // id,
          id_livro,
          titulo,
          numero_capitulo,
          numero_pagina_inicial,
          numero_pagina_final
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um capitulo
    async destroy(req,res){
      // selecionando um capitulo
      const {id} = req.params
      // delerando um capitulo
      await connection('capitulos').where({id}).del()

      return res.json({mensagem: "capitulo deletado com sucesso"})
    }
}

module.exports = CapituloController;
