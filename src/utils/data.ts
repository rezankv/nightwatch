import { readFileSync } from "fs"
import { logger } from "."

export const getKeywords = () => {
    try {
        const data = readFileSync("keywords.txt", 'utf-8')
        const keywords = data.split(",")
        return keywords
    } catch (error: any) {
        logger.error(`Error on reading keywords: ${error.message}`)
        return []
    }
}