const Criminal = (criminalObject) => {
    return `
        <section class="criminalInfo">
            <div><h3>${criminalObject.name}</h3></div>
            <div>Age: ${criminalObject.age}</div>
            <div>Crime: ${criminalObject.conviction}</div>
            <div>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>
        
    `
}

export default Criminal