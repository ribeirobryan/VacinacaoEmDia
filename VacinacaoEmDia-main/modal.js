// JS file for the modal


import infovacinas from './infovacinas.json' assert {type: 'json'}

let modal = document.getElementById("modal")
const modalCloser = document.getElementById('modalCloser')

let modalLinkVar = ''
let modalBtn = document.getElementById('modalLink')




document.querySelectorAll('.vacTitle').forEach(modalOpen =>{
    modalOpen.addEventListener('click', modalOpener => {
        modal.classList.remove('active')
        let aux = (modalOpen.innerText).slice(0, -1)
        console.log(infovacinas[aux])
        let vac = infovacinas[aux]
        let modalName = document.getElementById('modalName')
        modalName.innerText = vac.nome
        let modalInfo = document.getElementById('modalInfo')
        modalInfo.innerText = vac.info
        modalLinkVar = vac.link
    })
}) 

modalCloser.addEventListener('click', modalClose =>{
    modal.classList.add('active')
})


modalBtn.addEventListener('click', modalBtnClick =>{
    window.open(modalLinkVar,'_blank')
})


