const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`Twitter Recreated On Discord`);
    console.log(`Now online - ${bot.user.tag}`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send("denied");

    let prefix = "t!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}tweet`) {
        let tweetUser = message.author;
        let time = message.createdAt;

        let tweetChannel = message.guild.channels.cache.find(channel => channel.name === `tweets`);
        if(!tweetChannel) return message.channel.send("#tweets is not found!");

        let toTweet = args.join(" ");

        let tweetEmbed = new Discord.MessageEmbed()
        .setTitle(tweetUser.tag)
        .setFooter(time)
        .setColor(`#1ff0ff`)
        .addField(`Tweet`, toTweet)

        tweetChannel.send(tweetEmbed);
        message.channel.send(`Sent!`);



    }

});

bot.login(`token`);
