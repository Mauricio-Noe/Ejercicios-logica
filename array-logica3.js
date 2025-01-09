//Ejemplo de prueba tecnica js

/*Dado n  el tamalo de una matriz de numeros enteros y la matriz  list_of_numbers , su tarea es determinar si el porducto de todos los numeros enteros en la matriz es par o impar
Si el producto de todos los numeros enteros es par,  se devuelve la suma de todos los numeros enteros,Sin embargo si alguno de los numeros enteros es 0, se devuelve el doble de la suma
si el producto de todos los numeros enteros es impar , se devulve el producto de todos los numeros enteros Sin embargo si alguno  de los numeros enteros es 3 , se devuelve uno mas que el producto


Escribe la funcion que hace estp CALCULATERUNNINGTOTAL

Nota : 0 se considera par
*/
/*
Ejemplo 1 
 Aporte 
 n=4
 list_of_number= 1 2 3 4 
 Produccion : 10
 Explicacion:
 EL producto de todos los numers enteros de la matriz es 1*2*3*4=24 que es par
 por lo tanto la funcion devuelve la suma de todos los numeros enteros que es 10
 
Ejemplo 2 
Aporte n=3
list_of_number= 5 7 9
ProduccIon= 315
Explicacion:
El produccto de 5*7*9 es 315 el cual no tiene mitad ,por lo tanto se devuel el producto de los enteros*/
//Pasos a seguir
//2-crear const donde determine la lomgitud de n contemplando  list_of_numbers
//2-crear constante para sumar valores y comparrarlos 

function CalculateRunningTotal(aporte , list_of_numbers ) {

 //1-comprueba el valor sea igual que la matriz
    if(list_of_numbers.length !== aporte) {
 throw new Error(" no coincide con la longitud");
 

    }
    //utiliza reducce para sumar y multiplicar los valores de la matriz
    const productovalor= list_of_numbers.reduce((acc , val ) => acc * val , 1) ;
 const sumavalor= list_of_numbers.reduce((acc, val)=> acc + val, 0);
  //coprobar y compar valores
 if( productovalor % 2 === 0 ){
  // ocupe include que en js sue utilizado para detectar si se usa el valor asignado
    if(  list_of_numbers.includes(0) ){
return sumavalor *2;

    }
     return sumavalor
    } else{
         if( list_of_numbers.includes(3)){
           return productovalor + 1;

         }
    }
    return productovalorvalor;

 }
console.log (CalculateRunningTotal(3, [7, 2, 4, 3]))






