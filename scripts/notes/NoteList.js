import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")


//this renders the notes on the DOM
const render = () => {
    //this gets the notes and uses .then to do stuff
    getNotes().then(() => {
        const allTheNotes = useNotes()

        //this takes the notes and converts it from an array of Objects to an array of Strings
        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => { 
                return Note(currentNoteObject)
            }
            //this joins all the strings in the array into one big string so that we don't have commas between each note
        ).join("")
    })   
}


//this listens for the event we created in DisplayNotesButton.js 
eventHub.addEventListener("allNotesClicked", customEvent => {
    //this says when we hear the event we print out the variable named render
    render()
})