const { Message, VoiceRegion, MessageActionRow } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { SpotifyPlugin } = require("@distube/spotify")
const { DisTube } = require("distube")
global.Discord = require('discord.js');
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS", "GUILD_VOICE_STATES"] 
})

client.login("OTYxNjQ1NDYzMDUwODA5NDY1.Yk8AIA.XQKzJngww_bohN4egvyR78U_NaI");


client.on("guildMemberAdd", member => {
    var embed = new Discord.MessageEmbed()
    .setAuthor({name: "Dissociatore"})
    .setTitle("Ti diamo un caloroso BENVENUTO😊")
    .setDescription(`Ma salve ${member.toString()}, benvenuto nel **DissoServer**! Ti aspettano amici e belle cose!😍`)
    .addField("Segui le mie live o piango😭", "Se lo farai ti amerò🥰")
    .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/welcome/images/786011000674975755/b3e6c1bf392904eb6caad668b23fdeb929d1128227b8e5bfdce608b1d335d01e.gif")
    .setImage("https://cdn-longterm.mee6.xyz/plugins/welcome/images/786011000674975755/ef8e17d3acb3e52587423a8d99595cc28fc7136323b37ad769f643546d89fc10.gif")
    .setFooter({ text: "Sei un grande!"})
    .setColor("ORANGE")
    client.channels.cache.get("786011792111304775").send({embeds: [embed]});        

})

