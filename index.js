(async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(`Error!`);
                    console.log(err);
                  });
                  const events = require('events');
                  const { exec } = require("child_process")
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
let moment  = require("moment")
const os = require("os-utils");
let URL = require('url')
const ms = require("ms")
let canvas = require("discord-canvas") 
let https = require("https")
let { GiveawaysManager }= require("discord-giveaways")
let { Player,QueueRepeatMode } = require("discord-player")
let playdl = require("play-dl")
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);
s4d.manager = new GiveawaysManager(s4d.client, {
        storage: './giveaways.json',
        default: {
            botsCanWin: false,
            embedColor: '#FF0000',
            embedColorEnd: '#000000',
            reaction: '🎉'
        }
    });
s4d.player = new Player(s4d.client)         
                    var everyone_role_id, arguments2, admin_role_id, command, Member_current_status_discord, tickets_category_id, giveaway_channel, Member_current_device, giveaway_duration, Member_conection_status, Member_exists, Member_current_type_discord, Bots_is, giveaway_winners, volume, giveaway_prize, onoff;

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}


await s4d.client.login('MTAwMzE2MjQ5OTQ2NzcxMDU3NQ.GvDS3K.0PnIZEaLwmyciiDUYvTcY5KAIg1uGvpO2HIU1c').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });

s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
          if ((interaction.commandName) == 'user-info') {
    try{
              if (String(String((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).presence.status || "offline")) == 'dnd') {
        Member_current_status_discord = '<:do_not_disturb_icon:1000473345499869254> Do not disturb';
      } else if (String(String((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).presence.status || "offline")) == 'idle') {
        Member_current_status_discord = '<:idle_icon:999116583953768468> Idle';
      } else if (String(String((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).presence.status || "offline")) == 'online') {
        Member_current_status_discord = '<:online:995409693252010015> Online';
      } else if (String(String((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).presence.status || "offline")) == 'offline') {
        Member_current_status_discord = '<:offline:995410241736949891> Offline';
      }

        }catch(err){
              Member_current_status_discord = '<:bug_icon:995412986804047912> Unexpected Error';

        };
        try{
              try{
                if ((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).presence.clientStatus.desktop != null) {
          Member_conection_status = '<:online:995409693252010015> Online';
          if ((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id))).user).bot) {
            Member_current_type_discord = '<:server:995447929554870323> Hosting Server (Bot)';
            Member_current_device = '<:server:995447929554870323> Hosting Server (Bot)';
          } else {
            Member_current_type_discord = '<:desktop_pc:995409492453892096> Desktop App';
            Member_current_device = '<:desktop_pc:995409492453892096> Pc';
          }
        } else if ((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).presence.clientStatus.web != null) {
          if ((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id))).user).bot) {
            Member_current_device = '<:server:995447929554870323> Hosting Server (Bot)';
            Member_current_type_discord = '<:server:995447929554870323> Hosting Server (Bot)';
          } else {
            Member_current_device = '<:undefined:995409561991249930> Pc or Mobile';
            Member_current_type_discord = '<:world:995413077782700214> Website';
          }
        } else if ((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).presence.clientStatus.mobile != null) {
          if ((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id))).user).bot) {
            Member_current_device = '<:server:995447929554870323> Hosting Server (Bot)';
            Member_current_type_discord = '<:server:995447929554870323> Hosting Server (Bot)';
          } else {
            Member_current_device = '<:phone:995428087003103244> Mobile';
            Member_current_type_discord = '<:phone:995428087003103244> Mobile App';
          }
        }

          }catch(err){
                Member_current_device = '<:undefined:995409561991249930> Undefined (Offline)';
        Member_conection_status = '<:offline:995410241736949891> Offline';
        Member_current_type_discord = '<:undefined:995409561991249930> Undefined (Offline)';
        Member_current_status_discord = '<:offline:995410241736949891> Offline';

          };
          if (typeof (((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id))).user) !== undefined) {
        Member_exists = '<:right:995409852643954698> Yes';
      } else {
        Member_exists = '<:wrong:995409601287704757> No';
      }
      if ((((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id))).user).bot) {
        Bots_is = '<:right:995409852643954698> Yes';
      } else {
        Bots_is = '<:wrong:995409601287704757> No';
      }
      var embed = new Discord.MessageEmbed()
         embed.setColor('#4F545C');
        embed.setAuthor(((interaction.options.getUser('user')).username),((interaction.options.getUser('user')).displayAvatarURL({format:"png"})));
        embed.setTitle((['__',(interaction.options.getUser('user')).username,'\'s Info__'].join('')));
        embed.setThumbnail(((interaction.options.getUser('user')).displayAvatarURL({format:"png"})));
        embed.addField('__<:person:995409649136324728> User Exists?:__',('> ' + String(Member_exists)),true);
        embed.addField('__<:bot_logov2:997630908859416617> User is a bot?:__',('> ' + String(Bots_is)),true);
        embed.addField('__<:icon_calendar:995409243429679194> Creation date of User:__',('> ' + String(moment((interaction.options.getUser('user')).createdAt).format('LLLL'))),true);
        embed.addField('__<:id_2:995436860014866434> Id of User:__',('> ' + String((interaction.options.getUser('user')).id)),true);
        embed.addField('__<:text_channel_logo:995439056559296532> Usertag of user:__',('> ' + String((interaction.options.getUser('user')).tag)),true);
        embed.addField('__<:discord_logo:995440628374712430> Current type of Discord:__',('> ' + String(Member_current_type_discord)),true);
        embed.addField('__<:edit:995441040678981683> Profile Picture Of User:__',(['> ','[Link](',(interaction.options.getUser('user')).displayAvatarURL({ dynamic : true }),')'].join('')),true);
        embed.addField('__<:world:995413077782700214> Current device of user:__',('> ' + String(Member_current_device)),true);
        embed.addField('__ <:night_status:995443320190926919> Status of user:__',('> ' + String(Member_current_status_discord)),true);
        embed.setFooter(((s4d.client.user).username),((s4d.client.user).displayAvatarURL({format:"png"})));

      await interaction.reply({ embeds: [(embed
      )], ephemeral: true, components: [] });
      Member_current_device = '<:undefined:995409561991249930> Undefined (Offline)';

        }catch(err){
              var embed = new Discord.MessageEmbed()
         embed.setColor('#4F545C');
        embed.setAuthor(((interaction.options.getUser('user')).username),((interaction.options.getUser('user')).displayAvatarURL({format:"png"})));
        embed.setTitle((['__Info of ',(interaction.options.getUser('user')).username,'__'].join('')));
        embed.setThumbnail(((interaction.options.getUser('user')).displayAvatarURL({format:"png"})));
        embed.addField('An unexpected error happened!','Try again later or try with another user!',true);

      await interaction.reply({ embeds: [(embed
      )], ephemeral: true, components: [] });
      console.log((err));

        };
        }

    });

