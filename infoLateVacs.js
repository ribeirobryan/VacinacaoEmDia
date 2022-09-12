let localPage = document.location.href.slice(-10)//test if its in the index page, if so it clears the localStorage
if ( localPage == 'index.html'){
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
                    hpvTest = 1
                    dateHpvSpan.classList.add("active")
                    hpvAux = 0
                } else if (idadePaciente >= 122 && idadePaciente <= 242) {
                    hpvTest = 4
                    dateHpvSpan.classList.remove("active")
                    hpvAux = 1
                } else if (idadePaciente > 242) {
                    hpvTest = 3
                    dateHpvSpan.classList.add("active")
                    hpvAux = 0
                }
                break;
            case "rotavirusnd":
                console.log("nenhuma dose")
                dateHpvSpan.classList.add('active')
                hpvAux = 0
                if (idadePaciente < 61){
                    hpvTest = 1
                } else if (idadePaciente >= 61 && idadePaciente <= 106) {
                    hpvTest = 2
                } else if (idadePaciente > 106) {
                    hpvTest = 3
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
                if (idadePaciente >= 365){
                    meningoTest = 3
                    dateMeningoSpan.classList.add('active')
                    meningoAux = 0
                } else if (idadePaciente < 365 && idadePaciente >= 183){
                    meningoTest = 4
                    dateMeningoSpan.classList.remove('active')
                    meningoAux = 1
                } else if (idadePaciente < 183){
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

// febre amarela // em desenvolvimento

let dateFebreASpan = document.getElementById('dateFebreAmarelaSpan')
let dateFebreA = document.getElementById('dateFebreAmarela')
let febreAButton = document.getElementById('febreAmarelaButton')
let lastDosedifFebreA
let febreADateLastDose
let febreATest = false
let febreAAux = 0
document.getElementsByName('febreamarela').forEach(inpfebrea =>{
    inpfebrea.addEventListener('change', inpfebreaTest =>{
        febreAButton.addEventListener('click', febreaSubmit=>{
            febreADateLastDose = new Date(dateFebreA.value)
            lastDosedifFebreA = ((dateNow - febreADateLastDose)/(1000*3600*24))
            console.log((dateNow - febreADateLastDose)/(1000*3600*24))
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
                } else if (idadePaciente > 1461 && idadePaciente < 1825){
                    febreATest = 4
                    dateFebreASpan.classList.remove('active')
                    febreAAux = 1
                } else if (idadePaciente >= 1825 && idadePaciente < 21915){
                    console.log('em desenvolvimento')
                    //ainda falta coisa
                } else if (idadePaciente >= 21915){

                }
                break;    
            case 'febreamareland':
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
                    hpvTest = 1
                } else if (idadePaciente >= 457 && idadePaciente <= 1825){
                    hpvTest = 2
                } else if (idadePaciente > 1825){
                    hpvTest = 3
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

    //rotavirus teste

    if(rotaAux == 1){
        if (isNaN(rotaDateLastDose) == true){
            alert('Data da ultima dose é de preenchimento obrigatório')
            window.location.reload();
            testIfChecked = false
    }}
    if (rotaTest == false){
        alert('Vacina  é de preenchimento obrigatório')
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
        alert('Vacina Pentavalente é de preenchimento obrigatório')
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










    



