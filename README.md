# TROD
Twitter Recreated on Discord

## How it works
First, tweetUser is set to `message.author`, purely for neat code and it was just more convenient for me lmao

`time` is set to the time the message was created.
```js
let tweetUser = message.author;
let time = message.createdAt;
```

After this, the channel `#tweets` is searched for.
This didn't work in the way it used to (`message.guild.channels.find` - removed in v12), so I had to learn to do it in the v12 way, displayed below.

```js
let tweetChannel = message.guild.channels.cache.find(channel => channel.name === `tweets`);
if(!tweetChannel) return message.channel.send("#tweets is not found!");
```

To tweet is then set to `args.join(" ")` which makes more sense if you look earlier in the code:

```js
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
```

Basically, its just the words after t!tweet joined to be one string.
<br>

An embed is then created:
```js
let tweetEmbed = new Discord.MessageEmbed()
.setTitle(tweetUser.tag)
.setFooter(time)
.setColor(`#1ff0ff`)
.addField(`Tweet`, toTweet)
```

![image](https://i.imgur.com/BvdMrcv.png)

Then, the embed is sent in #tweets in the server and Sent! is sent in the channel t!tweet was sent in.
```js
tweetChannel.send(tweetEmbed);
message.channel.send(`Sent!`);
```
