

function newItem(ev){
    if(ev.code == 'Enter'){
        
        let ul = document.getElementById('lista-de-compras');

        let newLi = document.createElement('li');
        newLi.innerText = inputText.value
        document.querySelector('input').value = " "
    
        ul.appendChild(newLi)
    }
    
}
let inputText = document.querySelector('input')
inputText.addEventListener('keydown', newItem)