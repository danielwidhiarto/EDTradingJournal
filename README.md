"# ED Trading Journal

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Google%20Apps%20Script-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

**ED Trading Journal** adalah aplikasi web interaktif untuk mencatat, memantau, dan menganalisis trading Anda secara real-time. Dibangun dengan Google Apps Script dan terintegrasi dengan Google Sheets untuk penyimpanan data.

---

## ✨ Fitur Utama

### 📊 Dashboard Real-time

- **Live Tracking**: Pantau semua trading yang sedang berjalan dengan update harga real-time
- **Multi-Market Support**: Support untuk berbagai market (IDX, US, Crypto, dll)
- **Status Trading**: RUNNING, CLOSED WIN, CLOSED LOSS

### 📈 Analisis Performa

- **KPI Cards**: Lihat metrik penting seperti Total PnL, Win Rate, Average Win/Loss
- **Chart Visualisasi**: Grafik performa trading dengan Chart.js
- **Risk Management**: Tracking Risk/Reward Ratio untuk setiap trade

### 🎯 Risk Management

- **Risk Heat Indicator**: Sistem peringatan otomatis untuk trades berisiko tinggi
- **Distance to SL/TP**: Indikator jarak harga current ke Stop Loss/Take Profit
- **Risk Grouping**: Trades dikelompokkan berdasarkan tingkat risiko (High/Medium/Low)

### 🔍 Fitur Analisis Lanjutan

- **Market Filter**: Filter trades berdasarkan market tertentu
- **Equity Regime**: Indikator "HOT" atau "COLD" streak
- **Win/Loss Streak Tracker**: Pantau streak kemenangan atau kekalahan
- **TradingView Integration**: Link langsung ke chart TradingView

### 🎨 UI/UX Modern

- **Glassmorphism Design**: Interface modern dengan efek glass dan backdrop blur
- **Dark Theme**: Tema gelap yang nyaman untuk mata
- **Responsive Layout**: Tampilan optimal di berbagai ukuran layar
- **Real-time Updates**: Data refresh otomatis tanpa reload halaman

---

## 🚀 Cara Setup

### Prerequisites

- Akun Google (Gmail)
- Google Sheets
- Browser modern (Chrome, Firefox, Edge, Safari)

### Langkah Instalasi

1. **Setup Google Sheets**

   - Buat Google Sheets baru
   - Buat sheet dengan nama "Main"
   - Buat kolom dengan header berikut (Row 1):
     ```
     A: Date
     B: Time
     C: Ticker
     D: Market
     E: Type (LONG/SHORT)
     F: Entry Price
     G: TP Price
     H: SL Price
     I: RR Ratio
     J: Status
     K: Current Price
     L: Exit Price
     M: PnL
     N: TradingView Link
     ```

2. **Setup Google Apps Script**

   - Buka Google Sheets Anda
   - Klik `Extensions` > `Apps Script`
   - Hapus kode default, paste kode dari `code.gs`
   - Ganti Spreadsheet ID di baris 10 dengan ID Sheets Anda:
     ```javascript
     const ss = SpreadsheetApp.openById("GANTI_DENGAN_ID_SHEETS_ANDA");
     ```
   - Klik `File` > `New` > `HTML File`
   - Beri nama `index`
   - Paste kode dari `index.html`

3. **Deploy sebagai Web App**

   - Klik tombol `Deploy` > `New deployment`
   - Pilih type: `Web app`
   - Execute as: `Me`
   - Who has access: `Anyone` (atau sesuai kebutuhan)
   - Klik `Deploy`
   - Copy URL web app yang diberikan
   - Buka URL tersebut di browser

4. **Authorize Permission**
   - Saat pertama kali akses, Google akan meminta permission
   - Klik `Advanced` > `Go to [Project Name] (unsafe)`
   - Klik `Allow`

---

## 📖 Cara Penggunaan

### Input Trading Baru

1. Buka Google Sheets Anda
2. Tambahkan baris baru di sheet "Main"
3. Isi data trading:
   - **Date**: Tanggal trade
   - **Time**: Waktu entry
   - **Ticker**: Symbol saham/crypto (misal: BBRI, BTCUSDT)
   - **Market**: IDX, US, Crypto, dll
   - **Type**: LONG atau SHORT
   - **Entry Price**: Harga entry
   - **TP Price**: Target profit
   - **SL Price**: Stop loss
   - **RR Ratio**: (opsional, bisa dihitung otomatis)
   - **Status**: RUNNING / CLOSED WIN / CLOSED LOSS
   - **Current Price**: Harga terkini (untuk running trades)
   - **Exit Price**: Harga exit (untuk closed trades)
   - **PnL**: Profit/Loss
   - **TradingView Link**: Link ke chart (opsional)

