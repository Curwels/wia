const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ['pp'],
    description: "Display the mentioned user's avatar.",
    exucute(message, args) {
        const etiket = message.mentions.users.first() || message.author;

        const avataremb = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor({name: `User Avatar it's here`})
        .setImage(etiket.displayAvatarURL({dynamic: true, size: 2048}))
        .setFooter({text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL()})
        message.channel.send({embeds: [avataremb]})
    }
}