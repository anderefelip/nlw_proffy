document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    //adicionar tabelas
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //cloneNode copiar //const= nao vai mudar
    //fazer a tabela resetar
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function (field){
        field.value = ""
    })

    
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
