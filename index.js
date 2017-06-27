function updateContent(ev) {
  ev.preventDefault() //ask a question about this Why is it neeed
  
  const form = ev.target
  const name = form.personName.value
  const age = form.personAge.value
  const color = form.personColor.value

  updateStats(name, age, color)
}

function updateStats(name, age, color) {
  //select stats container
  const statsBox = document.querySelector('#statsContainer')

  //create list
  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = `Color: ${color}`
  list.style.color = color
  list.appendChild(colorItem)

  // append list to stats container
  statsBox.appendChild(list)
}

const personForm  = document.querySelector('#personForm')
personForm.addEventListener('submit', updateContent)