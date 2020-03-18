const contentTarget = document.querySelector(".notes__button")
const eventHub = document.querySelector(".container")

//This tells things that the button below was clicked
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllNotes") {
        //Create a custom event to tell any interested component that the user wants to see notes
        const allNotesEvent = new CustomEvent("allNotesClicked")
        //Dispatch it to event hub
        eventHub.dispatchEvent(allNotesEvent)
    }
})

//This is the button
export const DisplayNotesButton = () => {
    contentTarget.innerHTML = `<button id="showAllNotes">Show All Notes</button>`
}