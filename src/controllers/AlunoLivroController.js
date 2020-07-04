// importando conexão com banco de dados 
const connection = require('../database/connection');


const AlunoLivroController = {

    // visualizar todos os aluno_livro
    async index (req,res){
        connection.select().table('aluno_livro').then((results)=>{
          return res.json(results)
        })

    },

    // criando um Aluno
    async create( req,res){
      // console.log(req.body)
      const {
            id_livro,
            id_aluno,
            pagina_atual,
            data_inicio,
            data_fim
      }= req.body

        await connection.table('aluno_livro').insert( {
            id_livro,
            id_aluno,
            pagina_atual,
            data_inicio,
            data_fim
        } );
        return res.json( req.body);
      
    },

    // alterando um Aluno
    async update(req,res){
        const{  
            id_livro,
            id_aluno,
            pagina_atual,
            data_inicio,
            data_fim
        } = req.body;
        const{id} = req.params

        await connection('aluno_livro').update({
            id_livro,
            id_aluno,
            pagina_atual,
            data_inicio,
            data_fim
        }).where({id})
        return res.json(res.body)
    },
    
    //deletando um Aluno
    async destroy(req,res){
      // selecionando um Aluno
      const {id} = req.params
      // delerando um Aluno
      await connection('aluno_livro').where({id}).del()

      return res.json({mensagem: "Aluno deletado com sucesso"})
    }
}

module.exports = AlunoLivroController;
