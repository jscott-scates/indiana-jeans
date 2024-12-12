// Set up the transient state data structure and provide initial valuess

const transientState = {    //json will assign the id, that is why you do not need to add it here
        "ownsBlueJeans": false,
        "socioLocationId": 0 //start your inital states at 0 unless otherwise noted
}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}


// Function to convert transient state to permanent state

export const setLocationChoice = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}


//function to convert transient state to permanent state (needs to be here because the transient state const is here)
export const saveSurveySubmission = async() => {
    const postOptions = {
        method: "POST", //Post = create
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)  
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)
}