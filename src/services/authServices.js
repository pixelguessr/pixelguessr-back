
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';
import errors from "../errors/index.js";
import authRepositories from '../repositories/authRepositories.js';


async function create(name, password) {
  const passwordE = bcrypt.hashSync(password, 10);
  await authRepositories.create(name, passwordE);
  const user = await authRepositories.findUserByName(name)
  const user_id = user.rows[0].id
  const token = uuid()
  await authRepositories.createToken(token, user_id)
  const obj = { token }
  return obj

}

async function update(name, password) {
  if (!name || !password) {
    throw errors.unauthorizedError();
  }

  const user = await authRepositories.findUserByName(name)
  if (!user.rows[0] || !bcrypt.compareSync(password, mail.rows[0].password)) {
    throw errors.unauthorizedError();
  }
  const user_id = user.rows[0].id
  const token = uuid()
  const doneLevels = await authRepositories.getUserDoneLevels(user_id)
  const userDoneLevels = doneLevels.rows
  const obj = { token, userDoneLevels }
  await authRepositories.update(token, user_id)
  return obj
}

export default {
  create,
  update
}