const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "giverole",
    description: "Grants the tagged person the designated role.",
    aliases: ['rolver'],
    exucute(message, args, client) {
        const etiket = message.mentions.users.first() || message.guild.users.cache.get(args[0]) || message.guild.users.cache.find(m => m.username === args.slice(0).join(" "));
        const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r === args.slice(1).join(" "));

        if(!etiket) return message.reply("You must tag a member.")
        if(!rol) return message.reply("You must tag a role.")

        message.guild.members.cache.get(etiket.id).roles.add(rol);

        const rolemb = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor({name: "A member was given a role.", iconURL: etiket.displayAvatarURL()})
        .setThumbnail(etiket.displayAvatarURL())
        .setDescription(`I gave ${etiket} the role ${rol}.\n\n**Authorized:** ${message.author}`)
        .setFooter({text: "Wia © 2022 | Give Role"})
        message.channel.send({embeds: [rolemb]})
    }
}