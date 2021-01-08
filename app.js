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
    else if (message.content.toLowerCase() === ".pombão") {
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
    else if (message.content.toLowerCase() === '.embed') {
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
    else if (message.content.toLowerCase() === '.comandos') {
        message.reply('Lembrando que o prefixo é "." \n *ping* \n *gay* \n *pombão* \n *avatar* \n *play* \n *embed* \n *sn* (Decidir se sim ou não) \n *sorteio* \n O comando "é gay" é utilizado marcando e digitando "é gay" no final. \n Obviamente nem todos os comandos estão prontos, então vai reclamar na casa de cacete.')
    }
// COMANDO VAI TOMAR NO CU

    else if (message.content.endsWith('vai tomar no cu')) {
        const vtnc = Math.floor((Math.random()* 10) + 1)
        if (vtnc == 1)
        message.channel.send('tomate cru é vitamina, como tu e tua prima')
        if (vtnc == 2)
        message.channel.send(`ih ala o nome do cara é ${message.author}kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk`)
        if (vtnc == 3)
        message.channel.send('vai comer tua bunda')
        if (vtnc == 4)
        message.channel.send('FILHO DA PUTA VOU COMER SEU CU. ARROMBADO DO CARALHO, SUA MÃE ALUGA A BUCETA PRA COMPRAR FIXADOR DE DENTADURA PRO SEU PAI, AQUELE CORNO BROXA. CHIFRUDO, VOU ENFIAR MEU BRAÇO NO SEU ÂNUS E ARRANCAR SEU INTESTINO. LOGO DEPOIS VOU ENFORCAR SUA AVÓ COM ELE, AQUELA VELHA BISCATE QUE FAZ CROCHÊ PRA FORA EM TROCA DE PICA. SUAS TIAS TÊM PÊLO NO DENTE E SUA IRMÃ TEM POLENGUINHO NA VIRILHA, SEU GRANDE FILHO DA PRÊULA. SUA MÃE DAVA LEITE DA CABEÇA DO PAU DO SEU PAI PRA VOCÊ BEBER, FILHO DA PUTA. ISSO MESMO, VOCÊ TOMAVA MAMADEIRA DE PORRA DESDE CRIANÇA. POR ISSO É O RETARDADO MENTAL QUE É HOJE, SEU ZÉ BEBEDOR DE SUCO DE CARALHO. O PADRE TE BENZEU COM ÁGUA PARADA, HOJE VOCÊ SOFRE OS EFEITOS RETARDADOS DO AEDES AEGYPT QUE SE ALOJA DENTRO DO SEU OUVIDO, SEU MONTE DE ESTERCO. SEU AVÔ ARROMBADO USA FRALDA E TE OBRIGA A LIMPAR A MERDA MOLE DELE COM UMA COLHER DE DANONINHO, SEU CAPACHO DO CARALHO. SUA MÃE? FAZ-TE DORMIR COM O REX, AQUELE CHIUAUA FILHO DA PUTA E CHEIO DE SARNA. E DURANTE A MADRUGADA O REX ABUSA SEXUALMENTE DE VOCÊ, ATÓLA A PATINHA DENTRO DESSE SEU CU PELÚDO, SEU FRACASSADO. LEMBRA DA JANDIRA, AQUELA SUA PRIMA MONOTETA? POIS É, ENFIEI UM TACO DE BASEBALL NO CU DELA. A MÃE DELA DEU O FLAGRANTE NA GENTE E AO INVÉS DE FICAR BRAVA, PEDIU O TACO EMPRESTADO. VADIA DO CARALHO ESSA SUA TIA, SÓ PODE TER APRENDIDO COM SUA MÃE, AQUELA BISCATE. QUE ALIÁS, CONTINUA CHUPANDO O CARALHO DO ZÉ DO PACOTE, O TRAFICANTE QUE MORA AÍ DO LADO DA SUA CASA DE BARRO, SEU FILHO DUMA MACONHEIRA VAGABUNDA. O CABELO DA SUA MÃE É TÃO RUIM QUE ELA FAZ CHAPINHA NOS PÊLOS DO SOVACO E USA UM DESODORANTE COM CONDICIONADOR CAPILAR, AQUELA VELHA CARCOMIDA DESGRAÇADA. VOCÊ FOI ENCONTRADO NO LIXO, SEU MERDA. E ATÉ HOJE SUA MÃE PEDE DESCULPAS PRA DEUS PELO PEDAÇO DE MERDA QUE PARIU. ATÉ TE EMBALOU NUM SACO PRETO ANTES DE JOGAR NO LIXO, MAS VOCÊ É TÃO HORRÍVEL QUE UM MENDIGO TE ENCONTROU E QUASE TE COMEU ACHANDO QUE TU ERA UMA LAZANHA, SEU ESCROTO FILHO DA PUTA. SEU PAI VENDE CARTA DE MAGIC ROUBADA PRA JOGAR UMA HORA NA LAN HOUSE E ENTRAR EM SITE DEPOIS ELE SE MASTURBA E GOZA DENTRO DO SEU TRAVESSEIRO. ISSO MESMO, AQUELA MANCHA BRANCA QUE INSISTE EM APARECER TODA VEZ QUE VOCÊ ACORDA NÃO É SUA SALIVA, SEU FILHO DA PUTA. VOCÊ SEMPRE FOI O MAIS ALOPRADO DA CLASSE. LEMBRA QUANDO ENFIARAM UM GIZ NO SEU CU? VOCÊ FICOU UMA SEMANA CAGANDO BRANCO, PARECIA GESSO. E QUANDO VOCÊ IA RECLAMAR COM A PROFESSORA, ELA TE MANDAVA CALAR A BOCA. AQUELA VELHA SEMPRE SOUBE QUE VOCÊ TEM PROBLEMAS MENTAIS, SEU RETARDADO. AÍ VOCÊ TINHA QUE CALAR ESSA SUA BOCA ENQUANTO O GIZ DERRETIA DENTRO DO SEU INTESTINO, HAHA. FRACASSADO, VÊ SE PASSA UMA GILLETTE NESSE SEU BIGODINHO RIDÍCULO. TU PARECES O MANO BROWN, PORRA. E DÁ UM JEITO NESSAS SUAS TETINHAS DE BRIGADEIRO, ELAS ESTÃO COMEÇANDO A FEDER. TODA VEZ QUE EU PASSO DO SEU LADO, SINTO CHEIRO DE CACHORRO MORTO. QUE ALIÁS, SE ASSEMELHA AO CHEIRO DA XAVASCA DA SUA MÃE, AQUELA LEITOA MALDITA. DIZ PRA ELA CONGELAR O FEIJÃO QUE HOJE EU VOU CHEGAR TARDE, SEU PUTO. SEU FILHO DUMA PUTA DO CARALHO SE ENXERGA PORRA… VAI TOMAR NO MEIO DA ÍRIS DO OLHO DO TEU CÚ SEU FILHO DUMA VENDEDORA DE PIROCÓPTERO! SEU PAI VENDE BILHETE DE LOTERIA ESPORTIVA NA FRENTE DA SAPATARIA SEU FILHO DUMA PUTA DO CARALHO! TOMARA Q SUA VÓ ESCORREGUE NO BOX ENQTO TIVER TOMANDO BANHO E CAIA DE TESTA NA SABONETEIRA SEU CORNO DO CARALHO! QUERO MAIS EH QUE VC SE FODA JUNTO COM TODA A SUA FAMÍLIA AKELE BANDO DE CATADOR DE GARRAFA DO CENTRO COMUNITÁRIO! SUA MÃE DA AULA DE MAMULENGO PROS PRESIDIÁRIOS DO CARANDIRÚ SEU FILHO DA PUTA! SEU PAI ANDA PUXANDO UMA CARROÇA PELA CIDADE CATANDO PAPELÃO PRA DEPOIS FAZER UM PACOTÃO E VENDER TUDO POR um REAL! SUA MÃE ENCAPA SEUS LIVROS E CADERNOS COM SACO DE ARROZ TIO JOÃO SEU FILHO DUMA LAVADERA DO CARALHO! SEU PAI VENDE REDE NO FAROL SEU FILHO DA PUTA! SEU VÔ CONSERTA PANELA DE PRESSÃO E AMOLA FACA DE PORTA EM PORTA SEU FILHU DUM PÉ DE AIPIM! SEU PAI FAZ CARRETO DE KOMBI PORRA… CARALHO! VAI TOMA NO CÚ SEU FILHO DA PUTA EH ESSA PORRA DESSE CARALHO ESPACIAL VUANU ATRÁS DE VOCÊ PORRA VAI TOMA NO CÚ CARALHO! QUERO MAIS EH Q VC SE FODA E QUE A TOWNER Q SEU PAI USA PRA TRABALHAR (PERUEIRO FILHO DA PUTA) PEGUE FOGO COM VC, SUA MÃE, SUA IRMÃ, SUA VÓ E MAIS TRÊS CLIENTES… SEM CONTAR TBM Q QUERO Q TENHA INFILTRAÇÃO NO SEU BARRACO TODO! QUERO Q SUA FAMÍLIA TODA SEJA VÍTIMA DUMA EPIDEMIA DE MALÁRIA E FEBRE AMARELA! E DIGO MAIS! DESEJO QUE VOCÊ TENHA CANCER NO CÉREBRO E QUE SUA MÃE CAIA COM O CÚ NA QUINA DA MESA DA SALA! SUA MÃE GUARDA PÉ DE MOLEQUE E SUSPIRO QUE ELA FAZ PRA VENDE EM PACOTE DE MANTEIGA CAMPESINA SEU FILHO DUMA BISCATE RAMPEIRA E SEM DONO DO CARALHO QUERO MAIS EH Q VC MORRA JUNTO COM TODA SUA FAMÍLIA PORRA CARALHO VAI TOMA NO CÚ MERDA VAI SE FUDER… FILHO DUM SACO DE ADUBO MANAH…! SEU PAI FAZ GLOBO DA MORTE DE BARRAFORTE COM SUA MÃE NA GARUPA FILHO DA PUTA! SUA MÃE AGUENTA A TORCIDA TODA DO FLAMENGO SOZINHA E AINDA PEDE BIS SEU CORNO DO CARALHO, FILHO DA PUTA! SEU PAI É FEIRANTE AQUELE CORNO VENDEDOR DE ALFACE!')
        if (vtnc == 5)
        message.channel.send('tá engraçado hoje em seu filho duma puta, tá com o patati patatá enfiado no teu cu é')
        if (vtnc == 6)
        message.channel.send('n')
        if (vtnc == 7)
        message.channel.send('seu cu')
        if (vtnc == 8)
        message.channel.send('ok')
        if (vtnc == 9)
        message.channel.send('fodase')
        if (vtnc == 10)
        message.channel.send('gg gay')
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
