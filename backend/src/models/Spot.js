const mongoose = require('mongoose');

// Adiciona os campos que preciso, esses campos serão colunas na tabela
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, // O que irei usar para comparar (o id)
        ref: 'User' // Referindo qual o model
    }
}, {
    toJSON: {
        virtuals: true // Quando um JSON for carregado, é para ele carregar junto todos os virtuais que ele tem
    }
});

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);