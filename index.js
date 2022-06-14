import { Client } from "discord.js";
console.log("The start of something great");
const client = new Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
});
client.on("ready", () => {
    console.log("I am ready!");
});
client.login();
