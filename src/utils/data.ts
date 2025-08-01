import { logger } from "."

export const getKeywords = () => {
    const data = `${process.env.KEYWORDS}`
    const keywords = data ? data.split(",") : []

    logger.success("keywords processed successfully")
    logger.info(`count: ${keywords.length}`)

    return keywords
}

export const getTargets = () => {
    const rawIds = `${process.env.TARGET_IDS}`
    const rawUsernames = `${process.env.TARGET_USERNAMES}`

    const ids = rawIds ? rawIds.split(",") : []
    const usernames = rawUsernames ? rawUsernames.split(",") : []

    logger.success(`targets processed successfully`)
    logger.info(`id count: ${ids.length}`)
    logger.info(`username count: ${usernames.length}`)

    return { ids, usernames }

}