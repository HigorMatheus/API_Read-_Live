// importando conexão com banco de dados 
const connection = require('../database/connection');


const RespostaController = {

    // visualizar todos os respostas
    async index (req,res){
        connection.select().table('respostas').then((results)=>{
          return res.json(results)
        })

    },

    // criando um Resposta
    async create( req,res){
      // console.log(req.body)
      const {
        id_aluno,
        id_pergunta,
        resposta,
        nota,
      }= req.body

        await connection.table('respostas').insert( {
            id_aluno,
            id_pergunta,
            resposta,
            nota,
        } );
        return res.json( req.body);
      
    },

    // alterando um resposta
    async update(req,res){
        const{  
            id_aluno,
            id_pergunta,
            resposta,
            nota,
        } = req.body;
        const{id} = req.params

        await connection('respostas').update({
            id_aluno,
            id_pergunta,
            resposta,
            nota,
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um Aluno
    async destroy(req,res){
      // selecionando um Aluno
      const {id} = req.params
      // delerando um Aluno
      await connection('respostas').where({id}).del()

      return res.json({mensagem: "Aluno deletado com sucesso"})
    }
}

module.exports = RespostaController;
