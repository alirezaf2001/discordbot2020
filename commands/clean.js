const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args , ops) =>{

    if (!args[0]) {
        message.channel.send('You need to define the number of messages you want to delete!');
    }
    if(isNaN(args[0])){ 
            return message.channel.send('You need to put a number of the messages you want to delete!');
    }else if (args[0]>100 || args[0]<1) {

        return message.channel.send('You need to choose a number between 1-100');
    }else{
        message.channel.bulkDelete(args[0]);
    }


}