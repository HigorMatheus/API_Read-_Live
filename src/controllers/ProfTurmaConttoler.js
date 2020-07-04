// importando conexão com banco de dados 
const connection = require('../database/connection');


const ProfTurmaController = {

 
    async index (req,res){
        connection.select().table('prof_turma').then((results)=>{
          return res.json(results)
        })

    },

    async create( req,res){
      // console.log(req.body)
      const {
        id_professor,
        id_turma,
      }= req.body

        await connection.table('prof_turma').insert( {
            id_professor,
            id_turma,
        } );
        return res.json( req.body);
      
    },

    async update(req,res){
        const{  
            id_professor,
            id_turma,
        } = req.body;
        const{id} = req.params

        await connection('prof_turma').update({
            id_professor,
            id_turma,
        }).where({id})
        return res.json(res.body)
    },
    

    async destroy(req,res){
      const {id} = req.params
      await connection('prof_turma').where({id}).del()
      return res.json({mensagem: "prof_turma deletado com sucesso"})
    }
}

module.exports = ProfTurmaController;
