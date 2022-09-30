
export const renderInformations = (advices) => {
    const adviceText = document.querySelector(".text")
    const adviceNumb = document.querySelector(".number")
    adviceNumb.innerText = `ADVICE # ${advices.slip.id}`
    adviceText.innerText = `"${advices.slip.advice}"`
}
