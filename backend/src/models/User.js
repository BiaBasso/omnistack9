const mongoose = require('mongoose');

// Adiciona os campos que preciso, esses campos serão colunas na tabela
const UserSchema = new mongoose.Schema({
    email: String
});

// Para saber que quando for referente a um usuário, irei armazenar apenas esse campo
module.exports = mongoose.model('User', UserSchema);