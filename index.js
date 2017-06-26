function updateContent(ev) {
    ev.preventDefault() //ask a question about this Why is it neeed
    const form = ev.target
    const name = form.personName.value
    const age = form.personAge.value
    const color = form.personColor.value

    console.log(name, age, color)

    updateStats(name, age, color)
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateStats(name, age, color) {
    const statsBox = document.querySelector('#personStats')
    statsBox.innerHTML += name + " " + age+ "<br>"
    // statsBox.style.background = getRandomColor();
    statsBox.style.background = color;
}

const personForm  = document.querySelector('#personForm')
personForm.addEventListener('submit', updateContent)