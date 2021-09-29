require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

client.once('ready', (c) => {
  c.user.setActivity('activity', { type: 'WATCHING' });
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', async (message) => {
  console.log(message.interaction);
  // if (message.mentions?.users)
  if (message.channel.id === '892316472200818729' && !isValidHttpUrl(message.content) || message.content.includes('https://giphy')) {
    await message.delete();
  }
})

client.login(process.env.TOKEN);