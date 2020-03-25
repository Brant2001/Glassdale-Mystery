
//this is the HTML representation of each note
export const Note = (noteObject, criminal) => {
    return `
        <div class="note">
            <header>
                <h3>${criminal.name}</h3>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timeStamp).toLocaleDateString()}</p>
            <p>
                <button id="deleteNote--${noteObject.id}">Delete</button>
            </p>
        </div>
    `
}