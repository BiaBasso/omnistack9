// Aqui será o arquivo de configuração do servidor node

// Para importar uma dependencia
const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack1@omnistack-fzf2e.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); // Dizendo que as requisições serão no formato de json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))) // Uma forma do express para retornar artigos estáticos como PDFs e arquivos de imagens
app.use(routes);

app.listen(3333); // A porta que será "ouvida" para subir o servidor