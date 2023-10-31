const {Client, GatewayIntentBits} = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds]} );

client.once("ready", () => {
    console.log(`${client.user.username} is online.`)
});

client.login(botConfig.token);