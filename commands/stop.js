

exports.run = (client , message , args , ops) => {
    if (!message.member.voice.channel)
    return message.channel.send(
      "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
    );

    let fetched = ops.active.get(message.guild.id);

    for (let i = 1; i < fetched.queue.length; i++) {
        fetched.queue.shift();
    }

    fetched.dispatcher.emit('finish');

}