/*
pulls together the nececarry components to create the list of notes
*/

//importing the necessary components
import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"
import { Note } from "./Note.js"


//assigning variable names to DOM targeters
const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")


//declaring variables for the State
let isVisible = false


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, noteId] = clickEvent.target.id.split("--")
        deleteNote(noteId)
    }
})


eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})


//this listens for the event we created in DisplayNotesButton.js 
eventHub.addEventListener("allNotesClicked", customEvent => {
    //toggles the visibility of the notes
    isVisible = !isVisible

    if (isVisible) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})


//this renders the notes on the DOM
const render = () => {
    if (isVisible) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
    //this gets the notes and uses .then to do stuff
    getNotes().then(() => {
        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()
        //this takes the notes and converts it from an array of Objects to an array of Strings
        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => { 

                // Find the criminal for te current note
                const theFoundCriminal = allTheCriminals.find(
                    (currentCriminalObject) => {
                        return currentNoteObject.criminal === currentCriminalObject.id
                }
            )

            return Note(currentNoteObject, theFoundCriminal)
        }
            //this joins all the strings in the array into one big string so that we don't have commas between each note
        ).join("")
    })   
}


export const NotesList = () => {
    render()
}