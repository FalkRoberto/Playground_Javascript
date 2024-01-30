const d = new Date();

let day = d.getDate();

let mounth = d.getMonth() + 1;

let year = d.getFullYear();

let hour = d.getHours();

let min = d.getMinutes();

let sec = d.getSeconds();

let dayFormat = day + "/" + mounth + "/" + year + "  " + hour + ":" + min + ":" + sec;

console.log(dayFormat); // para que apareça no console do navegador

document.getElementById("demo").innerHTML = dayFormat;