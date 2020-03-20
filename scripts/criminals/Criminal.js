const Criminal = (criminalObject) => {
    return `
        <section class="criminalInfo">
            <h3>${criminalObject.name}</h3>
            <div class="criminal__details">
                <p>Age: ${criminalObject.age}</p>
                <p>Crime: ${criminalObject.conviction}</p>
                <p>Incarcerated between:
                    ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                    ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
                </p>
                <button id="associates--${criminalObject.id}">Show Associates</button>
            </div>
        </section>
        
    `
}

export default Criminal