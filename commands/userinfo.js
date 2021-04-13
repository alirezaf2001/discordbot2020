const Discord = require("discord.js");
const Canvas = require("canvas");

exports.run = async (client , message , args)=> {
    if(!args[0])
    {
        var user = message.author;
    }else
    {
        var user = message.mentions.users.first() || client.users.cache.get(args[0]);
        var victim = message.author;
    }
    var member = message.guild.member(user);

    const canvas = Canvas.createCanvas(500,300);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("slap.jpg")

    ctx.drawImage(background,0,0,canvas.width,canvas.height);





    const avatarUser = await Canvas.loadImage(user.displayAvatarURL({format : "jpg"}))
    const avatarVictim = await Canvas.loadImage(user.displayAvatarURL({format : "jpg"}))
    ctx.drawImage(avatarUser,275,20,150,150);

    
    const final = new Discord.MessageAttachment(canvas.toBuffer(),"userSlap.png");

    return message.channel.send(final);
}