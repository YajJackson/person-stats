function handleSubmit(ev) {
  ev.preventDefault() //ask a question about this Why is it neeed
  
  // pull information from form fields
  const form = ev.target
  const name = form.personName.value
  const age = form.personAge.value
  const color = form.personColor.value
  
  const statsBox = document.querySelector('.statsContainer')
  const displayList = renderList(name, age, color)
  
  statsBox.appendChild(displayList)
  
  // forces frame to wait for transition
  setTimeout(function() {
    setVisible(displayList)
  }, 0);
}

// creates color block
function renderColor(inputColor) {
  const colorBlock = document.createElement('span') // couldn't figure out how to create <div> inline with the color label
  colorBlock.style.display = 'inline-block'
  colorBlock.style.backgroundColor = inputColor
  colorBlock.style.width = '15px'
  colorBlock.style.height = '15px'
  return colorBlock
}

// creates list items
function renderListItem(inputItem, inputLabel) {
  const item = document.createElement('li')

  // check to see if input is a color; if so, run renderColor()
  if(inputLabel == 'Color'){
    item.textContent = `${inputLabel}: `
    item.appendChild(renderColor(inputItem))
  } else {
    item.textContent = `${inputLabel}: ${inputItem}`
  }
  return item
}

// creates a list from given inputs
function renderList(inputName, inputAge, inputColor) {
  const list = document.createElement('ul')

  // some abels for the list items
  const nameLabel = 'Name'
  const ageLabel = 'Age'
  const colorLabel = 'Color'

  // labels are used to check if input is color or not
  const nameItem = renderListItem(inputName, nameLabel)
  const ageItem = renderListItem(inputAge, ageLabel)
  const colorItem = renderListItem(inputColor, colorLabel)
  const color = renderColor(inputColor)
  
  // append list items 
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)
  
  // style the list
  list.style.height = 'auto'
  list.style.margin = '10px auto'
  list.style.width = '10%'
  list.style.padding = '5px'
  list.style.border = `3px solid ${inputColor}`
  list.style.borderRadius = '5px'
  list.style.visibility = 'hidden'
  list.style.opacity = '0'

  return list
}

// used for transition effect
function setVisible(listItem) {
  listItem.style.visibility = 'visible'
  listItem.style.opacity = '1'
  return listItem
}

// when submit, run handleSubmit
const personForm  = document.querySelector('#personForm')
personForm.addEventListener('submit', handleSubmit)