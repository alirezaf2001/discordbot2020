const search = require('yt-search');
const Discord = require('discord.js');
exports.run = (client , message , args , ops) =>{
   
search(args.join('') , function(err , res){

    if (err) return message.channel.send(`Sorry, something went wrong. the error message is: \`${err}\``);
    
    let videos = res.videos.slice(0, 10);
     let resp = '';
     for (var i in videos){
         resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
     }

     resp += `\n**Choose a number between**  \`1 - ${videos.length}\`\n(Or choos \`0\` to Cancel selecting.)`;

     message.channel.send(resp);


     const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > -1;


        const collector = message.channel.createMessageCollector(filter)


        collector.videos = videos;
        collector.once('collect', function(m){
            if (parseInt(m.content) === 0) {
                message.channel.bulkDelete(2);
                message.channel.send("Selecting has been cancelled!");
                return;
             }else{

                let commandFile = require(`./play.js`);

                commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
                message.channel.bulkDelete(2);
             }
            });
        
    })
}
