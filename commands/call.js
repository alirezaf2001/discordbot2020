exports.run = (client,message,args,ops)=>{
    if(!args[0]) return message.channel.send('Please tell me who you want to call using @ method!');

    if(args[0]){
        if (args[0].includes('@')) {
            if(!args[1]) return message.channel.send('please tell me how many times you want to call!');
            if(isNaN(args[1])) return message.channel.send('please put valid number!');
            const limit =parseInt(args[1].content);
            for (let i = 1; i < limit + 1 ; i++){
                message.channel.send(`${args[0]} you are being called XD`);
1               
            }
            return;
        }
    }

}