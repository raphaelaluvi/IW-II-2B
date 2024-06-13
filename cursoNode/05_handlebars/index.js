const express = require('express')
//instanciar uma variavel teste**
//const pq n pode mudar dps
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// configuracoes

    // template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // conexao com o banco
    const sequelize = new Sequelize('test', 'root', '', {
        host:'localhost', 
        dialect: 'mysql'
    })

// rotas
app.get('/cadastro', function(req, res){
    //res.send('rota de cadastro de posts')
    res.render('formulario')
})

app.post('/add',function(req, res){
    res.send('formulário enviado')
})

//cria o servidor e vai ficar de olho na porta
app.listen(8081, function(){ //no listen n passa req e res
    console.log('Servidor rodando em http://localhost:8081')
}) //tem q ser o ultimo pq primeiro ele le