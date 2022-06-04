const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: ['yasakla'],
    description: "You ban the user you tag or enter the id from the server.",
    exucute(message, args, client) {
        const etiket = message.mentions.users.first() || message.guild.users.cache.get(args[0]) || message.guild.users.cache.find(m => m.username === args.slice(0).join(" "));
        if(!etiket) return message.reply("You must tag a member.")
        const zebep = args.slice(1).join(' ');

        const vurungahpeye = new MessageEmbed()
        .setAuthor({name: "Action: Ban Member", iconURL: etiket.displayAvatarURL()})
        .setColor("RED")
        .setDescription(`User Named ${etiket.username} has been banned from the server.\n\n**Authorized:** ${message.author}\n**Reason:** ${zebep}`)
        .setThumbnail(etiket.displayAvatarURL())
        .setFooter({text: "Wia © 2022 | Ban", iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        message.guild.members.ban(etiket, { days: 7, reason: zebep })
        message.channel.send({embeds: [vurungahpeye]})

        if(!zebep) {
            const zebep = "unspecified"
            const vurungahpeyee = new MessageEmbed()
            .setAuthor({name: "Action: Ban Member", iconURL: etiket.displayAvatarURL()})
            .setColor("RED")
            .setDescription(`User Named ${etiket.username} has been banned from the server.\n\n**Authorized:** ${message.author}\n**Reason:** \`unspecified\``)
            .setThumbnail(etiket.displayAvatarURL())
            .setFooter({text: "Wia © 2022 | Ban", iconURL: client.user.displayAvatarURL()})
            .setTimestamp()
            message.guild.members.ban(etiket, { days: 7, reason: zebep })
            message.channel.send({embeds: [vurungahpeyee]})
        }


    }
}