import {average , mediaPonderada, media, mode} from "./functions.js";


console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`); //media simples teste
console.log(mediaPonderada({ valor: 9,peso: 3 },
    { valor: 7, peso: 1},
    { valor: 10,peso: 1 },)
); // media ponderada teste
console.log(media(2, 5, 99, 4, 42, 7));//mediana teste
console.log(`Moda: ${mode(1, 1,99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`); //moda teste
