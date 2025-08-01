import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import readline from "readline";
import dotenv from 'dotenv'
import { NewMessage } from "telegram/events";
import { getKeywords, getTargets, logger } from "./utils";

dotenv.config()

const apiId = Number(`${process.env.API_ID}`);
const apiHash = `${process.env.API_HASH}`;
const stringSession = new StringSession(`${process.env.STRING_SESSION}`);
const forwardTo = `${process.env.FORWARD_TO}`;


const targets = getTargets()
const keywords = getKeywords()


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {

    try {
        const client = new TelegramClient(stringSession, apiId, apiHash, {
            connectionRetries: 5,
        });
        await client.start({
            phoneNumber: async () =>
                new Promise((resolve) =>
                    rl.question("Please enter your number: ", resolve)
                ),
            password: async () =>
                new Promise((resolve) =>
                    rl.question("Please enter your password: ", resolve)
                ),
            phoneCode: async () =>
                new Promise((resolve) =>
                    rl.question("Please enter the code you received: ", resolve)
                ),
            onError: (err) => logger.error(err.message),
        });

        logger.success("Watchman is connected 🚀🚀🚀")

        const targetChats = await Promise.all(targets.usernames.map(username => client.getEntity(username)))
        const targetIds = [...targets.ids, ...targetChats.map(chat => chat?.id.valueOf())]
        const forwardPeer = await client.getEntity(forwardTo);


        await client.addEventHandler(async (event) => {
            const message = event.message;

            if (!(message instanceof Api.Message)) return;

            const peer = message.peerId;
            let senderId: number | null = null;

            if (peer instanceof Api.PeerChannel) {
                senderId = peer.channelId.valueOf();
            } else if (peer instanceof Api.PeerChat) {
                senderId = peer.chatId.valueOf();
            } else {
                return;
            }

            if (!targetIds.includes(senderId)) return;

            const text = message.message?.toLowerCase() || "";
            const matched = keywords.some((word) => text.includes(word.toLowerCase()));

            if (matched) {
                try {
                    await client.forwardMessages(forwardPeer, {
                        messages: [message.id],
                        fromPeer: peer,
                    });
                    client.sendMessage(forwardPeer, { message: `https://t.me/c/${senderId}/${message.id}` })
                    logger.info(`📨 Message forwarded: ${text}`);
                } catch (error: any) {
                    logger.error(`❌ Error forwarding message: ${error.message}`,);
                }
            }

        }, new NewMessage({}));

    } catch (error: any) {
        logger.error(error.message)
    }

})();