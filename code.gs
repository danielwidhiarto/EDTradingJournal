function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("Trading Dashboard")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function getTrades() {
  const ss = SpreadsheetApp.openById(
    "1_H6L1V79XyeAikbZiUC0zIVRXJ19z4U2h3MQjh7zTWE"
  );
  const sh = ss.getSheetByName("Main");

  const values = sh.getDataRange().getValues();
  values.shift(); // Hapus header

  const clean = values
    .filter((r) => r[0] !== "" && r[2] !== "")
    .map((r) => {
      let dateString = "";
      try {
        dateString = new Date(r[0]).toISOString();
      } catch (e) {
        dateString = String(r[0]);
      }

      const formattedTime =
        r[1] instanceof Date ? r[1].toLocaleTimeString("id-ID") : String(r[1]);

      return {
        date: dateString, // Column A (0)
        time: formattedTime, // Column B (1)
        ticker: r[2], // Column C (2)
        market: r[3], // Column D (3)
        type: r[4], // Column E (4)
        entryPrice: Number(r[5]) || 0, // Column F (5)
        tpPrice: Number(r[6]) || 0, // Column G (6)
        slPrice: Number(r[7]) || 0, // Column H (7)
        rrRatio: r[8] || "N/A", // Column I (8)
        status: r[9], // Column J (9)
        currentPrice: Number(r[10]) || 0, // Column K (10)
        exitPrice: Number(r[11]) || 0, // Column L (11)
        pnl: Number(r[12]) || 0, // Column M (12)
        tradingViewLink: r[13] || "", // Kolom N (13) untuk TradingView Link
      };
    });

  return clean;
}