s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
          if ((interaction.commandName) == 'user-info-server') {
    try{
              if (String(String((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id'))))).presence.status || "offline")) == 'dnd') {
        Member_current_status_discord = '<:do_not_disturb_icon:1000473345499869254> Do not disturb';
      } else if (String(String((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id'))))).presence.status || "offline")) == 'idle') {
        Member_current_status_discord = '<:idle_icon:999116583953768468> Idle';
      } else if (String(String((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id'))))).presence.status || "offline")) == 'online') {
        Member_current_status_discord = '<:online:995409693252010015> Online';
      } else if (String(String((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id'))))).presence.status || "offline")) == 'offline') {
        Member_current_status_discord = '<:offline:995410241736949891> Offline';
      }

        }catch(err){
              Member_current_status_discord = '<:bug_icon:995412986804047912> Unexpected Error';

        };
        try{
              try{
                if ((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id'))))).presence.clientStatus.desktop != null) {
          Member_conection_status = '<:online:995409693252010015> Online';
          if ((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).bot) {
            Member_current_type_discord = '<:server:995447929554870323> Hosting Server (Bot)';
            Member_current_device = '<:server:995447929554870323> Hosting Server (Bot)';
          } else {
            Member_current_type_discord = '<:desktop_pc:995409492453892096> Desktop App';
            Member_current_device = '<:desktop_pc:995409492453892096> Pc';
          }
        } else if ((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id'))))).presence.clientStatus.web != null) {
          if ((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).bot) {
            Member_current_device = '<:server:995447929554870323> Hosting Server (Bot)';
            Member_current_type_discord = '<:server:995447929554870323> Hosting Server (Bot)';
          } else {
            Member_current_device = '<:undefined:995409561991249930> Pc or Mobile';
            Member_current_type_discord = '<:world:995413077782700214> Website';
          }
        } else if ((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id'))))).presence.clientStatus.mobile != null) {
          if ((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).bot) {
            Member_current_device = '<:server:995447929554870323> Hosting Server (Bot)';
            Member_current_type_discord = '<:server:995447929554870323> Hosting Server (Bot)';
          } else {
            Member_current_device = '<:phone:995428087003103244> Mobile';
            Member_current_type_discord = '<:phone:995428087003103244> Mobile App';
          }
        }

          }catch(err){
                Member_current_device = '<:undefined:995409561991249930> Undefined (Offline)';
        Member_conection_status = '<:offline:995410241736949891> Offline';
        Member_current_type_discord = '<:undefined:995409561991249930> Undefined (Offline)';
        Member_current_status_discord = '<:offline:995410241736949891> Offline';

          };
          if (typeof (((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user) !== undefined) {
        Member_exists = '<:right:995409852643954698> Yes';
      } else {
        Member_exists = '<:wrong:995409601287704757> No';
      }
      if ((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).bot) {
        Bots_is = '<:right:995409852643954698> Yes';
      } else {
        Bots_is = '<:wrong:995409601287704757> No';
      }
      let embed = new Discord.MessageEmbed();
         embed.setColor("#4F545C");
        embed.setAuthor({name: String(((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).username)), iconURL: String(((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).displayAvatarURL({format:"png"})))});
        embed.setTitle(String((['__',(((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).username,'\'s Info__'].join(''))))
        embed.setThumbnail(String(((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).displayAvatarURL({format:"png"}))));
        embed.addField(String('__<:person:995409649136324728> User Exists?:__'), String(('> ' + String(Member_exists))), true);
        embed.addField(String('__<:bot_logov2:997630908859416617> User is a bot?:__'), String(('> ' + String(Bots_is))), true);
        embed.addField(String('__<:icon_calendar:995409243429679194> Creation date of User:__'), String(('> ' + String(moment((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).createdAt).format('LLLL')))), true);
        embed.addField(String('__<:id_2:995436860014866434> Id of User:__'), String(('> ' + String(interaction.options.getString('user-id')))), true);
        embed.addField(String('__<:text_channel_logo:995439056559296532> Usertag of user:__'), String(('> ' + String((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).tag))), true);
        embed.addField(String('__<:discord_logo:995440628374712430> Current type of Discord:__'), String(('> ' + String(Member_current_type_discord))), true);
        embed.addField(String('__<:edit:995441040678981683> Profile Picture Of User:__'), String((['> ','[Link](',(((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).displayAvatarURL({ dynamic : true }),')'].join(''))), true);
        embed.addField(String('__<:world:995413077782700214> Current device of user:__'), String(('> ' + String(Member_current_device))), true);
        embed.addField(String('__ <:night_status:995443320190926919> Status of user:__'), String(('> ' + String(Member_current_status_discord))), true);
        embed.setFooter({text: String(((s4d.client.user).username)), iconURL: String(((s4d.client.user).displayAvatarURL({format:"png"})))});
        embed.setTimestamp(new Date());

      await interaction.reply({ embeds: [(embed
      )], ephemeral: true, components: [] });
      Member_current_device = '<:undefined:995409561991249930> Undefined (Offline)';

        }catch(err){
              var embed = new Discord.MessageEmbed()
         embed.setColor('#4F545C');
        embed.setAuthor(((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).username),((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).displayAvatarURL({format:"png"})));
        embed.setTitle((['__Info of ',(((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).username,'__'].join('')));
        embed.setThumbnail(((((s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.cache.get((interaction.options.getString('user-id'))) || await (s4d.client.guilds.cache.get((interaction.options.getString('server-id')))).members.fetch((interaction.options.getString('user-id')))).user).displayAvatarURL({format:"png"})));
        embed.addField('An unexpected error happened!','Try again later or try with another user!',true);

      await interaction.reply({ embeds: [(embed
      )], ephemeral: true, components: [] });
      console.log((err));

        };
        }

    });

/*
    this one get the info of an user
on the current server
    */
/*
    this one get the info of an user
on a specific server id
    */
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ticket') {
    (s4dmessage).delete()
        let embed = new Discord.MessageEmbed();
       embed.setColor((colourRandom()));
      embed.setTitle(String('title'))
      let openticket = new MessageButton()
        openticket.setStyle("DANGER");openticket.setLabel('open ticket');openticket.setCustomId('openticket');s4dmessage.channel.send({
                content: String(' '),
                components: [new MessageActionRow().addComponents(openticket)],
                embeds: [embed]
                });
  }

});

/*
    fill those with the id's then use !ticket and
 ticket embed will sent back
dont forget the token
    */
s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!about') {
    var embed = new Discord.MessageEmbed()
       embed.setColor((colourRandom()));
      embed.setTitle('Information about the server')
       .setURL();
      embed.addField('Name of Server',((s4dmessage.guild).name),);
      embed.addField('No. of Members',(String((s4dmessage.guild).memberCount)),);
      embed.addField('Icon URL',((s4dmessage.guild).iconURL({ dynamic: true })),);
      embed.addField('Boost Level',(String((s4dmessage.guild).premiumTier)),);
      embed.addField('Owner Id',(String((s4dmessage.guild).ownerId)),);
      embed.addField('No. of Bots',(String((s4dmessage.guild).members.cache.filter(m => m.user.bot).size)),);
      embed.addField('No. of Channels',(String((s4dmessage.guild).channels.cache.size)),);
      embed.addField('No. of Roles',(String((s4dmessage.guild).roles.cache.size)),);
      embed.addField('No. of Voice Channels',(String((s4dmessage.guild).channels.cache.filter(m => m.type === "GUILD_VOICE").size)),);
      embed.addField('No. of Text Channels',(String((s4dmessage.guild).channels.cache.filter(m=>m.type === "GUILD_TEXT").size)),);

    (s4dmessage.channel).send({content:'About the Server!', embeds: [embed] });
  }

});

s4d.client.on('ready', async () => {
  everyone_role_id = '';
  admin_role_id = '';
  tickets_category_id = '';

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!giveaway') {
    (s4dmessage.channel).send(String('Which channel do you wanna host the giveaway in?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
     s4d.message = collected.first();
       giveaway_channel = (s4d.message.mentions.channels.first());
      (s4dmessage.channel).send(String('Duration of giveaway? (in milliseconds)')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
       s4d.message = collected.first();
         giveaway_duration = (s4d.reply);
        (s4dmessage.channel).send(String('Number of winners?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         s4d.message = collected.first();
           giveaway_winners = (s4d.reply);
          (s4dmessage.channel).send(String('Prize?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
           s4d.message = collected.first();
             giveaway_prize = (s4d.reply);
            s4d.manager.start(giveaway_channel, {duration:ms(giveaway_duration),winnerCount:Number(giveaway_winners),prize:giveaway_prize}).then(async (gData) => {
              (s4dmessage.channel).send({content:String('Started Giveaway')});

            });

           s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No prize mentioned')});
            return
           });
          })

         s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('Number not mentioned!')});
          return
         });
        })

       s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No duration mentioned!')});
        return
       });
      })

     s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No channel mentioned!')});
      return
     });
    })
  } else if ((s4dmessage.content) == '!reroll') {
    (s4dmessage.channel).send(String('Id of giveaway')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
     s4d.message = collected.first();
       s4d.manager.reroll((s4d.reply)).then(async () => {
        (s4dmessage.channel).send({content:String('Re-rolled the giveaway!')});

      });

     s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send({content:String('No ID mentioned!')});
     });
    })
  }

});

s4d.client.on('interactionCreate', async (i) => {
        let member = i.guild.members.cache.get(i.member.user.id)
        let interaction = i; if (!(i.isButton())) return;
          if (((i.customId)) == 'openticket') {
    ((i.guild)).channels.create((String(((i.member.user)).username) + '\'s ticket'), { type: "GUILD_TEXT", parent: ((i.guild)).channels.cache.get((category) => category.id === tickets_category_id) }).then(async cat =>{  (cat).permissionOverwrites.edit(((i.member.user)), { VIEW_CHANNEL: true });(cat).permissionOverwrites.edit((((i.guild)).roles.cache.get(everyone_role_id)), { VIEW_CHANNEL: false });(cat).permissionOverwrites.edit((((i.guild)).roles.cache.get(admin_role_id)), { VIEW_CHANNEL: true });let embed = new Discord.MessageEmbed();
         embed.setTitle(String('title'))
        let closeticket = new MessageButton()
          closeticket.setStyle("DANGER");closeticket.setLabel('close ticket');closeticket.setCustomId('closeticket');cat.send({
                  content: String(' '),
                  components: [new MessageActionRow().addComponents(closeticket)],
                  embeds: [embed]
                  });
    });}

    });

s4d.client.on('interactionCreate', async (i) => {
        let member = i.guild.members.cache.get(i.member.user.id)
        let interaction = i; if (!(i.isButton())) return;
          if (((i.customId)) == 'closeticket') {
    ((i.channel)).permissionOverwrites.edit(((i.member.user)), { VIEW_CHANNEL: false });}

    });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (String(((s4dmessage.content).toLowerCase())).includes(String('.command'))) {
    s4dmessage.channel.send({content:String('pong!')});
  }

});

