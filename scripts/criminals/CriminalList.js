import { useCriminals } from "./CriminalProvider.js"
import Criminal from "./Criminal.js"


const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        //obtaining the id of the criminal that was clicked
        const [junk, criminalId] = clickEvent.target.id.split("--")

        //telling the system that a known associates button was clicked
        const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
            //telling the system EXACTLY which criminal button was clicked
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(showAssociatesEvent)

    }
})



eventHub.addEventListener("crimeSelected", event => {
    //obtaining the criminals from CriminalProvider.js
    const criminals = useCriminals()

    //checking what crime was chosen
    const theCrimeThatWasChosen = event.detail.crimes

    //assigning a the name guiltyCriminals to the result of filtering the list of criminals for the desired crime
    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })

    //clearing the inner HTML of the criminal list so that we don't keep adding to it
    contentTarget.innerHTML = ""

    //I am pretty sure that this rneders to the DOM but I'm not sure
    for (const criminalObject of guiltyCriminals) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
})

//this exports the whole CriminalList module 
export const CriminalList = () => {
    const criminals = useCriminals()

    for (const criminalObject of criminals) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
}