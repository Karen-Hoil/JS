let luchadores = ['Goku', 'Vegeta', 'Krilli'];

luchadores.push('Piccolo', 'Tien');
luchadores.unshift('Yamcha');
luchadores.splice(3,1);
luchadores.forEach((luchador) => console.log(`${luchador}`));