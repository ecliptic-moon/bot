const Discord = require('discord.js');

//Defined it as client
const client = new Discord.Client();

const token = 'Insert Bot Token'

//Insert bot prefix
const prefix = '=='

// npm install random-puppy
const rp = require('random-puppy');

// Any subreddit
var subreddits = [
    'Rabbits',
    'cutebunnies'
]

var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

client.on('ready', () =>{
	console.log('I am ready!')
});


client.on('message', message => {
	try {
	rp(sub).then(url=> {
            if (message.content.startsWith(prefix + 'bun')) {
            	message.channel.send(url);
            }
        });
} catch(e) {
	console.log(e);
};

});

//Login to discord
client.login(token);
