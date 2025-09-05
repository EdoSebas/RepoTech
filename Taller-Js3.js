/*Cargar un String por teclado e implementar las siguientes funciones:
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirlo en forma inversa.
d) Imprimir cada carácter del String separado con un guión.
e) Imprimir la cantidad de vocales almacenadas.

Codifique un programa que permita cargar una oración por teclado, luego
mostrar cada palabra ingresada en una línea distinta.*/


let frase = prompt("Ingrese una frase");

    // Calculamos la mitad redondeando hacia abajo
    let mitad = Math.floor(frase.length / 2);

    // Obtenemos desde el inicio hasta esa mitad
    let primeraMitad = frase.substring(0, mitad);

    document.writeln("a) Imprime la mitad del texto: " + primeraMitad + "<br>");

    document.writeln("b) Imprime el último carácter: " + frase.charAt(frase.length - 1) + "<br>");

    document.writeln("c) Imprime el texto en forma inversa: " + frase.split("").reverse().join("") + "<br>");

    document.writeln("d) Imprime cada carácter del String separado con un guión: " + frase.split("").join("-"))

/*.length: Es una propiedad que devuelve el número total de caracteres de un texto (string).
Math.floor(...): Redondea un número decimal hacia abajo al entero más cercano.
.substring(inicio, fin): Extrae y devuelve una porción de un texto desde una posición de inicio hasta una de fin.

.charAt(indice): Devuelve el carácter que se encuentra en la posición especificada del texto.
.split(""): Divide un texto en una lista (array) de caracteres individuales.
.reverse(): Invierte el orden de los elementos de una lista (array).
.join(""): Une todos los elementos de una lista (array) en un solo texto.*/
