function updateHeading(ev) {
    ev.preventDefault() //ask a question about this Why is it neeed
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.textContent = name
    //heading.innerHTML = name
}

const personForm  = document.querySelector('#personForm')
personForm.addEventListener('submit', updateHeading)