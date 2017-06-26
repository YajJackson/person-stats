function updateContent(ev) {
    ev.preventDefault() //ask a question about this Why is it neeed
    const form = ev.target
    const name = form.personName.value
    const age = form.personAge.value
    const color = form.personColor.value

    console.log(name, age, color)
    updateStats(name, age, color)
}

function updateStats(name, age, color) {
    const statsBox = document.querySelector('#personStats')
    statsBox.innerHTML += name + " " + age+ "<br>"
    statsBox.style.background = color;
}

const personForm  = document.querySelector('#personForm')
personForm.addEventListener('submit', updateContent)