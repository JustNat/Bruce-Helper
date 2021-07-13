
function handleBotInteraction(message) {
    // Boa bot
    if (message.content.toLowerCase() === 'boa bot, tô gostando de ver') {
        message.channel.send(':blush:')
    }
    // Não bot
    else if (message.content.toLowerCase() === 'não bot, assim não') {
        message.channel.send(':pleading_face:')
    }
    // Bot burro
    else if (message.content.toLowerCase().includes('bot') && message.content.toLowerCase().includes('burro')) {
        message.channel.send('burro é vc seu filho da puta')
    }
    // Te amou
    else if (message.content.toLowerCase().includes('te amo bot')) {
        message.channel.send('<:meuovo:864235249180737586>')
    }
}

module.exports = { handleBotInteraction }