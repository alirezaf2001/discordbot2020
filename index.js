const Discord = require('discord.js');
const client = new Discord.Client();

const ownerID ='559682780070543360' ;
const PREFIX = '-';
const active = new Map();


client.on('ready', () =>{
    console.log('This bot is online!');
	
	client.user.setActivity('-help', { type: 'LISTENING' });
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
client.on('message', msg=>{
    var message = msg.content;
    message = message.toLowerCase();
    if (msg.author.bot) return;
        if(message.includes('-')){return}
        else
        {
        if(message.includes('send')){
            msg.reply("SEND NUDES ;)");
            }
        }
    
})


// client.login('NzI4OTczMjMzNjQyMTQzNzY0.XwOBqg.pYWpO_Pg25LS8N3zqLaJ0qvcZ9I');
client.login(process.env.token);

