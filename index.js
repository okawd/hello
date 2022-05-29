let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: " .gg/jackpotheaven"}}) //this is the bot status code..
})

client.on("guildMemberAdd", member => {
if (member.guild.id === "951080095425118219") { //enable your developer mode in your discord settings and right click your server.. then you should see copy id option...
  
  
  client.channels.cache.get("980199396903882793").send(`Welcome ${member}!! to Jackpot Heaven, please check the #rules channel and thanks for joining the server.. Hope you enjoy your stay here :D`)
}
})

client.login("OTgwMTk4NTU2ODg1NDU0OTE4.G2eJOq.K5lqR0PNSEAl08jQiJ4QekG5XKiBdGfc1QkndU")

//Made by 365 ɢᴀᴍɪɴɢ ɴ ᴍᴏʀᴇ_2.0#6766 DONOT share without credits!!
