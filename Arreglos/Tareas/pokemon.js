let equipoPokemon = ['Charizard', 'Pikachu', 'Bulbasaur']
equipoPokemon.splice(0,1,'Squirtle')
equipoPokemon.push('Geodude');

let proximosEnLuchar = equipoPokemon.slice(0,2)
proximosEnLuchar.forEach((pelea) => console.log(`${pelea}`))