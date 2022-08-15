const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", () => {
  console.log("AUTH!");
});

client.on('ready', () => {
  console.log('Client is ready!');
  const number = "918485837871";
  const message = "MESSAGE";
  const chatId = number + "@c.us";

  sendMessage(client, chatId, message)
});

client.initialize();

function sendMessage(WClient, number, message) {
  WClient.sendMessage(number, message)
  console.log('succes')
}