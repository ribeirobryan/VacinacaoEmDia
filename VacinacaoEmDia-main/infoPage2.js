// JS file to get the form information stored in the page1 and use in the page2

let displayNasc = document.getElementById('displayNasc')
let displaySex = document.getElementById('displaySexo')

let storageSexo = localStorage.getItem("storSexo")

if (storageSexo !== 'undefined'){
    displaySex.innerHTML = storageSexo
}
  
let storageDay = localStorage.getItem("storDay")
let storageMonth = localStorage.getItem("storMonth")
let storageYear = localStorage.getItem("storYear")

if (storageDay !== null && storageMonth !== null && storageYear !== null){
    displayNasc.innerHTML = (`${storageYear} ANOS, ${storageMonth} MESES E ${storageDay} DIAS`)
}
