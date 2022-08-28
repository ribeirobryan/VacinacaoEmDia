let localPage = document.location.href.slice(-10)//test if its in the index page, if so it clears the localStorage
if ( localPage == 'index.html'){
    localStorage.clear()
}

let idadePaciente = localStorage.getItem("storNumberOfDays")
let dateNow = new Date()
//bcg
let bcgTest = false
document.getElementsByName('bcg').forEach(inpbcg =>{
    inpbcg.addEventListener('change', inpbcgTest =>{
        if (inpbcg.id == 'bcgdu'){
            bcgTest = 1 // vacina em dia
        } else if (inpbcg.id == 'bcgnd' &&  idadePaciente <= 1825 ) {
            bcgTest = 2 // vacina atrasada
        } else if (inpbcg.id == 'bcgnd' &&  idadePaciente > 1825){
            bcgTest = 3 // vacina perdida
        }
    } )
} )




//hepatiteb
let hepatitebTest = false
document.getElementsByName('hepatiteb').forEach(inphepatiteb =>{
    inphepatiteb.addEventListener('change', inphepatitebTest =>{
        if ( inphepatiteb.id == 'hepatitebdu'){
            hepatitebTest = 1
        } else if (inphepatiteb.id == 'hepatitebnd' &&  idadePaciente <= 30 ) {
            hepatitebTest = 2
        } else if (inphepatiteb.id == 'hepatitebnd' &&  idadePaciente > 30){
            hepatitebTest = 3
        }
    } )
} )


// pentavalente
let datePentaSpan = document.getElementById('datePentaSpan')
let datePenta = document.getElementById('datePenta')
let pentaButton = document.getElementById('pentaButton')
let lastDosedif
let pentaDateLastDose
let pentaTest = false
let pentaaux = 0
document.getElementsByName('pentavalente').forEach(inppenta =>{
    inppenta.addEventListener('change', inppentaTest =>{
        pentaButton.addEventListener('click', pentaSubmit=>{
            pentaDateLastDose = new Date(datePenta.value)
            lastDosedif = ((dateNow - pentaDateLastDose)/(1000*3600*24))
            console.log((dateNow - pentaDateLastDose)/(1000*3600*24))
            if (isNaN(pentaDateLastDose) == false){
                datePenta.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                datePenta.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        if (inppenta.id == 'pvd3'){
            pentaTest = 1
            datePentaSpan.classList.remove('active')
            pentaaux = 1
        } else if (inppenta.id != 'pvd3' && idadePaciente > 2555){
            pentaTest = 3
            datePentaSpan.classList.add('active')
            pentaaux = 0
        } else if (inppenta.id == 'pvd2' && idadePaciente <= 2555 && idadePaciente > 183) { // se idade entre 6meses e 7 anos
            datePentaSpan.classList.remove('active')
            pentaaux = 1
            pentaTest = 2
        } else if (inppenta.id == 'pvd2' && idadePaciente <= 183){
            pentaTest = 1
            datePentaSpan.classList.add('active')
            pentaaux = 0
        } else if (inppenta.id == 'pvd1' && idadePaciente <= 2555 && idadePaciente > 122){
            datePentaSpan.classList.remove('active')
            pentaaux = 1
            pentaTest = 2
        } else if (inppenta.id == 'pvd1' && idadePaciente <= 122){
            pentaTest = 1
            datePentaSpan.classList.add('active')
            pentaaux = 0
        } else if (inppenta.id == 'pvnd' && idadePaciente <= 2555 && idadePaciente > 61){
            datePentaSpan.classList.add('active')
            pentaaux = 0
            pentaTest = 4
        } else if (inppenta.id == 'pvnd' && idadePaciente <= 61){
            datePentaSpan.classList.add('active')
            pentaaux = 0
            pentaTest = 1
        }
    } )
} )


//button read
let buttonSub = document.getElementById('vacFormSubmit')

let vacEmDiaDisplay = []
let vacPorFazerDisplay = []
let vacPerdidaDisplay = []

buttonSub.addEventListener('click', submitButton =>{
    let testIfChecked = true

    //BCG TEST
    if (bcgTest == false){
        alert('Vacina BCG é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (bcgTest == 1){
        vacEmDiaDisplay.push('BCG')
    } else if (bcgTest == 2){
        vacPorFazerDisplay.push('BCG')
    } else if (bcgTest == 3){
        vacPerdidaDisplay.push('BCG')
    }
    
    //hepatiteb test
   if (hepatitebTest == false){
        alert('Vacina de Hepatite B é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (hepatitebTest == 1){
        vacEmDiaDisplay.push('HEPATITE B')
    } else if (hepatitebTest == 2){
        vacPorFazerDisplay.push('HEPATITE B')
    } else if (hepatitebTest == 3){
        vacPerdidaDisplay.push('HEPATITE B')
    }
    
    if(pentaaux == 1){
        if (isNaN(pentaDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (pentaTest == false){
        alert('Vacina Pentavalente é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (pentaTest == 1){
        vacEmDiaDisplay.push('PENTAVALENTE')
    } else if (pentaTest == 2){
        if(lastDosedif > 60){
            vacPorFazerDisplay.push('PENTAVALENTE')
        } else if (lastDosedif <= 60) {
            vacEmDiaDisplay.push('PENTAVALENTE')
        }
    } else if (pentaTest == 3){
        vacPerdidaDisplay.push('PENTAVALENTE')
    } else if (pentaTest == 4){
        vacPorFazerDisplay.push('PENTAVALENTE')
    }

    localStorage.setItem('vacsEmDia', vacEmDiaDisplay)
    localStorage.setItem('vacsPorFazer', vacPorFazerDisplay)
    localStorage.setItem('vacsPerdidas', vacPerdidaDisplay)

    if (testIfChecked == true){
        window.document.location = ("page3.html")
    }
})










    



