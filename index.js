const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("QR Code generated! Scan it with your phone.");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  console.log(`Message received from ${message.from}: ${message.body}`);

  // Check if message is from a group
  const chat = await message.getChat();

  // Only reply if it's NOT a group and NOT a status update
  if (!chat.isGroup && !message.isStatus) {
    await message.reply(
      "Halo, saya sedang sibuk/off saat ini. Pesan Anda akan segera saya balas setelah online kembali. Terima kasih! \n_(Auto-reply by Bot)_",
    );
  }

  if (message.body.toLowerCase() === "!ping") {
    await message.reply("pong");
  }
});

client.initialize();
