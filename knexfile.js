// Update with your config settings.

const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      // infoemando localizaçao do banco
      filename: path.resolve(__dirname,'src','database','database.sqlite3'),
    },
    // infoemando localizaçao da migrate  
    migrations:{
      tableName: 'Knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    useNullAsDefault : true
  },
};
