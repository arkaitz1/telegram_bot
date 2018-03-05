const TelegramBot = require('node-telegram-bot-api');
 
 // API Token Telegram
 const token = 'token';

 // Creamos un bot que usa 'polling'para obtener actualizaciones
const bot = new TelegramBot(token, {polling: true});
 const request = require('request');
 
// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel
 bot.on('message', (msg) => {
 var Hola = "hola";
 if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
     bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
 }
 var beer = "beer";
if (msg.text.toString().toLowerCase().indexOf(beer) === 0) {
    bot.sendMessage(msg.chat.id, "OU YEAH! Pintxo_Pote!");
}
var agur = "Agur";
if (msg.text.toString().toLowerCase().includes(agur)) {
    bot.sendMessage(msg.chat.id, "Etxera? Fucking shit!");
}    
var inutil = "inutil";
if (msg.text.indexOf(inutil) === 0) {
    bot.sendMessage(msg.chat.id, "Eres un inutil"+ msg.from.first_name);
}
});
bot.onText(/\/isaac/, (msg) => {

    bot.sendPhoto(msg.chat.id,"http://4.bp.blogspot.com/-NtvQOLgEzNs/UFSs9S3JHcI/AAAAAAAAFUQ/76glAqEw0IQ/s1600/tux-goku.png" );
        
    });

 bot.onText(/\/start/, (msg) => {
    
    bot.sendMessage(msg.chat.id, "Ongi Etorri", {
    "reply_markup": {
        "keyboard": [["1 Aukera", "2 aukera"],   ["3 aukera"], ["4 aukera"]]
        }
  
        
    });
 });