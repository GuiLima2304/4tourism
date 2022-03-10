const express = require('express');
const connection = require('./config/database/connection');
const Tables = require('./config/database/tables');
const configExpress = require('./config/customExpress.js/configExpress');
const port = 3000;

connection.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Connected');

        Tables.init(connection);

        const app = configExpress();

        app.listen(3000, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    }
})
