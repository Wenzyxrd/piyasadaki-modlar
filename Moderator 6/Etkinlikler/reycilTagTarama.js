const { GuildMember, MessageEmbed,Client} = require("discord.js");
const qDb = require("quick.db");
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
              TagKontrolEt();
          }, 10000);
    }
  };

  function TagKontrolEt() {
    let reycil = client.veri;
    let sid = client.sistem.a_sunucuId;
    if (reycil.kayıtRolleri.kayıtsızRolleri) client.guilds.cache.get(sid).members.cache.filter(uye => uye.roles.cache.size === 1).array().forEach((uye, index) => setTimeout(() => { uye.roles.add(reycil.kayıtRolleri.kayıtsızRolleri).catch(console.error); uye.setNickname('⸸ İsim | Yaş'); }, index*1000));
    client.guilds.cache.get(sid).members.cache.filter(uye => uye.user.username.includes(reycil.Tag) && !uye.hasPermission('ADMINISTRATOR') && !uye.roles.cache.has(reycil.Roller.jailRolu) && !uye.roles.cache.has(reycil.kayıtRolleri.kayıtsızRolleri) && !uye.roles.cache.has(reycil.Roller.yasakliTagRolu) && !uye.roles.cache.has(reycil.Roller.supheliRolu) && (!uye.roles.cache.has(reycil.kayıtRolleri.tagRolu) || !uye.displayName.startsWith(reycil.Tag))).array().forEach((uye, index) => {
        setTimeout(() => {
          uye.setNickname(uye.displayName.replace(reycil.IkinciTag, reycil.Tag));
          uye.roles.add(reycil.kayıtRolleri.tagRolu);
        }, index*5000);
      });
  };