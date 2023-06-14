import joi from 'joi'

const guessSchema = joi.object({
    character_id: joi.number().required(),
    score: joi.number().required()
})

export default guessSchema