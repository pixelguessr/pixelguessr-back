import authServices from "../services/authServices.js";

async function create(req, res) {
    const {name, email, password} = req.body
    try {
    await authServices.create(name, email, password)
    res.sendStatus(201)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function login(req, res) {
    const {email, password} = req.body
    
    try {
        const obj = await authServices.update(email, password);
       
        res.status(200).send(obj)
    
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export default{
    create,
    login
}

