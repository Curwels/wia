const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ping",
    aliases: [],
    permissions: 'ADMINISTRATOR',
    description: "Send the client's ping",
    cooldown: 5,
    exucute(message, args, commandName, client, Discord) {
        const ping = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Wia ping is here`)
        .setDescription(`⌛ **Latency is** \`${Math.floor(message.createdTimestamp - message.createdTimestamp,)}\` ms\n\n⏲️ **API Ping is** \`${Math.round(client.ws.ping)}\` ms`)
        .setTimestamp()
        .setFooter({ text: "Wia © 2022 | Ping", iconURL: client.user.displayAvatarURL()})
        message.channel.send({embeds: [ping]});
    }
}