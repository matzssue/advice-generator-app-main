import {renderInformations} from "./main.js"

const newAdvice = () => {
const REST_API = 'https://api.adviceslip.com/advice'
fetch(REST_API)
.then((res) => res.json())
.then((advices) => {
renderInformations(advices)
})
}


function nextAdvice() {
const btn = document.querySelector("#block") 
btn.addEventListener("click", newAdvice)
}


newAdvice()
nextAdvice()