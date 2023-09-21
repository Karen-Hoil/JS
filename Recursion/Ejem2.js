let parImpar = (numero) =>{
    if (numero === 0){
        return "Par";
    }else if (numero === 1){
        return "Impar"
    }else{
        return parImpar(numero -2);
    }
}
console.log(parImpar(20));
console.log(parImpar(75));
console.log(parImpar(98));
console.log(parImpar(113));