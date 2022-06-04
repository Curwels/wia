const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "autorole",
    aliases: [],
    permissions: 'MANAGE_ROLES',
    description: "Setting autorole system",
    cooldown: 15,
    exucute(message, args, commandName, client, Discord) {

        if(args[0] === "set-role") {
            const rol = message.mentions.roles.first()
            if(!rol) return message.reply(`:x: **You forgot to tag a role! Usage: \`w-autorole set-role @role\`**`)
            db.set(`CwlOtorol_${message.guild.id}`, rol.id)
            let rolayarla = new MessageEmbed()
            .setTitle(`Wia - Auto Role System`)
            .setDescription(`Auto Role Successfully Set to ${rol}.\nIf You Want To Reset \`w-autorole reset-system\` It will be enough to write.`)
            .setColor('GREEN')
            .setFooter({text: `© 2022 Wia - Auto Role System`, iconURL: client.user.displayAvatarURL()})
            .setTimestamp()
            message.channel.send({embeds: [rolayarla]}) 
        }

        if(args[0] === "set-channel") {
            const kanal = message.mentions.channels.first()
            if(!kanal) return message.reply(`:x: **You forgot to tag a channel! Usage: \`w-autorole set-channel #channel\`**`)
            db.set(`CwlOtorolKanal_${message.guild.id}`, kanal.id)
            let kanalmsj = new Discord.MessageEmbed()
            .setTitle(`Wia - Auto Role System`)
            .setDescription(`Auto Role Channel Successfully Set to ${kanal}.\nIf You Want To Reset \`w-autorole reset-system\` It will be enough to write.`)
            .setColor('GREEN')
            .setFooter({text: `© 2022 Wia - Auto Role System`, iconURL: client.user.displayAvatarURL()})
            .setTimestamp()
            message.channel.send({embeds: [kanalmsj]})
        }

        if(args[0] === "reset-system") {
            db.delete(`CwlOtorolKanal_${message.guild.id}`)
            db.delete(`CwlOtorol_${message.guild.id}`)
            let sıfırla = new Discord.MessageEmbed()
            .setTitle(`Wia - Auto Role System`)
            .setDescription(`Auto Role System Reset Successfully.\nIf You Want to Set \`w-autorole set-role/channel @role/#channel\` It will be enough to write.`)
            .setColor('GREEN')
            .setFooter({text: `© 2022 Wia - Auto Role System`, iconURL: client.user.displayAvatarURL()})
            .setTimestamp()
            message.channel.send({embeds: [sıfırla]})
        }
    
        if (args[0] == 'help') {
        let yardım = new Discord.MessageEmbed()
        .setTitle(`Wia - Auto Role Help`)
        .addField('**Auto Role All Commands**',' Auto Role Commands Are Below.')
        .addField('`w-autorole set-role @role`', `You set the role to be given in Auto Role.`)
        .addField('`w-autorole set-channel`', `You determine the channel that will send the message when authorization is given.`)
        .addField('`w-autorole`', `Resets the auto role system.`)
        .setFooter({text: `© 2022 Wia - Autorole System`, iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        .setColor('RANDOM')
        message.channel.send({embeds: [yardım]})
      }
    }
}