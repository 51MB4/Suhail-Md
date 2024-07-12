const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0748034646";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_44_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmY5VmIvK2VGbDRXMm9lUm1hY2lKc3BQVUFucEMyUjJ1dUh3V3Uzd1lQbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDgwMzQ2NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVEQzAwMjgzNjE4QzNDOUQzRDVFQzk2NTExOEM4OTFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc4ODI0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0ODAzNDY0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjcwMDI3QkY3RjA3MDg3ODA3ODRCM0FDREYwQUZDN0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzg4MjQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlgtSlN1ekpDUlItdWZsY19qMHBYNkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjNhMWI5MTEtZTNmOC00MzQ3LTk5YTEtMzE5MTU5MGYyMDA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMjA4LFxuICAgICAgMjQ5LFxuICAgICAgMTc4LFxuICAgICAgMTM5LFxuICAgICAgMjQzLFxuICAgICAgMjM5LFxuICAgICAgMTM0LFxuICAgICAgNyxcbiAgICAgIDIyMyxcbiAgICAgIDIzOCxcbiAgICAgIDMwLFxuICAgICAgODksXG4gICAgICA3NixcbiAgICAgIDIsXG4gICAgICAyOSxcbiAgICAgIDEwOCxcbiAgICAgIDEyMSxcbiAgICAgIDIzMSxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICA2LFxuICAgICAgMTIwLFxuICAgICAgMzksXG4gICAgICAxMjUsXG4gICAgICA4MyxcbiAgICAgIDE4LFxuICAgICAgMTA1LFxuICAgICAgNDUsXG4gICAgICAyMjIsXG4gICAgICA0LFxuICAgICAgMTQ3LFxuICAgICAgOCxcbiAgICAgIDExLFxuICAgICAgNDgsXG4gICAgICAxNzEsXG4gICAgICAxODYsXG4gICAgICAxMzgsXG4gICAgICAxNTMsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFE3SzM3TVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0ODAzNDY0Njo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMwNTg4MzU1MTk1MTMyOjY5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNlYSBCYXJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKU2dyYnNGRUkvS3hMUUdHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRKMDByeXpVcXY4QnBFZU9JTU0vbDRQVEh0enV3QnM3eWRCTmlseWxOUXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV09DVFFFSjVyQUJaMk5xWENFTHk0cGNhSFhhdDZYMmxFT0U1RkVwV3VGYW5mbXdtK3I0TGQ2UGs1UllKR0FvWG9tNW80RGM5dU5wVzVPWGt2V0M3QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN29sMzdxT0ROVzdnQmxlOXNkRm0zZ2JROUE2WXRRQlZyRHh5WEZIbTN5LytOWU0vSUpDc2VmUUQ0R3VOeW16eDJuODZ4SUpoQzN5UHZxUjJCUWdaaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ4MDM0NjQ2OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzg4MjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1ZkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPVmQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqUW1SREQ1R2dHbFAwbGxIb1BHMWRBMGZLTkRSR2xqNkNlYk1kS1BDQjVFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjY2NTA2NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