### Monitoring Dashboard

1. Buka web app URL yang sudah di-deploy
2. Dashboard akan menampilkan:
   - **Tab "PRO TRADER"**: View trading dengan risk indicator
   - **Tab "ANALYSIS"**: View analisis dan statistik
   - **KPI Cards**: Total PnL, Win Rate, Average Win/Loss, dll
   - **Running Trades**: Trades yang masih aktif dengan risk heat indicator
   - **Closed Trades**: History trades yang sudah selesai

### Interpretasi Risk Indicator

- 🔴 **HIGH RISK**: Harga mendekati Stop Loss (< 30% dari range)
- 🟡 **MEDIUM RISK**: Harga di zona tengah
- 🟢 **LOW RISK**: Harga mendekati Take Profit

---

## 🛠️ Teknologi yang Digunakan

- **Google Apps Script**: Backend dan server-side logic
- **Google Sheets**: Database untuk menyimpan trading data
- **HTML5/CSS3**: Frontend structure dan styling
- **Vanilla JavaScript**: Client-side scripting
- **Chart.js**: Library untuk visualisasi grafik

---

## 🎨 Customization

### Mengubah Warna Tema

Edit CSS variables di `index.html`:

```css
:root {
  --bg-main: #050816;
  --accent: #22c55e;
  --accent-2: #38bdf8;
  --danger: #f97373;
}
```

### Menambah Market Baru

Edit fungsi di `index.html` pada bagian market filter:

```javascript
<option value="ALL">All Markets</option>
<option value="IDX">IDX</option>
<option value="US">US</option>
<option value="CRYPTO">Crypto</option>
<option value="NEW_MARKET">Your New Market</option>
```

### Mengubah Spreadsheet ID

Edit di `code.gs` baris 10:

```javascript
const ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
```

---

## 📝 Tips & Best Practices

1. **Konsisten Input Data**: Selalu isi data dengan format yang konsisten
2. **Update Current Price**: Untuk running trades, update current price secara berkala
3. **Gunakan RR Ratio**: Minimal 1:2 untuk risk management yang baik
4. **Review Rutin**: Cek dashboard secara rutin untuk monitor risk exposure
5. **Backup Data**: Export Google Sheets Anda secara berkala
6. **Risk Management**: Jangan over-trade atau over-leverage

---

## 🐛 Troubleshooting

### Dashboard tidak muncul

- Pastikan sudah authorize permission Google Apps Script
- Clear cache browser dan reload

### Data tidak update

- Refresh halaman web app
- Cek koneksi internet
- Pastikan Spreadsheet ID sudah benar

### Error "Permission Denied"

- Re-authorize Apps Script
- Pastikan setting "Who has access" sudah benar di deployment

---

## 📊 Struktur Data Sheet

| Column | Field            | Type        | Description                    |
| ------ | ---------------- | ----------- | ------------------------------ |
| A      | Date             | Date        | Tanggal trade                  |
| B      | Time             | Time        | Waktu entry                    |
| C      | Ticker           | Text        | Symbol trading                 |
| D      | Market           | Text        | Market (IDX/US/Crypto)         |
| E      | Type             | Text        | LONG atau SHORT                |
| F      | Entry Price      | Number      | Harga masuk                    |
| G      | TP Price         | Number      | Take Profit target             |
| H      | SL Price         | Number      | Stop Loss                      |
| I      | RR Ratio         | Text/Number | Risk Reward Ratio              |
| J      | Status           | Text        | RUNNING/CLOSED WIN/CLOSED LOSS |
| K      | Current Price    | Number      | Harga saat ini (running)       |
| L      | Exit Price       | Number      | Harga keluar (closed)          |
| M      | PnL              | Number      | Profit/Loss amount             |
| N      | TradingView Link | URL         | Link ke chart (opsional)       |

---

## 🤝 Kontribusi

Contributions, issues, dan feature requests sangat diterima!

---

## 📄 License

Project ini menggunakan [MIT License](https://opensource.org/licenses/MIT).

---

## 👤 Author

**ED Trading Journal**

Dibuat dengan ❤️ untuk para trader Indonesia

---

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan:

- Buat issue di repository
- Kontak via email
- Join komunitas trading

---

## 🔄 Changelog

### Version 1.0.0

- ✅ Initial release
- ✅ Basic trading journal functionality
- ✅ Real-time monitoring
- ✅ Risk management indicators
- ✅ KPI dashboard
- ✅ Chart visualization
- ✅ Multi-market support

---

**Happy Trading! 📈**"
