import authRepositories from "../repositories/authRepositories.js";
import gameRepositories from "../repositories/gameRepositories.js";

async function guess(token, character_id, score) {
    const id = await authRepositories.findSessionbyToken(token);
    const user_id = id.rows[0].user_id
    await gameRepositories.makeUserGuess(user_id, character_id);
    await gameRepositories.updateUserScore(user_id, score);
    return
}

async function getLevelInfo(character_id) {
    const info = await gameRepositories.getCharacterInfo(character_id);
    const levelInfo = info.rows[0];
    const rank = await gameRepositories.getRankInfo();
    const rankInfo = rank.rows;
    const obj = { levelInfo, rankInfo };
    return obj
}

export default {
    guess,
    getLevelInfo
}