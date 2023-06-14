import errors from "../errors/index.js";
import authRepositories from "../repositories/authRepositories.js";

export async function validateToken(req, res, next){
    const { authorization } = req.headers;
    
    const token = authorization?.replace('Bearer ', '');
    if (!token) throw errors.unauthorizedError();
    try{
        const session = await authRepositories.findSessionbyToken(token);
        
        if(!session.rows[0]){
            throw errors.unauthorizedError();
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    res.locals.token = token;
    next();
}