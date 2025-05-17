require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.session = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"gLCPdJYps2usjpeAou5/ZldDKYoZIT2XqlxZdyKHxXE="},"public":{"type":"Buffer","data":"3l353ooYI/pRFIOKHeiMT+uvHFbqDCn+uQ5mq2sKdBc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GM1BQ3r3pMRDggPkDYNgGEAvoXzvAM09xfLl1CtCYkU="},"public":{"type":"Buffer","data":"pPHQdqyNic5QwNEMxoRdTO7D7dJ8ay7VY4ceq/SsTzI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wEHKdHziuE8SAnW6BengIAX13M3J4nsEZYEH1kxAaUo="},"public":{"type":"Buffer","data":"i4DiLZGkRxcv3QoAmQ6oSUydngOlSmcxLRWBG/SNd0w="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YPOCbvB//lTcnEkdmwCq1a8GRRHYf7b5KHpUJOTLRlY="},"public":{"type":"Buffer","data":"yyNJDoCF/1+y/HRwO7Nokmdr6ekhlx80Y89Bt1erszY="}},"signature":{"type":"Buffer","data":"c62WUJkrCF2fd25RCdAZTdqhYaw8tYW1AIcnM1PghNlQBGMJ/Kv2oMrVFKsDmkSOAsMCjdcbc2RU5EDaG0AIDw=="},"keyId":1},"registrationId":169,"advSecretKey":"gngDEEsXX0laXJCLn9rkawduoxFrdiaQ6GUy2JYXSnM=","processedHistoryMessages":[{"key":{"remoteJid":"242064607456@s.whatsapp.net","fromMe":true,"id":"3A51BDE6B860A067C458"},"messageTimestamp":1747496556},{"key":{"remoteJid":"242064607456@s.whatsapp.net","fromMe":true,"id":"3AA27C60F7D308AB2E01"},"messageTimestamp":1747496559}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"UOb0pYiTQCileiVEIcQGQQ","phoneId":"d91ff0fa-f357-4b8f-a30a-cad07537b84a","identityId":{"type":"Buffer","data":"CQQpUnuIVZim/RGdHhdCeOr/4ek="},"registered":true,"backupToken":{"type":"Buffer","data":"IFGTisdyzWhVSTyDmg0+2yiU68U="},"registration":{},"pairingCode":"FIZZBAIL","me":{"id":"242064607456:5@s.whatsapp.net","lid":"98728832667651:5@lid","name":"Petit Diamant"},"account":{"details":"CLmIyoYGENrcosEGGAIgACgA","accountSignatureKey":"GiBjXxpK3d52PbxSifGDP4dgoMwWtALN/rEgy/DN6BE=","accountSignature":"ECy1RoLjpZl+0VWvRUsQLFN1Des2Q77eRw9a9t5VDj+wgC5xeiSAnRzsovKlhz7Uc8puL8lwivcAZm8v54auhg==","deviceSignature":"kmjiYPt4PLPHC8dEqjWG3LyfAA5Fodx0pq44X7dA8k/IydjSvHiIAKdxjiYYgfuHGa/I7FAex7ps/jO9nvUkBw=="},"signalIdentities":[{"identifier":{"name":"242064607456:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRogY18aSt3edj28Uonxgz+HYKDMFrQCzf6xIMvwzegR"}}],"platform":"iphone","routingInfo":{"type":"Buffer","data":"CAsIDQ=="},"lastAccountSyncTimestamp":1747496551,"lastPropHash":"2G4Amu","myAppStateKeyId":"AAAAAMOa"}";
global.ownernomer = process.env.OWNER_NOMER || "242064607456";
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '242064607456';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefa = process.env.PREFIX ? process.env.PREFIX.split(',') : ['', '!', '.', '#', '&'];
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
