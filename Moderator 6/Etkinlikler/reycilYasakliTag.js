const { GuildMember, MessageEmbed,Client} = require("discord.js");
const qDb = require("quick.db");
const db = new qDb.table("ayarlar");
const cezaDb = new qDb.table("aCezalar");
const kullaniciverisi = new qDb.table("aKullanici");
const moment = require('moment');
module.exports = {
    Etkinlik: "ready",
    /**
     * @param {Client} client
     */
    onLoad: function (client) {
       
    },
    /**
     * @param {GuildMember} member
     */
    onRequest: async function () {
        setInterval(() => {
            yasakliTagKontrolEt();
          }, 10000);
    }
  };

  function yasakliTagKontrolEt() {
    let reycil = client.veri;
    let reycilveri = client.veri
    let sid = client.sistem.a_sunucuId;
    
    // Yasaklı tag tarama (Yasaklı Tag Checkleme)
    let yasakTaglar = reycilveri.yasakTaglar || [];
    let yasakTaglilar = cezaDb.get("yasakTaglilar") || [];
  for (let kisi of yasakTaglilar) {
    let uye = client.guilds.cache.get(sid).members.cache.get(kisi.slice(1));
    if (uye && yasakTaglar.some(tag => uye.user.username.includes(tag)) && !uye.roles.cache.has(reycil.Roller.yasakliTagRolu)) uye.roles.set(uye.roles.cache.has(reycil.Roller.boosterRolu) ? [reycil.Roller.boosterRolu, reycil.Roller.yasakliTagRolu] : [reycil.Roller.yasakliTagRolu]).catch();
    if (uye && !yasakTaglar.some(tag => uye.user.username.includes(tag)) && uye.roles.cache.has(reycil.Roller.yasakliTagRolu)) {
      cezaDb.set("yasakTaglilar", yasakTaglilar.filter(x => !x.includes(uye.id)));
      uye.roles.set(reycil.kayıtRolleri.kayıtsızRolleri).catch();
      if(reycil.IkinciTag) uye.setNickname(`${reycil.IkinciTag} İsim | Yaş`).catch();
      else if(reycil.Tag) uye.setNickname(`${reycil.Tag} İsim | Yaş`).catch();
    };
  };
  };