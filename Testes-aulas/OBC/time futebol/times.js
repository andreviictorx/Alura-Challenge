function addPlayer (){
    let position = document.getElementById('position').value
    let name = document.getElementById('name').value
    let number = document.getElementById('number').value

    let confirmation = confirm(`Deseja escalar ${name} como ${position} com numero(${number}) ?`)


    if(confirmation){
        let teamList = document.getElementById('team-list')
        let playerItem = document.createElement('li');
        playerItem.id = 'player-' + number
        playerItem.innerText = `${position}: ${name} (${number})`


        teamList.appendChild(playerItem)

        document.getElementById('position').value = ' '
        document.getElementById('name').value = ' '
        document.getElementById('number').value = ' '

    }
    
}


function removePlayer (){
    let number = document.getElementById('numberToRemove').value
    let playerToRemove = document.getElementById('player-' + number)

    let confirmation = confirm("Remover jogador com o numero: " + number + " ?")
    if(confirmation){
        let teamList = document.getElementById('team-list')

        teamList.removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ' '

    }
}