const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unban",
    aliases: ['yasak-kaldır'],
    description: "You unban the user you tag or enter the id from the server.",
    exucute(message, args, commandName, client) {
        const etiket = args[0];

        const öpüngahpeyi = new MessageEmbed()
        .setAuthor({name: "Action: Unban Member"})
        .setColor("RED")
        .setDescription(`User Named ${etiket} has been unbanned from the server.\n\n**Authorized:** ${message.author}`)
        .setFooter({text: "Wia © 2022 | Unban"})
        .setTimestamp()
        message.guild.members.unban(etiket)
        message.channel.send({embeds: [öpüngahpeyi]})
    }
}