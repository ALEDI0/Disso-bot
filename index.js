const { Message, VoiceRegion } = require('discord.js');

global.Discord = require('discord.js');
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] 
})

client.login("OTYxNjQ1NDYzMDUwODA5NDY1.Yk8AIA.XQKzJngww_bohN4egvyR78U_NaI");


client.on("guildMemberAdd", member => {
    var embed = new Discord.MessageEmbed()
    .setTitle("Ti diamo un caloroso BENVENUTO😊")
    .setDescription(`Ma salve ${member.toString()} , benvenuto nel **DissoServer**! Ti aspettano amici e belle cose!😍`)
    .addField("Segui le mie live o piango😭", "Se lo farai ti amerò🥰")
    .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/welcome/images/786011000674975755/b3e6c1bf392904eb6caad668b23fdeb929d1128227b8e5bfdce608b1d335d01e.gif")
    .setImage("https://cdn-longterm.mee6.xyz/plugins/welcome/images/786011000674975755/ef8e17d3acb3e52587423a8d99595cc28fc7136323b37ad769f643546d89fc10.gif")
    .setFooter({ text: "Dissociatore sei un grande!"})
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
            name: "remoteverify",
            description: "Verifica da remoto un utente",
            options: [
                {
                    name: "user",
                    description: "L'utente da verificare",
                    type: "USER",
                    required: true
                }
            ]
        })

    })








})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return
    
    
    
    if (interaction.commandName == "remoteverify") {
        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
            return interaction.reply({ content: "Non hai il permesso di utilizzare questo comando", ephemeral: true })
        }
        const role = interaction.guild.roles.cache.get("924755866593394692");
        const role1 = interaction.guild.roles.cache.get("967442587696893952");
        
        var utente = interaction.options.getUser("user")
        
        interaction.utente.roles.add(role);
        interaction.utente.roles.add(role1);
        
        var embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("L'utente è stato verificato con successo!")
        
        
        interaction.reply({ embeds: [embed], ephemeral: true })


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