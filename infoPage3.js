let displayNasc2 = document.getElementById('displayNasc2')
let displaySex2 = document.getElementById('displaySexo2')

let storageSexo2 = localStorage.getItem("storSexo")

let i = 0
let vacHolder

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

let storedVacsEmDia = localStorage.getItem('vacsEmDia').split(",")
let storedVacsPorFazer = localStorage.getItem('vacsPorFazer').split(",")
let storedVacsPerdidas = localStorage.getItem('vacsPerdidas').split(",")

let ved = document.getElementById('ved')
let vnf = document.getElementById('vnf')
let vpd = document.getElementById('vpd')

for(i = 0; i < storedVacsEmDia.length; i++){
    vacHolder = document.createElement('div')
    vacHolder.innerHTML = "&#10148; "+ storedVacsEmDia[i]
    ved.appendChild(vacHolder)
}

for(i = 0; i < storedVacsPorFazer.length; i++){
    vacHolder = document.createElement('div')
    vacHolder.innerHTML = "&#10148; "+ storedVacsPorFazer[i]
    vnf.appendChild(vacHolder)
}

for(i = 0; i < storedVacsPerdidas.length; i++){
    vacHolder = document.createElement("div")
    vacHolder.innerHTML = "&#10148; "+ storedVacsPerdidas[i]
    vpd.appendChild(vacHolder)
}



document.getElementById('restartButton').addEventListener('click',restartButton =>{
    window.open('page1.html','_self')
})