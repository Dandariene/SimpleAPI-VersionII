//importo config
const configExpress = require('./config/configExpress')

app = configExpress();
/*  "Depois de criado o configExpress essa parte do index deixa de existir"

=> const express = require('express');

//criando a aplicação
=> const app = express(); */


//subindo a aplicação, no comando node coloco a porta 3000
//(usei a porta 3001 porque a 3000 já tinha aplicação rodando)
app.listen(3001, () => console.log('Servidor rodando na porta 3001'));


//minha aplicação tem o verbo get, não passei caminho, está na raíz
//req: recebe , resp responde. Nesse caso não estou recebendo nada mas quero responder
//quando alguém chamar o verbo get.


        /*app.get('/', (req, resp) => {
            resp.send('Servidor Rodando')
        });   = esse arquivo irá para on arquivo cadastro clientes que esta dentro da 
        pasta controlers, isso porque o index ficará só para subir o servidor*/