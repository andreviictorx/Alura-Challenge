let amigos = []
const input = document.getElementById('amigo')

function adicionarAmigo() {
    const amigo = input.value;
    if(amigo === ' '){
        alert('Digite um nome válido');
    }else{
        amigos.push(amigo);
        input.value = ' ';
    }
    atualizaLista();
}


function atualizaLista(){
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = " ";
    for (let i = 0; i < amigos.length; i++){
        const amigo = amigos[i];
        listaDeAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

function removerAmigo(){
    let listaDeAmigos= document.getElementById('listaAmigos');
    if( listaDeAmigos ===  " "){
        alert('Não há amigos para remover');
        return;
    }else{
        listaDeAmigos.removeChild(listaDeAmigos.lastChild);
    }
}

function sortearAmigo(){
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    if(amigos.length === 0){
        resultado.innerText = 'Adicione amigos antes de sortear';
    }else{
        resultado.innerText = `O amigo sorteado é: ${amigoSorteado}`;
    }
}