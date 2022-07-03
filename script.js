const form = document.getElementById('inputForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let inputOne = document.forms['inputForm']['emailphone']

    let temErro = false

    if (!inputOne.value) {
        inputOne.classList.add('error')
        temErro = true

        let span = inputOne.nextSibling.nextSibling // manipula o irmão
        span.innerText = 'Preencha o campo corretamente!'
    } else {
        inputOne.classList.remove('error')

        let span = inputOne.nextSibling.nextSibling 
        span.innerText = ''
    }

    let inputTwo = document.forms['inputForm']['pass']

    if (!inputTwo.value) {
        temErro = true
        inputTwo.classList.add('error')

        let span = inputTwo.nextSibling.nextSibling 
        span.innerText = 'Preencha o password corretamente!'
    } else {
        inputTwo.classList.remove('error')

        let span = inputTwo.nextSibling.nextSibling 
        span.innerText = ''
    }

    if (!temErro) {
        form.submit()
    }
    

})