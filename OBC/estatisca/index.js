/*
1- Media simples:
-tenho que criar uma função que receba vários parametros
-depois, fazer com que essa função pegue os parametros, some todos eles e divida pela quantidade de parametros passados
-usar o reduce e rest parametros

*/ 
const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}
console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)


/*
1- Media ponderada:
2-A função precisa ter o valor e um peso
3-valor * peso / soma dos pesos

*/ 
const mediaPonderada = (...entries)=>{
    const soma = entries.reduce((acc, {valor, peso}) => acc + (valor * peso),0)
    const somaPesos = entries.reduce((acc, entry)=> acc + entry.peso,0)
    return soma / somaPesos
}
console.log(mediaPonderada({ valor: 9,peso: 3 },
    { valor: 7, peso: 1},
    { valor: 10,peso: 1 },))



const media = (...numbers) =>{
    const numerosOrdenados = [...numbers].sort((a, b)=> a -b)
    const numeroDoMeio = Math.floor(numerosOrdenados.length / 2)
    
    if(numerosOrdenados.length % 2 !==0){
        return numerosOrdenados[numeroDoMeio]
    }

    const primeiroDoMeio = numerosOrdenados[numeroDoMeio-1]
    const segudoDoMeio = numerosOrdenados[numeroDoMeio]

    return average(primeiroDoMeio, segudoDoMeio)
}

console.log(media(2, 5, 99, 4, 42, 7)) // 2 4 5 7 42 99

