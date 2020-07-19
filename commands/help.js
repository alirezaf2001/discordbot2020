exports.run = (client, message, args , ops) =>{
    const commands = {
        help: "-help\t\tShows commands\n\`-help\`\n",
        clean: "-clean\t\tDelete amount of messages that is infront of it (limit 100)\n\`-clean 6\`\n",
        play : "-play\t\tSearch the input infront of it OR play the link which is given to it\n\`-play (song name)\` or \`-play (youtube song URL)\`\n",
        queue: "-queue\t\tShows the queue list\n\`-queue\`\n",
        skip: "-skip\t\tSkips the song (needs all the voice channel mebmers permission)\n\`-skip\`\n",
        pause: "-pause\t\tPauses the song\n\`-pause\`\n",
        resume: "-resume\t\tResumes the song\n\`-resume\`\n",
        stop: "-stop\t\tStops the song and delete the queue list\n\`-stop\`\n",
        volume: "-volume\t\tChanges the volume between 1 to 200\n\`-volume 150\`\n"
    }
    let resp = commands[0];
    for (let index = 1; index < commands.lenght+1; index++) {
        resp += `${commands[index]}`;
    }

    message.channel.send(resp);


}