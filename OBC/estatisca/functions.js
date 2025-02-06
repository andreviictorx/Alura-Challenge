/*
1- Media simples:
-tenho que criar uma função que receba vários parametros
-depois, fazer com que essa função pegue os parametros, some todos eles e divida pela quantidade de parametros passados
-usar o reduce e rest parametros

*/ 
export const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

/*
1- Media ponderada:
2-A função precisa ter o valor e um peso
3-valor * peso / soma dos pesos

*/ 
export const mediaPonderada = (...entries)=>{
    const soma = entries.reduce((acc, {valor, peso}) => acc + (valor * peso),0)
    const somaPesos = entries.reduce((acc, entry)=> acc + entry.peso,0)
    return soma / somaPesos
}

export const media = (...numbers) =>{
    const numerosOrdenados = [...numbers].sort((a, b)=> a -b)
    const numeroDoMeio = Math.floor(numerosOrdenados.length / 2)
    
    if(numerosOrdenados.length % 2 !==0){
        return numerosOrdenados[numeroDoMeio]
    }

    const primeiroDoMeio = numerosOrdenados[numeroDoMeio-1]
    const segudoDoMeio = numerosOrdenados[numeroDoMeio]

    return average(primeiroDoMeio, segudoDoMeio);
}

export const mode = (...numbers)=>{
    const quantidade = numbers.map(num =>[
    num,
    numbers.filter(n => n == num).length // quantidade de elementos repetidos
    ])

    quantidade.sort((a, b) => b[1] - a[1])
    return quantidade[0][0]
}
