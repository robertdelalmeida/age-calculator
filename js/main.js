

const formulario = document.querySelector("#formNumbers")

formulario.onsubmit = function(event) {
    event.preventDefault()

    let temErro = false

    const whatDay = Date.now()
    const dt = new Date(whatDay)
    

    const inputDay = document.forms['formNumbers']['day']
    const inputMonth = document.forms['formNumbers']['month']
    const inputYear = document.forms['formNumbers']['year']



    if (!inputDay.value){
        inputDay.classList.add('inputError')
        inputDay.classList.remove('inputBorder')

        let span = inputDay.nextSibling.nextSibling
        span.innerText = 'This field is required'
    } else {
        inputDay.classList.remove('inputError')
        inputDay.classList.add('inputBorder')

        let span = inputDay.nextSibling.nextSibling
        span.innerText = ''

        const result1 = (`${dt.getDate() - inputDay.value}`)
        const number1 = parseInt(result1)
        
        let resultDay = document.querySelector('#resultDays')
        resultDay.innerText = number1
    }
    
    if (!inputMonth.value){
        inputMonth.classList.add('inputError')
        inputMonth.classList.remove('inputBorder')

        let span = inputMonth.nextSibling.nextSibling
        span.innerText = 'This field is required'
    } else {
        inputMonth.classList.remove('inputError')
        inputMonth.classList.add('inputBorder')

        let span = inputMonth.nextSibling.nextSibling
        span.innerText = ''

        const result2 = (`${dt.getMonth() + 1 - inputMonth.value}`)
        const number2 = parseInt(result2)

        let resultMonth = document.querySelector('#resultMonths')
        resultMonth.innerText = number2
    }
    
    if (!inputYear.value){
        inputYear.classList.add('inputError')
        inputYear.classList.remove('inputBorder')

        let span = inputYear.nextSibling.nextSibling
        span.innerText = 'This field is required'
    } else {
        inputYear.classList.remove('inputError')
        inputYear.classList.add('inputBorder')

        let span = inputYear.nextSibling.nextSibling
        span.innerText = ''

        const result3 = (`${dt.getFullYear() - inputYear.value}`)
        const number3 = parseInt(result3)

        let resultYear = document.querySelector('#resultYears')
        resultYear.innerText = number3
    }
}

