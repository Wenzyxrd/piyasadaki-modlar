
const { Client, Discord, MessageEmbed, Collection, WebhookClient } = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const moment = require('moment')
global.client = client;
require("moment-duration-format")
moment.locale('tr')
const fs = require("fs");



client.sistem = require("./reycil-ayar.json");

client.login(client.sistem.a_Token).catch(err => console.error("[~ ACAR ~] Discord API Botun tokenini doğrulayamadı."));


client.komutlar = new Collection();
client.komut = new Collection();

