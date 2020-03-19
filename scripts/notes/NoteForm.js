import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let isVisible = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    isVisible = !isVisible
    
    if(isVisible){
        contentTarget.classList.remove("invisible")
    }
    else{
        contentTarget.classList.add("invisible")
    }
    
})


// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const timeStamp = document.querySelector("#timeStamp").value
        const criminalName = document.querySelector("#criminal").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            timeStamp: timeStamp,
            criminal: criminalName
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


const render = () => {
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <fieldset>
            <label for="noteText">Note:</label>
            <input type="text" id="noteText">
        </fieldset>
        <fieldset>
            <label for="timeStamp">Time:</label>
            <input type="date" id="timeStamp">
        </fieldset>
        <fieldset>
            <label for="criminal">Criminal:</label>
            <input type="text" id="criminal">
        </fieldset>

        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm