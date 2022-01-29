const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready',()=>{
    console.log('LeoBot is online!');
});



/*Last Line*/
client.login('OTM3MDczMjI3Njc3NzA0MjMy.YfWbcw.GKdeVoCsj2uXwHjRj8qoH8_DEn4');