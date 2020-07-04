// importando conexão com banco de dados 
const connection = require('../database/connection');


const EscolaController = {

    // visualizar todos os Escolas 
    async index (req,res){
 
        connection.select().table('escolas').then((results)=>{
          return res.json(results)
        })

    },

    // criando um Escola 
    async create( req,res){
    //   console.log(req.body)
      const {
        name,
        cidade,
        uf,
        endereço,
        cep,
      }= req.body

        await connection.table('escolas').insert( {
          name,
          cidade,
          uf,
          endereço,
          cep,
        } );
        return res.json( req.body);
      
    },

    // alterando um Escola
    async update(req,res){
        const{  
          name,
          cidade,
          uf,
          endereço,
          cep,
        } = req.body;
        const{id} = req.params

        await connection('escolas').update({
          name,
          cidade,
          uf,
          endereço,
          cep,
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um Escola 
    async destroy(req,res){
      // selecionando um Escola 
      const {id} = req.params
      // delerando um Escola
      await connection('escolas').where({id}).del()

      return res.json({mensagem: "Escola deletado com sucesso"})
    }
}

module.exports = EscolaController;
