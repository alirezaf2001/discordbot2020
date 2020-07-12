const ytdl = require('ytdl-core');
const voiceChannel = message.member.voice.channel;

exports.run = async (client , message, args , ops )=>{

    if (!voiceChannel)
      return message.channel.send(
        "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
      );

    if (!arge[0]) return message.channel.send('Please put a url to the video after the command.');

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send('Sorry, please input a **valid** input after the command');

    let info = await ytdl.getInfo(args[0]);

    let connection = await voiceChannel.join();

    let dispather = await connection.play(ytdl(arge[0], {filter : 'audioonly'}));

    message.channel.send(`Now FUCKING PLAYIN : ${info.title}`);

}