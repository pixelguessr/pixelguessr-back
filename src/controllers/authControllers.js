import authServices from "../services/authServices.js";

async function create(req, res) {
    const { name, password } = req.body
    try {
        const response = await authServices.create(name, password)
        res.status(201).send(response)

    } catch (error) {
        res.sendStatus(500);
    }
}

async function login(req, res) {
    const { name, password } = req.body

    try {
        const obj = await authServices.update(name, password);

        res.status(200).send(obj)

    } catch (error) {
        res.status(500).send('Credenciais incorretas');
    }
}

export default {
    create,
    login
}

