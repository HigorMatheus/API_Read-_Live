// importando conexão com banco de dados 
const connection = require('../database/connection');


const IndicacaoController = {

 
    async index (req,res){
        connection.select().table('indicacao').then((results)=>{
          return res.json(results)
        })

    },

    async create( req,res){
      // console.log(req.body)
      const {
        id_aluno_responsavel,
        id_aluno_indicado,
        data_indicaçao,
        id_livro,
      }= req.body

        await connection.table('indicacao').insert( {
            id_aluno_responsavel,
            id_aluno_indicado,
            data_indicaçao,
            id_livro,
        } );
        return res.json( req.body);
      
    },

    async update(req,res){
        const{  
            id_aluno_responsavel,
            id_aluno_indicado,
            data_indicaçao,
            id_livro,
        } = req.body;
        const{id} = req.params

        await connection('indicacao').update({
            id_aluno_responsavel,
            id_aluno_indicado,
            data_indicaçao,
            id_livro,
        }).where({id})
        return res.json(res.body)
    },
    

    async destroy(req,res){
      const {id} = req.params
      await connection('indicacao').where({id}).del()
      return res.json({mensagem: "indicacao deletada com sucesso"})
    }
}

module.exports = IndicacaoController;
