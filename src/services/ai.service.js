require('dotenv').config()
const client = require('../config/anthropic')

const aiService = async function (message) {
    const response = await client.messages.create({
        max_tokens: 2000,
        cache_control:{"type": "ephemeral"},
        system: "Summarize the document in approximately 100 words. Return plain text only. Do not use Markdown.",
        messages: [{ role: 'user', content: message }],
        model: 'claude-opus-4-6',
    })
    return response.content[0].text
}

module.exports = aiService