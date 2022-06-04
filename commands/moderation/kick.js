const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    aliases: ['at'],
    description: "You kick the user you tag or enter the id from the server.",
    exucute(message, args, client) {
        const etiket = message.mentions.users.first() || message.guild.users.cache.get(args[0]) || message.guild.users.cache.find(m => m.username === args.slice(0).join(" "));
        if(!etiket) return message.reply("You must tag a member.")
        const zebep = args.slice(1).join(' ');

        const vurungahpeye = new MessageEmbed()
        .setAuthor({name: "Action: Kick Member", iconURL: etiket.displayAvatarURL()})
        .setColor("RED")
        .setDescription(`User Named ${etiket.username} has been kicked from the server.\n\n**Authorized:** ${message.author}\n**Reason:** ${zebep}`)
        .setThumbnail(etiket.displayAvatarURL())
        .setFooter({text: "Wia © 2022 | Kick", iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        message.guild.members.kick(etiket, { reason: zebep })
        message.channel.send({embeds: [vurungahpeye]})

        if(!zebep) {
            const zebep = "unspecified"
            const vurungahpeyee = new MessageEmbed()
            .setAuthor({name: "Action: Kick Member", iconURL: etiket.displayAvatarURL()})
            .setColor("RED")
            .setDescription(`User Named ${etiket.username} has been kicked from the server.\n\n**Authorized:** ${message.author}\n**Reason:** \`unspecified\``)
            .setThumbnail(etiket.displayAvatarURL())
            .setFooter({text: "Wia © 2022 | Kicked", iconURL: client.user.displayAvatarURL()})
            .setTimestamp()
            message.guild.members.kick(etiket, { reason: zebep })
            message.channel.send({embeds: [vurungahpeyee]})
        }


    }
}