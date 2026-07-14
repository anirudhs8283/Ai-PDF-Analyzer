const aiService = require("../services/ai.service")
const pdfService = require("../services/pdf.service")
const fs = require("fs/promises")

const pdfController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                error: "PDF document is required"
            })
        }

        const extractedText = await pdfService(req.file.path)
        const reply = await aiService(extractedText)

        return res.status(200).json({
            message: "PDF uploaded successfully",
            reply
        })
    } finally {
        if (req.file) {
            try {
                await fs.unlink(req.file.path)
            } catch (deleteError) {
                console.error(
                    "Failed to delete uploaded PDF:",
                    deleteError.message
                )
            }
        }
    }
}

module.exports = { pdfController }