document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput")
    const addTaskBtn = document.getElementById("addTaskBtn")
    const taskList = document.getElementById("taskList")

    taskInput.focus() //aggiunto focus per far si che l'utente non appena entra sul sito può subito scrivere qualcosa

    // Al Bottone "Add Task" viene aggiunto un gestore di eventi  
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim()

        // Se il campo di input contiene qualcosa prosegue altrimenti non crea nulla e invierà un allert
        if (taskText !== "") {
            // Nuovo elemento <li> per il task
            const taskItem = document.createElement("li")
            taskItem.textContent = taskText 

            // pulsante delete per eliminare il task 
            const deleteBtn = document.createElement("button")
            deleteBtn.textContent = "Delete"
            deleteBtn.classList.add("deleteBtn")
            taskItem.appendChild(deleteBtn)
            // aggiunta del gestore eventi per il Bottone "delete"
            taskList.addEventListener("click", function (event) {
                if (event.target.classList.contains("deleteBtn")) {
                    event.target.parentElement.remove() //rimuove il task 
                }
            })

            //Line orizzontele che viene applicata al click sul testo della task 
            taskItem.addEventListener("click", function () {
                taskItem.classList.toggle("completata")
            })


            // aggiunge un task alla lista 
            taskList.appendChild(taskItem)

            // pulire il campo dopo aver cliccato su Add Text
            taskInput.value = ""
        } else {
            alert("Inserire del testo nel campo di testo!") //aggiunta dell'alert che in caso l'utente abbia cliccato sul bottone "add Task" senza inserire del testo segnalerà che deve inserire del testo
        }
    })
})