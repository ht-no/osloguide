const SHEET_ID = "YOUR_SHEET_ID";
const API_KEY = "YOUR_API_KEY";
const RANGE = "Sheet1";

const content = document.getElementById("content");

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const [headers, ...rows] = data.values;

    rows.forEach(row => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <strong>${row[0]}</strong><br/>
        Status: ${row[1]}<br/>
        Owner: ${row[2]}
      `;
      content.appendChild(card);
    });
  });
