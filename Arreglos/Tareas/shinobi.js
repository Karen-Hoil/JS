let shinobi = ['Naruto', 'Susuke', 'Sakura'];

shinobi.push('Konahamaru');

shinobi.unshift('Kakashi');

let primEquipo = shinobi.slice(0,3);

let numLetras = primEquipo.reduce((acomulador, ninja) => acomulador + ninja.length, 0)

console.log(numLetras)