// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {

    // Quando é assincrono, tem que esperar um tempo tudo acontecer para salvar
    async store(req, res) {

        // Aqui eu passo o que eu preciso pegar do body (navegando dentro de objeto)
        // Passando o { email } significa uma desestruturação no javascript, 
        // pois sei que quero o elemento email que tem dentro do body
        const { email } = req.body;

        let user = await User.findOne({ email });

        // Se já existir um usuário criado, eu não deixo criar
        if(!user){
            
            user = await User.create({ email }); // await só deixa ir para a próxima instrução, quando a instrução for finalizada
        }

        return res.json(user);
    }
};