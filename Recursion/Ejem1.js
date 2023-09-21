let cuentaAtras = numero => {
    //base clase
    if(numero === 0){
        return 0;
    }
    console.log(numero);
    return cuentaAtras(numero -1);
}

console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1, 0

//* La entrada actual es 5
//* Es 5 igual a 0 ?
//* No, Ok entonces imprime 5 en la consola.
//* Se llama asi misma de nuevo con el numero - 1 O 5 - 1;
//* La entrada principal es 4
//* Es 4 igual a 0 ?
//* No, Ok entonces imprime 4 en la consola.
//* Repite hasta que la entrada sea 0, y asi la función deja de llamarse a si misma.