const fs = require("fs/promises")
const { extractText, getDocumentProxy } = require("unpdf")

async function pdfService(filePath) {
    const buffer = await fs.readFile(filePath)

    const pdf = await getDocumentProxy(new Uint8Array(buffer))

    const { text } = await extractText(pdf, {
        mergePages: true
    })

    return text
}

module.exports = pdfService