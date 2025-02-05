function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type = 'text'){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    return input
}

let addTechBtn = document.getElementById('addTechBtn')
let form = document.getElementById('devForm')
let developers = []
let inputRows = 0

addTechBtn.addEventListener('click', techBtn)

function techBtn(ev){
    const stackInputs = document.getElementById('stackInputs');
    const newRow = document.createElement('li')
    let rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    let techNameLabel = createLabel('Tecnologia: ', 'techName-' + rowIndex )
    let techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    let expLabel = createLabel('Experiência: ')
    let id1 = 'expRadio' + rowIndex + '.1'
    let expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    let expLabel1 = createLabel('0-2 anos', id1)

    let id2 = 'expRadio' + rowIndex + '.2'
    let expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    let expLabel2 = createLabel('3-4 anos', id2)
    
    let id3 = 'expRadio' + rowIndex + '.3'
    let expRadio3 = createInput(id3, '+5 anos', 'techExp-' + rowIndex, 'radio')
    let expLabel3 = createLabel('+5 anos', id3)


   

    
    let removeBtn = document.createElement('button')
    removeBtn.type = 'button'
    removeBtn.innerText = 'Excluir'
    removeBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeBtn)
    stackInputs.appendChild(newRow)
}

form.addEventListener('submit', function (ev) {
    ev.preventDefault()
  
    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')
  
    let technologies = []
    inputRows.forEach(function (row) {
      // #rowId input[name="techName"]
      const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
      const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
      technologies.push({ name: techName, exp: techExp })
    })
  
    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')
  
    fullnameInput.value = ''
    inputRows.forEach(function (row) {
      row.remove()
    })
  
    console.log(developers)
  })