import { useCriminals } from "./CriminalProvider.js"
import Criminal from "./Criminal.js"


const contentTarget = document.querySelector(".criminalsContainer")

const CriminalList = () => {

    const criminalObjectsArray = useCriminals()

    for (const criminalObject of criminalObjectsArray) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
}

export default CriminalList