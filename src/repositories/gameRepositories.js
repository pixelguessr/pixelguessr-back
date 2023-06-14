import db from "../config/database.js";


  async function getCharacterInfo(character_id) {
    return await db.query(`SELECT * FROM characters WHERE id=$1`,[character_id]);
  }

  async function getRankInfo() {
    return await db.query(`SELECT name, score FROM users ORDER BY score DESC LIMIT 5`);
  }  

  async function makeUserGuess(user_id, character_id) {
    return await db.query(`INSERT INTO guesses (user_id, character_id) VALUES ($1, $2)`, [user_id, character_id]);
  }

  async function updateUserScore(user_id, score) {
    return await db.query(`UPDATE users SET score = score + $1 WHERE id = $2`,[score, user_id]);
  }
  
export default{
    getCharacterInfo,
    getRankInfo,
    makeUserGuess,
    updateUserScore
}