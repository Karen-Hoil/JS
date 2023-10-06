//Equipo para ir a cazar un demonio
const equipoCazador = ['Nezuko', 'Tanjiro', 'Inozuke', 'Zenitsu'];

//Como resulto ser una familia de demonios mandaron a los pilares shinobu y Giyuu para liderar
equipoCazador.unshift('Shinobu', 'Giyuu'); 
//Nuevo equipo
equipoCazador.forEach((cazadores) => console.log(`El equipo se conforma por : ${cazadores}`))

//Zenitsu pelea solo contra un demonio el cual le inyecto veneno, lo logra vencer pero ya no puede pelear entonces se quita del equipo

equipoCazador.splice(equipoCazador.indexOf('Zenitsu',1));

//La pelea termina venciendo a todos los demonios, pero en esa pelea se enteran que hay un demonio y tratan de buscarla entre todos los cazadores que quedaron

const buscarDemonio = equipoCazador.map((demonio) => demonio === 'Nezuko' ? `${demonio} es demonio` : `${demonio} no es un demonio`)

console.log(buscarDemonio);








