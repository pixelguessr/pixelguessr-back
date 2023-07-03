import gameServices from "../services/gameServices.js";

async function getInfo(req, res) {
    const { id } = req.params
    try {
        const response = await gameServices.getLevelInfo(id)
        res.status(200).send(response)

    } catch (error) {
        res.sendStatus(500);
    }
}

async function guess(req, res) {
    const { character_id, score } = req.body
    const token = res.locals.token;
    try {
        await gameServices.guess(token, character_id, score)
        res.sendStatus(201)

    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

export default{
    getInfo,
    guess
}