// importando conexão com banco de dados 
const connection = require('../database/connection');

const ProfController = {
    async index (req,res){
 
        connection.select(  'idade', 'name', 'sexo', 'user_id').table('profs').then((results)=>{
          return res.json(results)
        })
    },

    // criando um profesor 
    async create( req,res){
      // console.log(req.body)
      const {
          idade,
          name,
          sexo,
          materia,
          user_id
      }= req.body

      await connection.table('profs').insert( {
        idade,
        materia,
        name,
        sexo,
        user_id
      } );
        return res.json( req.body);
       
    },

    // alterando um profesor
    async update(req,res){
      const{   idade,name,sexo,user_id } = req.body;
      const{id} = req.params

      await connection('profs').update({
        idade,
        name,
        sexo,
        user_id
      }).where({id})
      return res.json(res.body)
    },
    
    //deletando um profesor 
    async destroy(req,res){
      // selecionando um profesor 
      const {id} = req.params
      // delerando um usuario
      await connection('profs').where({id}).del()

      return res.json({mensagem: "profesor deletado com sucesso"})
    }
}

module.exports = ProfController;
