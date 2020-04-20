const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    // Método GET
    async index(req, res) {

        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    // Método POST
    async store(req, res) {

        const { filename } = req.file; // Para salvar apenas o nome do arquivo na base de dados
        const { company, techs, price } = req.body; // Salvando as demais informações
        const { user_id } = req.headers; // Para pegar o id do usuário

        const user = await User.findById(user_id);

        if(!user) {

            return res.status(400).json({ error: 'User does not exists! '});
        } else {

            const spot = await Spot.create({

                user: user_id,
                thumbnail: filename,
                company,
                techs: techs.split(',').map(tech => tech.trim()), // Pega a separação da String por , e o trim remove os espaços em brancos
                price
            });
    
            return res.json(spot);
        }
    }
};