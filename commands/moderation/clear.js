const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "clear",
    aliases: [],
    permissions: 'MANAGE_MESSAGES',
    description: "Clear Message",
    cooldown: 5,
    exucute(message, args, commandName, client, Discord) {
        if(!args[0]) return message.channel.send("Please write the amount of messages to delete!").then(message => message.delete({ timeout: 3000 }))
        message.channel.bulkDelete(args[0]).then(() => {
            const embed = new MessageEmbed()
            .setDescription(`**${args[0]}**, message successfully Deleted.`)
            .setFooter({ text: `Wia © 2022 - Asked by ${message.author.username}`})
            .setColor("GREEN")
            .setTimestamp()
            message.channel.send({embeds: [embed]}).then((gönder) => {
                setTimeout(() => {
                    gönder.delete();
                }, 3000)
            })
        })
    }
}