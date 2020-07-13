exports.run = (client, message, args, ops)=>{

    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send('There currently isn\'t any music playing in this guild!');

    if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('Sorry, you aren\'t in the same channel as the bot');

    if (isNaN(args[0]) || args[0]>200 || args[0] < 0) return message.channel.send('Please input a number between 0-200');

    fetched.dispatcher.setVolume(args[0]/100);

    message.channel.send(`Successfully set the volume of ${fetched.queue[0].songTitle} to ${args[0]}`);

}