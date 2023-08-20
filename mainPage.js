let mainPageButtons = document.querySelectorAll('.cards').forEach(mainPageRead=>{ mainPageRead.addEventListener('click', mainPageRedirect=>{
        if (mainPageRead.id == 'verVac') {
            window.open('page1.html','_self')
        } else if (mainPageRead.id == 'vacGuide') {
            window.open('vacGuide.html','_self')
        } else if (mainPageRead.id == 'project') {
            window.open('aboutProject.html','_self')
        }

    })
})