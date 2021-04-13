const Discord = require("discord.js");
const Canvas = require("canvas");

exports.run = (client , message , args)=> {
    if(!args[0])
    {
        var user = message.author;
    }else
    {
        var user = message.mentions.users.first() || client.users.cache.get(args[0]);
    }
    var member = message.guild.member(user);

    const canvas = Canvas.createCanvas(500,200);
    const ctx = Canvas.getContext("2d");

    const background = Canvas.loadImage("https://i.pinimg.com/564x/40/ab/fb/40abfb383ab6502ab3f72ea3b20feb00.jpg")

    ctx.drawImage(background,0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.arc(100,100,75,0,Math.PI * 2 , true);
    ctx.closePath();
    ctx.clip();


    const avatar = Canvas.loadImage(user.displayAvatarURL({format : "jpg"}))
    ctx.drawImage(avatar,25,25,150,150);

    const final = new Discord.MessageAttachment(canvas.toBuffer(),"userSlap.png");

    return message.channel.send(final);
}