let subbtn2 = document.getElementById('vacFormSubmit2')

let storedVacsEmDia = localStorage.getItem('vacsEmDia')
let storedVacsPorFazer = localStorage.getItem('vacsPorFazer')
let storedVacsPerdidas = localStorage.getItem('vacsPerdidas')

let ved = document.getElementById('ved')
let vnf = document.getElementById('vnf')
let vpd = document.getElementById('vpd')

subbtn2.addEventListener('click', subbtnclick =>{
    ved.innerText = storedVacsEmDia
    vnf.innerText = storedVacsPorFazer
    vpd.innerText = storedVacsPerdidas
})