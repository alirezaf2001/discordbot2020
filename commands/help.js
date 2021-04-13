exports.run = (client, message, args , ops) =>{
    const commands = [
         "**/help**-----------------Shows commands\n\`*help\`\n",
         "**/clean**----------------Delete amount of messages that is infront of it (limit 100)\n\`*clean 6\`\n",
         "**/play**-----------------Search the input infront of it OR play the link which is given to it\n\`*play (song name)\` or \`*play (youtube song URL)\`\n",
         "**/queue**----------------Shows the queue list\n\`*queue\`\n",
         "**/skip**-----------------Skips the song (needs all the voice channel mebmers permission)\n\`*skip\`\n",
         "**/pause**----------------Pauses the song\n\`*pause\`\n",
         "**/resume**---------------Resumes the song\n\`*resume\`\n",
         "**/stop**-----------------Stops the song and delete the queue list\n\`*stop\`\n",
         "**/volume**---------------Changes the volume between 1 to 200\n\`*volume 150\`\n"
    ]
    let resp =commands[0];
    for (let index = 1; index < commands.length; index++) {
        resp += commands[index];
    }

    message.channel.send(resp);


}