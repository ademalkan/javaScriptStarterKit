console.log('hello');

// JS type safe değildir


// dolarDun = "ankara"
//var dolarBugun = 9.00;
//var dolarDun = 8.45;

let dolarBugun = 9.00;
let dolarDun = 8.45;
{
    let dolarDun = 9.10;
}
console.log(dolarDun,dolarBugun)


const euroDun = 15;
// euroDun = 16 tekrar değer alamaz
console.log(euroDun)

// array = dizi
// camelCasing
// PascalCasing
let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log('<ul>')
for (let i = 0; i < konutKredileri.length; i++) {
    console.log('<li>' + konutKredileri[i] + '</li>')
}

console.log('</ul>')

console.log(konutKredileri)