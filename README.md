# ED Trading Journal

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Google%20Apps%20Script-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

**ED Trading Journal** is an interactive web application for recording, monitoring, and analyzing your trades in real-time. Built with Google Apps Script and integrated with Google Sheets for data storage.

## 🔗 Live Demo

Access the application at: [ED Trading Journal Live](https://script.google.com/macros/s/AKfycbwMDd4GoW_MrnVWKwbCHK95d3ILwsSJumHJiUqafQXyaQ1lu9proIYO2ZfKxTnea6Fg/exec)

## ⚠️ Important Disclaimer

> **NOT FINANCIAL ADVICE**
>
> This application is a **personal trading journal** that I created for my own personal use in recording and analyzing my trading activities. This application is shared publicly for educational and reference purposes only.
>
> - ❌ **NOT investment or trading advice**
> - ❌ **NOT a recommendation to buy/sell any assets**
> - ✅ Only a tool for **journaling and tracking** personal trades
> - ✅ All trading decisions are **your own responsibility**
>
> **Trading involves high risk. Only use funds you can afford to lose. Always do your own research and analysis.**

---

## ✨ Key Features

### 📊 Real-time Dashboard

- **Live Tracking**: Monitor all running trades with real-time price updates
- **Multi-Market Support**: Support for various markets (IDX, US, Crypto, etc.)
- **Trading Status**: RUNNING, CLOSED WIN, CLOSED LOSS

### 📈 Performance Analysis

- **KPI Cards**: View important metrics such as Total PnL, Win Rate, Average Win/Loss
- **Chart Visualization**: Trading performance graphs with Chart.js
- **Risk Management**: Track Risk/Reward Ratio for each trade

### 🎯 Risk Management

- **Risk Heat Indicator**: Automatic warning system for high-risk trades
- **Distance to SL/TP**: Current price distance indicator to Stop Loss/Take Profit
- **Risk Grouping**: Trades grouped by risk level (High/Medium/Low)

### 🔍 Advanced Analysis Features

- **Market Filter**: Filter trades by specific market
- **Equity Regime**: "HOT" or "COLD" streak indicator
- **Win/Loss Streak Tracker**: Monitor winning or losing streaks
- **TradingView Integration**: Direct link to TradingView charts

### 🎨 Modern UI/UX

- **Glassmorphism Design**: Modern interface with glass effect and backdrop blur
- **Dark Theme**: Eye-friendly dark theme
- **Responsive Layout**: Optimal display on various screen sizes
- **Real-time Updates**: Automatic data refresh without page reload

---

## 🚀 Setup Guide

### Prerequisites

- Google Account (Gmail)
- Google Sheets
- Modern browser (Chrome, Firefox, Edge, Safari)

### Installation Steps

1. **Setup Google Sheets**

   - Create a new Google Sheets
   - Create a sheet named "Main"
   - Create columns with the following headers (Row 1):
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

   - Open your Google Sheets
   - Click `Extensions` > `Apps Script`
   - Delete the default code, paste code from `code.gs`
   - Replace the Spreadsheet ID on line 10 with your Sheet ID:
     ```javascript
     const ss = SpreadsheetApp.openById("REPLACE_WITH_YOUR_SHEET_ID");
     ```
   - Click `File` > `New` > `HTML File`
   - Name it `index`
   - Paste code from `index.html`

3. **Deploy as Web App**

   - Click `Deploy` button > `New deployment`
   - Select type: `Web app`
   - Execute as: `Me`
   - Who has access: `Anyone` (or as needed)
   - Click `Deploy`
   - Copy the provided web app URL
   - Open the URL in your browser

4. **Authorize Permission**
   - On first access, Google will request permission
   - Click `Advanced` > `Go to [Project Name] (unsafe)`
   - Click `Allow`

---

## 📖 How to Use

### Add New Trade

1. Open your Google Sheets
2. Add a new row in the "Main" sheet
3. Fill in the trade data:
   - **Date**: Trade date
   - **Time**: Entry time
   - **Ticker**: Stock/crypto symbol (e.g., BBRI, BTCUSDT)
   - **Market**: IDX, US, Crypto, etc.
   - **Type**: LONG or SHORT
   - **Entry Price**: Entry price
   - **TP Price**: Take profit target
   - **SL Price**: Stop loss
   - **RR Ratio**: (optional, can be auto-calculated)
   - **Status**: RUNNING / CLOSED WIN / CLOSED LOSS
   - **Current Price**: Current price (for running trades)
   - **Exit Price**: Exit price (for closed trades)
   - **PnL**: Profit/Loss
   - **TradingView Link**: Chart link (optional)

### Dashboard Monitoring

1. Open the deployed web app URL
2. The dashboard will display:
   - **"PRO TRADER" Tab**: Trading view with risk indicator
   - **"ANALYSIS" Tab**: Analysis and statistics view
   - **KPI Cards**: Total PnL, Win Rate, Average Win/Loss, etc.
   - **Running Trades**: Active trades with risk heat indicator
   - **Closed Trades**: History of completed trades

### Risk Indicator Interpretation

- 🔴 **HIGH RISK**: Price approaching Stop Loss (< 30% of range)
- 🟡 **MEDIUM RISK**: Price in middle zone
- 🟢 **LOW RISK**: Price approaching Take Profit

---

## 🛠️ Technologies Used

- **Google Apps Script**: Backend and server-side logic
- **Google Sheets**: Database for storing trading data
- **HTML5/CSS3**: Frontend structure and styling
- **Vanilla JavaScript**: Client-side scripting
- **Chart.js**: Library for chart visualization

---

## 🎨 Customization

### Change Theme Colors

Edit CSS variables in `index.html`:

```css
:root {
  --bg-main: #050816;
  --accent: #22c55e;
  --accent-2: #38bdf8;
  --danger: #f97373;
}
```

### Add New Market

Edit the function in `index.html` in the market filter section:

```javascript
<option value="ALL">All Markets</option>
<option value="IDX">IDX</option>
<option value="US">US</option>
<option value="CRYPTO">Crypto</option>
<option value="NEW_MARKET">Your New Market</option>
```

### Change Spreadsheet ID

Edit in `code.gs` line 10:

```javascript
const ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
```

---

## 📝 Tips & Best Practices

1. **Consistent Data Input**: Always fill in data with a consistent format
2. **Update Current Price**: For running trades, update current price regularly
3. **Use RR Ratio**: Minimum 1:2 for good risk management
4. **Regular Review**: Check dashboard regularly to monitor risk exposure
5. **Backup Data**: Export your Google Sheets periodically
6. **Risk Management**: Don't over-trade or over-leverage

---

## 🐛 Troubleshooting

### Dashboard not showing

- Make sure you've authorized Google Apps Script permissions
- Clear browser cache and reload

### Data not updating

- Refresh the web app page
- Check internet connection
- Make sure Spreadsheet ID is correct

### "Permission Denied" Error

- Re-authorize Apps Script
- Make sure "Who has access" setting is correct in deployment

---

## 📊 Sheet Data Structure

| Column | Field            | Type        | Description                    |
| ------ | ---------------- | ----------- | ------------------------------ |
| A      | Date             | Date        | Trade date                     |
| B      | Time             | Time        | Entry time                     |
| C      | Ticker           | Text        | Trading symbol                 |
| D      | Market           | Text        | Market (IDX/US/Crypto)         |
| E      | Type             | Text        | LONG or SHORT                  |
| F      | Entry Price      | Number      | Entry price                    |
| G      | TP Price         | Number      | Take Profit target             |
| H      | SL Price         | Number      | Stop Loss                      |
| I      | RR Ratio         | Text/Number | Risk Reward Ratio              |
| J      | Status           | Text        | RUNNING/CLOSED WIN/CLOSED LOSS |
| K      | Current Price    | Number      | Current price (running)        |
| L      | Exit Price       | Number      | Exit price (closed)            |
| M      | PnL              | Number      | Profit/Loss amount             |
| N      | TradingView Link | URL         | Chart link (optional)          |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 👤 Author

**ED Trading Journal**

Made with ❤️ for traders

---

## 📞 Support

If you have questions or need help:

- Create an issue in the repository
- Contact via email
- Join the trading community

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

**Happy Trading! 📈**
