const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.once("ready", () => {
  console.log("Bot is online");

  // Monday, Wednesday, Friday at 20:30
  cron.schedule("30 20 * * 1,3,5", async () => {
    const channel = await client.channels.fetch("1315054918482001980");
    channel.send("@everyone WHO IS READY FOR WAR <:emoji_17:1316090716430139483>");
  }, {
    timezone: "Europe/Belgrade"
  });
});

client.login(process.env.TOKEN);