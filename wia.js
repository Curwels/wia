const Discord = require('discord.js');
const { Client, MessageEmbed, Intents, Collection } = Discord;
const colors = require('colors');
const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS]});

client.commands = new Collection();
client.cooldowns = new Collection();

['Events', 'Commands'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

// Bot Giriş

client.on("ready", () => {
    console.log(colors.red(`[Curwels]: ${colors.magenta("Wia Başarıyla Aktif Edildi.")}`))
    client.user.setActivity("Coming soon... | Curwels Was Here", { type: "LISTENING" })
    client.user.setPresence({ status: "dnd"})
})

// Sunucu Giriş Mesaj



  client.on('guildCreate', guild => {
    if (guild.systemChannel) {
      const giriş = new MessageEmbed()
      .addField("Wia - Thanks", "Hi, I'm Curwels(Wia Developer) First of all, I would like to thank you for adding our bot and supporting me.")
      .addField(`Wia - Prefix`, `Wia Prefix It's \`w-\``)
      .addField(`Wia - How to use?`, `In order to benefit from all the features of the Wia bot, only \`w-help\` you must write.`)
      .addField(`Wia - Support Server`, `[Support Server](https://discord.gg/TCnRDDgPCK)`, true)
      .addField(`Wia - Invite`, `[Invite](https://discord.com/api/oauth2/authorize?client_id=971389381132836935&permissions=8&scope=applications.commands%20bot)`, true)
      .addField(`Wia - Website`, `[Website](https://wiabot.cf/)`, true)
      .setFooter({ text: "Wia © 2022", iconURL: client.user.displayAvatarURL()})
      .setTimestamp()
      guild.systemChannel.send({embeds: [giriş]});
    }
  });

client.login("OTcxMzg5MzgxMTMyODM2OTM1.GkL8W9.ieGmlL3NcjauOEqEK1uwHktUKAvj3GUuqQOD28")