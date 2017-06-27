function updateContent(ev) {
  ev.preventDefault() //ask a question about this Why is it neeed
  
  const form = ev.target
  const name = form.personName.value
  const age = form.personAge.value
  const color = form.personColor.value

  updateStats(name, age, color)
}

function updateStats(name, age, color) {
  const statsBox = document.querySelector('#personStats')
  const p = document.createElement('p')

  p.textContent = `Name: ${name} Age: ${age} Color: ${color}`
  p.style.color = color

  statsBox.appendChild(p)
}

const personForm  = document.querySelector('#personForm')
personForm.addEventListener('submit', updateContent)