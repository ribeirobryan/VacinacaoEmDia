let displayNasc2 = document.getElementById('displayNasc2')
let displaySex2 = document.getElementById('displaySexo2')

let storageSexo2 = localStorage.getItem("storSexo")

if (storageSexo2 !== 'undefined'){
    displaySex2.innerHTML = storageSexo2
}
  
let storageDay2 = localStorage.getItem("storDay")
let storageMonth2 = localStorage.getItem("storMonth")
let storageYear2 = localStorage.getItem("storYear")

if (storageDay2 !== null && storageMonth2 !== null && storageYear2 !== null){
    displayNasc2.innerHTML = (`${storageYear2} ANOS, ${storageMonth2} MESES E ${storageDay2} DIAS`)
}






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