const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const prefix = "."


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message',async (message) => {

	if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();



    if (command == 'verify' && message.channel.id === 'channel id'){
        let id = message.author.id.slice(1, 5);
    
        const example = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(`https://api.codebazan.ir/captcha/?font=1&bg=1&textcolor=1&text=${id}`)
        message.channel.send(example)


        await message.channel.awaitMessages(async m => (m.author.id === message.author.id) && (m.content === id), {
            max: 1,
            time: 20000,
            errors: ["time"]
        }).then(collected => {
            return message.guild.member(message.author).roles.add('role id');
		})
		.catch(collected => {
			return message.channel.send('time end');
		});


    
    }


});
client.login('your token');