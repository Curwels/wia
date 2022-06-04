const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
    name: "guildMemberAdd",
    exucute(member, message, guild, client) {
        const kanal = db.get(`CwlOtorolKanal_${member.guild.id}`)
        const kanall = member.guild.channels.cache.get(kanal)
        const roll = db.get(`CwlOtorol_${member.guild.id}`);
        let rol = member.guild.roles.cache.find(r => r.id === roll)
        
        const geldi = new MessageEmbed()
        .setAuthor({name: `A new member joined the server.`})
        .setThumbnail(member.user.displayAvatarURL())
        .setColor('RANDOM')
        .setDescription(`Welcome ${member} to the **${member.guild.name}'s server!**\n I gave you the role ${rol}`)
        .setTimestamp()
        .setFooter({text: `© 2022 Wia - Auto Role System`})
        kanall.send({embeds: [geldi]})
        member.roles.add(rol);
    }
}