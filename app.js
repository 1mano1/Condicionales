//Las condicionales en programación son el if else y el switch

// let numero1 = 23;
// let numero2 = 20;


// if (numero1 < numero2) {
//     //espacio entre variables
//     console.log("El numero : " + numero1 + " es mayor que el numero : " + numero2);
// }else{
//     console.log("El numero : " + numero2 + " es mayor que el numero : " + numero1);
// }

//Pedir la edad del usario, si es mayor de edad siempre y cuando te de un valor mayor a cero
//anidar tener un proceso dentro


// let edad = prompt('Dame tu edad');

// if (edad > 18) {
//     //identacion el espacio hacia dentro que te marcala posición de cada operación
//     if (edad <= 18) {
//         document.write('Eres mayor de edad');
//     }else{
//         document.write('Eres menor de edad');
//     }
// }else{
//     document.write("Edad no valida")
// }

// let dia = prompt('Dame el dia de la semana');

// switch (dia) {
//     case 'Lunes': console.log("Lunes");
        
//         break;
//     case 'Martes': console.log("Martes");
        
//         break;
//     case 'Miercoles': console.log("Miercoles");
        
//         break;
//     case 'Jueves': console.log("Jueves");
        
//         break;
//     case 'Viernes': console.log("Viernes");
        
//         break;
//     case 'Sabado': console.log("Sabado");
        
//         break;
//     case 'Domingo': console.log("Domingo");
        
//         break;

//     default:
//         console.log('Este no es un dia')
//         break;
// }


//operador ternario 
// let numero1 = 15;
// let numero2 = 20;

// let valor = (numero1 > numero2) ? 'El numero1 es mayor' : 'El numero2 es mayor';
// console.log(valor);

// pedir dos numeros si son iguales y si son mayor cual es el mayoy cual es el menor

// let numero1 = prompt('Dame un numero');
// let numero2 = prompt('Dame el segundo numero');

// if (numero1 === numero2) {
//     console.log('Los numeros son iguales')

// }else{
//     console.log('Son diferentes')

// }if (numero1 > numero2) {
//     console.log('El '+ numero1 + ' es mayor')
// }else{
//     console.log('El '+ numero2 + ' es mayor')
// }

// // pedir un numero y me diga si es par o impar en consola o en el numero mod 2 o numero % 2 = residuo

// let numero = prompt('Dame un numero');

// if (numero % 2 === 0) {
//     console.log('El numero es par')
// }else{
//     console.log('El numero es impar')
// }

//pedir dos numeros enteros y devolver el cociente osea el resultado de divisdir el numero 1 entre el 2, pero si uno de los numeros es 0 no hacer nada y mandar un mensaje de error

// let numero3 = prompt('Dame un numero');
// let numero4  = prompt('Dame el segundo numero');

// if (numero3 === 0 || numero4 === 0) {
//     console.log('No se pueden dividir por cero')
// }else{
//     console.log('El cociente es'+ numero3 / numero4)
// }

//Programa que pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.

let numero1 = prompt('Dame el primer numero');
let numero2 = prompt('Dame el segundo numero');

let operacion = prompt('Dame una operacion');

switch (operacion) {
    case'sumar':
    console.log(numero1 + numero2);
    break
    case'restar':
    console.log(numero1 - numero2);
    break
    case'multiplicar':
    console.log(numero1 * numero2);
    break
    case 'dividir':
        if (numero2 === 0) {
            console.log('No se pueden dividir por cero')
        }else{
            console.log(numero1 / numero2)
        }
}