s4d.player.on("trackStart", async (queue, track) => {
   var embed = new Discord.MessageEmbed()
     embed.setTitle((['now playing ',track.title,'\n','author: ',track.author,'\n','url: ',track.url,'\n','views: ',track.views,'\n','duration: ',track.duration].join('')));
    embed.setImage((track.thumbnail));
    (queue.metadata.channel).send({embeds:[embed]});


})

s4d.player.on("queueEnd",async (queue) => {
   (queue.metadata.channel).send({content:String('queue finished')});

})

s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
          if ((interaction.commandName) == 'user-info') {
    try{
              if ('' == 0) {
      } else if (false) {
      } else if (false) {
      } else if (false) {
      }

        }catch(err){

        };
        }

    });

s4d.player.on("trackAdd", async (queue, track) => {
   (queue.metadata.channel).send({content:String((['music ','','added to queue'].join('')))});

})

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '!play') {
    if ((s4dmessage.member.voice.channelId) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.guild.me.voice.channelId) != null && (s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    const queue = s4d.player.createQueue((s4dmessage.guild), {metadata: {channel: (s4dmessage.channel)}, async onBeforeCreateStream(track, source, _queue) {
            if (source === "youtube") {
                return (await playdl.stream(track.url, { discordPlayerCompatibility : true })).stream;
            }
        }
    });
    if (!(queue.connection)) {
      await queue.connect((s4dmessage.member.voice.channel))
      ;}
    queue.play((await s4d.player.search((arguments2.join(' ')), {requestedBy: (s4dmessage.author)}).then(x => x.tracks[0])));
  }
  if (command == '!pause') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).setPaused(true)
    s4dmessage.channel.send({content:String('paused music')});
  }
  if (command == '!resume') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).setPaused(false)
    s4dmessage.channel.send({content:String('resumed the music')});
  }
  if (command == '!stop') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).destroy()
    s4dmessage.channel.send({content:String('stoped music')});
  }
  if (command == '!volume') {
    volume = arguments2[0];
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    if ((Number(volume)) < 0) {
      s4dmessage.channel.send({content:String('the volume need to be more then 0!')});
      return
    }
    if ((Number(volume)) > 100) {
      s4dmessage.channel.send({content:String('the volume need to be less then 100!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).setVolume(volume)
    s4dmessage.channel.send({content:String(('the volume is now ' + String(volume)))});
  }
  if (command == '!skip') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).skip()
    s4dmessage.channel.send({content:String(('skipped music ' + String((s4d.player.getQueue((s4dmessage.guild).id)).current)))});
  }
  if (command == '!loop') {
    onoff = arguments2[0];
    if (onoff == 'on') {
      if ((s4dmessage.member.voice.channel) == null) {
        s4dmessage.channel.send({content:String('you are not in a voice channel!')});
        return
      }
      if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
        s4dmessage.channel.send({content:String('you are not in my voice channel!')});
        return
      }
      if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
        s4dmessage.channel.send({content:String('there is no music playing!')});
        return
      }
      (s4d.player.getQueue((s4dmessage.guild).id)).setRepeatMode(QueueRepeatMode.QUEUE)
      s4dmessage.channel.send({content:String('loop on')});
    } else if (onoff == 'off') {
      if ((s4dmessage.member.voice.channel) == null) {
        s4dmessage.channel.send({content:String('you are not in a voice channel!')});
        return
      }
      if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
        s4dmessage.channel.send({content:String('you are not in my voice channel!')});
        return
      }
      if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
        s4dmessage.channel.send({content:String('there is no music playing!')});
        return
      }
      (s4d.player.getQueue((s4dmessage.guild).id)).setRepeatMode(QueueRepeatMode.OFF)
      s4dmessage.channel.send({content:String('loop off')});
    } else {
      s4dmessage.channel.send({content:String('you need to send !loop on/off')});
    }
  }
  if (command == '!back') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).back()
    s4dmessage.channel.send({content:String('playing previous music')});
  }

});

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
  if ((s4d.joiningMember.user).bot) {
    (s4d.joiningMember).roles.add((.roles.cache.find((role) => role.name === )));
    s4d.client.channels.cache.find((channel) => channel.name === '🙏| Welcome').send({content:(['Welcome',s4d.joiningMember.user,'to the server'].join('')),files:[{attachment:(await new canvas.Welcome()  .setUsername(((s4d.joiningMember.user).username)).setAvatar(((s4d.joiningMember.user).displayAvatarURL({format:"png"}))).setMemberCount(((s4d.joiningMember.guild).memberCount)).setBackground('https://cdn.discordapp.com/attachments/1003163035889840171/1003734321733054644/static.png').setGuildName(((s4d.joiningMember.guild).name)).setColor("border", "(colourRandom())").toAttachment()).toBuffer()}]});
  }
s4d.joiningMember = null
});

                    return s4d
                    })();