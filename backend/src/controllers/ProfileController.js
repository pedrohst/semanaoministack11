// ele criou esse perfil da ONG pq disse que em MVC não pode ter dois metodos iguais dentro decada controller (e nocaso acabaria tendo dois select)

const connection = require('../database/connection');

module.exports =
{
    async index(request, response )
    {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents').where("ong_id", ong_id).select('*');

        return response.json(incidents);
    }
}