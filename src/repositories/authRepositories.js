import db from "../config/database.js";


  async function findUserByName(user) {
    return await db.query(`SELECT * FROM users WHERE name=$1`,[user]);
  }

  async function findSessionById(user_id) {
    return await db.query(`SELECT * FROM sessions WHERE "user_id"=$1`,[user_id]);
  }

  async function create(name, passwordE) {
    return await db.query(`INSERT INTO users (name, password) VALUES($1, $2, $3)`, [name, passwordE]);
  }

  async function createToken(token, user_id) {
    return await db.query(`INSERT INTO sessions (token, user_id) VALUES($1, $2)`, [token, user_id]);
  }

  async function update(token, user_id) {
    return await db.query(`UPDATE sessions SET "token" = $1 WHERE "user_id" = $2 `, [token, user_id]);
  }

  export default{
    create,
    update,
    findUserByName,
    findSessionById,
    createToken
  }