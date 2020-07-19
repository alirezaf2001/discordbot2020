const ytdl = require('ytdl-core');

exports.run = async (client , message, args , ops )=>{

    if (!message.member.voice.channel){
        const notinvoicechannelEmbaded = new Discord.MessageEmbed()
      .setColor('#cc0c0c')
      .setDescription("Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/");
          message.channel.send(notinvoicechannelEmbaded);
          return;
    }

    const urlerrEmbeded = new Discord.MessageEmbed()
    .setColor('#cc0c0c')
    .setDescription('Please put a url to the video after the command.');

    if (!args[0]) return message.channel.send(urlerrEmbeded);

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) {

        let commandFile = require(`./search.js`);
        return commandFile.run(client,message,args,ops);


}

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
        const addtoqueueEmbeded = new Discord.MessageEmbed()
    .setColor('#d9eb34')
    .setDescription(`Added to Queue:\`${info.videoDetails.title}\` | Requested By: \`${message.author.id}\``);
        message.channel.send(addtoqueueEmbeded);
    }

    ops.active.set(message.guild.id, data);

}

async function play(client , ops , data){
    const nowplayingEmbaded = new Discord.MessageEmbed()
    .setColor('#34eb7d')
    .setDescription(`Now Playing: \`${data.queue[0].songTitle}\` | Requested By: \`${data.queue[0].requester}\``);



    client.channels.cache.get(data.queue[0].announceChannel).send(nowplayingEmbaded);

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter : 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('finish', function(){

        finish(client , ops ,this);0
    });
}

function finish(client , ops , dispatcher){

    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();

    if (fetched.queue.length > 0){
        ops.active.set(dispatcher.guildID, fetched);

        play(client , ops , fetched);
    }else{
        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.cache.get(dispatcher.guildID).me.voice.channel;
        if (vc) vc.leave();

    }
}