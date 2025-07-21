async function cargarContenido() {
    const elementos = {
        cradolares: document.getElementById("crusd"),
        eurausd: document.getElementById("eurusd"),
        bitcoins: document.getElementById("bitusd")
    };

    const montos = {
        dolares: 1,
        euros: 1,
        bitcoin: 1
    };

    try {
        const resUSD = await fetch("https://open.er-api.com/v6/latest/USD");
        const dataUSD = await resUSD.json();
        const tasaCRC = dataUSD?.rates?.CRC;
        elementos.cradolares.textContent = tasaCRC
            ? `💵 ${montos.dolares} USD ≈ ${Number(montos.dolares * tasaCRC).toLocaleString()} CRC`
            : "❌ No disponible";

        const resEUR = await fetch("https://open.er-api.com/v6/latest/EUR");
        const dataEUR = await resEUR.json();
        const tasaUSD = dataEUR?.rates?.USD;
        elementos.eurausd.textContent = tasaUSD
            ? `💶 ${montos.euros} EUR ≈ ${Number(montos.euros * tasaUSD).toLocaleString()} USD`
            : "❌ No disponible";

        const resBTC = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        const dataBTC = await resBTC.json();
        const tasaBTC = dataBTC.bitcoin?.usd;
        elementos.bitcoins.textContent = tasaBTC
            ? `₿ ${montos.bitcoin} BTC ≈ ${Number(montos.bitcoin * tasaBTC).toLocaleString()} USD`
            : "❌ No disponible";

    } catch (error) {
        console.error("Error al obtener tasas de cambio:", error);
        elementos.cradolares.textContent = "Colón: ❌ Error";
        elementos.eurausd.textContent = "Euro: ❌ Error";
        elementos.bitcoins.textContent = "Bitcoin: ❌ Error";
    }
}

cargarContenido();
setInterval(cargarContenido, 60000);
