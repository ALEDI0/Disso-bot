const { Message, VoiceRegion } = require('discord.js');

global.Discord = require('discord.js');
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] 
})

client.login("OTYxNjQ1NDYzMDUwODA5NDY1.Yk8AIA.XQKzJngww_bohN4egvyR78U_NaI");


client.on("guildMemberAdd", member => {
    var embed = new Discord.MessageEmbed()
    .setAuthor({name: "**Dissociatore**"})
    .setTitle("Ti diamo un caloroso BENVENUTO😊")
    .setDescription(`Ma salve ${member.toString()} , benvenuto nel **DissoServer**! Ti aspettano amici e belle cose!😍`)
    .addField("Segui le mie live o piango😭", "Se lo farai ti amerò🥰")
    .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/welcome/images/786011000674975755/b3e6c1bf392904eb6caad668b23fdeb929d1128227b8e5bfdce608b1d335d01e.gif")
    .setImage("https://cdn-longterm.mee6.xyz/plugins/welcome/images/786011000674975755/ef8e17d3acb3e52587423a8d99595cc28fc7136323b37ad769f643546d89fc10.gif")
    .setFooter({ text: "Sei un grande!"})
    .setColor("ORANGE")
    client.channels.cache.get("954468073799319602").send({embeds: [embed]});        



})

client.on("ready", () => {
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
    })








})

client.on("interactionCreate", interaction => {
        if (!interaction.isCommand()) return
    
        if (interaction.commandName == "rrpanel2") {
        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
            return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
        }
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("GIOCHI")
        .setDescription("Clicca sull'emoji per ottenere il tuo ruolo")
        .addField("Chill 😊", "** **" )
        .addField("Tossico 🤬", "** **" )
        .addField("Nerd 🤓", "** **")
        .addField("LGBT 🌈", "** **" )
        .addField("Clown 🤡", "** **")
        .addField("Otaku 🔥", "** **")
        .addField("Programmatore 💻", "** **")
        .addField("Gamer 🕹️", "** **")
        .addField("Disegnatore 🖌️", "** **")
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
            var button6 = new Discord.MessageButton()
            .setEmoji("💻")
            .setCustomId("programmatore")
            .setStyle("PRIMARY")
            var button6 = new Discord.MessageButton()
            .setEmoji("🕹️")
            .setCustomId("gamer")
            .setStyle("PRIMARY")
            var button7 = new Discord.MessageButton()
            .setEmoji("🖌️")
            .setCustomId("disegnatore")
            .setStyle("PRIMARY")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            .addComponents(button4)
            var row1 = new Discord.MessageActionRow()
            .addComponents(button5)
            .addComponents(button6)
            .addComponents(button7)
            interaction.reply({ embeds: [embed], components: [row, row1], })
    
    }
    
    
    
    
        if (interaction.commandName == "rrpanel") {
            if (!interaction.member.permissions.has("BAN_MEMBERS")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }   
            var embed = new Discord.MessageEmbed()
            .setColor("AQUA")
            .setTitle("GENERE")
            .setDescription("Clicca sull'emoji per ottenere il tuo ruolo")
            .addField("Ragazzo ♂️", "** **",  false)
            .addField("Ragazza ♀️", "** **",  false)
            .addField("Non Binary ⚧", "** **", false)
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
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            interaction.reply({ embeds: [embed], components: [row], })
        }   
            
            
        if (interaction.commandName == "rrpanel1") {
            if (!interaction.member.permissions.has("BAN_MEMBERS")) {
                return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
            }   
            var embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("GIOCHI")
            .setDescription("Clicca sull'emoji per ottenere il tuo ruolo")
            .addField("Minecraft ⛏️", "** **" )
            .addField("Valorant 🦇", "** **" )
            .addField("Rocket League 🚙", "** **")
            .addField("League Of Legends ⚠️", "** **" )
            .addField("Fortnite 👷", "** **")
            .addField("Osu 🎵", "** **")
            .addField("Roblox 🧸", "** **")
            .addField("Among Us 🔴", "** **")
            .addField("GTA V 🎖️", "** **")
            .addField("Genshin Impact 🎆", "** **")
            .addField("Phasmophobia 👻", "** **")
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
            var button6 = new Discord.MessageButton()
            .setEmoji("🧸")
            .setCustomId("roblox")
            .setStyle("PRIMARY")
            var button6 = new Discord.MessageButton()
            .setEmoji("🔴")
            .setCustomId("among us")
            .setStyle("PRIMARY")
            var button7 = new Discord.MessageButton()
            .setEmoji("🎖️")
            .setCustomId("gta 5")
            .setStyle("PRIMARY")
            var button8 = new Discord.MessageButton()
            .setEmoji("🎆")
            .setCustomId("genghin impact")
            .setStyle("PRIMARY")
            var button9 = new Discord.MessageButton()
            .setEmoji("👻")
            .setCustomId("phasmofobia")
            .setStyle("PRIMARY")
            var button10 = new Discord.MessageButton()
            .setEmoji("👑")
            .setCustomId("clash royale")
            .setStyle("PRIMARY")
           
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
            interaction.reply({ embeds: [embed], components: [row, row1], })
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
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "femmina") {
        
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "lgbt") {
        
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    
    
    
    if (interaction.customId == "minecraft") {                         //giochi                  //giochi 
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }       
    if (interaction.customId == "valorant") {                               //valorant              //valorant
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "league of legends") {                  //league of legends         //league of legends
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "Rocket League") {                          //Rocket League             //Rocket League
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "fortnite") {                   //fortnite            //fortnite                      //fortnite
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "osu") {                        //osu                   //osu           //osu
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "roblox") {                     //roblox            //roblox            //roblox
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "gta 5") {                            //gta 5                      //gta 5              //gta 5
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "genghin impact") {             //genghin impact           //genghin impact       //genghin impact
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
   
    if (interaction.customId == "phasmofobia") {                                   //phasmofobia               //phasmofobia
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "clash royale") {                              //clash royale              //clash royale
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "among us") {                           //among us                           //among us
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
   
   
   
    if (interaction.customId == "chill") {                           //chill                          //chill
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "tossico") {                           //tossico                          //tossico
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "nerd") {                           //nerd                           //nerd
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "lgbtq") {                           //lgbtq                          //lgbtq
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "clown") {                           //clown                         //clown
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "otaku") {                           //otaku                           //otaku
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "programmatore") {                           //programmatore                           //programmatore
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "gamer") {                           //gamer                           //gamer
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    if (interaction.customId == "disegnatore") {                           //disegnatore                           //disegnatore
        const maschio = interaction.guild.roles.cache.get("967442587696893952");
        interaction.member.roles.add(maschio);
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Hai ottenuto il tuo ruolo con successo!")
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
    
    
    
    
    if (interaction.customId == "verifypanel") {
        const role = interaction.guild.roles.cache.get("924755866593394692");
        const role1 = interaction.guild.roles.cache.get("967442587696893952");
       
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






