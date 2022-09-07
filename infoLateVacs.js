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

//dtp
let dtpButton = document.getElementById('dtpButton')
let dateDtp = document.getElementById('dateDtp')
let dateDtpSpan = document.getElementById('dateDtpSpan')
let dtpDateLastDose
let dtpDateLastDoseDif
let dtpTest = false
let dtpAux = 0

document.getElementsByName('dtp').forEach(inpdtp =>{
    inpdtp.addEventListener('change', inpdtpTest =>{
        dtpButton.addEventListener('click', dtpButtonClick =>{
            dtpDateLastDose = (new Date(dateDtp.value))
            dtpDateLastDoseDif = ((dateNow - dtpDateLastDose)/(1000*3600*24))
            console.log(dtpDateLastDoseDif)
            if (isNaN(dtpDateLastDose) == false){
                dateDtp.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateDtp.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        if (inpdtp.id == 'dtpd2'){
            dtpTest = 1
            dateDtpSpan.classList.add('active')
            dtpAux = 0
        } else if (inpdtp.id != 'dtpd2' && idadePaciente > 2555){
            dtpTest = 3
            dateDtpSpan.classList.add('active')
            dtpAux = 0
        } else if (inpdtp.id == 'dtpd1' && idadePaciente <= 2555 && idadePaciente > 1461){
            dtpTest = 4
            dateDtpSpan.classList.remove('active')
            dtpAux = 1
        } else if (inpdtp.id == 'dtpd1' && idadePaciente <= 1461) {
            dtpTest = 1
            dateDtpSpan.classList.add('active')
            dtpAux = 0
        } else if (inpdtp.id == 'dtpnd' && idadePaciente <= 2555 && idadePaciente > 457){
            dtpTest = 2
            dateDtpSpan.classList.add('active')
            dtpAux = 0
        } else if (inpdtp.id == 'dtpnd' && idadePaciente <= 457){
            dtpTest = 1
            dateDtpSpan.classList.add('active')
            dtpAux = 0
        }
    })
})


//vip  // analogo pentavalente
let dateVipSpan = document.getElementById('dateVipSpan')
let dateVip = document.getElementById('dateVip')
let vipButton = document.getElementById('vipButton')
let lastDosedifVip
let vipDateLastDose
let vipTest = false
let vipaux = 0

document.getElementsByName('vip').forEach(inpvip =>{
    inpvip.addEventListener('change', inpvipTest =>{
        vipButton.addEventListener('click', vipSubmit=>{
            vipDateLastDose = new Date(dateVip.value)
            lastDosedifVip = ((dateNow - vipDateLastDose)/(1000*3600*24))
            console.log((dateNow - vipDateLastDose)/(1000*3600*24))
            if (isNaN(vipDateLastDose) == false){
                dateVip.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateVip.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        if (inpvip.id == 'vipd3'){
            vipTest = 1
            dateVipSpan.classList.remove('active')
            vipaux = 1
        } else if (inpvip.id != 'vipd3' && idadePaciente > 1825){
            vipTest = 3
            dateVipSpan.classList.add('active')
            vipaux = 0 // ate aqui tudo certo
        } else if (inpvip.id == 'vipd2' && idadePaciente <= 1825 && idadePaciente > 183) { // se idade entre 6meses e 7 anos
            dateVipSpan.classList.remove('active')
            vipaux = 1
            vipTest = 2
        } else if (inpvip.id == 'vipd2' && idadePaciente <= 183){
            vipTest = 1
            dateVipSpan.classList.add('active')
            vipaux = 0
        } else if (inpvip.id == 'vipd1' && idadePaciente <= 1825 && idadePaciente > 122){
            dateVipSpan.classList.remove('active')
            vipaux = 1
            vipTest = 2
        } else if (inpvip.id == 'vipd1' && idadePaciente <= 122){
            vipTest = 1
            dateVipSpan.classList.add('active')
            vipaux = 0
        } else if (inpvip.id == 'vipnd' && idadePaciente <= 1825 && idadePaciente > 61){
            dateVipSpan.classList.add('active')
            vipaux = 0
            vipTest = 4
        } else if (inpvip.id == 'vipnd' && idadePaciente <= 61){
            dateVipSpan.classList.add('active')
            vipaux = 0
            vipTest = 1
        }
    } )
} )

//vop // analogo dtp
let vopButton = document.getElementById('vopButton')
let dateVop = document.getElementById('dateVop')
let dateVopSpan = document.getElementById('dateVopSpan')
let vopDateLastDose
let vopDateLastDoseDif
let vopTest = false
let vopAux = 0

document.getElementsByName('vop').forEach(inpvop =>{
    inpvop.addEventListener('change', inpvopTest =>{
        vopButton.addEventListener('click', vopButtonClick =>{
            vopDateLastDose = (new Date(dateVop.value))
            vopDateLastDoseDif = ((dateNow - vopDateLastDose)/(1000*3600*24))
            console.log(vopDateLastDoseDif)
            if (isNaN(vopDateLastDose) == false){
                dateVop.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateVop.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        if (inpvop.id == 'vopd2'){
            vopTest = 1
            dateVopSpan.classList.add('active')
            vopAux = 0
        } else if (inpvop.id != 'vopd2' && idadePaciente > 1825){
            vopTest = 3
            dateVopSpan.classList.add('active')
            vopAux = 0
        } else if (inpvop.id == 'vopd1' && idadePaciente <= 1825 && idadePaciente > 1461){
            vopTest = 4
            dateVopSpan.classList.remove('active')
            vopAux = 1
        } else if (inpvop.id == 'vopd1' && idadePaciente <= 1461) {
            vopTest = 1
            dateVopSpan.classList.add('active')
            vopAux = 0
        } else if (inpvop.id == 'vopnd' && idadePaciente <= 1825 && idadePaciente > 457){
            vopTest = 2
            dateVopSpan.classList.add('active')
            vopAux = 0
        } else if (inpvop.id == 'vopnd' && idadePaciente <= 457){
            vopTest = 1
            dateVopSpan.classList.add('active')
            vopAux = 0
        }
    })
})

//button read
let buttonSub = document.getElementById('vacFormSubmit')

let vacEmDiaDisplay = []
let vacPorFazerDisplay = []
let vacPerdidaDisplay = []

buttonSub.addEventListener('click', submitButton =>{
    let testIfChecked = true
    console.log(testIfChecked)
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

    //pentavalente test
    
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


    if (dtpAux == 1){
        if (isNaN(dtpDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
        } 
    }
    if (dtpTest == false) {
        alert('Vacina DTP é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (dtpTest == 1){
        vacEmDiaDisplay.push('DTP')
    } else if (dtpTest == 2){
        if(pentaDateLastDose <= 183  ){
            vacEmDiaDisplay.push('DTP')
        } else if (pentaDateLastDose > 183){
            vacPorFazerDisplay.push('DTP')
        }
    } else if (dtpTest == 3){
        vacPerdidaDisplay.push('DTP')
    } else if (dtpTest == 4){
        if (dtpDateLastDoseDif > 183){
            vacPorFazerDisplay.push('DTP')
        } else if (dtpDateLastDoseDif <= 183) {
            vacEmDiaDisplay.push('DTP')
        }
    }

    //vip teste
    if(vipaux == 1){
        if (isNaN(vipDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (vipTest == false){
        alert('Vacina VIP é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (vipTest == 1){
        vacEmDiaDisplay.push('VIP')
    } else if (vipTest == 2){
        if(lastDosedifVip > 60){
            vacPorFazerDisplay.push('VIP')
        } else if (lastDosedifVip <= 60) {
            vacEmDiaDisplay.push('VIP')
        }
    } else if (vipTest == 3){
        vacPerdidaDisplay.push('VIP')
    } else if (vipTest == 4){
        vacPorFazerDisplay.push('VIP')
    }

    //vop test

    if (vopAux == 1){
        if (isNaN(vopDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
        } 
    }
    if (vopTest == false) {
        alert('Vacina VOP é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (vopTest == 1){
        vacEmDiaDisplay.push('VOP')
    } else if (vopTest == 2){
        if(vopDateLastDose <= 183  ){
            vacEmDiaDisplay.push('VOP')
        } else if (vopDateLastDose > 183){
            vacPorFazerDisplay.push('VOP')
        }
    } else if (vopTest == 3){
        vacPerdidaDisplay.push('VOP')
    } else if (vopTest == 4){
        if (vopDateLastDoseDif > 183){
            vacPorFazerDisplay.push('VOP')
        } else if (vopDateLastDoseDif <= 183) {
            vacEmDiaDisplay.push('VOP')
        }
    }

    localStorage.setItem('vacsEmDia', vacEmDiaDisplay)
    localStorage.setItem('vacsPorFazer', vacPorFazerDisplay)
    localStorage.setItem('vacsPerdidas', vacPerdidaDisplay)
    if (testIfChecked == true){
        window.document.location = ("page3.html")
    }
})










    



