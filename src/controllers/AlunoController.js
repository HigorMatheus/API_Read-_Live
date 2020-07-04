// importando conexão com banco de dados 
const connection = require('../database/connection');


const AlunoController = {

    // visualizar todos os alunos
    async index (req,res){
        connection.select().table('alunos').then((results)=>{
          return res.json(results)
        })

    },

    // criando um Aluno
    async create( req,res){
      // console.log(req.body)
      const {
        idade,
        nome,
        sexo,
        id_turma,
        pontuacao,
        id_user,
      }= req.body

        await connection.table('alunos').insert( {
            idade,
            nome,
            sexo,
            id_turma,
            pontuacao,
            id_user,
        } );
        return res.json( req.body);
      
    },

    // alterando um Aluno
    async update(req,res){
        const{  
            idade,
            nome,
            sexo,
            id_turma,
            pontuacao,
            id_user,
        } = req.body;
        const{id} = req.params

        await connection('alunos').update({
            idade,
            nome,
            sexo,
            id_turma,
            pontuacao,
            id_user,
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um Aluno
    async destroy(req,res){
      // selecionando um Aluno
      const {id} = req.params
      // delerando um Aluno
      await connection('alunos').where({id}).del()

      return res.json({mensagem: "Aluno deletado com sucesso"})
    }
}

module.exports = AlunoController;
