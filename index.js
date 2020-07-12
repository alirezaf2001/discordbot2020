const Discord = require('discord.js');
const client = new Discord.Client();

const ownerID ='559682780070543360' ;
const PREFIX = '-';
const active = new Map();

client.on('ready', () =>{
    console.log('This bot is online!');
})

 
client.on('message', message =>{

  let args = message.content.slice(PREFIX.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  if(message.author.bot) return;

  try{

    let ops = {
      ownerID : ownerID,
      active : active

    }
    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client ,message , args, ops);

  } catch (e) {
    console.log(e.stack);
  }

})


client.on('message', msg=>{
  try{
        var message = msg.content;
        message = message.toLowerCase();
        if((message.includes('who is the good boy'))){
            msg.reply("I AM XD WOOF WOOF");
    
        }
      }catch (e){
        console.log(e.stack);
      }
    })

    client.on('message', msg=>{
        var message = msg.content;
        message = message.toLowerCase();
        if((message.includes('funny'))){
            msg.reply("Your ass is funnny");
    
        }
    })
    client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.bot) return;
    switch(args[0]){
        // case 'ping':
        //     message.channel.send("POOONNNGGGG")
        //     break;
        case 'dick':
            message.channel.send("8=========> this is my dick hah")
            break;
        case 'freshavocado':
            message.channel.send("yesss thats my nameee XD")
            break;
        case 'send':
            if(!args[1]) return message.reply("Send nudes :)");
            else {
                message.reply('NANI???!!!')
            }
            break;
        case 'clean':
            if (!args[1]) return message.reply('HOW MANY YOU DUMB LITTLE F***')
            message.channel.bulkDelete(args[1]);
            break;

    }

})

client.on('message', msg=>{
    var message = msg.content;
    message = message.toLowerCase();
    if (msg.author.bot) return;
        if(message.includes('-')){}
        else
        {
        if(message.includes('send')){
            msg.reply("SEND NUDES ;)");
            }
        }
    
}
)


// client.on("message", async message => {
//     if (message.author.bot) return;
//     if (!message.content.startsWith(PREFIX)) return;
  
//     const serverQueue = queue.get(message.guild.id);
  
//     if (message.content.startsWith(`${PREFIX}play`)) {
//       execute(message, serverQueue);
//       return;
//     } else if (message.content.startsWith(`${PREFIX}skip`)) {
//       skip(message, serverQueue);
//       return;
//     } else if (message.content.startsWith(`${PREFIX}stop`)) {
//       stop(message, serverQueue);
//       return;
//     }
//   });
  
//   async function execute(message, serverQueue) {
//     const args = message.content.split(" ");
  
//     const voiceChannel = message.member.voice.channel;
//     if (!voiceChannel)
//       return message.channel.send(
//         "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
//       );
//     const permissions = voiceChannel.permissionsFor(message.client.user);
//     if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
//       return message.channel.send(
//         "I need the permissions to join and speak in your voice channel!"
//       );
//     }
  
//     try{const songInfo = await ytdl.getInfo(args[1]);}
//     catch{message.channel.send("ERROR:There is something wrong with this link ..., just like you life :/")}
//     const songInfo = await ytdl.getInfo(args[1]);
//     const song = {
//       title: songInfo.videoDetails.title,
//       url: songInfo.videoDetails.video_url

//     };
  
//     if (!serverQueue) {
//       const queueContruct = {
//         textChannel: message.channel,
//         voiceChannel: voiceChannel,
//         connection: null,
//         songs: [],
//         volume: 5,
//         playing: true
//       };
  
//       queue.set(message.guild.id, queueContruct);
  
//       queueContruct.songs.push(song);
  
//       try {
//         var connection = await voiceChannel.join();
//         queueContruct.connection = connection;
//         play(message.guild, queueContruct.songs[0]);
//       } catch (err) {
//         console.log(err);
//         queue.delete(message.guild.id);
//         return message.channel.send(err);
//       }
//     } else {
//       serverQueue.songs.push(song);
//       return message.channel.send(`${song.title} is in the FUCKING QUEUE -_-`);
//     }
//   }
  
//   function skip(message, serverQueue) {
//     if (!message.member.voice.channel)
//       return message.channel.send(
//         "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
//       );
//     if (!serverQueue)
//       return message.channel.send("Do you see any other songs in queue? that means i can't FUCKING SKIP YOU DUMB LITTLE SHIT");
//     serverQueue.connection.dispatcher.end();
//   }
  
//   function stop(message, serverQueue) {
//     if (!message.member.voice.channel)
//       return message.channel.send(
//         "Get in the GOD FUCKING DAMN VOICE CHANNEL YOU DUMB DUMB :/"
//       );
//     serverQueue.songs = [];
//     serverQueue.connection.dispatcher.end();
//   }
  
//   function play(guild, song) {
//     const serverQueue = queue.get(guild.id);
//     if (!song) {
//       serverQueue.voiceChannel.leave();
//       queue.delete(guild.id);
//       return;
//     }
  
//     const dispatcher = serverQueue.connection
//       .play(ytdl(song.url))
//       .on("finish", () => {
//         serverQueue.songs.shift();
//         play(guild, serverQueue.songs[0]);
//       })
//       .on("error", error => console.error(error));
//     dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
//     serverQueue.textChannel.send(`Now FUCKING PLAYING: **${song.title}**`);
//   }

//client.login('NzI4OTczMjMzNjQyMTQzNzY0.XwOBqg.pYWpO_Pg25LS8N3zqLaJ0qvcZ9I');

 client.login(process.env.token);

