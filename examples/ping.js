const DNode = require("discord-node");
const bot = new DNode("Bot Token")
// Replace Bot Token with your token

bot.on("ready", () => {
    console.log("RDY 4 ADVENSHUR");
})

bot.on("messageSent", (msg) => {
    if (msg.content === "!ping") {
        bot.sendMessage(msg.channel.id, "Pong!")
    }
})

bot.connect()