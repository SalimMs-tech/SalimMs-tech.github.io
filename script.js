async function updateGold(){

const url =
"https://api.twelvedata.com/price?symbol=XAU/USD&apikey=c3b584cce80d43f08b1001504ed81afb";

const response = await fetch(url);

const data = await response.json();

document.getElementById("gold-price").innerHTML =
data.price;

}

updateGold();

setInterval(updateGold,10000);
