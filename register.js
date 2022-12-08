import { MatrixAuth } from "matrix-bot-sdk";

// This will be the URL where clients can reach your homeserver. Note that this might be different
// from where the web/chat interface is hosted. The server must support password registration without
// captcha or terms of service (public servers typically won't work).
const homeserverUrl = `${process.env.HOMESERVERURL}`;

const auth = new MatrixAuth(homeserverUrl);
console.log(process.env.BOT_USERNAME);
console.log(process.env.BOT_PASSWORD);
console.log(process.env.HOMESERVERURL);
const client = await auth.passwordRegister(`${process.env.BOT_USERNAME}`, `${process.env.BOT_PASSWORD}`);

console.log("Copy this access token to your bot's config: ", client.accessToken);

