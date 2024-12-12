import { LocationTypeChoices } from "./locationLived.js"
import { ownJeansChoices } from "./ownsJeans.js"
import { saveSubmission } from "./SaveSubmission.js"
import { submissionList } from "./Submissions.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = ownJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await saveSubmission()
    const submissionHTML = await submissionList()
    
    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionHTML}
    `
}

render()