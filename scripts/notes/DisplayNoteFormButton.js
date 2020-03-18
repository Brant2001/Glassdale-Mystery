const contentTarget = document.querySelector(".noteForm__button")
const eventHub = document.querySelector(".container")


//This is the button
export const DisplayNoteFormButton = () => {
    contentTarget.innerHTML = `<button id="showNoteForm">Show Note Form</button>`
}


//This tells things that the button above was clicked
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNoteForm") {
        //Create a custom event to tell any interested component that the user wants to see notes
        const customEvent = new CustomEvent("noteFormButtonClicked")
        //Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

