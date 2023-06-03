
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';
import errors from "../errors/index.js";
import authRepositories from '../repositories/authRepositories.js';


async function create(name, email, password ) {
    const passwordE = bcrypt.hashSync(password, 10);
    return await authRepositories.create(name, email, passwordE)
    
  }

  async function update(email, password) {
    if(!email || !password){
      throw errors.unauthorizedError();
    }
    
    const mail = await authRepositories.findUserByEmail(email)
    if(!mail.rows[0] || !bcrypt.compareSync(password, mail.rows[0].password)){
          throw errors.unauthorizedError();
        }
    const user_id = mail.rows[0].id
    const token = uuid()
    const obj = {token}
    const session = await authRepositories.findSessionById(user_id)
    if(!session.rows[0]){
        await authRepositories.createToken(token, user_id)
    } else {
        await authRepositories.update(token, user_id)
    }
    return obj
  }

export default{
    create,
    update
}