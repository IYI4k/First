const fs = require('fs');

async function f(){
    let request = await fetch('https://date.nager.at/api/v3/AvailableCountries');
    if (request.ok) {
        let text = await request.json();
        fs.writeFileSync('cash.txt', text);
    } else {
        console.log("Ошибка HTTP :(   : " + request.status);
    }
}

let Requests = new Map();

f();




