
//this is the HTML representation of each note
export const Note = (noteObject, criminalObject) => {
    return `
        <div class="note">
            <header>
                <h3>${criminalObject.name}</h3>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timeStamp).toLocaleDateString()}</p>
        </div>
    `
}