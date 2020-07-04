// importando conexão com banco de dados 
const connection = require('../database/connection');


const DesafioController = {

    // visualizar todos os Desafios 
    async index (req,res){
 
        connection.select().table('desafios').then((results)=>{
          return res.json(results)
        })

    },

    // criando um Desafio 
    async create( req,res){
    //   console.log(req.body)
      const {
        id_profesor,
        id_turma,
        date_inicio,
        date_limite,
        tipo,
        pontos
      }= req.body

        await connection.table('desafios').insert( {
            id_profesor,
            id_turma,
            date_inicio,
            date_limite,
            tipo,
            pontos
        } );
        return res.json( req.body);
      
    },

    // alterando um Desafio
    async update(req,res){
        const{  
            id_profesor,
            id_turma,
            date_inicio,
            date_limite,
            tipo,
            pontos
        } = req.body;
        const{id} = req.params

        await connection('desafios').update({
            id_profesor,
            id_turma,
            date_inicio,
            date_limite,
            tipo,
            pontos
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um desafio 
    async destroy(req,res){
      // selecionando um desafio 
      const {id} = req.params
      // delerando um desafio
      await connection('desafios').where({id}).del()

      return res.json({mensagem: "desafio deletado com sucesso"})
    }
}

module.exports = DesafioController;
