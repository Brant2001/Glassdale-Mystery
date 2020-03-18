
//this is the HTML representation of each note
export const Note = noteObject => {
    return `
        <section class="note">
            <header>
                <h2>${noteObject.criminal}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timeStamp).toLocaleDateString()}</p>
        </section>
    `
}