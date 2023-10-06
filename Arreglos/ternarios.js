//Ternarios
// condicion ? expre1 : expre2

// let edad = 18;

// if(edad >= 18){
//     console.log("Puede votar");
// }else{
//     console.log("No puede votar");
// }

///Condicion ? true : false

// edad >= 18 ? console.log('Puede votar') :  console.log('No puede votar')

const villanos = ['Shigaraki', 'Toga', 'Dabi'];

villanos.push('Kurogiri');

villanos.splice(villanos.indexOf(Dabi), 1);
// villanos.splice(2,1);

// console.log(villanos)

const nuevoEquipo = villanos.map((villano) => villano === 'Toga' ? `Sr ${villano}`: `Sr ${villano}`);