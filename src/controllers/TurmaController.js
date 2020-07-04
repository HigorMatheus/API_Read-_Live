// importando conexão com banco de dados 
const connection = require('../database/connection');

const TurmaController = {
    async index (req,res){
 
        connection.select( 
            'id_escola',
            'name',
            'serie',
        ).table('turma').then((results)=>{
          return res.json(results)
        })
    },

    // criando um turma 
    async create( req,res){
      // console.log(req.body)
      const {
        id_escola,
        name,
        serie
      }= req.body

      await connection.table('turma').insert( {
        id_escola,
        name,
        serie
      } );
        return res.json( req.body);
    },

    // alterando um turma
    async update(req,res){
      const{  
        id_escola,
        name,
        serie
      } = req.body;
      const{id} = req.params

      await connection('turma').update({
        id_escola,
        name,
        serie
      }).where({id})
      return res.json(res.body)
    },
    
    //deletando um turma 
    async destroy(req,res){
      // selecionando um turma 
      const {id} = req.params
      // delerando um usuario
      await connection('turma').where({id}).del()

      return res.json({mensagem: "turma deletado com sucesso"})
    }
}

module.exports = TurmaController;
