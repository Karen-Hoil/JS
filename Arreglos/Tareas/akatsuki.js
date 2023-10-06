let akatsuki = ['Itachi', 'Kisame', 'Deidara'];
akatsuki.unshift('Tobi');
akatsuki.splice(1,1);

let newAkatsuki = akatsuki.map((personajes) => `Akatsuki ${personajes} `)
newAkatsuki.forEach((personaje) => console.log(`${personaje}`))