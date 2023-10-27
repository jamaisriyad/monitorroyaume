// For probleme or any question : https://t.me/salutcriyad or @jamaisriyad on discord.

// On récupère les packages dont on a besoin, et on récupère le dossier config pour le token.

const { Client } = require('discord.js-selfbot-v13')
const client = new Client({ checkUpdate: false })
const config = require('./config')
const mysql = require('mysql')

process.on("unhandledRejection", err => {
    return console.log(err)
});
process.on("rejectionHandled", err => {
    return console.log(err)
});
process.on("uncaughtException", err => {
    return console.log(err)
});
process.on("uncaughtExceptionMonitor", err => {
    return console.log(err)
});

const delay = ms => new Promise(res => setTimeout(res, ms));

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "royaume"
})


// Event quand le compte est connecté.
client.on('ready', async () => {
    console.clear()
    console.log('\x1b[32m%s\x1b[0m', `${client.user.tag} est prêt !`);
    console.log('\x1b[31m%s\x1b[0m', `Je répète que je ne suis pas responsable de vos actes, si le Royaume ou Discord veut vous bannir c'est dans leur droit!`);
})

client.on('messageCreate', async (message) => {
    if (!message || !message.author || !message.author.id || !message.author.bot || message.author.id !== "294882584201003009" || !message.guildId || message.guildId !== config.guild) return
    if (message.embeds.length > 0) {
        let gain = message.embeds[0].title
        let host = message.embeds[0].description.split("Hosted by: <@")[1].split(">")[0]
        let winners = message.embeds[0].description.split("Winners: **")[1].split("**")[0]
        let ts = message.embeds[0].timestamp
        let unix_timestamp = ts;
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        var cid = message.channel.id
        var mid = message.id
        db.query(`INSERT INTO giveaway (messageid, channelid, guildid, date, datems, gain, nbgagnant, host) VALUES ('${mid}', '${cid}', '${message.guild.id}', '${formattedTime}', '${Date.now()}', '${gain}', '${winners}', '${host}')`)
        //console.log(`Récompense : ${gain}\nCréateur : ${host}\nNombre de gagnant : ${winners}\nDate de création : ${formattedTime}\nChannel id : ${cid}\nMessage id : ${mid}`)
    } else if (message.reference) {
        let win;
        if (message.mentions.users) {
            let i = 0
            message.mentions.users.forEach(user => {
                console.log(user.id);
                if(i == 0)
                win = user.id
                else
                win = `${user.id}-${win}`
                i++;
            })
            
        }
        if(win) db.query(`UPDATE giveaway SET gagnant = '${win}' where messageid = '${message.reference.messageId}'`)
        else db.query(`UPDATE giveaway SET gagnant = 'Aucun gagnant' where messageid = '${message.reference.messageId}'`)
    }
})

client.on("messageUpdate", async (ancienMessage, message) => {
    if (message.embeds.length < 1 || !message || !message.author || !message.author.id || !message.author.bot || message.author.id !== "294882584201003009" || !message.guildId || message.guildId !== config.guild) return
    db.query(`UPDATE giveaway SET url = '${message.components[0].components[0].url}' where messageid = '${message.id}'`)
    db.query(`UPDATE giveaway SET nbEntree = '${message.embeds[0].description.split("Entries: **")[1].split("**")[0]}' where messageid = '${message.id}'`)
})

// Connexion au compte.
client.login(config.token);