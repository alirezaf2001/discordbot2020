const Discord = require('discord.js');
const client = new Discord.Client();

 
const ownerID ='559682780070543360' ;
const PREFIX = '*';
const active = new Map();

function between(min, max){
  return Math.floor(Math.random() * (max - min +1) + min)
};
   

client.on('ready', () =>{
    console.log('This bot is online!');
	
	client.user.setActivity('*help', { type: 'LISTENING' });
})

 
client.on('message', message =>{
  
  let args = message.content.slice(PREFIX.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  if(message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

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
        if (msg.author.bot) return;
        if((message.includes('who is the good boy'))){
          const nthline = require('nthline'),
          filePath = './message/goodboy.txt',
          rowIndex = between(0,7)
          nthline(rowIndex, filePath).then(line => msg.reply(line))
    
        }
      }catch (e){
        console.log(e.stack);
      }
    })

    client.on('message', msg=>{
        var message = msg.content;
        message = message.toLowerCase();
        if (msg.author.bot) return;
        if((message.includes('funny'))){
          const nthline = require('nthline'),
          filePath = './message/funny.txt',
          rowIndex = between(0,5)
          nthline(rowIndex, filePath).then(line => msg.reply(line))
    
        }
})
client.on('message', msg=>{
    var message = msg.content;
    message = message.toLowerCase();
    if (msg.author.bot) return;
        if(message.includes('*')){return}
        else
        {
        if(message.includes('send')){
          const nthline = require('nthline'),
          filePath = './message/send.txt',
          rowIndex = between(0,6)
          nthline(rowIndex, filePath).then(line => msg.reply(line))
        
            }
        }
    
})


// client.login('NzcyOTI5MzYwOTUyODE5Nzcy.X6B0jw.{}-2ZiBHONMSVyBhvly9tQTIAuPQg'); //remember to put something in the token and delete it when you need to use it
client.login(process.env.token);

