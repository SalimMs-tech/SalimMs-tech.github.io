const apiKey = "c3b584cce80d43f08b1001504ed81afb";

async function updateMarket(){

try {

const response = await fetch(
`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${apiKey}`
);

const data = await response.json();

const price = Number(data.price);


document.getElementById("gold-price").innerHTML =
price.toFixed(2);


// AI INSIGHT LOGIC

let insight = "";

if(price > 4000){

insight =
"Gold momentum is strong. Buyers are currently dominating the market.";

}
else{

insight =
"Gold is showing weakness. Market pressure may be increasing.";

}


document.getElementById("ai-insight").innerHTML =
insight;



}

catch(error){

console.log(error);

}

}


updateMarket();

setInterval(updateMarket,60000);
