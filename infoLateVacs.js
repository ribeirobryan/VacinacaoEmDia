let localPage = document.location.href.slice(-10)//test if its in the page 1, if so it clears the localStorage
if ( localPage == 'page1.html'){
    localStorage.clear()
    /*alert('Versão Pré-Alpha')
    alert('Esta página está atualmente em fase de desenvolvimento e não substitui (e nunca substituirá) o auxilio de um profissional')
    */
}

let idadePaciente = localStorage.getItem("storNumberOfDays")
let sexoPaciente = localStorage.getItem("storSexo")
let dateNow = new Date()
//bcg
let bcgTest = false
document.getElementsByName('bcg').forEach(inpbcg =>{
    inpbcg.addEventListener('change', inpbcgTest =>{
        if (inpbcg.id == 'bcgdu'){
            bcgTest = 1 // vacina em dia
        } else if (inpbcg.id == 'bcgnd' &&  idadePaciente <= 1825 ) {
            bcgTest = 2 // vacina por fazer
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
let pentaHistorico = 0
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
            pentaHistorico = 1
        } else if (inppenta.id != 'pvd3' && idadePaciente > 2555){
            pentaTest = 3
            datePentaSpan.classList.add('active')
            pentaaux = 0
            pentaHistorico = 0
        } else if (inppenta.id == 'pvd2' && idadePaciente <= 2555 && idadePaciente > 183) { // se idade entre 6meses e 7 anos
            datePentaSpan.classList.remove('active')
            pentaaux = 1
            pentaTest = 2
            pentaHistorico = 0
        } else if (inppenta.id == 'pvd2' && idadePaciente <= 183){
            pentaTest = 1
            datePentaSpan.classList.add('active')
            pentaaux = 0
            pentaHistorico = 0
        } else if (inppenta.id == 'pvd1' && idadePaciente <= 2555 && idadePaciente > 122){
            datePentaSpan.classList.remove('active')
            pentaaux = 1
            pentaTest = 2
            pentaHistorico = 0
        } else if (inppenta.id == 'pvd1' && idadePaciente <= 122){
            pentaTest = 1
            datePentaSpan.classList.add('active')
            pentaaux = 0
            pentaHistorico = 0
        } else if (inppenta.id == 'pvnd' && idadePaciente <= 2555 && idadePaciente > 61){
            datePentaSpan.classList.add('active')
            pentaaux = 0
            pentaTest = 4
            pentaHistorico = 0
        } else if (inppenta.id == 'pvnd' && idadePaciente <= 61){
            datePentaSpan.classList.add('active')
            pentaaux = 0
            pentaTest = 1
            pentaHistorico = 0
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
let dtpHistorico = 0

document.getElementsByName('dtp').forEach(inpdtp =>{
    inpdtp.addEventListener('change', inpdtpTest =>{
        dtpButton.addEventListener('click', dtpButtonClick =>{
            dtpDateLastDose = (new Date(dateDtp.value))
            dtpDateLastDoseDif = ((dateNow - dtpDateLastDose)/(1000*3600*24))
            
            console.log(idadePaciente - dtpDateLastDoseDif)
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
            dtpHistorico = 1
        } else if (inpdtp.id != 'dtpd2' && idadePaciente > 2555){
            dtpTest = 3
            dateDtpSpan.classList.add('active')
            dtpAux = 0
            dtpHistorico = 0
        } else if (inpdtp.id == 'dtpd1' && idadePaciente <= 2555 && idadePaciente > 1461){
            dtpTest = 4
            dateDtpSpan.classList.remove('active')
            dtpAux = 1
            dtpHistorico = 0
        } else if (inpdtp.id == 'dtpd1' && idadePaciente <= 1461) {
            dtpTest = 1
            dateDtpSpan.classList.add('active')
            dtpAux = 0
            dtpHistorico = 0
        } else if (inpdtp.id == 'dtpnd' && idadePaciente <= 2555 && idadePaciente > 457){
            dtpTest = 2
            dateDtpSpan.classList.add('active')
            dtpAux = 0
            dtpHistorico = 0
        } else if (inpdtp.id == 'dtpnd' && idadePaciente <= 457){
            dtpTest = 1
            dateDtpSpan.classList.add('active')
            dtpAux = 0
            dtpHistorico = 0
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

//hepatite b reforço
let dateHepatiteBRefSpan = document.getElementById('dateHepatiteBRefSpan')
let dateHepatiteBRef = document.getElementById('dateHepatiteB')
let hepatiteBButton = document.getElementById('HepatiteBButton')
let lastDosedifHepatiteB
let hepatiteBDateLastDose
let hepatiteBTest = false
let hepatiteBAux = 0

document.getElementsByName('hepatitebref').forEach(inpHepbRef=>{
    inpHepbRef.addEventListener('change', inpHepbRefTest =>{
        hepatiteBButton.addEventListener('click', hepBSubmit=>{
            hepatiteBDateLastDose = new Date(dateHepatiteBRef.value)
            lastDosedifHepatiteB = ((dateNow - hepatiteBDateLastDose)/(1000*3600*24))
            console.log(lastDosedifHepatiteB)
            if (isNaN( hepatiteBDateLastDose) == false){
                dateHepatiteBRef.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateHepatiteBRef.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })


        //hepatiteBTest = 1 em dia // = 2 por fazer// = 3 teste de data de dose 2 // = 4 teste de data de dose 1
        switch (inpHepbRef.id){
            case "hepatitebrefd3":
                console.log("dose 3")
                hepatiteBTest = 1
                dateHepatiteBRefSpan.classList.add('active')
                hepatiteBAux = 0
                break;
            case "hepatitebrefd2":
                console.log("dose 2")
                hepatiteBTest = 3
                dateHepatiteBRefSpan.classList.remove('active')
                hepatiteBAux = 1
                break;
            case "hepatitebrefd1":
                console.log("dose 1")
                hepatiteBTest = 4
                dateHepatiteBRefSpan.classList.remove('active')
                hepatiteBAux = 1
                break;
            case "hepatitebrefnd":
                console.log(pentaHistorico)
                if (pentaHistorico == 1){
                    hepatiteBTest = 1
                    dateHepatiteBRefSpan.classList.add('active')
                    hepatiteBAux = 0
                } else if (pentaHistorico == 0){
                    if (idadePaciente > 2555){
                        hepatiteBTest = 2
                        dateHepatiteBRefSpan.classList.add('active')
                        hepatiteBAux = 0
                    }
                    else if (idadePaciente <= 2555){
                        hepatiteBTest = 1
                        dateHepatiteBRefSpan.classList.add('active')
                        hepatiteBAux = 0
                    }
                }
                break;
        }
    })
})





let dateRotaSpan = document.getElementById('dateRotaSpan')
let dateRota = document.getElementById('dateRota')
let rotaButton = document.getElementById('rotaButton')
let lastDosedifRota
let rotaDateLastDose
let rotaTest = false
let rotaAux = 0

document.getElementsByName('rotavirus').forEach(inprota =>{
    inprota.addEventListener('change', inprotaTest =>{
        rotaButton.addEventListener('click', rotaSubmit=>{
            rotaDateLastDose = new Date(dateRota.value)
            lastDosedifRota = ((dateNow - rotaDateLastDose)/(1000*3600*24))
            console.log((dateNow - rotaDateLastDose)/(1000*3600*24))
            if (isNaN(rotaDateLastDose) == false){
                dateRota.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateRota.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        switch (inprota.id) {
            case "rotavirusd2":
                console.log("dose 2")
                rotaTest = 1
                dateRotaSpan.classList.add('active')
                rotaAux = 0
                break;
            case "rotavirusd1":
                console.log("dose 1")
                if (idadePaciente < 122) {
                    rotaTest = 1
                    dateRotaSpan.classList.add("active")
                    rotaAux = 0
                } else if (idadePaciente >= 122 && idadePaciente <= 242) {
                    rotaTest = 4
                    dateRotaSpan.classList.remove("active")
                    rotaAux = 1
                } else if (idadePaciente > 242) {
                    rotaTest = 3
                    dateRotaSpan.classList.add("active")
                    rotaAux = 0
                }
                break;
            case "rotavirusnd":
                console.log("nenhuma dose")
                dateRotaSpan.classList.add('active')
                rotaAux = 0
                if (idadePaciente < 61){
                    rotaTest = 1
                } else if (idadePaciente >= 61 && idadePaciente <= 106) {
                    rotaTest = 2
                } else if (idadePaciente > 106) {
                    rotaTest = 3
                }
                break;    
        }
    } )
} )


//pneumo 10

let datePneumoSpan = document.getElementById('datePneumoSpan')
let datePneumo = document.getElementById('datePneumo')
let pneumoButton = document.getElementById('pneumoButton')
let lastDosedifPneumo
let pneumoDateLastDose
let pneumoTest = false
let pneumoAux = 0

document.getElementsByName('pneumo10').forEach(inppneumo =>{
    inppneumo.addEventListener('change', inppneumoTest =>{
        pneumoButton.addEventListener('click', pneumoSubmit=>{
            pneumoDateLastDose = new Date(datePneumo.value)
            lastDosedifPneumo = ((dateNow - pneumoDateLastDose)/(1000*3600*24))
            console.log((dateNow - pneumoDateLastDose)/(1000*3600*24))
            if (isNaN(pneumoDateLastDose) == false){
                datePneumo.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                datePneumo.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        switch (inppneumo.id) {
            case 'pneumo10r':
                pneumoTest = 1
                datePneumoSpan.classList.add('active')
                pneumoAux = 0
                break;    
            case 'pneumo10d3':
                if (idadePaciente > 1825){
                    pneumoTest = 3
                    datePneumoSpan.classList.add('active')
                    pneumoAux = 0
                } else if (idadePaciente <= 1825 && idadePaciente >= 365){
                    pneumoTest = 4
                    datePneumoSpan.classList.remove('active')
                    pneumoAux = 1
                } else if (idadePaciente < 365){
                    pneumoTest = 1
                    datePneumoSpan.classList.add('active')
                    pneumoAux = 0
                }
                break;
            case 'pneumo10d2':
                if (idadePaciente >= 365){
                    pneumoTest = 3
                    datePneumoSpan.classList.add('active')
                    pneumoAux = 0
                } else if (idadePaciente < 365 && idadePaciente >= 183){
                    pneumoTest = 4
                    datePneumoSpan.classList.remove('active')
                    pneumoAux = 1
                } else if (idadePaciente < 183){
                    pneumoTest = 1
                    datePneumoSpan.classList.add('active')
                    pneumoAux = 0
                }
                break;    
            case 'pneumo10d1':
                if (idadePaciente >= 365){
                    pneumoTest = 3
                    datePneumoSpan.classList.add('active')
                    pneumoAux = 0
                } else if (idadePaciente < 365 && idadePaciente >= 122){
                    pneumoTest = 4
                    datePneumoSpan.classList.remove('active')
                    pneumoAux = 1
                } else if (idadePaciente < 122){
                    pneumoTest = 1
                    datePneumoSpan.classList.add('active')
                    pneumoAux = 0
                }
                break;    
            case 'pneumo10nd':
                datePneumoSpan.classList.add('active')
                pneumoAux = 0
            if (idadePaciente >= 365){
                pneumoTest = 3
            } else if (idadePaciente < 365 && idadePaciente >= 61){
                pneumoTest = 2
            } else if (idadePaciente < 61){
                pneumoTest = 1
            }
                break;    
                                    
        }
    } )
} )

// meningo c 

let dateMeningoSpan = document.getElementById('dateMeningoSpan')
let dateMeningo = document.getElementById('dateMeningo')
let meningoButton = document.getElementById('meningoButton')
let lastDosedifMeningo
let meningoDateLastDose
let meningoTest = false
let meningoAux = 0
document.getElementsByName('meningoc').forEach(inpmeningo =>{
    inpmeningo.addEventListener('change', inpmeningoTest =>{
        meningoButton.addEventListener('click', meningoSubmit=>{
            meningoDateLastDose = new Date(dateMeningo.value)
            lastDosedifMeningo = ((dateNow - meningoDateLastDose)/(1000*3600*24))
            console.log((dateNow - meningoDateLastDose)/(1000*3600*24))
            if (isNaN(meningoDateLastDose) == false){
                dateMeningo.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateMeningo.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        switch (inpmeningo.id) {
            case 'meningocr':
                meningoTest = 1
                dateMeningoSpan.classList.add('active')
                meningoAux = 0
                break;    
            case 'meningocd2':
                if (idadePaciente > 1825){
                    meningoTest = 3
                    dateMeningoSpan.classList.add('active')
                    meningoAux = 0
                } else if (idadePaciente <= 1825 && idadePaciente >= 365){
                    meningoTest = 4
                    dateMeningoSpan.classList.remove('active')
                    meningoAux = 1
                } else if (idadePaciente < 365){
                    meningoTest = 1
                    dateMeningoSpan.classList.add('active')
                    meningoAux = 0
                }
                break;    
            case 'meningocd1':
                if (idadePaciente >= 365){
                    meningoTest = 3
                    dateMeningoSpan.classList.add('active')
                    meningoAux = 0
                } else if (idadePaciente < 365 && idadePaciente >= 122){
                    meningoTest = 4
                    dateMeningoSpan.classList.remove('active')
                    meningoAux = 1
                } else if (idadePaciente < 122){
                    meningoTest = 1
                    dateMeningoSpan.classList.add('active')
                    meningoAux = 0
                }
                break;    
            case 'meningocnd':
                dateMeningoSpan.classList.add('active')
                meningoAux = 0
            if (idadePaciente >= 365){
                meningoTest = 3
            } else if (idadePaciente < 365 && idadePaciente >= 61){
                meningoTest = 2
            } else if (idadePaciente < 61){
                meningoTest = 1
            }
                break;    
                                    
        }
    } )
} )

// meningo acwy

let meningoacwyTest = false
document.getElementsByName('meningoacwy').forEach(inpacwy =>{
    inpacwy.addEventListener('change', inpcawyTest =>{
        switch (inpacwy.id) {
            case 'meningoacwydu':
                meningoacwyTest = 1 // vacina em dia
                break;
            case 'meningoacwynd':
                if (idadePaciente < 4018){
                    meningoacwyTest = 1
                    console.log('1')
                } else if (idadePaciente >= 4018 && idadePaciente <= 4747){
                    meningoacwyTest = 2
                    console.log('2')
                } else if (idadePaciente > 4747){
                    meningoacwyTest = 3
                    console.log('3')
                }
                break;    
        }
    } )
} )

let dateTripliceviralSpan = document.getElementById('dateTripliceviralSpan')
let dateTripliceviral = document.getElementById('dateTripliceviral')
let tripliceviralButton = document.getElementById('tripliceviralButton')
let tripliceviralDateLastDose
let tripliceviralDateLastDoseDif
let tripliceviralTest = false
let tripliceviralAux = 0
let tripliceviralTomou = 0

document.getElementsByName('tripliceviral').forEach(inpTripliceviral =>{
    inpTripliceviral.addEventListener('change', inpTripliceviralTest =>{
        tripliceviralButton.addEventListener('click', tripliceviralSubmit =>{
            tripliceviralDateLastDose = new Date(dateTripliceviral.value)
            tripliceviralDateLastDoseDif = ((dateNow - tripliceviralDateLastDose)/(1000*3600*24))
            console.log(tripliceviralDateLastDoseDif)
            if(isNaN(tripliceviralDateLastDose) == false){
                dateTripliceviral.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateTripliceviral.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })

        //tripliceviralTest = 1 em dia // = 2 por fazer // = 3 perdida

        switch (inpTripliceviral.id) {
            case "tripliceviraldu":
                console.log(inpTripliceviral.id)
                tripliceviralTest = 1
                dateTripliceviralSpan.classList.remove('active')
                tripliceviralAux = 1
                tripliceviralTomou = 1
                break;
            case "tripliceviralnd":
                console.log(inpTripliceviral.id)
                dateTripliceviralSpan.classList.add('active')
                tripliceviralAux = 0
                tripliceviralTomou = 0
                if (idadePaciente < 365) {
                    tripliceviralTest = 1
                } else if (idadePaciente >= 362 && idadePaciente <=10952){
                    tripliceviralTest = 2
                } else if (idadePaciente > 10952){
                    tripliceviralTest = 3
                }
                break;
        }
    })
})

//vacina tetraviral

let dateTetraviralSpan = document.getElementById('dateTetraviralSpan')
let dateTetraviral = document.getElementById('dateTetraviral')
let tetraviralButton = document.getElementById('tetraviralButton')
let tetraviralDateLastDose
let tetraviralDateLastDoseDif
let tetraviralTest = false
let tetraviralAux = 0
let tetraviralTomou = 0

document.getElementsByName('tetraviral').forEach(inpTetraviral =>{
    inpTetraviral.addEventListener('change', inpTetraviralTest => {
        tetraviralButton.addEventListener('click', tetraviralSubmit =>{
            tetraviralDateLastDose = new Date(dateTetraviral.value)
            tetraviralDateLastDoseDif = ((dateNow - tetraviralDateLastDose)/(1000*3600*24))
            console.log(tetraviralDateLastDoseDif)
            if (isNaN(tetraviralDateLastDose) == false){
                dateTetraviral.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateTetraviral.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })

        switch(inpTetraviral.id){
            
            case 'tetraviraldu':
                console.log(inpTetraviral.id)
                tetraviralTest = 1
                dateTetraviralSpan.classList.remove('active')
                tetraviralAux = 1
                tetraviralTomou = 1
                break;
            case 'tetraviralnd':
                console.log(inpTetraviral.id)
                dateTetraviralSpan.classList.add('active')
                tetraviralAux = 0
                tetraviralTomou = 0
                if (idadePaciente < 456){
                    tetraviralTest = 1
                } else if (idadePaciente >= 456 && idadePaciente <= 1825 ){
                    tetraviralTest = 2
                } else if (idadePaciente > 1825){
                    tetraviralTest = 3
                }
                break;
        }
    })
})

//vacina varicela ]

let dateVaricelaSpan = document.getElementById('dateVaricelaSpan')
let dateVaricela = document.getElementById('dateVaricela')
let varicelaButton = document.getElementById('varicelaButton')
let varicelaDateLastDose
let varicelaDateLastDoseDif
let varicelaTest = false
let varicelaAux = 0

document.getElementsByName('varicela').forEach(inpVaricela =>{
    inpVaricela.addEventListener('change', inpVaricelaTest =>{
        varicelaButton.addEventListener('click', varicelaSubmit =>{
            varicelaDateLastDose = new Date(dateVaricela.value)
            varicelaDateLastDoseDif = ((dateNow - varicelaDateLastDose)/(1000*3600*24))
            console.log(varicelaDateLastDoseDif)
            if (isNaN(varicelaDateLastDose) == false){
                dateVaricela.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateVaricela.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })

        switch (inpVaricela.id){
            case 'varicelar':
                console.log(inpVaricela.id)
                varicelaTest = 1
                break;
            case 'variceland':
                console.log(inpVaricela.id)
                if (idadePaciente < 1461){
                    varicelaTest = 1
                } else if (idadePaciente >= 1461 && idadePaciente <= 2555 ){
                    varicelaTest = 2
                } else if (idadePaciente > 2555 ){
                    varicelaTest = 3
                }
                break;
        }
    })
})

// vacina dT

let dateDtSpan = document.getElementById('dateDtSpan')
let dateDt = document.getElementById('dateDt')
let dtButton = document.getElementById('dtButton')
let dtDateLastDose
let dtDateLastDoseDif
let dtTest = false
let dtAux = 0

document.getElementsByName('dt').forEach(inpDt=>{
    inpDt.addEventListener('change', inpDtTest =>{
        dtButton.addEventListener('click', dtSubmit=>{
            dtDateLastDose = new Date(dateDt.value)
            dtDateLastDoseDif = ((dateNow - dtDateLastDose)/(1000*3600*24))
            console.log(dtDateLastDoseDif)
            if(isNaN(dtDateLastDose) == false){
                dateDt.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateDt.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })

        //DT Test = 1 em dia // = 2 por fazer// = 3 teste de data de dose

        switch (inpDt.id){
            case "dtd3":
                console.log("dose 3")
                dtTest = 1
                dateDtSpan.classList.add('active')
                dtAux = 0
                break;
            case "dtd2":
                console.log("dose 2")
                dtTest = 3
                dateDtSpan.classList.remove('active')
                dtAux = 1
                break;
            case "dtd1":
                console.log("dose 1")
                dtTest = 3
                dateDtSpan.classList.remove('active')
                dtAux = 1
                break;
            case "dtnd":
                console.log("nenhuma dose")
                if (pentaHistorico == 1 && dtpHistorico == 1){
                    dtTest = 1
                    dateDtSpan.classList.add('active')
                    dtAux = 0
                } else {
                    if (idadePaciente > 2555){
                        dtTest = 2
                        dateDtSpan.classList.add('active')
                        dtAux = 0
                    }
                    else if (idadePaciente <= 2555){
                        dtTest = 1
                        dateDtSpan.classList.add('active')
                        dtAux = 0
                    }
                }
                break;
        }

    })
})

// febre amarela // em teste

let dateFebreASpan = document.getElementById('dateFebreAmarelaSpan')
let dateFebreA = document.getElementById('dateFebreAmarela')
let febreAButton = document.getElementById('febreAmarelaButton')
let lastDosedifFebreA
let febreADateLastDose
let febreATest = false
let febreAAux = 0
let febreADoseIdadeAux
document.getElementsByName('febreamarela').forEach(inpfebrea =>{
    inpfebrea.addEventListener('change', inpfebreaTest =>{
        febreAButton.addEventListener('click', febreaSubmit=>{
            febreADateLastDose = new Date(dateFebreA.value)
            console.log(febreADateLastDose)
            lastDosedifFebreA = ((dateNow - febreADateLastDose)/(1000*3600*24))
            console.log(lastDosedifFebreA)
            if ((idadePaciente - lastDosedifFebreA) <= 1826){
                febreADoseIdadeAux = 0
                console.log("menor ou igual a 5 anos")
            } else {
                febreADoseIdadeAux = 1
                console.log("mais de 5 anos")
            }
            if (isNaN(febreADateLastDose) == false){
                dateFebreA.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateFebreA.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        switch (inpfebrea.id) {  
            case 'febreamarelad2':
                febreATest = 1
                dateFebreASpan.classList.add('active')
                febreAAux = 0
                break;    
            case 'febreamarelad1':
                if (idadePaciente <= 1461){
                    febreATest = 1
                    dateFebreASpan.classList.add('active')
                    febreAAux = 0
                } else if (idadePaciente > 1461 && idadePaciente <= 1825) {
                        febreATest = 2
                        dateFebreASpan.classList.add('active')
                        febreAAux = 0
                } else {
                    dateFebreASpan.classList.remove('active')
                    febreAAux = 1
                    febreATest = 4
                }
                break;    
            case 'febreamareland':
            if (idadePaciente > 21915){
                febreATest = 3
                dateFebreASpan.classList.add('active')
                febreAAux = 0
            } else if (idadePaciente <= 21915 && idadePaciente >= 274){
                febreATest = 2
                dateFebreASpan.classList.add('active')
                febreAAux = 0
            } else if (idadePaciente < 274){
                febreATest = 1
                dateFebreASpan.classList.add('active')
                febreAAux = 0
            }
                break;    
                                    
        }
    } )
} )

// hepatite a

let hepatiteaTest = false
document.getElementsByName('hepatitea').forEach(inphepatitea =>{
    inphepatitea.addEventListener('change', inphepatiteaTest =>{
        switch (inphepatitea.id) {
            case 'hepatiteadu':
                hepatiteaTest = 1 // vacina em dia
                break;
            case 'hepatiteand':
                if (idadePaciente < 457){
                    hepatiteaTest = 1
                } else if (idadePaciente >= 457 && idadePaciente <= 1825){
                    hepatiteaTest = 2
                } else if (idadePaciente > 1825){
                    hepatiteaTest = 3
                }
                break;    
        }
    } )
} )


// hpv 


let dateHpvSpan = document.getElementById('dateHpvSpan')
let dateHpv = document.getElementById('dateHpv')
let hpvButton = document.getElementById('hpvButton')
let lastDosedifHpv
let hpvDateLastDose
let hpvTest = false
let hpvAux = 0

document.getElementsByName('hpv').forEach(inphpv =>{
    inphpv.addEventListener('change', inphpvTest =>{
        hpvButton.addEventListener('click', hpvSubmit=>{
            hpvDateLastDose = new Date(dateHpv.value)
            lastDosedifHpv = ((dateNow - hpvDateLastDose)/(1000*3600*24))
            console.log((dateNow - hpvDateLastDose)/(1000*3600*24))
            if (isNaN(hpvDateLastDose) == false){
                dateHpv.style.boxShadow = "0 0 4px green, inset 0 0 4px green"
            } else {
                dateHpv.style.boxShadow = "0 0 4px red, inset 0 0 4px red";
                alert('Inválido')
                testIfChecked = false
            }
        })
        switch (inphpv.id) {
            case "hpvd2":
                console.log("dose 2")
                hpvTest = 1
                dateHpvSpan.classList.add('active')
                hpvAux = 0
                break;
            case "hpvd1":
                console.log("dose 1")
                if (sexoPaciente == "MASCULINO") {
                    console.log("m")
                    if (idadePaciente < 3287) {
                        hpvTest = false
                        alert("Inválido")
                        inphpv.checked = false
                    } else if (idadePaciente >= 3287) {
                        hpvTest = 4
                        dateHpvSpan.classList.remove("active")
                        hpvAux = 1
                    }
                } else if (sexoPaciente == "FEMININO") {
                    console.log("f")
                    if (idadePaciente < 4018) {
                        hpvTest = false
                        alert("Inválido")
                        inphpv.checked = false
                    } else if (idadePaciente >= 4018) {
                        hpvTest = 4
                        dateHpvSpan.classList.remove("active")
                        hpvAux = 1
                    }
                }
                break;
            case "hpvnd":
                console.log("nenhuma dose")
                dateHpvSpan.classList.add('active')
                hpvAux = 0
                if (sexoPaciente == "MASCULINO") {
                    if (idadePaciente < 3287){
                        hpvTest = 1
                    } else if (idadePaciente >= 3287 && idadePaciente <= 5477) {
                        hpvTest = 2
                    } else if (idadePaciente > 5477) {
                        hpvTest = 3
                    }
                } else if (sexoPaciente == "FEMININO") {
                    console.log("f")
                    if (idadePaciente < 4018){
                        hpvTest = 1
                    } else if (idadePaciente >= 4018 && idadePaciente <= 5477) {
                        hpvTest = 2
                    } else if (idadePaciente > 5477) {
                        hpvTest = 3
                    }
                }
                break;    
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

    //triplice viral teste

    if (tripliceviralAux == 1){
        if (isNaN(tripliceviralDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (tripliceviralTest == false){
        alert('Vacina tríplice viral é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (tripliceviralTest == 1){
        vacEmDiaDisplay.push('TRÍPLICE VIRAL')
    } else if (tripliceviralTest == 2){
        vacPorFazerDisplay.push('TRÍPLICE VIRAL')
    } else if (tripliceviralTest == 3){
        vacPerdidaDisplay.push('TRÍPLICE VIRAL')
    }

    //tetraviral teste

    if (tetraviralAux == 1){
        if (isNaN(tetraviralDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (tetraviralTest == false){
        alert('Vacina tetra viral é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (tetraviralTest == 1){
        vacEmDiaDisplay.push('TETRA VIRAL')
    } else if (tetraviralTest == 2){
        if (tripliceviralTomou == 0){
            vacEmDiaDisplay.push('TETRA VIRAL')
        } else if (tripliceviralTomou == 1){
            if (tripliceviralDateLastDoseDif >= 30){
                vacPorFazerDisplay.push('TETRA VIRAL')
            } else if (tripliceviralDateLastDoseDif < 30){
                vacEmDiaDisplay.push('TETRA VIRAL')
            }
        }
    } else if (tetraviralTest == 3){
        vacPerdidaDisplay.push('TETRA VIRAL')
    }

    //varicela teste

    if (varicelaAux == 1){
        if (isNaN(varicelaDateLastDose)== true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (varicelaTest == false){
        alert('Vacina Varicela é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (varicelaTest == 1 ){
        vacEmDiaDisplay.push('VARICELA')
    } else if (varicelaTest == 2 ){
        if (tetraviralTomou == 0){
            vacEmDiaDisplay.push('VARICELA')
        } else if (tetraviralTomou == 1){
            if (tetraviralDateLastDoseDif >= 90){
                vacPorFazerDisplay.push('VARICELA')
            } else if (tetraviralDateLastDoseDif < 90){
                vacEmDiaDisplay.push('VARICELA')
            }
        }
    } else if (varicelaTest == 3 ){
        vacPerdidaDisplay.push('VARICELA')
    }


    //dT teste

    if (dtAux == 1){
        if (isNaN(dtDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (dtTest == false){
        alert('Vacina dT é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (dtTest == 1){
        vacEmDiaDisplay.push('dT')
    } else if (dtTest == 2){
        vacPorFazerDisplay.push('dT')
    } else if (dtTest == 3){
        if (dtDateLastDoseDif >= 30){
            vacPorFazerDisplay.push('dT')
        } else if (dtDateLastDoseDif < 30){
            vacEmDiaDisplay.push('dT')
        }
    }
 
    //hepatite b reforço teste

    if (hepatiteBAux == 1){
        if (isNaN(hepatiteBDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (hepatiteBTest == false){
        alert('Vacina Hepatite B reforço é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (hepatiteBTest == 1){
        vacEmDiaDisplay.push('HEPATITE B REFORÇO')
    }else if(hepatiteBTest == 2){
        vacPorFazerDisplay.push('HEPATITE B REFORÇO')
    } else if (hepatiteBTest == 3){
        if (lastDosedifHepatiteB >= 152){// fazem mais de 5 meses q tomou
            vacPorFazerDisplay.push('HEPATITE B REFORÇO')
        } else if (lastDosedifHepatiteB < 152) { // fazem menos de 5 meses q tomou
            vacEmDiaDisplay.push('HEPATITE B REFORÇO')
        }
    } else if (hepatiteBTest == 4){
        if (lastDosedifHepatiteB >= 30){// fazem mais de 30 dias q tomou
            vacPorFazerDisplay.push('HEPATITE B REFORÇO')
        } else if (lastDosedifHepatiteB < 30) { // fazem menos de 30 dias q tomou
            vacEmDiaDisplay.push('HEPATITE B REFORÇO')
        }
    }




    //rotavirus teste

    if(rotaAux == 1){
        if (isNaN(rotaDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (rotaTest == false){
        alert('Vacina Rotavírus é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (rotaTest == 1){
        vacEmDiaDisplay.push('ROTAVÍRUS')
    } else if (rotaTest == 2){
        vacPorFazerDisplay.push('ROTAVÍRUS')
    } else if (rotaTest == 3){
        vacPerdidaDisplay.push('ROTAVÍRUS')
    } else if (rotaTest == 4){
        if(lastDosedifRota > 122){
            vacPorFazerDisplay.push('ROTAVÍRUS')
        } else if (lastDosedifRota <= 122) {
            vacEmDiaDisplay.push('ROTAVÍRUS')
        }
    }

    // pneumo10 test

    if(pneumoAux == 1){
        if (isNaN(pneumoDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (pneumoTest == false){
        alert('Vacina Pneumo10 é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (pneumoTest == 1){
        vacEmDiaDisplay.push('PNEUMO 10')
    } else if (pneumoTest == 2){
        vacPorFazerDisplay.push('PNEUMO 10')
    } else if (pneumoTest == 3){
        vacPerdidaDisplay.push('PNEUMO 10')
    } else if (pneumoTest == 4){
        if(lastDosedifPneumo >= 61){
            vacPorFazerDisplay.push('PNEUMO 10')
        } else if (lastDosedifPneumo < 61) {
            vacEmDiaDisplay.push('PNEUMO 10')
        }
    }
    //meningo c
    if(meningoAux == 1){
        if (isNaN(meningoDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (meningoTest == false){
        alert('Vacina Menmingo C é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (meningoTest == 1){
        vacEmDiaDisplay.push('MENINGO C')
    } else if (meningoTest == 2){
        vacPorFazerDisplay.push('MENINGO C')
    } else if (meningoTest == 3){
        vacPerdidaDisplay.push('MENINGO C')
    } else if (meningoTest == 4){
        if(lastDosedifMeningo>= 61){
            vacPorFazerDisplay.push('MENINGO C')
        } else if (lastDosedifMeningo < 61) {
            vacEmDiaDisplay.push('MENINGO C')
        }
    }    

    // meningo acwy

    if (meningoacwyTest == false){
        alert('Vacina MENINGO ACWY é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (meningoacwyTest == 1){
        vacEmDiaDisplay.push('MENINGO ACWY')
    } else if (meningoacwyTest == 2){
        vacPorFazerDisplay.push('MENINGO ACWY')
    } else if (meningoacwyTest == 3){
        vacPerdidaDisplay.push('MENINGO ACWY')
    }



    // febre amarela teste 

    if (febreATest == false){
        alert('Vacina Febre Amarela é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (febreATest == 1){
        vacEmDiaDisplay.push('FEBRE AMARELA')
    } else if (febreATest == 2){
        if(lastDosedifFebreA >= 30){
            vacPorFazerDisplay.push('FEBRE AMARELA')
        } else {
            vacEmDiaDisplay.push('FEBRE AMARELA')
        }
    } else if (febreATest == 3){
        let febreAconf = confirm("O paciente possui mais de 60 anos, é necessário laudo médico para a aplicação da vacina de Febre Amarela")
        if (febreAconf === true){
            vacPorFazerDisplay.push('FEBRE AMARELA')
        } else {
            vacPerdidaDisplay.push('FEBRE AMARELA')
        }
    } else if (febreATest == 4) {
        if (febreADoseIdadeAux == 0){
            if(idadePaciente>= 21915){
                let febreAconf = confirm("O paciente possui mais de 60 anos, é necessário laudo médico para a aplicação da vacina de Febre Amarela")
                if (febreAconf === true){
                    vacPorFazerDisplay.push('FEBRE AMARELA')
                } else {
                    vacPerdidaDisplay.push('FEBRE AMARELA')
                }
            } else if (idadePaciente < 21915){
                if(lastDosedifFebreA >= 30){
                    vacPorFazerDisplay.push('FEBRE AMARELA')
                } else {
                    vacEmDiaDisplay.push('FEBRE AMARELA')
                }
            }
        } else if (febreADoseIdadeAux == 1) {

            vacEmDiaDisplay.push('FEBRE AMARELA')

        } 
    }

    //hepatite a test

    if (hepatiteaTest == false){
        alert('Vacina HEPATITE A é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (hepatiteaTest == 1){
        vacEmDiaDisplay.push('HEPATITE A')
    } else if (hepatiteaTest == 2){
        vacPorFazerDisplay.push('HEPATITE A')
    } else if (hepatiteaTest == 3){
        vacPerdidaDisplay.push('HEPATITE A')
    }


    // hpv test 

    if(hpvAux == 1){
        if (isNaN(hpvDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (hpvTest == false){
        alert('Vacina HPV é de preenchimento obrigatório')
        window.location.reload();
        testIfChecked = false
    } else if (hpvTest == 1){
        vacEmDiaDisplay.push('HPV')
    } else if (hpvTest == 2){
        vacPorFazerDisplay.push('HPV')
    } else if (hpvTest == 3){
        vacPerdidaDisplay.push('HPV')
    } else if (hpvTest == 4){
        if(lastDosedifHpv > 183){
            vacPorFazerDisplay.push('HPV')
        } else if (lastDosedifHpv <= 183) {
            vacEmDiaDisplay.push('HPV')
        }
    }

    localStorage.setItem('vacsEmDia', vacEmDiaDisplay)
    localStorage.setItem('vacsPorFazer', vacPorFazerDisplay)
    localStorage.setItem('vacsPerdidas', vacPerdidaDisplay)
    if (testIfChecked == true){
        window.document.location = ("page3.html")
    }
})
