const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

//functions
const { handleVtnc } = require('./services/vtnc');
const { handleDotCall } = require('./services/dotCall');
const { handleGemidao } = require('./services/gemidao');
const { handleBotInteraction } = require('./services/botInteraction');
const { handleQuestions } = require('./services/questions');

//App start
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS
]});

//Quando logado
client.once('ready', () => {
    console.log(`Estou logado como ${client.user.tag}`);
    client.user.setActivity('cu de Fonti', {type: 'WATCHING'});
    client.user.setStatus('dnd');
})

// Interação por meio de mensagens
client.on("message", message => {

    // . PONTO
    if (message.content.startsWith(".")) handleDotCall(message, client);

    // GEMIDOES
    else if (message.content.includes("gemid")) handleGemidao(message)

    // COMANDO VAI TOMAR NO CU
    else if (message.content.endsWith('vai tomar no cu')) handleVtnc(message)

    //INTERACAO COM O BOT
    else if (message.content.includes('bot')) handleBotInteraction(message)

    //PERGUNTAS
    else if (message.content.endsWith('?')) handleQuestions(message)
})
client.on('channelDelete', channel => {
    const channelDeleteId = channel.id;
    
    channel.guild.fetchAuditLogs({'type': 'CHANNEL_DELETE'}) 
    
    .then( logs => logs.entries.find(entry => entry.target.id == channelDeleteId) ) 
    .then (entry => {
      
      author = entry.executor;
  
      // bruce ajeita essa porra seu fdp
      
      if (channel.name.includes("refugo")){
          var channelName = channel.name.split(' ')
          var index = channelName[1]
          index++
          const name = channelName[0] + " " + index
          channel.guild.channels.create(name, {
              type: 'voice'
          })
      } 
      
      client.channels.cache.get('582999750308134916').send(`<@${author.id}> tentou sabotar nosso refugo. morra!`)
      
    })
    .catch(error => console.error(error));
  
  })
// Boas-vindas
client.on('guildMemberAdd', member => {
    client.channels.cache.get('582999750308134916').send(`Bem-vindo ${member}52468, comedor de bosta.`);
    // Usar o código acima caso queira mandar uma mensagem em um certo canal
    //if (!channel) return;
})

//Login
client.login(token);
