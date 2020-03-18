import { useCriminals } from "./CriminalProvider.js"
import Criminal from "./Criminal.js"


const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", event => {

    const criminals = useCriminals()

    const theCrimeThatWasChosen = event.detail.crimes

    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })
    //clears the inner HTML of the criminal list 
    //so that we don't keep adding to it
    contentTarget.innerHTML = ""

    for (const criminalObject of guiltyCriminals) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
})


export const CriminalList = () => {
    const criminals = useCriminals()

    for (const criminalObject of criminals) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
}