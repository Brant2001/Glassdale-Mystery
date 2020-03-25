/*
    This component creates the Note Form 
*/

import { saveNote } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

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
        const criminalId = document.querySelector("#criminal").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            timeStamp: timeStamp,
            criminal: parseInt(criminalId)
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


const render = () => {
    contentTarget.classList.add("invisible")
    const allCriminals = useCriminals()

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
            <select id="criminal">
                <option value="0">Please Choose a Criminal...</option>
                ${
                    allCriminals.map(
                        (currentCriminalObject) => {
                            return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                        }
                    )   
                }
            </select>
        </fieldset>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
