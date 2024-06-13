const express = require('express')
//instanciar uma variavel teste**
//const pq n pode mudar dps
const app = express()



//cria o servidor e vai ficar de olho na porta
app.listen(8081, function(){ //no listen n passa req e res
    console.log('Servidor rodando em http://localhost:8081')
}) //tem q ser o ultimo pq primeiro ele le