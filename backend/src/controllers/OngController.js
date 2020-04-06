const connection = require('../database/connection');
//const crypto = require('crypto');
const generateUniqueId = require('../utils/generatedUniqueId');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;

        //const id = crypto.randomBytes(4).toString('HEX');// para criar um id randomico usando essa funcao que eh originalmente para criptografia
        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        
        return response.json({ id });
    }
};