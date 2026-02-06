#  WaBot - Simple WhatsApp Auto-Reply Bot

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

Setatus sibuk? Lagi cuti? Atau sekadar malas balas chat? Biarkan **WaBot** yang bekerja! 🚀

Bot sederhana berbasis `whatsapp-web.js` ini akan otomatis membalas pesan pribadi (Japri) saat kamu sedang tidak bisa memegang HP.

##  Fitur Utama

- 🔒 **Aman**: Menggunakan WhatsApp Web API, data tetap di lokal komputer kamu.
- 🚫 **Anti-Spam**: Hanya membalas pesan pribadi (Private Chat), **tidak** mengganggu Grup.
- ⚡ **Ringan**: Cukup jalankan via terminal.
- 📝 **Mudah Kustomisasi**: Ganti pesan sesuka hati di `index.js`.

## 🛠️ Cara Install & Pakai

### 1. Persiapan

Pastikan kamu sudah install [Node.js](https://nodejs.org/) di komputer.

### 2. Clone atau Download

```bash
git clone https://github.com/USERNAME_KAMU/WaBot.git
cd WaBot
```

### 3. Install Module

```bash
npm install
```

### 4. Jalankan Bot

```bash
node index.js
```

### 5. Scan QR Code

Scan QR Code yang muncul di terminal menggunakan WhatsApp (Menu Link Device) di HP kamu.

 **Selesai!** Bot akan otomatis membalas sapaan "!ping" dengan "pong" dan pesan auto-reply lainnya.

##  Kustimisasi Pesan

Buka file `index.js`, cari bagian ini dan ubah teksnya:

```javascript
await message.reply("Halo, saya sedang sibuk/off saat ini...");
```

##  Catatan Penting

- Bot ini berjalan di komputer kamu. Jika komputer mati atau terminal ditutup, bot akan **OFF**.
- Jangan bagikan folder `.wwebjs_auth` ke siapapun! (Folder ini sudah di-ignore secara default).
