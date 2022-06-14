import "dotenv/config";
import fs from "fs";
import { Client } from "discord.js";

console.log("The start of something great");

const client = new Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log("I am ready!");
});

fs.readdirSync("./events")
  .filter((file) => file.endsWith(".e.ts"))
  .forEach(async (file) => {
    try {
      const { default: event } = await import(`./events/${file}`);

      event.type == "once"
        ? client.once(event.name, (...args: any[]) =>
            event.execute(client, ...args)
          )
        : client.on(event.name, (...args: any[]) =>
            event.execute(client, ...args)
          );

      // Log that the event loaded to the console.
      console.info(
        `The event ${event.name} has loaded into bot successfully`,
        "Events"
      );
    } catch (error) {
      console.error(error);
    }
  });

client.login(process.env.TOKEN);
