//JS file to get the form data,treat it and store it in a localStorage

//Reading buttons
let submitBtn = document.getElementById("submit-btn")
let dnascimento = document.getElementById("info-inpnascimento")



submitBtn.addEventListener('click', infoSubmit =>{

    let datePicker = new Date(dnascimento.value) // set a date object to store the input data
    let dateNow = new Date() // set the today date

    let difDate = (dateNow - datePicker) / (1000 * 3600 * 24)
    difDate = Math.trunc(difDate)
    console.log(difDate)
    let difYears = difDate/365.25

    let difMonths = difYears - (Math.trunc(difYears))
    difMonths = (difMonths / 0.08333333333)

    let difDays = difMonths - (Math.trunc(difMonths))
    difDays = (difDays / 0.0328549112)
    
    console.log(`A pessoa tem ${Math.trunc(difYears)} anos, ${Math.trunc(difMonths)} meses e ${Math.trunc(difDays)} dias.`)

    let infoSexoM = document.getElementById('info-inpsexo1')
    let infoSexoF = document.getElementById('info-inpsexo2')

    let infoSexo

    

    let testInfos = true // auxiliar variable to test if the inputs values are right

    if (isNaN(datePicker) == true){
        alert('A data de nascimento é de preenchimento obrigatório')
        window.location.reload();
        testInfos = false
    }

    if (infoSexoM.checked == true){
        infoSexo = 'MASCULINO'
    } else if (infoSexoF.checked == true) {
        infoSexo = 'FEMININO'
    } else {
        alert('O sexo é de preenchimento obrigatório')
        window.location.reload();
        testInfos = false

    }

    //Storing the data with the localStorage method
    localStorage.setItem("storDay", Math.trunc(difDays))
    localStorage.setItem("storMonth", Math.trunc(difMonths))
    localStorage.setItem("storYear", Math.trunc(difYears))
    localStorage.setItem("storSexo", infoSexo)
    localStorage.setItem("storNumberOfDays", difDate)

        if (testInfos == true){
    window.document.location = ("page2.html")
    }
})


    






