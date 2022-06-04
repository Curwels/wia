const { MessageEmbed } = require("discord.js");
const moment = require('moment')

module.exports = {
    name: "userinfo",
    description: "Displays the mentioned member's information embed",
    exucute(message, args, commandName, client, Discord) {
        const etiket = message.mentions.users.first() || message.author;
        const üe = message.guild.members.cache.get(etiket.id);

        const embedmış = new MessageEmbed()
        .setAuthor({name: `${etiket.username}`, iconURL: etiket.displayAvatarURL()})
        .setColor('RANDOM')
        .setThumbnail(etiket.displayAvatarURL())
        .addField("User ID", `${etiket.id}`, false)
        .addField("Roles", `${üe.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
        .addField("Server join date", `${moment(üe.joinedAt).format('DD/MM/YYYY  hh:mm:ss')}\n**-** ${moment(üe.joinedAt).startOf('day').fromNow()}`)
        .addField("Discord join date", `${moment(etiket.createdAt).format('DD/MM/YYYY  hh:mm:ss')}\n**-** ${moment(etiket.createdAt).startOf('day').fromNow()}`)
        .setTimestamp()
        .setFooter({ text: "Wia © 2022 | User Info", iconURL: client.user.displayAvatarURL()})
        message.channel.send({embeds: [embedmış]});
    }
}