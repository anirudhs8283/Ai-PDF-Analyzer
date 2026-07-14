require('dotenv').config();
const anthropic = require('@anthropic-ai/sdk')

const client = new anthropic({
    apiKey: process.env['ANTHROPIC_API_KEY']
})


module.exports = client