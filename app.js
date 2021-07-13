const Discord = require("discord.js");
const { token } = require("./tken.json");

//functions
const { handleVtnc } = require('./services/vtnc');
const { handleDotCall } = require('./services/dotCall');
const { handleGemidao } = require('./services/gemidao');
const { handleBotInteraction } = require('./services/botInteraction');
const { handleQuestions } = require('./services/questions');

//App start
const client = new Discord.Client();

//Quando logado
client.on("ready", () => {
    console.log(`Estou logado como ${client.user.tag}`);
})

// Interação por meio de mensagens
client.on("message", message => {

    // . PONTO
    if (message.content.startsWith(".")) handleDotCall(message, client);
    
    // GEMIDOES
    else if (message.content.startsWith("-")) handleGemidao(message)

    // COMANDO VAI TOMAR NO CU
    else if (message.content.endsWith('vai tomar no cu')) handleVtnc(message)
    
    //INTERACAO COM O BOT
    else if (message.content.includes('bot')) handleBotInteraction(message) 

    //PERGUNTAS
    else if (message.content.endsWith('?')) handleQuestions(message)
})

// Boas-vindas
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '💬uolti-papo');
    // Usar o código acima caso queira mandar uma mensagem em um certo canal
    if (!channel) return;
    channel.send(`Bem-vindo ${member}52468, comedor de bosta.`);
})

//Login
client.login(token);
