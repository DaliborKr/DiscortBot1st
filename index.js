const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.js");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'Daves') {
    msg.reply('SMRDÍ!');
  }
});

client.login(config.discord_token);