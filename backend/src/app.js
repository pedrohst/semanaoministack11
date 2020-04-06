const express = require('express');

const cors = require('cors');

const { errors } = require('celebrate');

const routes = require('./routes');

const app = express();

app.use(cors());// para desenvolvimento

/* // caso em produção, seria assim
app.use(cors({
    origin: 'http://meuapp.com'
})); */

// informar o app (express) que o corpo das requisições será em JSON
// feito por necessidade do metodo post com o body
app.use(express.json());

app.use(routes);//linha criada após a criação do routes.js

app.use(errors());// para retornar o erro 400 (ao invés do 500) em formato JSON

/**
 * Rota (tudo denntro do método GET)
 * Recurso (é o "/users" por exemplo (como quando se quer acessar a página ou obter a listagem de usuarios)) 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend 
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação): "/users?page=2&nome=Diego&idade=25"
   * Route Params: Parâmetros utilizados para identificar recursos: "/users/:id" -> "/users/1"
   * Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * banco de dados
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    * utilizaremos o SQLite, mas depois será possivel utilizar qqr outro estruturado
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users'.select('*').where()
     * utilizando query builder, qualquer banco relacional/estruturado poderá ser usado depois, 
     * já se fizesse as querys diretamente e um dia mudar o db, teria que mudar algumas coisas nas querys tbm
     * 
     * utilizaremos o query builder KNEX.JS
     */

/* app.get('/users', (request, response) => {
    //return response.send('Hello World');
    return response.json({
        evento: 'Semana oministack 11.0',
        aluno: 'Pedro Torres'
    });
} ); */

/* app.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana oministack 11.0',
        aluno: 'Pedro Torres'
    });
} ); */

/* app.get('/users', (request, response) => {
    const params = request.query;
    
    console.log(params);

    return response.json({
        evento: 'Semana oministack 11.0',
        aluno: 'Pedro Torres'
    });
} );

colocando no insomnia "http://localhost:3333/users?name=Pedro" 

a resposta no console.log aqui embaixo foi:

{ name: 'Pedro' } */

/* app.get('/users/:id', (request, response) => {
    const params = request.params;
    
    console.log(params);

    return response.json({
        evento: 'Semana oministack 11.0',
        aluno: 'Pedro Torres'
    });
} );

colocando no insomnia "http://localhost:3333/users/1"

a resposta no console.log aqui embaixo foi:

{ id: '1' } */

/* app.post('/users', (request, response) => {
    const body = request.body;
    
    console.log(body);

    return response.json({
        evento: 'Semana oministack 11.0',
        aluno: 'Pedro Torres'
    });
} );

colocando no insomnia POST "http://localhost:3333/users" seleciona JSON e preenche embaixo com
{
	"name": "Pedro Torres",
	"idade": 33
}

a resposta no console.log aqui embaixo foi:

{ name: 'Pedro Torres', idade: 33 } */



//app.listen(3333); // a porta 80 da problema em muitos SOs e o diego que escolheu a 3333 pro node
module.exports = app;