import { setLocationChoice } from "./TransientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "locationResponse") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setLocationChoice(convertedToInteger)        
    }
}


export const LocationTypeChoices = async () => {
    const response = await fetch('http://localhost:8088/socioLocations')
    const locations = await response.json()

    document.addEventListener(
        "change",
        handleLocationChange
    )

    let choicesHTML = "<h2>What environment do you live in?</h2>"
    for (const location of locations) {
        choicesHTML += `<input type='radio' name='locationResponse' value=${location.id} /> ${location.label}`
    }
    return choicesHTML
}
