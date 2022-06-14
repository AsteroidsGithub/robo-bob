import { Client } from "discord.js";

const event: {
  name: string;
  type: "on" | "once";
  execute: (...args: any[]) => void;
} = {
  name: "ready",
  type: "on",
  execute: (client: Client) => {
    console.log(`I am ready!`);
  },
};

export default event;
