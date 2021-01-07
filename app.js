const Discord = require("discord.js");

const { Client, MessageEmbed, MessageAttachment, MessageManager, MessageMentions, MessageReaction, MessageCollector, MessageFlags, VoiceBroadcast} = require("discord.js");

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
        message.channel.send('PONG.');
    }
    else if (message.content.toLowerCase() === ".gay") {
        message.channel.send(`Gay mesmo só ${message.author}.`)
    }
    else if (message.content.toLowerCase() === ".pombao") {
        message.channel.send(`Só se for o ${message.author}!`);
    }
    else if (message.content.toLowerCase() === ".avatar") {
        message.channel.send(`Seu avatar é ${message.author.displayAvatarURL()}`);
    }
    // GEMIDOES
    else if (message.content.toLowerCase() === "-play gemidao estourado") {
        message.channel.send(`OLHA O POMBÃO DO ${message.author} BOTANDO O GEMIDÃO`);
    }
    
    else if (message.content.toLowerCase() === "-play gemidão estourado") {
        message.channel.send(`OLHA O POMBÃO DO ${message.author} BOTANDO O GEMIDÃO`);
    }
    // Não sou um BOT de música
    else if (message.content.startsWith('.play')) {
        const willsmith = new MessageAttachment('https://imgur.com/itxe78j.png');
        message.channel.send(willsmith);
    }
    
    //data de criação de um determinado canal 
    
    
    // mensagem embutida aí, faz o teste pra lembar oq é
    else if (message.content === '.embed') {
        const embed = new MessageEmbed()
            .setTitle('Sei não man')
            .setColor(0xff0000)
            .setDescription('Maan, sei não');
        message.channel.send(embed);
    }
    //kick
    //else if (message.content.startsWith('.kick')) {
       // const user = message.mentions.users.first();
       // if (user) {
       //     const member = message.guild.member(user);
        //    if (member) {
        //        member
        //            .kick('Sei não man')
        //            .then(() => {
         //               message.reply(`${user.tag} kickado com sucesso`);
          //          })
           //         .catch(err => {
           //             message.reply('Não tô com permissão pra kickar');
           //             console.error(err);
          //          });
          //  } else {
          //      message.reply('O usuário não está na categoria');
          //  }
      //  } else {
       //     message.reply('Você não mencionou quem é pra kickar, burro')
      //  }
    //}
    // Situação de kick no bot.
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
            message.reply('Deu erro man.')
        } 
    }
    // Eventos Aleatórios
    
    else if (message.content.endsWith('é gay?')) {
        const gay = Math.floor((Math.random()* 10) + 1)
        if (gay % 2 == 0) {
            message.reply(`Sim.`)
        }
        else {
            message.reply(`Não.`)
        }
    }
    else if (message.content.toLowerCase() === ".sn") {
        const sn = Math.floor((Math.random()* 10) + 1)
        if (sn % 2 == 0) {
            message.reply('Sim.')
        
        }
        else {
            message.reply('Não.')
        }
    }
    else if (message.content.toLowerCase() === '.sorteio') {
        const sorteio = Math.floor((Math.random()* 10) + 1)
        message.reply(sorteio)
        }
     

    // Boa bot
    else if (message.content.toLowerCase() === 'boa bot, tô gostando de ver') {
        message.channel.send(':blush:')
    }
    // Não bot
    else if (message.content.toLowerCase() === 'não bot, assim não') {
        message.channel.send(':pleading_face:')
    }
});

// Boas-vindas

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '💬uolti-papo');
    // Usar o código acima caso queira mandar uma mensagem em um certo canal
    if (!channel) return;
    channel.send(`Bem-vindo ${member}52468, comedor de bosta.`);
});


client.login(token);
