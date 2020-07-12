

exports.run = (client , message , args , ops) => {
    if (!message.member.voice.channel)
    return message.channel.send(
      "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
    );
    message.guild.me.voice.channel.leave()


}