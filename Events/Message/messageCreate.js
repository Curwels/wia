const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const prefix = "w-";

module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async exucute(message, client, Discord) {
        if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) return;

        if(command.permissions) {
            const arkadaşownermış = message.channel.permissionsFor(message.author);
            if(!arkadaşownermış || !arkadaşownermış.has(command.permissions)) {
                const yetkinyokkrşm = new MessageEmbed()
                .setColor('RED')
                .setDescription(`You do not have the required permissions to use this command`)
                .setFooter({ text: "Wia © 2022", iconURL: client.user.displayAvatarURL()})
                .setTimestamp();
                message.channel.send({embeds: [yetkinyokkrşm]})
                .then((gönder) => {
                    setTimeout(() => {
                        gönder.delete();
                    }, 2000)
                })
            }
        }

        const { cooldowns } = client;
        if(!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if(timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if(now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                const zamanbitti = new MessageEmbed()
                .setColor('RED')
                .setDescription(`Please wait another ${timeLeft.toFixed(1)} more seconds to able to use this command again!`)
                .setFooter({ text: "Wia © 2022", iconURL: client.user.displayAvatarURL()})
                .setTimestamp()
                return message.channel.send({embeds: [zamanbitti]})
                .then((gönder) => {
                    setTimeout(() => {
                        gönder.delete();
                    }, 2000)
                });
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        try {
            command.exucute(message, args, commandName, client, Discord);
        } catch (error) {
            console.log(error);
            const errembed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`❌ An error happened while trying to use this command, **Please contact the bot developer.**`)
            .setFooter({ text: "Wia © 2022", iconURL: client.user.displayAvatarURL()})
            .setTimestamp()
            message.channel.send({embeds: [errembed]});
        };
    }
}