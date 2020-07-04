// importando conexão com banco de dados 
const connection = require('../database/connection');


const DesafioIndicacaoController = {

    // visualizar todos os desafio_indicacaos
    async index (req,res){
        connection.select().table('desafio_indicacaos').then((results)=>{
          return res.json(results)
        })

    },

    // criando um desafio_indicacao
    async create( req,res){
      // console.log(req.body)
      const {
        id_desafio,
        genero,
    
      }= req.body

        await connection.table('desafio_indicacaos').insert( {
            id_desafio,
            genero,
        } );
        return res.json( req.body);
      
    },

    // alterando um desafio_indicacao
    async update(req,res){
        const{  
            id_desafio,
            genero,
        } = req.body;
        const{id} = req.params

        await connection('desafio_indicacaos').update({
            id_desafio,
            genero,
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um desafio_indicacao
    async destroy(req,res){
      // selecionando um desafio_indicacao
      const {id} = req.params
      // delerando um desafio_indicacao
      await connection('desafio_indicacao').where({id}).del()

      return res.json({mensagem: "desafio_indicacao deletado com sucesso"})
    }
}

module.exports = DesafioIndicacaoController;
