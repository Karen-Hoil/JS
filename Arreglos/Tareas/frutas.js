let frutas = ['Gomu Gomu', 'Mera Mera', 'Hito Hito'];
frutas.push('Suke Suke');
frutas.splice(2,1);

let FrutMera = frutas.filter(fruta => fruta.includes('Mera'));

FrutMera.forEach((fruta) => console.log(`${fruta}`))