const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.contebt === prefix + "fabriquant"){
        message.reply("_Ce bot a été crée par Bubbles_");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
        .setTitle("EMBED")
        .setDescription("Ceci est un embed")
        .addField(".help","Page d'aide", true)
        .addField("Embed01","Embed01 ! :) Suivez les tuto de [Bubbles](https://www.youtube.com/c/pzhcodage", true)
        .setColor("0xFF8000")
        .SetFooter("Bon moment parmis nous ! :)")
    message.channel.sendEmbed(embed);
    }
        
});
