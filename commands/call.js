exports.run = (client,message,args,ops)=>{
    if(!args[0]) return message.channel.send('Please tell me who you want to call using @ method!');

    if(args[0]){
        if (args[0].startsWith('**@**')) {
            if(!args[1]) return message.channel.send('please tell me how many times you want to call!');
            if(!isNaN(args[1])) return message.channel.send('please put valid number!');
            
            for (let index = 1; index < args[1]+1; index++) {
                message.channel.send(`${args[0]} you are being called XD`);
            }
            
        }
    }

}