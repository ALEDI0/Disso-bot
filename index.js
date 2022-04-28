const { Message, VoiceRegion } = require('discord.js');

global.Discord = require('discord.js');
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] 
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
       
    
    
    })

})

client.on("interactionCreate", interaction => {
        if (!interaction.isCommand()) return
        
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
                .setDescription(title)
                .setThumbnail("https://cdn.discordapp.com/attachments/959112377687748628/968913031268548668/zenitsu.png")
                .addField("1️⃣"+ " " + option1 , "** **" )
                .addField("2️⃣"+ " " + option2 , "** **")
                .addField("3️⃣"+ " " + option3 , "** **")
                .addField("4️⃣"+ " " + option4 , "** **")
                .setFooter({ text: "Il sondaggio è stato avviato!"})
                interaction.reply({ embeds: [embed] })
                .then(embedMessage => {
                    
                   interaction.embedMessage.react("👎");
                })
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
            .setCustomId("verifypanel")
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
    if (interaction.customId == "verifypanel") {
        const role = interaction.guild.roles.cache.get("786012564370489344");
        const role1 = interaction.guild.roles.cache.get("892512109664043069");
        
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
