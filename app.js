const Discord = require("discord.js");

const { Client, MessageEmbed} = require("discord.js");

const client = new Discord.Client();

const {
    token
} = require("./tken.json");

const stringArray = ["ready", "reconnecting", "message" ]

client.on(stringArray[0], () => {
    console.log(`Estou logado como ${client.user.tag}`);
});

client.on(stringArray[1], () => {
    console.log(`Estou reconectando como ${client.user.tag}`);
});

client.on(stringArray[2], message => {
    if (message.content === ".ping") {
        message.channel.send('PONG, hahahahahahaahahaha');
    }
    else if (message.contains === "bang") {
        message.reply('')
    }
    else if (message.content === ".gay") {
        message.channel.send(`Esse aí é o ${message.author}!`);
    }
    else if (message.content === ".pombao") {
        message.channel.send(`Esse aí é o ${message.author}`);
    }
    // GEMIDOES
    else if (message.content === "-play gemidao estourado") {
        message.channel.send(`OLHA O POMBÂO DO ${message.author} BOTANDO O GEMIDÃO`);
    }
    else if (message.content === "-PLAY GEMIDAO ESTOURADO") {
        message.channel.send(`OLHA O POMBÂO DO ${message.author} BOTANDO O GEMIDÃO`);
    }
    // informacao
    
    // mensagem embutida aí, faz o teste pra lembar oq é
    else if (message.content === '.embed') {
        const embed = new MessageEmbed()
            .setTitle('Sei não man')
            .setColor(0xff0000)
            .setDescription('Maan, sei não');
        message.channel.send(embed);
    }
    //kick
    else if (message.content.startsWith('.kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick('Sei não em man')
                    .then(() => {
                        message.reply(`${user.tag} kickado com sucesso`);
                    })
                    .catch(err => {
                        message.reply('Não tô com permissão pra kickar');
                        console.error(err);
                    });
            } else {
                message.reply('O usuário não está na categoria');
            }
        } else {
            message.reply('Você não mencionou quem é pra kickar, burro')
        }
    }
    //tentando kickar o bot
    else if (message.content === `.kick ${client.user.tag}`) {
        const user = message.mentions.users.first();
        if (user) {
            const otario = message.author(user);
            if (otario) {
            otario
                .kick('Kicka a mãe')
                .then(() => {
                    message.reply(`O otário do ${otario} tentou me kickar e SE DEU MAL`)
                })
                .catch(err => {
                    message.reply(`ALGUÉM ME AJUDA, o ${otario} tá tentando me kickar e eu não consigo me vingar`);
                    console.error(err);
                });
            } 
        }  else {
            message.reply('Deu erro man')
        } 
    }

    
    

});

// CRIANDO AS BOAS VINDAS

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'chat');
    //USAR o código acima caso queira mandar uma mensagem em um certo canal
    if (!channel) return;
    channel.send(`Bem-vindo ${member}, comedor de bosta`);
});


client.login(token);