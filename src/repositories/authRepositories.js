import db from "../config/database.js";


  async function findUserByEmail(email) {
    return await db.query(`SELECT * FROM users WHERE email=$1`,[email]);
  }

  async function findSessionById(user_id) {
    return await db.query(`SELECT * FROM sessions WHERE "user_id"=$1`,[user_id]);
  }

  async function create(name, email, passwordE) {
    return await db.query(`INSERT INTO users (name, email, password) VALUES($1, $2, $3)`, [name, email, passwordE]);
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
    findUserByEmail,
    findSessionById,
    createToken
  }