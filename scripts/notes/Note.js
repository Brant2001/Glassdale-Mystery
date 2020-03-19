
//this is the HTML representation of each note
export const Note = noteObject => {
    return `
        <div class="note">
            <header>
                <h3>${noteObject.criminal}</h3>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timeStamp).toLocaleDateString()}</p>
        </div>
    `
}