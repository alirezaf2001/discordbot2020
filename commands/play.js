const ytdl = require('ytdl-core');

exports.run = async (client , message, args , ops )=>{

    if (!message.member.voice.channel)
      return message.channel.send(
        "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
      );

    if (!args[0]) return message.channel.send('Please put a url to the video after the command.');

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send('Sorry, please input a **valid** input after the command');

    let info = await ytdl.getInfo(args[0]);
    let data = ops.active.get(message.guild.id) || {};

    if (!data.connection) data.connection = await message.member.voice.channel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;
    data.queue.push({
        songTitle : info.videoDetails.title,
        requester : message.author.tag,
        url : args[0],
        announceChannel : message.channel.id
    });

    if(!data.dispatcher) play(client , ops , data);
    else{
        message.channel.send(`Added to Queue:\`${info.title}\` | Requested By: \`${message.author.id}\``);
    }

    ops.active.set(message.guild.id, data);

}

async function play(client , ops , data){
    client.channels.cache.get(data.queue[0].announceChannel).send(`Now Playing: \`${data.queue[0].songTitle}\` | Requested By: \`${data.queue[0].requester}\``);

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter : 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function(){

        finish(client , ops ,this);
    });
}

function finish(client , ops , dispatcher){

    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();

    if (fetched.queue.lenght > 0){
        ops.active.set(dispatcher.guildID, fetched);

        play(client , ops , fetched);
    }else{
        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.cache.get(dispatcher.guildID).me.voice.channel;
        if (vc) vc.leave();

    }
}