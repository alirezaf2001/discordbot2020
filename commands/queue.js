const Discord = require('discord.js');
exports.run=async(client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send('There curently isn\'t any music playing in this channel')

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__Queue__\n`;

    for (var i=1; i< queue.length; i++){
        resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
    }
    const queueEmbeded = new Discord.MessageEmbed()
      .setColor('#4640c2')
      .setDescription(resp);
    message.channel.send(queueEmbeded);

}