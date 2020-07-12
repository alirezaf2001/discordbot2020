const voiceChannel = message.member.voice.channel;

exports.run = (client , message , args , ops) => {

    if (!voiceChannel)
    return message.channel.send(
      "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
    );
    message.guild.me.voice.channel.leave()


}