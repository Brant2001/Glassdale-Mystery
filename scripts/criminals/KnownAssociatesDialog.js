import { useCriminals } from "./CriminalProvider.js"

//assigning variable names to DOM selectors that will target the HTML
const contentTarget = document.querySelector(".knownAssociatesContainer")
const eventHub = document.querySelector(".container")


//listening for the button to be clicked in CriminalList.js
eventHub.addEventListener("knownAssociatesClicked", customEvent => {
    //obtaining the id of the criminal objects
    const criminalId = customEvent.detail.chosenCriminal

    const criminalArray = useCriminals()

    //searching through the array to find the first object that matches the condition in the callback function using .find
    const iFoundYou = criminalArray.find(
        (currentCriminal) => {
            if (currentCriminal.id === parseInt(criminalId)) {
                return true
            }
            return false
        }
    )

    KnownAssociatesDialog(iFoundYou)

    const showDialog = document.querySelector("#associateInfo")
    showDialog.showModal()
})



export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="associateInfo">
            ${
                criminalObject.known_associates.map(
                    (currentAssociate) => {
                        return `<div>${currentAssociate.name}</div>`
                    }
                ).join("")
            }
        </dialog>
    `
}