client.on("ready", () => {
    client.user.setActivity({ type: "WATCHING", name: `Dissociatore` })
    console.log("ONLINE");

    client.guilds.cache.forEach(guild => {
        guild.commands.create({
            name: "verifypanel",
            description: "verify panel"
        })
        guild.commands.create({
            name: "rrpanel",
            description: "Pannello generi rr"
        })
        guild.commands.create({
            name: "rrpanel1",
            description: "Pannello giochi rr"
        })
        guild.commands.create({
            name: "rrpanel2",
            description: "Pannello personalità rr"
        })
        guild.commands.create({
            name: "rrpanel3",
            description: "Pannello ping rr"
        })
        guild.commands.create({
            name: "kick",
            description: "Kickare un utente",
            options: [
                {
                    name: "user",
                    description: "L'utente da espellere",
                    type: "USER",
                    required: true
                },
                {
                    name: "reason",
                    description: "Motivazione",
                    type: "STRING",
                    required: false
                }
            ]
        })
        guild.commands.create({
            name: "ping",
            description: "Guarda il ping del bot"
        })
        guild.commands.create({
            name: "ship",
            description: "Shippa un utente con chi vuoi",
            options: [
            {
                name: "utente",
                description: "Una delle persone che vuoi shippare",
                type: "USER",
                required: true 
            },
            {
                name: "utente2",
                description: "Una delle persone che vuoi shippare",
                type: "USER",
                required: true 
            },
        
        ]
        })
            guild.commands.create({
            name: "poll",
            description: "crea un poll",
            options: [
                {
                    name: "title",
                    description: "Il titolo del tuo poll",
                    type: "STRING",
                    required: true
                },
                {
                    name: "option1",
                    description: "L'opzione 1 per il tuo poll",
                    type: "STRING",
                    required: false
                },
                {
                    name: "option2",
                    description: "L'opzione 2 per il tuo poll",
                    type: "STRING",
                    required: false
                },
                {
                    name: "option3",
                    description: "L'opzione 2 per il tuo poll",
                    type: "STRING",
                    required: false
                },
                {
                    name: "option4",
                    description: "L'opzione 2 per il tuo poll",
                    type: "STRING",
                    required: false
                }   
            
            
            
            
            ]
        })
        guild.commands.create({
            name: "timeout",
            description: "metti in timeout un utente",
            options: [
                {
                    name: "user",
                    description: "Scegli l'utente da mettere in timeout",
                    type: "USER",
                    required: true
                },
                {
                    name: "time",
                    description: "Scegli il tempo in cui l'utente starà in timeout",
                    type: "STRING",
                    required: true
                },
                {
                    name: "reason",
                    description: "Scegli la motivazione per cui un utente viene messo in timeout",
                    type: "STRING",
                    required: false
                }
            ]
        })
        guild.commands.create({
            name: "suggest",
            description: "Fai una suggest!",
            options: [
                {
                    name: "suggestion",
                    description: "Scrivi cosa conterrà la tua suggestion",
                    type: "STRING",
                    required: true
                }
               
            ]
        })
        guild.commands.create({
            name: "suggestaccept",
            description: "Accetta una suggestion da parte di un utente",
            options: [
                {
                    name: "utente",
                    description: "L'utente che ha richiesto una tale suggestion",
                    type: "USER",
                    required: true
                },
                {
                    name: "suggestion",
                    description: "La suggestion fatta dall'utente",
                    type: "STRING",
                    required: true
                }
               
            ]
        })
    
    })

})
client.on("interactionCreate", interaction => {
     if (interaction.commandName == "ship") {
        let utente = interaction.options.getUser("utente")
        let utente2 = interaction.options.getUser("utente2")
        let utentename = utente.username
        let utentename2 = utente2.username
        var embed = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "0%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981176300108648518/DeliriousAridAnemone-size_restricted.gif")
        .setColor("RED")
        var embed1 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano al", "10%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981176300108648518/DeliriousAridAnemone-size_restricted.gif")
        .setColor("RED")
        var embed2 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "17%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981176300108648518/DeliriousAridAnemone-size_restricted.gif")
        .setColor("RED")
        var embed3 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "21%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981176300108648518/DeliriousAridAnemone-size_restricted.gif")
        .setColor("RED")
        var embed4 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "29%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175430734286908/C9M7.gif")
        .setColor("RED")
        var embed5 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "33%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175430734286908/C9M7.gif")
        .setColor("RED")
        var embed6 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "36%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175430734286908/C9M7.gif")
        .setColor("RED")
        var embed7 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "45%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175430734286908/C9M7.gif")
        .setColor("RED")
        var embed8 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "41%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175430734286908/C9M7.gif")
        .setColor("RED")
        var embed9 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "50%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175035840569424/darling-in-the-franxx-zhiro.gif")
        .setColor("RED")
        var embed10 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "57%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175035840569424/darling-in-the-franxx-zhiro.gif")
        .setColor("RED")
        var embed11 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "60%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175035840569424/darling-in-the-franxx-zhiro.gif")
        .setColor("RED")
        var embed12 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "69%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175035840569424/darling-in-the-franxx-zhiro.gif")
        .setColor("RED")
        var embed13 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "71%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175035840569424/darling-in-the-franxx-zhiro.gif")
        .setColor("RED")
        var embed14 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "75%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981175035840569424/darling-in-the-franxx-zhiro.gif")
        .setColor("RED")
        var embed15 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "83%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981174833335398420/anime-love-29.gif")
        .setColor("RED")
        var embed16 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "85%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981174833335398420/anime-love-29.gif")
        .setColor("RED")
        var embed17 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "89%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981174833335398420/anime-love-29.gif")
        .setColor("RED")
        var embed18 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "94%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981174833335398420/anime-love-29.gif")
        .setColor("RED")
        var embed19 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "99%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981174833335398420/anime-love-29.gif")
        .setColor("RED")
        var embed20 = new Discord.MessageEmbed()
        .setTitle(utentename + " & " + utentename2 + " 💖")
        .addField("Si amano allo", "100%")
        .setImage("https://cdn.discordapp.com/attachments/959112377687748628/981174833335398420/anime-love-29.gif")
        .setColor("RED")
        var messaggi = [embed,embed1,embed2,embed3,embed4,embed5,embed6,embed7,embed8,embed9,embed10,embed11,embed12,embed13,embed14,embed15,embed16,embed17,embed18,embed19,embed20]
        interaction.reply({ embeds: [messaggi[Math.floor(Math.random() * messaggi.length)]]});
        
    }
    
        if (interaction.commandName == "suggestaccept") {
            if (!interaction.member.permissions.has("BAN_MEMBERS")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            } 
            let approver = interaction.user.tag
            let utente = interaction.options.getUser("utente")
            let suggestion = interaction.options.getString("suggestion")
            var embed = new Discord.MessageEmbed()
            .setTitle("Nuova suggestion!")
            .addField("Suggestion offerta da:", utente.toString())
            .addField("SUGGESTION:", "**" + suggestion + "**")
            .addField("Votazioni", "Per votare una suggestion utilizzate le emoji qui sotto!")
            .setThumbnail(utente.displayAvatarURL())
            .setFooter({ text: "Suggestion approvata da" + " " + approver })
            .setColor("ORANGE")
            .setTimestamp()

            client.channels.cache.get("977205664038420570").send({embeds: [embed]});        
                
            interaction.reply({ content: "Hai accettato la suggestion con successo! Ricordati di inserire le emoji!", ephemeral: true })
        }
        
        if (interaction.commandName == "rrpanel3") {
            if (!interaction.member.permissions.has("BAN_MEMBERS")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }   
            var embed = new Discord.MessageEmbed()
            .setColor("AQUA")
            .setTitle("GENERE")
            .setDescription("Qual è il tuo genere? Clicca sull’emoji per farti conoscere dalla community")
            .addField("Twitch 🟣", "** **",  false)
            .addField("Palco 🟠", "** **",  false)
            .addField("Minecraft 🟢", "** **", false)
            .addField("Remove ❌", "Questo bottone serve per rimuovere i ruoli, in caso non facessero per te.")
            var button1 = new Discord.MessageButton()
            .setEmoji("🟣")
            .setCustomId("Twichrr")
            .setStyle("PRIMARY")
            var button2 = new Discord.MessageButton()
            .setEmoji("🟠")
            .setCustomId("palcorr")
            .setStyle("PRIMARY")
            var button3 = new Discord.MessageButton()
            .setEmoji("🟢")
            .setCustomId("minecraftprr")
            .setStyle("PRIMARY")
            var buttonremove = new Discord.MessageButton()
            .setEmoji("❌")
            .setCustomId("remove4")
            .setStyle("SECONDARY")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            .addComponents(buttonremove)
            interaction.reply({ embeds: [embed], components: [row], })
        }   
        if (interaction.commandName == "ping") {
            var embed = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco il ping del bot")
            .setColor("ORANGE")
            .setThumbnail("https://cdn.discordapp.com/avatars/961645463050809465/36a963135aa5c645b865ef3609f8f8f8.png?size=1024")
            .addField("Ping", `${client.ws.ping}ms`)
            .setTimestamp()
         interaction.reply({ embeds: [embed], ephemeral: true })
        }
            if (interaction.commandName == "suggest") {
            let suggestion = interaction.options.getString("suggestion")
            let utente = interaction.user.tag
            var embed = new Discord.MessageEmbed()
            .setTitle("Nuova suggest da approvare da parte di" + " " + utente)
            .setColor("ORANGE")
            .addField("**Introduzione staff**", "Per accettare la suggest, tu staffer che hai l'incarico di accettare o ignorare la suggest avrai diversi compiti da svolgere, niente paura, tutto quello che dovrai fare ti verrà spiegato qui.")
            .addField("**Accettare la suggest**", "Per accettare la suggestion da parte di un utente dovrai utilizzare un comando specializzato per fare ciò, il comando in questione è **/suggestaccept** , tale comando può essere utilizzato solo dagli staffer come te. il primo passaggio è appunto eseguire questo comando, poi avrai 2 campi uno è l'untente, l'utente è colui che ha chiesto una determinata suggest (colui che compare nel titolo), il secondo campo è la suggest in sè. Dovrai copiare la suggest che trovi nell'ultimo paragrafo di questo messaggio, (rimediare ad alcuni errori di punteggiatura e scrittura fatti dall'utente), e poi semplicemente eseguite il comando. Non è finita qui! Continua a leggere mi raccomando.")
            .addField("**Passaggio successivo**", "Una volta utilizzato il comando dovrai recarti nella stanza suggestion e aggiungere 2 emoji alla suggestion appena creata e accettata da te, tali emoji sono: ✅ e ❌. Fatto ciò il tuo lavoro è ufficialmente terminato! Grazie per aver letto e compreso la guida")
            .addField("Suggest:", "**" + suggestion + "**")
            .setTimestamp()

            client.channels.cache.get("977205838143950849").send({embeds: [embed]})
            
             interaction.reply({ content: "La tua richiesta è stata inoltrata, attendi che uno staffer approvi la tua suggestion", ephemeral: true})
        
        }
            if (interaction.commandName == "timeout") {
            if (!interaction.member.permissions.has("ADMINISTRATOR")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }
            if(!time){
                return interaction.reply({ content: "Non hai selezionato il tempo per cui l'utente verà timeoutato", ephemeral: true })
            }
            var utente = interaction.options.getUser("user")
            var reason = interaction.options.getString("reason") || "Nessun motivo"
            var time = interaction.options.getString("time") 
            var member = interaction.guild.members.cache.get(utente.id)
            
                member.timeout(time)
                var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Utente timeoutato")
                .setThumbnail(utente.displayAvatarURL())
                .addField("User", utente.toString())
                .addField("Tempo", time)
                .addField("Reason", reason)
                client.channels.cache.get("968593581310869555").send({embeds: [embed]})
                
            }
            if (interaction.commandName == "poll") {
            if (!interaction.member.permissions.has("ADMINISTRATOR")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }
            var option1 = interaction.options.getString("option1")
            var option2 = interaction.options.getString("option2")
            var option3 = interaction.options.getString("option3")
            var option4 = interaction.options.getString("option4")
            var title = interaction.options.getString("title")
            var embed = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setTitle("Domanda")
                .setDescription("**" + title + "**")
                .setThumbnail("https://cdn.discordapp.com/attachments/923917959246778378/968496481541709894/DiddoServer.gif")
                .addField("1️⃣"+ " " + option1 , "** **" )
                .addField("2️⃣"+ " " + option2 , "** **")
                .addField("3️⃣"+ " " + option3 , "** **")
                .addField("4️⃣"+ " " + option4 , "** **")
                .setFooter({ text: "Il sondaggio è stato avviato!"})
                .setTimestamp()
                interaction.reply({ embeds: [embed] })
                
            
            }

            if (interaction.commandName == "kick") {
            if (!interaction.member.permissions.has("BAN_MEMBERS")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }
            var utente = interaction.options.getUser("user")
            var reason = interaction.options.getString("reason") || "Nessun motivo"
            var member = interaction.guild.members.cache.get(utente.id)
            if (!member?.kickable) {
                return interaction.reply({ content: "Non posso kickare questo utente", ephemeral: true })
            }
                member.kick()
                var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Utente kickato")
                .setThumbnail(utente.displayAvatarURL())
                .addField("User", utente.toString())
                .addField("Reason", reason)
                interaction.reply({ embeds: [embed] })
        }
        
        if (interaction.commandName == "rrpanel2") {
        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
            return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
        }
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("PERSONALE")
        .setDescription("Scegli cosa ti rappresenta! Clicca sull'emoji per ottenere il tuo ruolo")
        .addField("Chill 😊", "** **" )
        .addField("Tossico 🤬", "** **" )
        .addField("Nerd 🤓", "** **")
        .addField("LGBT 🌈", "** **" )
        .addField("Clown 🤡", "** **")
        .addField("Otaku 🔥", "** **")
        .addField("Programmatore 💻", "** **")
        .addField("Gamer 🕹️", "** **")
        .addField("Disegnatore 🖌️", "** **")
        .addField("Remove ❌", "Questo bottone serve per rimuovere i ruoli, in caso non facessero per te.")
        var button1 = new Discord.MessageButton()
            .setEmoji("😊")
            .setCustomId("chill")
            .setStyle("PRIMARY")
            var button2 = new Discord.MessageButton()
            .setEmoji("🤬")
            .setCustomId("tossico")
            .setStyle("PRIMARY")
            var button3 = new Discord.MessageButton()
            .setEmoji("🤓")
            .setCustomId("nerd")
            .setStyle("PRIMARY")
            var button4 = new Discord.MessageButton()
            .setEmoji("🌈")
            .setCustomId("lgbtq")
            .setStyle("PRIMARY")
            var button5 = new Discord.MessageButton()
            .setEmoji("🤡")
            .setCustomId("clown")
            .setStyle("PRIMARY")
            var button6 = new Discord.MessageButton()
            .setEmoji("🔥")
            .setCustomId("otaku")
            .setStyle("PRIMARY")
            var button7 = new Discord.MessageButton()
            .setEmoji("💻")
            .setCustomId("programmatore")
            .setStyle("PRIMARY")
            var button8 = new Discord.MessageButton()
            .setEmoji("🕹️")
            .setCustomId("gamer")
            .setStyle("PRIMARY")
            var button9 = new Discord.MessageButton()
            .setEmoji("🖌️")
            .setCustomId("disegnatore")
            .setStyle("PRIMARY")
            var buttonremove1 = new Discord.MessageButton()
            .setEmoji("❌")
            .setCustomId("remove3")
            .setStyle("SECONDARY")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            .addComponents(button4)
            var row1 = new Discord.MessageActionRow()
            .addComponents(button5)
            .addComponents(button6)
            .addComponents(button7)
            .addComponents(button8)
            var row2 = new Discord.MessageActionRow()
            .addComponents(button9)
            .addComponents(buttonremove1)
            interaction.reply({ embeds: [embed], components: [row, row1, row3], })
    
    }
    
    
        if (interaction.commandName == "rrpanel") {
            if (!interaction.member.permissions.has("BAN_MEMBERS")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }   
            var embed = new Discord.MessageEmbed()
            .setColor("AQUA")
            .setTitle("GENERE")
            .setDescription("Qual è il tuo genere? Clicca sull’emoji per farti conoscere dalla community")
            .addField("Ragazzo ♂️", "** **",  false)
            .addField("Ragazza ♀️", "** **",  false)
            .addField("Non Binary ⚧", "** **", false)
            .addField("Remove ❌", "Questo bottone serve per rimuovere i ruoli, in caso non facessero per te.")
            var button1 = new Discord.MessageButton()
            .setEmoji("♂️")
            .setCustomId("maschio")
            .setStyle("PRIMARY")
            var button2 = new Discord.MessageButton()
            .setEmoji("♀️")
            .setCustomId("femmina")
            .setStyle("PRIMARY")
            var button3 = new Discord.MessageButton()
            .setEmoji("⚧")
            .setCustomId("lgbt")
            .setStyle("PRIMARY")
            var buttonremove = new Discord.MessageButton()
            .setEmoji("❌")
            .setCustomId("remove2")
            .setStyle("SECONDARY")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            .addComponents(buttonremove)
            interaction.reply({ embeds: [embed], components: [row], })
        }   
            
            
        if (interaction.commandName == "rrpanel1") {
            if (!interaction.member.permissions.has("BAN_MEMBERS")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }   
            var embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("GIOCHI")
            .setDescription("Scegli i tuoi giochi per trovare persone con cui giocare! Clicca sull'emoji per ottenere il tuo ruolo")
            .addField("Minecraft ⛏️", "** **" )
            .addField("Valorant 🦇", "** **" )
            .addField("Rocket League 🚙", "** **")
            .addField("League Of Legends ⚠️", "** **" )
            .addField("Fortnite 👷", "** **")
            .addField("Osu 🎵", "** **")
            .addField("Roblox 🧸", "** **")
            .addField("Among Us 🔴", "** **")
            .addField("GTA 5 🎖️", "** **")
            .addField("Genshin Impact 🎆", "** **")
            .addField("Phasmophobia 👻", "** **")
            .addField("Remove ❌", "Questo bottone serve per rimuovere i ruoli, in caso non facessero per te.")
            var button1 = new Discord.MessageButton()
            .setEmoji("⛏️")
            .setCustomId("minecraft")
            .setStyle("PRIMARY")
            var button2 = new Discord.MessageButton()
            .setEmoji("🦇")
            .setCustomId("valorant")
            .setStyle("PRIMARY")
            var button3 = new Discord.MessageButton()
            .setEmoji("⚠️")
            .setCustomId("league of legends")
            .setStyle("PRIMARY")
            var button4 = new Discord.MessageButton()
            .setEmoji("🚙")
            .setCustomId("Rocket League")
            .setStyle("PRIMARY")
            var button5 = new Discord.MessageButton()
            .setEmoji("👷‍♂️")
            .setCustomId("fortnite")
            .setStyle("PRIMARY")
            var button6 = new Discord.MessageButton()
            .setEmoji("🎵")
            .setCustomId("osu")
            .setStyle("PRIMARY")
            var button7 = new Discord.MessageButton()
            .setEmoji("🧸")
            .setCustomId("roblox")
            .setStyle("PRIMARY")
            var button8 = new Discord.MessageButton()
            .setEmoji("🔴")
            .setCustomId("among us")
            .setStyle("PRIMARY")
            var button9 = new Discord.MessageButton()
            .setEmoji("🎖️")
            .setCustomId("gta 5")
            .setStyle("PRIMARY")
            var button10 = new Discord.MessageButton()
            .setEmoji("🎆")
            .setCustomId("genghin impact")
            .setStyle("PRIMARY")
            var button11 = new Discord.MessageButton()
            .setEmoji("👻")
            .setCustomId("phasmofobia")
            .setStyle("PRIMARY")
            var buttonremove2 = new Discord.MessageButton()
            .setEmoji("❌")
            .setCustomId("remove1")
            .setStyle("SECONDARY")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            .addComponents(button4)
            .addComponents(button5)
            var row1 = new Discord.MessageActionRow()
            .addComponents(button6)
            .addComponents(button7)
            .addComponents(button8)
            .addComponents(button9)
            .addComponents(button10)
            var row2 = new Discord.MessageActionRow()
            .addComponents(button11)
            .addComponents(buttonremove2)
            interaction.reply({ embeds: [embed], components: [row, row1, row2], })
        }   
         
        
        if (interaction.commandName == "verifypanel") {
         if (!interaction.member.permissions.has("BAN_MEMBERS")) {
         return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }
            var button1 = new Discord.MessageButton()
            .setLabel("Verify")
            .setCustomId("verifypanelcid")
            .setStyle("SUCCESS")
            var button2 = new Discord.MessageButton()
            .setLabel("Perché?")
            .setCustomId("whybuttonpanel")
            .setStyle("PRIMARY")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            var embed = new Discord.MessageEmbed()
            .setTitle("CLICCA QUA PER VERIFICARTI")
            .setColor("ORANGE")
            .setDescription("Questo è il server ufficiale di Dissociatore ma, per usarlo a piena funzionalità, serve verificarsi! Per maggiori informazioni clicca **_Perché?_**")
            interaction.reply({ embeds: [embed], components: [row], })
       
        
        }
})
client.on("interactionCreate", interaction => {


        if (interaction.customId == "remove4") {                           //remove                       //remove
        const maschio = interaction.guild.roles.cache.get("974324592682348574");
        const maschio1 = interaction.guild.roles.cache.get("974324607630843954");
        const maschio2 = interaction.guild.roles.cache.get("974324611401535538");
        interaction.member.roles.remove(maschio);
        interaction.member.roles.remove(maschio1);
        interaction.member.roles.remove(maschio2);
        var embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("I ruoli sono stati tolti con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
        }
    if (interaction.customId == "Twichrr") {           //Twichrr           //Twichrr
        const maschio = interaction.guild.roles.cache.get("974324592682348574");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "palcorr") {
         const maschio = interaction.guild.roles.cache.get("974324607630843954");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "minecraftprr") {
        const maschio = interaction.guild.roles.cache.get("974324611401535538");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "maschio") {           //genere            //genere
        const maschio = interaction.guild.roles.cache.get("967858953960701983");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "femmina") {
        
        const maschio = interaction.guild.roles.cache.get("967858978312831077");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "lgbt") {
        
        const maschio = interaction.guild.roles.cache.get("967857801017827338");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "minecraft") {                         //giochi                  //giochi 
        const maschio = interaction.guild.roles.cache.get("967857801139474432");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }       
    if (interaction.customId == "valorant") {                               //valorant              //valorant
        const maschio = interaction.guild.roles.cache.get("967858136675401748");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "league of legends") {                  //league of legends         //league of legends
        const maschio = interaction.guild.roles.cache.get("968072502536462366");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "Rocket League") {                          //Rocket League             //Rocket League
        const maschio = interaction.guild.roles.cache.get("967857801315618876");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "fortnite") {                   //fortnite            //fortnite                      //fortnite
        const maschio = interaction.guild.roles.cache.get("967858561378037842");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "osu") {                        //osu                   //osu           //osu
        const maschio = interaction.guild.roles.cache.get("967858490813087795");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "roblox") {                     //roblox            //roblox            //roblox
        const maschio = interaction.guild.roles.cache.get("967858566113423400");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "gta 5") {                            //gta 5                      //gta 5              //gta 5
        const maschio = interaction.guild.roles.cache.get("967858132053282826");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "genghin impact") {             //genghin impact           //genghin impact       //genghin impact
        const maschio = interaction.guild.roles.cache.get("967858140987146290");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
   
    if (interaction.customId == "phasmofobia") {                                   //phasmofobia               //phasmofobia
        const maschio = interaction.guild.roles.cache.get("968069017157918760");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "clash royale") {                              //clash royale              //clash royale
        const maschio = interaction.guild.roles.cache.get("967858144288051240");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "among us") {                           //among us                           //among us
        const maschio = interaction.guild.roles.cache.get("967858487432466482");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "chill") {                           //chill                          //chill
        const maschio = interaction.guild.roles.cache.get("968069371454951464");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "tossico") {                           //tossico                          //tossico
        const maschio = interaction.guild.roles.cache.get("967857778121142332");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "nerd") {                           //nerd                           //nerd
        const maschio = interaction.guild.roles.cache.get("967857779127754833");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "lgbtq") {                           //lgbtq                          //lgbtq
        const maschio = interaction.guild.roles.cache.get("967857798950043750");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "clown") {                           //clown                         //clown
        const maschio = interaction.guild.roles.cache.get("967857779287162882");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "otaku") {                           //otaku                           //otaku
        const maschio = interaction.guild.roles.cache.get("967857797612073061");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "programmatore") {                           //programmatore                           //programmatore
        const maschio = interaction.guild.roles.cache.get("967857797792403496");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "gamer") {                           //gamer                           //gamer
        const maschio = interaction.guild.roles.cache.get("967857798807449600");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "disegnatore") {                           //disegnatore                           //disegnatore
        const maschio = interaction.guild.roles.cache.get("967857775277391974");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    
    if (interaction.customId == "remove1") {                           //remove                       //remove
        const maschio = interaction.guild.roles.cache.get("967857801139474432");
        const maschio1 = interaction.guild.roles.cache.get("967858136675401748");
        const maschio2 = interaction.guild.roles.cache.get("967857801315618876");
        const maschio3 = interaction.guild.roles.cache.get("967858132053282826");
        const maschio4 = interaction.guild.roles.cache.get("967858140987146290");
        const maschio5 = interaction.guild.roles.cache.get("967858487432466482");
        const maschio6 = interaction.guild.roles.cache.get("967858490813087795");
        const maschio7 = interaction.guild.roles.cache.get("967858561378037842");
        const maschio8 = interaction.guild.roles.cache.get("967858566113423400");
        const maschio9 = interaction.guild.roles.cache.get("968069017157918760");
        const maschio10 = interaction.guild.roles.cache.get("968072502536462366");
        interaction.member.roles.remove(maschio);
        interaction.member.roles.remove(maschio1);
        interaction.member.roles.remove(maschio2);
        interaction.member.roles.remove(maschio3);
        interaction.member.roles.remove(maschio4);
        interaction.member.roles.remove(maschio5);
        interaction.member.roles.remove(maschio6);
        interaction.member.roles.remove(maschio7);
        interaction.member.roles.remove(maschio8);
        interaction.member.roles.remove(maschio9);
        interaction.member.roles.remove(maschio10);
        var embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("I ruoli sono stati tolti con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    

    
    if (interaction.customId == "remove2") {                           //remove                       //remove
        const maschio = interaction.guild.roles.cache.get("967858978312831077");
        const maschio1 = interaction.guild.roles.cache.get("967858953960701983");
        const maschio2 = interaction.guild.roles.cache.get("967857801017827338");
        interaction.member.roles.remove(maschio);
        interaction.member.roles.remove(maschio1);
        interaction.member.roles.remove(maschio2);
        var embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("I ruoli sono stati tolti con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "remove3") {                           //remove                       //remove
        const maschio = interaction.guild.roles.cache.get("967857775277391974");
        const maschio1 = interaction.guild.roles.cache.get("967857779287162882");
        const maschio2 = interaction.guild.roles.cache.get("967857798950043750");
        const maschio3 = interaction.guild.roles.cache.get("967857797612073061");
        const maschio4 = interaction.guild.roles.cache.get("967857798807449600");
        const maschio5 = interaction.guild.roles.cache.get("968069371454951464");
        const maschio6 = interaction.guild.roles.cache.get("967857779127754833");
        const maschio7 = interaction.guild.roles.cache.get("967857778121142332");
        const maschio8 = interaction.guild.roles.cache.get("967857797792403496");
        interaction.member.roles.remove(maschio);
        interaction.member.roles.remove(maschio1);
        interaction.member.roles.remove(maschio2);
        interaction.member.roles.remove(maschio3);
        interaction.member.roles.remove(maschio4);
        interaction.member.roles.remove(maschio5);
        interaction.member.roles.remove(maschio6);
        interaction.member.roles.remove(maschio7);
        interaction.member.roles.remove(maschio8);
       var embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("I ruoli sono stati tolti con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "verifypanelcid") {
        var role = interaction.guild.roles.cache.get("786012564370489344");
        var role1 = interaction.guild.roles.cache.get("892512109664043069");
        interaction.member.roles.add(role);
        interaction.member.roles.add(role1);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Ti sei verificato con successo!")
        .setDescription("Adesso potrai utilizzare tutte le funzionalità del server! Buona permanenza")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "whybuttonpanel") {
        var embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Perché devo verificarmi?")
        .setDescription("E' necessario verificarti per riuscire ad accedere a tutte le funzionalità del server, questo passaggio serve per prevenire eventuali raid o complicanze da parte degli utenti.")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    
})


client.on('messageCreate', message => {
    var parolacce = ["http", "Http"
 ] 
    
   
 var trovata = false;
    
parolacce.forEach(parola => {
if (message.content.includes(parola))  {
trovata = true;
}
  
    })
    if(trovata) {
        if (message.member.permissions.has("BAN_MEMBERS")) { 
            return
        }
    
    
    var embed = new Discord.MessageEmbed()
    .setTitle("Qualcuno ha mandato un link!")
    .addField("Scegli se mutare o ignorare", message.author.toString())
    .setDescription("Decidi se prendere dei provvedimenti oppure no")
    .setColor("RED")
    .setTimestamp()
    client.channels.cache.get("976100149208154162").send({embeds: [embed]})
    
}
   







if(message.content === '.join') {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send("Non puoi eseguire questo comando");
        } 
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
    if (message.content.startsWith(".clear")) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
        var count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido")
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 2500)
        })
    }


})
const distube = new DisTube(client, {
    youtubeDL: false,
    plugins: [new SpotifyPlugin()],
    leaveOnEmpty: true,
    leaveOnStop: true
})
client.on("messageCreate", message => {
     if (message.content.startsWith(".play")) {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        let args = message.content.split(/\s+/)
        let query = args.slice(1).join(" ")

        if (!query) {
            return message.channel.send("Inserisci la canzone che vuoi ascoltare")
        }

        distube.play(voiceChannelBot || voiceChannel, query, {
            member: message.member,
            textChannel: message.channel,
            message: message
        })
    }
    
    
        if (message.content == ".pause") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        try {
            distube.pause(message)
                .catch(() => { return message.channel.send("Nessuna canzone in riproduzione o canzone già in pausa") })
        } catch {
            return message.channel.send("Nessuna canzone in riproduzione o canzone già in pausa")
        }

        message.channel.send("Song paused")
    }

    if (message.content == ".resume") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        try {
            distube.resume(message)
                .catch(() => { return message.channel.send("Nessuna canzone in riproduzione o canzone già in riproduzione") })
        } catch {
            return message.channel.send("Nessuna canzone in riproduzione o canzone già in riproduzione")
        }

        message.channel.send("Song resumed")
    }

    if (message.content == ".queue") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        let queue = distube.getQueue(message)

        if (!queue) return message.channel.send("Coda vuota")

        let totPage = Math.ceil(queue.songs.length / 10)
        let page = 1

        let songsList = ""
        for (let i = 10 * (page - 1); i < 10 * page; i++) {
            if (queue.songs[i]) {
                songsList += `${i + 1}. **${queue.songs[i].name.length <= 100 ? queue.songs[i].name : `${queue.songs[i].name.slice(0, 100)}...`}** - ${queue.songs[i].formattedDuration}\r`
            }
        }

        let embed = new Discord.MessageEmbed()
            .addField("Queue", songsList)
            .setFooter({ text: `Page ${page}/${totPage}` })

        let button1 = new Discord.MessageButton()
            .setLabel("Indietro")
            .setStyle("PRIMARY")
            .setCustomId("indietro")

        let button2 = new Discord.MessageButton()
            .setLabel("Avanti")
            .setStyle("PRIMARY")
            .setCustomId("avanti")

        if (page == 1) button1.setDisabled()
        if (page == totPage) button2.setDisabled()

        let row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)

        message.channel.send({ embeds: [embed], components: [row] })
            .then(msg => {
                const collector = msg.createMessageComponentCollector()

                collector.on("collect", i => {
                    i.deferUpdate()

                    if (i.user.id != message.author.id) return i.reply({ content: "Questo bottone non è tuo", ephemeral: true })

                    if (i.customId == "indietro") {
                        page--
                        if (page < 1) page = 1
                    }
                    if (i.customId == "avanti") {
                        page++
                        if (page > totPage) page = totPage
                    }

                    let songsList = ""
                    for (let i = 10 * (page - 1); i < 10 * page; i++) {
                        if (queue.songs[i]) {
                            songsList += `${i + 1}. **${queue.songs[i].name.length <= 100 ? queue.songs[i].name : `${queue.songs[i].name.slice(0, 100)}...`}** - ${queue.songs[i].formattedDuration}\r`
                        }
                    }

                    let embed = new Discord.MessageEmbed()
                        .addField("Queue", songsList)
                        .setFooter({ text: `Page ${page}/${totPage}` })

                    let button1 = new Discord.MessageButton()
                        .setLabel("Indietro")
                        .setStyle("PRIMARY")
                        .setCustomId("indietro")

                    let button2 = new Discord.MessageButton()
                        .setLabel("Avanti")
                        .setStyle("PRIMARY")
                        .setCustomId("avanti")

                    if (page == 1) button1.setDisabled()
                    if (page == totPage) button2.setDisabled()

                    let row = new Discord.MessageActionRow()
                        .addComponents(button1)
                        .addComponents(button2)

                    msg.edit({ embeds: [embed], components: [row] })
                })
            })
    }

    if (message.content == ".skip") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        try {
            distube.skip(message)
                .catch(() => { return message.channel.send("Nessuna canzone in riproduzione o canzone successiva non presente") })
        } catch {
            return message.channel.send("Nessuna canzone in riproduzione o canzone successiva non presente")
        }

        message.channel.send("Song skipped")
    }

    if (message.content == ".previous") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        try {
            distube.previous(message)
                .catch(() => { return message.channel.send("Nessuna canzone in riproduzione o canzone precedente non presente") })
        } catch {
            return message.channel.send("Nessuna canzone in riproduzione o canzone precedente non presente")
        }

        message.channel.send("Previous song")
    }

    if (message.content == ".stop") {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale")
        }

        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
            return message.channel.send("Qualun'altro sta già ascoltando della musica")
        }

        try {
            distube.stop(message)
                .catch(() => { return message.channel.send("Nessuna canzone in riproduzione") })
        } catch {
            return message.channel.send("Nessuna canzone in riproduzione")
        }

        message.channel.send("Queue stopped")
    }
})

distube.on("addSong", (queue, song) => {
    let embed = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setTitle("Song added")
        .addField("Song", song.name)

    queue.textChannel.send({ embeds: [embed] })
})

distube.on("playSong", (queue, song) => {
    let embed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setTitle("Playing song...")
        .addField("Song", song.name)
        .addField("Requested by", song.user.toString())

    queue.textChannel.send({ embeds: [embed] })
})

distube.on("searchNoResult", (message, query) => {
    message.channel.send("Canzone non trovata")
})

