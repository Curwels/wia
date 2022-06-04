const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "slowmode",
    description: "Adds a limit (time) to write to the chat.",
    aliases: ['slow-mode'],
    exucute(message, args, client) {

        if(message.channel.type !== "text") return;
        const limit = args[0] ? args[0] : 0;
        
        if(!limit) {
            const hataemb = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Usage: \`w-slowmode [0/120]\``)
            .setTimestamp()
            .setFooter({text: "Wia © 2022 | Slowmode", iconURL: client.user.displayAvatarURL()})
            message.channel.send({embeds: [hataemb]})
            return;
        }

        if(limit > 120) {
           return message.reply("The time limit can be maximum **120** seconds.");
        }
        
        const süremb = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor({name: "Slowmode time limit changed."})
        .setDescription(`The write time limit is set to **${limit}** seconds.`)
        .setFooter({text: "Wia © 2022 | Slowmode", iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        message.channel.send({embeds: [süremb]});
        message.channel.setRateLimitPerUser(args[1], "öyle istediler" );
    }
}