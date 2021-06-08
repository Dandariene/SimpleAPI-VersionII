//Pasta responsável por toda a configuração do express
//importo o express e o consign
const express = require('express');
const consign = require('consign');

//crio uma função anônima onde vou exportar e dentro dela, onde crio a aplicação
//carrego o consign e retorno a aplicação

module.exports = () => {
    const app = express();

    //informo para a minha aplicação que le a vai trabalhar com o express
    app.use(express.json());

    consign()
        .include('controllers') //inclui tudo que tiver dentro de controllers
        .into(app) //dentro de app

    return app; //feito isso, retorno o app
};