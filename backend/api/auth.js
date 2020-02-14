const { authSecret } = require('../.env')
const jwt = require('jwt-simple')

module.exports = app => {
    const signin = async (req, res) => {

        const user = await app.db('users')
            .where({ cpf: req.body.cpf })
            .first()

        const now = Math.floor(Date.now() / 1000)
        
        const payload = {
            id: user.id,
            name: user.name,
            telefone: user.telefone,
            cpf: user.cpf,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }

    return { signin, validateToken }
}