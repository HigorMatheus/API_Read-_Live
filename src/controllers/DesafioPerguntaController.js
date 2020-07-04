// importando conexão com banco de dados 
const connection = require('../database/connection');


const DesafioController = {

    // visualizar todos os desafio_pergunta 
    async index (req,res){
 
        connection.select().table('desafio_pergunta').then((results)=>{
          return res.json(results)
        })

    },

    // criando um Desafio 
    async create( req,res){
    //   console.log(req.body)
      const {
        id_desafio,
        id_livro,
        perginta,
        pagina,
      
      }= req.body

        await connection.table('desafio_pergunta').insert( {
          id_desafio,
          id_livro,
          perginta,
          pagina,
        } );
        return res.json( req.body);
      
    },

    // alterando um Desafio
    async update(req,res){
        const{  
          id_desafio,
          id_livro,
          perginta,
          pagina,
        } = req.body;
        const{id} = req.params

        await connection('desafio_pergunta').update({
          id_desafio,
          id_livro,
          perginta,
          pagina,
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um desafio 
    async destroy(req,res){
      // selecionando um desafio 
      const {id} = req.params
      // delerando um desafio
      await connection('desafio_pergunta').where({id}).del()

      return res.json({mensagem: "desafio deletado com sucesso"})
    }
}

module.exports = DesafioController;
