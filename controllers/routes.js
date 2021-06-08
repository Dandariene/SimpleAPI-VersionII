//preciso exportar para a aplicação rodar

module.exports = app => {
    app.get('/', (req, resp) => {
        resp.send('Servidor Rodando')
    });
};

