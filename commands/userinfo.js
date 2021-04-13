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
    const ctx1 = canvas.getContext("2d");
    const ctx2 = canvas.getContext("2d");

    const background = await Canvas.loadImage("slap.jpg")

    ctx1.drawImage(background,0,0,canvas.width,canvas.height);

    ctx1.beginPath();
    ctx1.arc(350,95,75,0,Math.PI * 2 , true);
    ctx1.closePath();
    ctx1.clip();

    ctx2.beginPath();
    ctx2.arc(100,100,75,0,Math.PI * 2 , true);
    ctx2.closePath();
    ctx2.clip();


    const avatarUser = await Canvas.loadImage(user.displayAvatarURL({format : "jpg"}))
    const avatarVictim = await Canvas.loadImage(user.displayAvatarURL({format : "jpg"}))
    ctx1.drawImage(avatarUser,275,20,150,150);
    ctx2.drawImage(avatarVictim,20,20,150,150);
    
    const final = new Discord.MessageAttachment(canvas.toBuffer(),"userSlap.png");

    return message.channel.send(final);
}