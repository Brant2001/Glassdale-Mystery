/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/

import { useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()
// On the content target, listen for a "change" event.
    eventHub.addEventListener("change", clickEvent => {

        if (clickEvent.target.classList.contains("dropdown")) {
            const theCrimeThatWasChosen = clickEvent.target.value

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crimes: theCrimeThatWasChosen
                }
            })
        // Dispatch custom message to event hub
            eventHub.dispatchEvent(message)
        }      
    })


    const render = convictionsCollection => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crime => {

                    return ` <option value="${crime.name}">${crime.name}</option>`

                })
            }
        </select>
    `
}
    render(convictions)
}

export default ConvictionSelect