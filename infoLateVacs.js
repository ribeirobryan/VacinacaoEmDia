let localPage = document.location.href.slice(-10)
if ( localPage == 'index.html'){
    console.log(window.document.location.href)
    localStorage.clear()
}


//button read
let buttonSub = document.getElementById('vacFormSubmit')

console.log(localStorage.getItem("storNumberOfDays"))
let idadePaciente = localStorage.getItem("storNumberOfDays")

let signalEnd = 0

let vacEmDiaDisplay = []
let vacPorFazerDisplay = []
let vacPerdidaDisplay = []

buttonSub.addEventListener('click', submitButton =>{
    //bcg read
    let bcgnd = document.getElementById('bcgnd')
    let bcgdu = document.getElementById('bcgdu')
    let vacBcg = document.getElementById('vacBcg')

    let bcgTest // auxiliar variable 
    let bcgTestN = 0 // variable to receive the number of doses

    if ( bcgdu.checked == true){
        bcgTest = 'Vacina em dia'
        bcgTestN = 1
        vacBcg.classList.add('vacEmDia')
        vacEmDiaDisplay.push('BCG')
        console.log(bcgTest ,'-', bcgTestN)
    } else if (bcgnd.checked == true &&  idadePaciente <= 1825 ) {
        bcgTest = 'Nenhuma dose e ainda deve tomar'
        bcgTestN = 0
        vacBcg.classList.add('vacPorFazer')
        vacPorFazerDisplay.push('BCG')
        console.log(bcgTest ,'-', bcgTestN)
    } else if (bcgnd.checked == true &&  idadePaciente > 1825){
        bcgTest = 'Nenhuma dose e nao deve mais tomar'
        bcgTestN = 0
        vacBcg.classList.add('vacPerdida')
        vacPerdidaDisplay.push('BCG')
        console.log(bcgTest ,'-', bcgTestN)
    } else {
        alert('Campo de preenchimento obrigatório')
        window.location.reload();
    }
    localStorage.setItem('vacsEmDia', vacEmDiaDisplay)
    localStorage.setItem('vacsPorFazer', vacPorFazerDisplay)
    localStorage.setItem('vacsPerdidas', vacPerdidaDisplay)
    document.location = 'page3.html'
})










    



